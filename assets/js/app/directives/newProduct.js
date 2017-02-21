app.directive('newProduct', function () {
    return {
        restrict: "A",
        templateUrl: "assets/js/app/template/newProduct.html",
        scope: {
            product: '=?'
        },
        controller: ['$scope', 'PhonesStore', '$routeParams', '$localStorage',
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
                };

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

            }]
    }
});
