function createSheet(data, map) {
    var avg = getAverage(data);

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
        .domain(data.map(d => d.Country))
        .range([0, width]);
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
        .domain([0, 5])
        .range([height, 0]);
    svg.append('g')
        .attr('id', 'y_axis')
        .call(d3.axisLeft(y));

        var temp = [
            [1, 2, 3, 4],
            [5, 6, 7, 8]
        ]

    
    svg.append('g')
        .selectAll('circle')
        .data(temp).enter().append('circle')
        .attr('cx', function(d, i) { return i * 100; })
        .attr('cy', function(d) { return y(d); })
        .attr('r', 5)
        


    // LEGEND -----------------------------------------------------------------------------
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

function getAverage(data) {
    console.log(d3.mean(data, function(d) {
        if (d.Country == 'US') {
            return d.CARE_AVG;
        }
    }));

    var temp = [
        [1, 2, 3, 4],
        [5, 6, 7, 8]
    ]
    // create new csv with needed values
    console.log(data.columns);

    // var temp = data.filter(function(d) { return d.Country == 'US'; })
    // console.log(temp)

}