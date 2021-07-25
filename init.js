function init() {
    // const data = await d3.csv('data/ALL_MFQ30.csv');

    // var margin = 50,
    //     width = 800 - margin,
    //     height = 800 - margin;

    // var svg = d3.select('#first_graph')
    //     .append('svg')
    //         .attr('width', width + margin * 2.5)
    //         .attr('height', height + margin * 2.5)
    //     .append('g')
    //         .attr('transform', 'translate(' + margin * 2 + ',' + margin + ')');

    // var x = d3.scaleLinear()
    //     .domain([0, 5])
    //     .range([0, width]);
    // svg.append('g')
    //     .attr('transform', 'translate(0,' + height + ')')
    //     .call(d3.axisBottom(x));

    // var y = d3.scaleLinear()
    //     .domain([0, 5])
    //     .range([height, 0]);
    // svg.append('g')
    //     .call(d3.axisLeft(y));

    // svg.append('g')
    //     .selectAll('dot')
    //     .data(data)
    //     .enter().append('circle')
    //     .attr('cx', function(d) { return x(d.HARM_AVG); })
    //     .attr("cy", function(d) { return y(d.FAIRNESS_AVG); })
    //     .attr('r', 3)
    //     .style('fill', function(d) { if (d.Sex == 1) { return 'blue'; } else { return 'pink'; }})

    // // x label
    // svg.append('text')
    //     .attr('x', width / 2)
    //     .attr('y', height + margin)
    //     .style('font-size', 20)
    //     .text('Harm Average')
    
    // // y label
    // svg.append('text')
    //     .attr('transform', 'rotate(' + -90 + ')')  
    //     .attr('x', -height / 2)
    //     .attr('y', -margin)
    //     .style('font-size', 20)
    //     .text('Fairness Average') 
}