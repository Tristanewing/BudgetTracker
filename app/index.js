
var myApp= angular.module('myApp',[]);


myApp.controller('ctrl', ['$scope', function($scope){

	$scope.myArrayOne=[];
	$scope.myArrayTwo=[];
	$scope.p1 = 0;
	$scope.p2 = 0;

	



	



	$scope.addIncome = function(){

		$scope.myArrayOne.push(

			{ "descrip1": $scope.descriptionOne,
			"amt1": $scope.amountOne 	
		});

$scope.p1 += parseInt($scope.amountOne);
		
	};


	$scope.addExpense= function(){


		$scope.myArrayTwo.push(


			{ "descrip2": $scope.descriptionTwo,
			"amt2": $scope.amountTwo 


		});




		
$scope.p2 += parseInt($scope.amountTwo);


$scope.total = $scope.p1 - $scope.p2;

	};










}]);




