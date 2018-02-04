# AngularJS-Developer-Assignment-Project
***
## Submitting Assignment.
***
Description:
Displaying Exchange rate Cryptocurrency Coins in Bar graph using API. 

### Technology used: NodeJS server, Angular , amCharts.

## Source Code:
<!DOCTYPE html>
 <html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>   
	<script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/amcharts.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/serial.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/themes/black.js"></script>	
	<script src="https://rawgit.com/ThumbsAlmighty/amCharts-Angular/master/dist/amChartsDirective.js"></script>
	<script src="chart.js"></script>
	<body><center>
	   <div ng-app="amChartsDirectiveExample">
		    <div ng-controller="amChartsController" style="height: 400px; width: 600px;">
		        <am-chart id="myFirstChart" options="amChartOptions"></am-chart>
		    </div>
		</div>
	</body></center>
</html>

