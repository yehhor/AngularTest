app.directive('product', function () {
    return {
        restrict: "A",
        templateUrl: "assets/js/app/template/product.html",
        scope: {
            product: '=?'
        },
        controller: ['PhonesStore', 'Cart', '$scope', '$routeParams', '$location', function (PhonesStore, Cart, $scope, $routeParams, $location) {
            $scope.id = $routeParams.id;
            $scope.p = PhonesStore.phones.filter(function (e) {
                if (e.id == $scope.id)
                    return true;
            })[0];

            $scope.removeProduct = function (item) {
                var res = confirm('Are you sure?');
                if (res) {
                    PhonesStore.removePhone(item);
                    $location.path('/');
                }
            };

            $scope.addToCart = function (item) {
                Cart.addToCart(item);
            }
        }],
    }
});