app.directive('customHeader', function () {
    return {
        restrict: "A",
        templateUrl: "assets/js/app/template/header.html",
        scope: {},
        controller: ['Cart', '$scope', 'searchName', function (Cart, $scope, searchName) {
            $scope.isPopupShown = false;
            $scope.cartItems = Cart.getItems();
            $scope.totalPrice = Cart.totalPrice;
            $scope.search = '';

            $scope.$watch('search', function(){
                searchName.searchName = $scope.search;
            });
            

            $scope.removeFromBasket = function (i) {
                Cart.removeFromCart(i);
            };
            
        }]
    }
});