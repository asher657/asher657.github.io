function chooseMoral(moral) {
    var button = document.getElementById('moral_button');
    button.innerHTML = moral;
    button.value = moral;
}

function createSheet(column, map) {
    var counts = getCounts(map, column);

    var tooltip = d3.select('#tooltip');

    var male = '#40434e';
    var female = '#912f40';

    var margin = 50,
        width = 700,
        height = 700;

    var svg = d3.select('#graph')
        .append('svg')
            .attr('id', 'svg')
            .attr('width', width + margin * 2.25)
            .attr('height', height + margin * 2.5)
            .attr('id', 'plot')
        .append('g')
            .attr('transform', 'translate(' + margin * 2 + ',' + margin + ')');

    var x = d3.scaleBand()
        .domain(['0 - 0.99', '1 - 1.99', '2 - 2.99', '3 - 3.99', '4 - 5'])
        .range([0, width]);
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
        .domain([0, Math.max(counts.male.max, counts.female.max)])
        .range([height, 0]);
    svg.append('g')
        .attr('id', 'y_axis')
        .call(d3.axisLeft(y));

    // x label
    svg.append('text')
        .attr('x', width / 2.5)
        .attr('y', height + margin * 1.25)
        .text('Responses for ' + column)
        .style('font-size', 25)
    
    // y label
    svg.append('text')
        .attr('transform', 'rotate(' + -90 + ')')  
        .attr('x', -height / 1.5)
        .attr('y', -margin)
        .style('font-size', 25)
        .text('Percent') 

    // MALE --------------------------------------------------------------------
    svg.append('g')
        .append('rect')
        .attr('class', 'male')
        .attr('id', 'm_1')
        .attr('x', 0)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.male.bin_1); })
        .attr('y', function() { return y(counts.male.bin_1); })
        
    
    svg.append('g')
        .append('rect')
        .attr('id', 'm_2')
        .attr('class', 'male')
        .attr('x', 140)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.male.bin_2); })
        .attr('y', function() { return y(counts.male.bin_2); })
        

    svg.append('g')
        .append('rect')
        .attr('id', 'm_3')
        .attr('class', 'male')
        .attr('x', 280)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.male.bin_3); })
        .attr('y', function() { return y(counts.male.bin_3); })

    svg.append('g')
        .append('rect')
        .attr('id', 'm_4')
        .attr('class', 'male')
        .attr('x', 420)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.male.bin_4); })
        .attr('y', function() { return y(counts.male.bin_4); })

    svg.append('g')
        .append('rect')
        .attr('id', 'm_5')
        .attr('class', 'male')
        .attr('x', 560)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.male.bin_5); })
        .attr('y', function() { return y(counts.male.bin_5); })


    // FEMALE --------------------------------------------------------------------
    svg.append('g')
        .append('rect')
        .attr('class', 'female')
        .attr('id', 'f_1')
        .attr('x', 0)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.female.bin_1); })
        .attr('y', function() { return y(counts.female.bin_1); })
    
    svg.append('g')
        .append('rect')
        .attr('id', 'f_2')
        .attr('class', 'female')
        .attr('x', 140)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.female.bin_2); })
        .attr('y', function() { return y(counts.female.bin_2); })

    svg.append('g')
        .append('rect')
        .attr('id', 'f_3')
        .attr('class', 'female')
        .attr('x', 280)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.female.bin_3); })
        .attr('y', function() { return y(counts.female.bin_3); })

    svg.append('g')
        .append('rect')
        .attr('id', 'f_4')
        .attr('class', 'female')
        .attr('x', 420)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.female.bin_4); })
        .attr('y', function() { return y(counts.female.bin_4); })

    svg.append('g')
        .append('rect')
        .attr('id', 'f_5')
        .attr('class', 'female')
        .attr('x', 560)
        .attr('y', 700)
        .attr('width', 140)
        .transition().duration(2000)
        .attr('height', function() { return 700 - y(counts.female.bin_5); })
        .attr('y', function() { return y(counts.female.bin_5); })

    // TOOLTIP ---------------------------------------------------------------------
    svg.append('g')
        .append('rect')
        .attr('class', 'tooltip')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 140)
        .attr('height', 700)
        .on('mouseover', function() {
            tooltip.style('opacity', 1)
            .style('left', (event.pageX) + 'px')
            .style('top', (event.pageY)+ 'px')
            .html('Female: ' + precision(counts.female.bin_1) + '%' + '\n' + 'Male:' + precision(counts.male.bin_1) + '%')
        })
        .on('mouseout', function() { tooltip.style('opacity', 0) })

    svg.append('g')
        .append('rect')
        .attr('class', 'tooltip')
        .attr('x', 140)
        .attr('y', 0)
        .attr('width', 140)
        .attr('height', 700)
        .on('mouseover', function() {
            tooltip.style('opacity', 1)
            .style('left', (event.pageX) + 'px')
            .style('top', (event.pageY)+ 'px')
            .html('Female: ' + precision(counts.female.bin_2) + '%' + '\n' + 'Male:' + precision(counts.male.bin_2) + '%')
        })
        .on('mouseout', function() { tooltip.style('opacity', 0) })

    svg.append('g')
        .append('rect')
        .attr('class', 'tooltip')
        .attr('x', 280)
        .attr('y', 0)
        .attr('width', 140)
        .attr('height', 700)
        .on('mouseover', function() {
            tooltip.style('opacity', 1)
            .style('left', (event.pageX) + 'px')
            .style('top', (event.pageY)+ 'px')
            .html('Female: ' + precision(counts.female.bin_3) + '%' + '\n' + 'Male:' + precision(counts.male.bin_3) + '%')
        })
        .on('mouseout', function() { tooltip.style('opacity', 0) })

    svg.append('g')
        .append('rect')
        .attr('class', 'tooltip')
        .attr('x', 420)
        .attr('y', 0)
        .attr('width', 140)
        .attr('height', 700)
        .on('mouseover', function() {
            tooltip.style('opacity', 1)
            .style('left', (event.pageX) + 'px')
            .style('top', (event.pageY)+ 'px')
            .html('Female: ' + precision(counts.female.bin_4) + '%' + '\n' + 'Male:' + precision(counts.male.bin_4) + '%')
        })
        .on('mouseout', function() { tooltip.style('opacity', 0) })

    svg.append('g')
        .append('rect')
        .attr('class', 'tooltip')
        .attr('x', 560)
        .attr('y', 0)
        .attr('width', 140)
        .attr('height', 700)
        .on('mouseover', function() {
            tooltip.style('opacity', 1)
            .style('left', (event.pageX) + 'px')
            .style('top', (event.pageY)+ 'px')
            .html('Female: ' + precision(counts.female.bin_5) + '%' + '\n' + 'Male:' + precision(counts.male.bin_5) + '%')
        })
        .on('mouseout', function() { tooltip.style('opacity', 0) })

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
}

