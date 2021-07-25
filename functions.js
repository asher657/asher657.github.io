function openSheet(sheet) {
    window.location.replace(sheet)
}

async function sheet1() {
    const data = await d3.csv('data/ALL_MFQ30.csv');

    var margin = 50,
        width = 230,
        height = 230;

    var male = '#40434e',
        female = '#912f40';

    // authority ingroup -----------------------------------------------------------
    var svg = d3.select('#graph')
        .append('svg')
            .attr('width', width + margin * 2.5)
            .attr('height', height + margin * 2.5)
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
        .attr('cx', function(d) { return x(d.AUTHORITY_AVG); })
        .attr("cy", function(d) { return y(d.INGROUP_AVG); })
        .attr('r', 2)
        .style('fill', function(d) { if (d.Sex == 1) { return 'blue'; } else { return 'pink'; }})

    // x label
    svg.append('text')
        .attr('x', width / 3.5)
        .attr('y', height + margin / 1.25)
        .style('font-size', 15)
        .text('Ingroup Average')
    
    // y label
    svg.append('text')
        .attr('transform', 'rotate(' + -90 + ')')  
        .attr('x', -height / 1.25)
        .attr('y', -margin / 1.25)
        .style('font-size', 15)
        .text('Authority Average') 

    // authority purity -----------------------------------------------------------
    var svg = d3.select('#graph')
    .append('svg')
        .attr('width', width + margin * 2.5)
        .attr('height', height + margin * 2.5)
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
        .attr('cx', function(d) { return x(d.AUTHORITY_AVG); })
        .attr("cy", function(d) { return y(d.PURITY_AVG); })
        .attr('r', 2)
        .style('fill', function(d) { if (d.Sex == 1) { return male; } else { return female; }})

    // x label
    svg.append('text')
        .attr('x', width / 3.5)
        .attr('y', height + margin / 1.25)
        .style('font-size', 15)
        .text('Purity Average')

    // y label
    svg.append('text')
        .attr('transform', 'rotate(' + -90 + ')')  
        .attr('x', -height / 1.25)
        .attr('y', -margin / 1.25)
        .style('font-size', 15)
        .text('Authority Average') 

    // harm fairness -----------------------------------------------------------
    var svg = d3.select('#graph')
    .append('svg')
        .attr('width', width + margin * 2.5)
        .attr('height', height + margin * 2.5)
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
        .attr('cx', function(d) { return x(d.HARM_AVG); })
        .attr("cy", function(d) { return y(d.FAIRNESS_AVG); })
        .attr('r', 2)
        .style('fill', function(d) { if (d.Sex == 1) { return 'blue'; } else { return 'pink'; }})

    // x label
    svg.append('text')
        .attr('x', width / 3.5)
        .attr('y', height + margin / 1.25)
        .style('font-size', 15)
        .text('Harm Average')

    // y label
    svg.append('text')
        .attr('transform', 'rotate(' + -90 + ')')  
        .attr('x', -height / 1.25)
        .attr('y', -margin / 1.25)
        .style('font-size', 15)
        .text('Fairness Average') 
}