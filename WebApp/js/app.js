var app = angular.module('myApp', ['ui.router']);
//CONFIGURACION DEL MODULO
//estos son servicios de la libreria angular-ui-router
//es una extension a los router de angular para manejar estados
app.config(function ($stateProvider, $urlRouterProvider) {
    //esta sera la direccion por default cuando no se indique
    //ninguna direccion en la url
    $urlRouterProvider.otherwise('/home')
    /*Aqui se manejaran los estados para cada llamada*/
    $stateProvider
    // En esta parte se llama el estado de home y se agrega la view a la pagina
    //las view son parciales
    .state('home', {
        url: '/home',
        template: '<div>soy home</div>'
    })
    .state('about', {
        url: '/about',
        template: '<div>about page <div ui-view></div> footer</div>'
    })
        /*
         * Este carga el estado about.jorge y ademas el estado
         * about que se encuentra arriba
         */
    .state('about.jorge', {
        url: '/jorge',
        template: '<div>Jorge was here!</div>'
    })

    .state('persona', {
        url: '/persona',
        template: '<div>PERSONA: <div ui-view></div></div>'
    })
    .state('persona.view', {
        url: '/persona',
        templateUrl: './templates/viewPersona.html'
    })
    .state('persona.edit', {
        url: '/persona',
        templateUrl: './templates/editPersona.html'
    })
});


