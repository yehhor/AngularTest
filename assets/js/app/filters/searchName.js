app.filter('searchName', function () {
    return function (array, text) {
        return array.filter(function (e, i) {
            if (e.name.toLowerCase().indexOf(text.toLowerCase()) != -1 || text == '') {
                return true;
            }
        });

    }
});