angular.module('main-app')
    .factory('Cart', function () {
        var cartItems = [];
        var totalPrice = {price : getTotalPrice()};


        function getTotalPrice(){
            return cartItems.reduce(function (p, cur) {
                return {price: p.price + cur.price}
            }, {price: 0}).price
        }

        function getItems(){
            return cartItems;
        }

        function updateTotalPrice(){
            totalPrice.price = getTotalPrice();
        }

        function removeFromCart(i){
            var index = cartItems.indexOf(i);
            cartItems.splice(index, 1);
            updateTotalPrice();

        }

        function addToCart(item){
            cartItems.push(item);
            updateTotalPrice();
        }

        return {
            getItems: getItems,
            removeFromCart: removeFromCart,
            addToCart: addToCart,
            totalPrice: totalPrice
        }
    });