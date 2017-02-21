var app = angular.module('main-app', ["ngStorage", "ngRoute", "ui.bootstrap", "ngAnimate"]);


app.controller('MainCtrl', ['$scope', 'PhonesStore', 'Cart', '$localStorage', '$timeout', '$location', '$uibModal', 'searchName',
    function ($scope, PhonesStore, Cart, $localStorage, $timeout, $location, $uibModal, searchName) {
        $scope.search = searchName;
        $scope.phones = PhonesStore.phones;
        $scope.cartItems = Cart.getItems();
        $scope.orderProp = 'name';
        $scope.reverseSort = false;


        $scope.editProduct = function (e, product) {
            e.stopPropagation();
            $uibModal.open({
                templateUrl: 'assets/js/app/template/editProduct.html',
                resolve: {
                    p: function(){
                        return product;
                    }
                },
                windowClass: 'customModalSize',
                controller: ['$scope', 'p', 'PhonesStore', 'Cart', '$uibModalInstance', function ($scope, p, PhonesStore, Cart, $uibModalInstance) {

                    $scope.p = p;

                    $scope.save = function(item){
                        $uibModalInstance.close();
                    };

                    
                    
                    $scope.removeProduct = function(item){
                        var res = confirm('Are you sure?');
                        if (res) {
                            PhonesStore.removePhone(item);
                            $uibModalInstance.close();
                        }
                    };

                }]
            })
        };


        $scope.redirectToCreateNew = function () {
            $location.path('/createNewProduct');
        };

        $scope.redirectTo = function (id) {
            $location.path('/product/' + id)
        };


        $scope.sortBy = function (prop) {
            var reverse = '';
            if ($scope.reverseSort)
                reverse = '-';
            $scope.orderProp = reverse + prop;
        };


        $scope.removeFromBasket = function (i) {
            Cart.removeFromCart(i)
        };


        $scope.updateStorage = function () {
            $localStorage.basket = $scope.cartItems;
        };


        $scope.addToCart = function (p, $e) {
            $e.stopPropagation();
            Cart.addToCart(p);
            $scope.updateStorage();
        };


        $scope.loadFromStorage = function () {
            var storage = $localStorage.basket;
            var storageItems = $localStorage.items;
            try {
                storage.forEach(function (e) {
                    $scope.addToCart(e);
                });
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


