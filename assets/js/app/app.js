var app = angular.module('main-app', ["ngStorage", "ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "assets/js/app/template/home.html"
        })
        .when('/about', {
            templateUrl: "assets/js/app/template/about.html"
        })
        .when('/product/:id', {
            templateUrl: "assets/js/app/template/product.html",
            controller: "ProductPage"
        })
        .when('/createNewProduct', {
            templateUrl: "assets/js/app/template/newProduct.html",
            controller: "NewProductCtrl"
        })
}]);


app.filter('searchName', function () {
    return function (array, text) {
        return array.filter(function (e, i) {
            if (e.name.toLowerCase().indexOf(text.toLowerCase()) != -1 || text == '') {
                return true;
            }
        });

    }
});

app.controller('MainCtrl', ['$scope', 'PhonesStore', 'Cart', '$localStorage', '$timeout', '$location',
    function MainCtrl($scope, PhonesStore, Cart, $localStorage, $timeout, $location) {

        $scope.search = '';

        $scope.phones = PhonesStore.phones;
        $scope.cartItems = Cart.cartItems;
        $scope.totalPrice = 0;
        $scope.orderProp = 'name';
        $scope.reverseSort = false;
        $scope.isPopupShown = false;


        $scope.redirectTo = function (id) {
            $location.path('/product/' + id)
        };

        $scope.sortBy = function (prop) {
            var reverse = '';
            if ($scope.reverseSort)
                reverse = '-';
            $scope.orderProp = reverse + prop;
        };


        $scope.calcTotalPrice = function () {
            return $scope.cartItems.reduce(function (p, cur, i, array) {
                return {price: p.price + cur.price}
            }, {price: 0}).price;

        };

        $scope.removeFromBasket = function (i) {
            var index = $scope.cartItems.indexOf(i);
            $scope.cartItems.splice(index, 1);
            $scope.totalPrice = $scope.calcTotalPrice();

        };

        $scope.updateStorage = function () {
            $localStorage.basket = $scope.cartItems;
        };


        $scope.addToCart = function (p, $e) {
            $e.stopPropagation();
            $scope.cartItems.push(p);
            $scope.updateStorage();
            $scope.totalPrice = $scope.calcTotalPrice();
        };

        $scope.loadFromStorage = function () {
            var storage = $localStorage.basket;
            var storageItems = $localStorage.items;




            try {
                storage.forEach(function (e) {
                    $scope.addToCart(e);
                })
                storageItems.forEach(function (e) {
                    if ($scope.phones.indexOf(e) == -1)
                        $scope.phones.push(e);
                });

            } catch (e) {
                console.log('no data in storage')
            }

        };

        $scope.loadFromStorage();

    }]);

app.controller('ProductPage', ['$scope', 'PhonesStore', '$routeParams', function ($scope, PhonesStore, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.p = PhonesStore.phones.filter(function (e) {
        if (e.id == $scope.id)
            return true;
    })[0];
}]);


app.controller('NewProductCtrl', ['$scope', 'PhonesStore', '$routeParams', '$localStorage',
    function ($scope, PhonesStore, $routeParams, $localStorage) {


    $scope.np = {
        "id": null,
        "name": "",
        "stock": "",
        "imgUrl": "assets/images/iphone-6GREY.png",
        "price": 0,
        "currency": "$",
        "shipping": 0,
        "properties": [
            ""
        ],
        "category": ""
    }

    $scope.delProp = function (i) {
        $scope.np.properties.splice(i, 1);
    };
    $scope.addProp = function () {
        console.log($scope.np);
        if ($scope.np.properties[$scope.np.properties.length - 1] != "")
            $scope.np.properties.push('');
    };

    $scope.createNewProduct = function () {
        $scope.np.id = PhonesStore.phones[PhonesStore.phones.length - 1].id + 1;
        PhonesStore.phones.push($scope.np);
        $scope.uploadToStorage();
    };

    $scope.uploadToStorage = function () {
        PhonesStore.phones.forEach(function (e) {
            console.log(e);
        });
        $localStorage.items = PhonesStore.phones;
    };

}]);