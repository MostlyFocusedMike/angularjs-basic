import angular from 'angular'
import CONSTANTS from 'Constants'
// that ngSanitize may be irrelevant now that $sce is involved, but not sure
const app  = angular.module("app", []);
app.controller("mainController", function() {
    this.place = "world"
    console.log(CONSTANTS.TEST)
})
app.component("mainComp", {
    template: "<h1>Hello {{$ctrl.place}}</h1>",
    controller: "mainController",
})