function getCounts(data, column) {

    male = {
        bin_1: 0,
        bin_2: 0,
        bin_3: 0,
        bin_4: 0,
        bin_5: 0,
        max: -1,
        num: 0,
    }
    female = {
        bin_1: 0,
        bin_2: 0,
        bin_3: 0,
        bin_4: 0,
        bin_5: 0,
        max: -1,
        num: 0
    }

    for (let i = 1; i < data.length; i++) {
        if (data[i].Sex == 1) {
            if (data[i][column] < 1) {
                male.bin_1 += 1;
            } else if (data[i][column] < 2) {
                male.bin_2 += 1;
            } else if (data[i][column] < 3) {
                male.bin_3 += 1;
            } else if (data[i][column] < 4) {
                male.bin_4 += 1;
            } else {
                male.bin_5 += 1;
            }
            male.num++;
        } else if (data[i].Sex == 0) {
            if (data[i][column] < 1) {
                female.bin_1 += 1;
            } else if (data[i][column] < 2) {
                female.bin_2 += 1;
            } else if (data[i][column] < 3) {
                female.bin_3 += 1;
            } else if (data[i][column] < 4) {
                female.bin_4 += 1;
            } else {
                female.bin_5 += 1;
            }
            female.num++;
        }
    }

    male.bin_1 /= male.num;
    male.bin_2 /= male.num;
    male.bin_3 /= male.num;
    male.bin_4 /= male.num;
    male.bin_5 /= male.num;

    female.bin_1 /= female.num;
    female.bin_2 /= female.num;
    female.bin_3 /= female.num;
    female.bin_4 /= female.num;
    female.bin_5 /= female.num;

    male.max = Math.max(male.bin_1, male.bin_2, male.bin_3, male.bin_4, male.bin_5);
    female.max = Math.max(female.bin_1, female.bin_2, female.bin_3, female.bin_4, female.bin_5);

    console.log(male);
    console.log(female);
    return {male: male, female: female}
}

function precision(x) {
    return Number.parseFloat(x).toPrecision(2);
}

function updateSheet(column, map) {
    var counts = getCounts(map, column);

    var tooltip = d3.select('#tooltip');

    var male = '#40434e';
    var female = '#912f40';

    var margin = 50,
        width = 700,
        height = 700;

    var svg = d3.select('#svg');

    var y = d3.scaleLinear()
        .domain([0, Math.max(counts.male.max, counts.female.max)])
        .range([height, 0]);
    svg.select('#y_axis')
        .call(d3.axisLeft(y));
}
