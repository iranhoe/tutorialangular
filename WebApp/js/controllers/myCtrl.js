(function () {
    function guid() {
        // HACK: Eliminar
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    }

    'use strict'    
    app.controller('myCtrl', ['$scope', function ($scope) {
        var vm = $scope;
        vm.fnAlgo = function (arg) {
            vm.something = arg;
        }
        vm.personas = [
            { id: 1, nombre: 'John', telefono: '555-1276' },
            { id: 2, nombre: 'Mary', telefono: '800-BIG-MARY' },
            { id: 3, nombre: 'Mike', telefono: '555-4321' },
            { id: 4, nombre: 'Adam', telefono: '555-5678' },
            { id: 5, nombre: 'Julie', telefono: '555-8765' },
            { id: 6, nombre: 'Juliette', telefono: '555-5678' }
        ]
        vm.adios = "Iran";
        vm.fnotro = function () {
            return "WUJU!!!";
        }
        var getPersona = null;
        
        
        vm.persona = {};
        //vm.persona.id == 1
        vm.setPersona = function () {
            for (var i = 0; i < vm.personas.length; i++) {
                if (vm.personas[i].id == vm.persona.id) {
                    vm.personas[i] = vm.persona;
                }
            }
        }
        vm.getPersona = function (id) {
            for (var i = 0; i < vm.personas.length; i++) {
                if (vm.personas[i].id == id) {
                    return vm.personas[i];
                }
            }
        }
        vm.removePersona = function (id) {
            var index = -1;
            console.info('id', id)
            for (var i = 0; i < vm.personas.length; i++) {
                if (vm.personas[i].id == id) {
                    index = i;
                }
            }
            console.info('index', index)
            vm.personas.splice(index, 1);
        }
        vm.addPersona = function (per) {
            per.id = guid();
            vm.personas.push(angular.copy(per));
        }
        vm.editPersona = function (per) {
            vm.persona = angular.copy(per);
        }
        vm.viewPersona = function (per) {
            vm.persona = per;
        }
    }])
})();

