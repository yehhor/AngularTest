app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "assets/js/app/routing/pages/home.html"
        })
        .when('/about', {
            templateUrl: "assets/js/app/template/editProduct.html"
        })
        .when('/product/:id', {
            templateUrl: "assets/js/app/routing/pages/productPage.html",
        })
        .when('/createNewProduct', {
            templateUrl: "assets/js/app/routing/pages/newProduct.html",
        })
}]);