'use strict';

angular.module('meanRecipieApp').directive('angulard3BarGraph', function () {
	return {
		restrict: 'A',	
		scope: {
			myjson : '@jsonValue'
		},
		link : function(scope, elem, attr) {
		 	attr.$observe('jsonValue', function(data) {	
		 		if(data.length > 2)	 { // check for data is loaded or empty
		    	scope.myjson = data;
		    	var data = JSON.parse( scope.myjson );

				  x.domain(data.map(function(d) {
				  	 return d.playedDate; 
				  }));
				  y.domain([0, data[0].outOf]);
				  svg.append("g")
				      .attr("class", "x axis")
				      .attr("transform", "translate(0," + height + ")")
				      .call(xAxis);

				  svg.append("g")
				      .attr("class", "y axis")
				      .call(yAxis)
				      .append("text")
				      .attr("transform", "rotate(-90)")
				      .attr("y", 6)
				      .attr("dy", ".71em")
				      .style("text-anchor", "end")
				      .text("Score");

				  var myBarChart = svg.selectAll(".bar")
				      .data(data)
				    	.enter().append("rect")
				      .attr("class", "bar")
				      .attr("x", function(d) { return x(d.playedDate); })
				      .attr("width", x.rangeBand())
				      .attr("y", height)
				      .attr("height", 0)
				      .on('mouseover', tip.show)
				      .on('mouseout', tip.hide)
			  	myBarChart.transition()
  		  			.delay(function(d, i) { return i * 200; })
    					.attr("y", function(d) { return y(d.score);})
    					.attr("height", function(d) { return height - y(d.score); });
    			}
	    });

			var margin = {top: 40, right: 20, bottom: 30, left: 40},
			    width = 960 - margin.left - margin.right,
			    height = 500 - margin.top - margin.bottom;

			var x = d3.scale.ordinal()
			    .rangeRoundBands([0, width], .1);

			var y = d3.scale.linear().range([height, 0]);

			var xAxis = d3.svg.axis()
			    .scale(x)
			    .orient("bottom")
			    .tickFormat(function(d) { return d3.time.format('%b %d')(new Date(d)); })

			var yAxis = d3.svg.axis()
			    .scale(y)
			    .orient("left");


			var tip = d3.tip()
			  .attr('class', 'd3-tip')
			  .offset([-10, 0])
			  .html(function(d) {
			    return "<strong>Score:</strong> <span style='color:red'>" + d.score + "</span>";
			  })

			var svg = d3.select("#barchart").append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			    .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		
			svg.call(tip);
		}
	}
})