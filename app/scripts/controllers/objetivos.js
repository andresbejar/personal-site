'use strict';

angular.module('personalSiteApp').controller('ObjetivosCtrl', function($scope){

		$scope.objetivos = [{'title': 'Objetivo 1', 'text': 'Graduarme de bachiller en Ciencias de la Computacion e Informatica en el 2016'},
		 					{'title': 'Objetivo 2', 'text': 'Completar las 300 horas de TCU antes de Agosto 2016'},
		 					{'title': 'Objetivo 3', 'text': 'Viajar a un pais nuevo todos los años'},
		 					{'title': 'Objetivo 4', 'text': 'Leer 12 libros al año'},
		 					{'title': 'Objetivo 5', 'text': 'Retomar el habito de tocar guitarra'}
		];

	});