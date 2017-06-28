import 'angular-ui-router';

const app = angular.module('ors-route', ['ui.router']);

const accueilStateUrl = require('./tmpl/accueil.html');
const contactStateUrl = require('./tmpl/contact.html');
const produitStateUrl = require('./tmpl/produit.html');
const servicesStateUrl = require('./tmpl/services.html');


app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	var accueilState = {
		name: 'accueil',
		url: '/',
		template: accueilStateUrl
	}
	var contactState = {
		name: 'contact',
		url: '/contact',
		template: contactStateUrl
	}
	var produitState = {
		name: 'produit',
		url: '/produit',
		template: produitStateUrl
	}
	var servicesState = {
		name: 'services',
		url: '/services',
		template: servicesStateUrl
	}

	$stateProvider.state(accueilState);
	$stateProvider.state(contactState);
	$stateProvider.state(produitState);
	$stateProvider.state(servicesState);

	$urlRouterProvider.otherwise('/');

});
