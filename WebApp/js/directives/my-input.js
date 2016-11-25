(function () {
    app.directive('myInput', function () {
        return {
            replace: true,
            templateUrl: '../templates/input.html',
            scope: {
                title: '@', //@
                algo: '=ngAlgo', //=
                nombre: '@'
                // &
            },
            link: function (scope, el, attrs) {
                console.info('dir',scope.algo);
            }
        }
    });
})();