function chooseXAxis(type) {
    var button = document.getElementById('x_btn');
    button.innerHTML = type;
    button.value = type;
}

function chooseYAxis(type) {
    var button = document.getElementById('y_btn');
    button.innerHTML = type;
    button.value = type;
}

function submitAxes() {
    var x = document.getElementById('x_btn').value;
    var y = document.getElementById('y_btn').value;
    sheet1(x, y, false);
}

async function sheet1(xAxis = 'Care', yAxis = 'Fairness', firstTime = true) {
    const data = await d3.csv('data/ALL_MFQ30.csv');

    document.getElementById('graph').innerHTML = '';

    var dataXAxis;
    var dataYAxis;
    
    if (xAxis == 'Care') {
        dataXAxis = function(d) { return x(d.CARE_AVG); }
    } else if (xAxis == 'Fairness') {
        dataXAxis = function(d) { return x(d.FAIRNESS_AVG); }
    } else if (xAxis == 'Loyalty') {
        dataXAxis = function(d) { return x(d.LOYALTY_AVG); }
    } else if (xAxis == 'Authority') {
        dataXAxis = function(d) { return x(d.AUTHORITY_AVG); }
    } else {
        dataXAxis = function(d) { return x(d.SANCTITY_AVG); }
    }
    
    if (yAxis == 'Care') {
        dataYAxis = function(d) { return y(d.CARE_AVG); }
    } else if (yAxis == 'Fairness') {
        dataYAxis = function(d) { return y(d.FAIRNESS_AVG); }
    } else if (yAxis == 'Loyalty') {
        dataYAxis = function(d) { return y(d.LOYALTY_AVG); }
    } else if (yAxis == 'Authority') {
        dataYAxis = function(d) { return y(d.AUTHORITY_AVG); }
    } else {
        dataYAxis = function(d) { return y(d.SANCTITY_AVG); }
    }

    var margin = 50,
        width = 700,
        height = 700;

    var male = '#40434e',
        female = '#912f40';

    var svg = d3.select('#graph')
        .append('svg')
            .attr('width', width + margin * 2.25)
            .attr('height', height + margin * 2.5)
            .attr('id', 'plot')
        .append('g')
            .attr('transform', 'translate(' + margin * 2 + ',' + margin + ')');

    var x = d3.scaleLinear()
        .domain([0, 5])
        .range([0, width]);
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
        .domain([0, 5])
        .range([height, 0]);
    svg.append('g')
        .call(d3.axisLeft(y));

    svg.append('g')
        .selectAll('dot')
        .data(data)
        .enter().append('circle')
        .attr('cx', dataXAxis)
        .attr("cy", dataYAxis)
        .attr('r', 2)
        .style('fill', function(d) { if (d.Sex == 1) { return male; } else { return female; }})

    // x label
    svg.append('text')
        .attr('x', width / 2.5)
        .attr('y', height + margin * 1.25)
        .text(xAxis + ' Average')
        .style('font-size', 25)
    
    // y label
    svg.append('text')
        .attr('transform', 'rotate(' + -90 + ')')  
        .attr('x', -height / 1.5)
        .attr('y', -margin)
        .style('font-size', 25)
        .text(yAxis + ' Average') 

    if (firstTime) {
        var legend = d3.select('#graph')
            .append('svg')
            .attr('width', 175)
            .attr('height', 300)
            .attr('transform', 'translate(' + -margin * 1.75 + ',' + (-height + margin * 2.5) + ')');
        legend.append('circle')
            .attr('cx', 500)
            .transition().duration(1000).delay(200)
            .attr('cx', 100)
            .transition().duration(1000).delay(200)
            .attr('cy', 130)
            .attr('r', 6)
            .style('fill', male);
        legend.append('circle')
            .transition().duration(1000)
            .attr('cx', 100)
            .transition().duration(1000)
            .attr('cy', 160)
            .attr('r', 6)
            .style('fill', female);
        legend.append('text')
            .transition().duration(1250).delay(200)
            .attr('x', 120)
            .transition().duration(1000).delay(200)
            .attr('y', 136)
            .text('Male');
        legend.append('text')
            .transition().duration(1250)
            .attr('x', 120)
            .transition().duration(1000)
            .attr('y', 166)
            .text('Female');

        var annotation = d3.select('#plot')
            .append('g')
            .attr('id', 'annotation')

        annotation.append('rect')
            .attr('id', 'box')
            .attr('width', 300)
            .attr('height', 100)
            .style('fill', '#912f40')
            .style('opacity', 0.9)
            .transition().duration(1000)
            .attr('transform', 'translate(' + (width - 200) + ',' + (height - margin * 1.5) + ')')

        annotation.append('text')
            .attr('id', 'line_1')
            .attr('x', 25)
            .attr('y', 30)
            .style('fill', '#fffffa')
            .transition().duration(1000)
            .attr('transform', 'translate(' + (width - 200) + ',' + (height - margin * 1.5) + ')')
            .text('The researchers found correlations')
        
        annotation.append('text')
            .attr('id', 'line_2')
            .attr('x', 25)
            .attr('y', 50)
            .style('fill', '#fffffa')
            .transition().duration(1000)
            .attr('transform', 'translate(' + (width - 200) + ',' + (height - margin * 1.5) + ')')
            .text('between multiple foundations.')

        annotation.append('text')
            .attr('id', 'next')
            .attr('x', 250)
            .attr('y', 80)
            .style('fill', '#fffffa')
            .transition().duration(1000)
            .attr('transform', 'translate(' + (width - 200) + ',' + (height - margin * 1.5) + ')')
            .text('Next')
            .attr('onclick', 'nextAnnotation(1)')

    } else {
        var legend = d3.select('#graph')
            .append('svg')
            .attr('width', 175)
            .attr('height', 300)
            .attr('transform', 'translate(' + -margin * 1.75 + ',' + (-height + margin * 2.5) + ')');
        legend.append('circle')
            .attr('cx', 500)
            .attr('cx', 100)
            .attr('cy', 130)
            .attr('r', 6)
            .style('fill', male);
        legend.append('circle')
            .attr('cx', 100)
            .attr('cy', 160)
            .attr('r', 6)
            .style('fill', female);
        legend.append('text')
            .attr('x', 120)
            .attr('y', 136)
            .text('Male');
        legend.append('text')
            .attr('x', 120)
            .attr('y', 166)
            .text('Female');
    }    
}   