angular.module('amChartsDirectiveExample',['amChartsDirective']).controller('amChartsController', function ($scope,$http,$rootScope) {
    $scope.loadChart = function (){
        $scope.res = [];
        $scope.res = $http({
          method: 'GET',
          url: 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
        }).then(function successCallback(response) {
            console.log(response);
            return(response.data);
          }, function errorCallback(response) {
        });

    $scope.amChartOptions = {
        data: $scope.res,
        type: "serial",
        theme: 'black',
        categoryField: "name",
        pathToImages: 'https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/images/',
        legend: {
            enabled: true
        },
        chartScrollbar: {
            enabled: true,
        },
        categoryAxis: {
            gridPosition: "start",
            parseDates: false
        },
        valueAxes: [{
            position: "top",
            title: "Million USD"
        }],
        graphs: [{
            type: "column",
            title: "USD",
            valueField: "price_usd",
            fillAlphas: 1,
			
        }]
    }   
}
    $scope.loadChart();
    setInterval(function(){$scope.loadChart()},100000);
	
});