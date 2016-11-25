(function () {
    app.directive('myDirective', function () {
        return {
            replace: true,
            transclude: true,
            template: '<div>'+
                        '<div>{{hola}}</div>'+
                        '<h4>En la procu</h4>'+
                        '<h5><ng-transclude></ng-transclude></h5>'+
                    '</div>',
            scope: {
                // = expresion
                // @ string
                // & soy una funcion
                hola: '=?',
                funcion: '&ngFuncion'
            },
            link: function (scope) {
                if (scope.hola === undefined) {
                    scope.hola = scope.funcion();
                }
            }
        }
    });
})();