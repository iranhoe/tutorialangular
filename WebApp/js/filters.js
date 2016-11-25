(function () {
    'use strict'
    app.filter('juan', function () {
        return function (input) {
            var output = [];
            angular.forEach(input, function (item) {
                if (item.name == "John") {
                    output.push(item);
                }
            })
            return output;
        }
    })
})();