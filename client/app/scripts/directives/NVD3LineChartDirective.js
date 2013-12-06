'use strict';

angular.module('meanRecipieApp').directive('angulard3LineChart', function () {
	return {
		restrict: 'E',	
		scope: {
			myjson : '@jsonValue',
			linechartId: '@linechartId'
		},
	  // template : '<div id="d3bar" json-Value="{{myjson}}"></div>',
		replace:true,
		link : function(scope, elem, attr) {
			attr.$observe('jsonValue', function(data) {	
				if(data.length > 100) {
					scope.myjson = data;
			    var array = JSON.parse(scope.myjson);
			    var beginnerData = array[0];
			    var intermediateData = array[1];
			    var advanceData = array[2];
			    var beginnerValues = _.map(beginnerData.values, function(scoreObj) {
			    			var retObject = new Object();
			    			retObject.x = new Date(scoreObj.playedDate);
			    			retObject.y = scoreObj.score;
						    return retObject;
					});
					var intermediateValues = _.map(intermediateData.values, function(scoreObj) {
			    			var retObject = new Object();
			    			retObject.x = new Date(scoreObj.playedDate);
			    			retObject.y = scoreObj.score;
						    return retObject;
					});
					var advanceValues = _.map(advanceData.values, function(scoreObj) {
			    			var retObject = new Object();
			    			retObject.x = new Date(scoreObj.playedDate);
			    			retObject.y = scoreObj.score;
						    return retObject;
					});
			    var jsonObject = [{values: beginnerValues, key: 'Beginner', color: '#ff7f0e'},
			    								  {values: intermediateValues,key: 'Intermediate', color: '#2ca02c'},
														{values: advanceValues,key: 'Advanced', color: 'blue'}];

					nv.addGraph(function() {  
					  	var chart = nv.models.lineChart();
					  	chart.xAxis.axisLabel('Date').tickFormat(function(d) { 			
									return d3.time.format('%b %d')(new Date(d)); 
							});
						  chart.yAxis.axisLabel('Score').tickFormat(d3.format('d'));
							var chartId = "lineChart_"+scope.linechartId;
						  d3.select("#"+chartId).append("svg").datum(jsonObject).transition().duration(500).call(chart);
						  // d3.select('#chart svg').datum(scoreData()).transition().duration(500).call(chart);
	  				  // nv.utils.windowResize(function() { d3.select('#chart svg').call(chart) }); -- we need to use this line.
		  			  return chart;
					});
				}
			});
		}
	}
})