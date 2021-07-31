function createSheet(data) {
    var male = '#40434e';
    var female = '#912f40';

    var margin = 50,
        width = 700,
        height = 700;

    var svg = d3.select('#graph')
        .append('svg')
            .attr('id', 'svg')
            .attr('width', width + margin * 2.5)
            .attr('height', height + margin * 2.5)
            .attr('id', 'plot')
        .append('g')
            .attr('transform', 'translate(' + margin * 2 + ',' + margin + ')');

    var x = d3.scalePoint()
        .domain(data.map(d => d.Moral))
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

    var color = d3.scaleOrdinal()
        .domain(data.columns.slice(1))
        .range(['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5',
                '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'])

            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function(d) { return color('Australia') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Australia); }))

            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Belgium') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Belgium); }))

            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('China') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.China); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('France') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.France); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Hungary') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Hungary); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Iran') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Iran); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Japan') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Japan); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Korea') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Korea); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Latvia') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Latvia); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Mongolia') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Mongolia); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Netherlands') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Netherlands); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Poland') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Poland); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Russia') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Russia); }))
                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Serbia') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Serbia); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Spain') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Spain); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Sweden') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Sweden); }))

            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('Turkey') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.Turkey); }))

            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('UK') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.UK); }))

                
            svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', function() { return color('US') })
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x(function(d) { return x(d.Moral); })
                .y(function(d) { return y(d.US); }))
        


    // LEGEND -----------------------------------------------------------------------------
    var legend = d3.select('#graph')
        .append('svg')
        .attr('width', 208)
        .attr('height', 700)
        .attr('transform', 'translate(' + -margin * 1.75 + ',' + (- margin * 4) + ')');

    legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(100)
        .attr('cy', 130)
        .attr('r', 6)
        .style('fill', '#1f77b4');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(150)
        .attr('cy', 160)
        .attr('r', 6)
        .style('fill', '#aec7e8');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(200)
        .attr('y', 136)
        .text('Australia');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(250)
        .attr('y', 166)
        .text('Belgium');

    legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(300)
        .attr('cy', 190)
        .attr('r', 6)
        .style('fill', '#ff7f0e');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(350)
        .attr('cy', 220)
        .attr('r', 6)
        .style('fill', '#ffbb78');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(400)
        .attr('y', 196)
        .text('China');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(450)
        .attr('y', 226)
        .text('France');

        legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(500)
        .attr('cy', 250)
        .attr('r', 6)
        .style('fill', '#2ca02c');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(550)
        .attr('cy', 280)
        .attr('r', 6)
        .style('fill', '#98df8a');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(600)
        .attr('y', 256)
        .text('Hungary');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(650)
        .attr('y', 286)
        .text('Iran');

        legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(700)
        .attr('cy', 310)
        .attr('r', 6)
        .style('fill', '#d62728');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(750)
        .attr('cy', 340)
        .attr('r', 6)
        .style('fill', '#ff9896');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(800)
        .attr('y', 316)
        .text('Japan');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(850)
        .attr('y', 346)
        .text('Korea');

        legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(900)
        .attr('cy', 370)
        .attr('r', 6)
        .style('fill', '#9467bd');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(950)
        .attr('cy', 400)
        .attr('r', 6)
        .style('fill', '#c5b0d5');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1000)
        .attr('y', 376)
        .text('Latvia');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1050)
        .attr('y', 406)
        .text('Mongolia');

        legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(1100)
        .attr('cy', 430)
        .attr('r', 6)
        .style('fill', '#8c564b');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(1150)
        .attr('cy', 460)
        .attr('r', 6)
        .style('fill', '#c49c94');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1200)
        .attr('y', 436)
        .text('Netherlands');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1250)
        .attr('y', 466)
        .text('Poland');

        legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(1300)
        .attr('cy', 490)
        .attr('r', 6)
        .style('fill', '#e377c2');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(1350)
        .attr('cy', 520)
        .attr('r', 6)
        .style('fill', '#f7b6d2');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1400)
        .attr('y', 496)
        .text('Russia');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1450)
        .attr('y', 526)
        .text('Serbia');

        legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(1500)
        .attr('cy', 550)
        .attr('r', 6)
        .style('fill', '#7f7f7f');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(1550)
        .attr('cy', 580)
        .attr('r', 6)
        .style('fill', '#c7c7c7');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1600)
        .attr('y', 556)
        .text('Spain');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1650)
        .attr('y', 586)
        .text('Sweden');

        legend.append('circle')
        .attr('cx', 500)
        .attr('cx', 100)
        .transition().duration(1000).delay(1700)
        .attr('cy', 610)
        .attr('r', 6)
        .style('fill', '#bcbd22');
    legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(1750)
        .attr('cy', 640)
        .attr('r', 6)
        .style('fill', '#dbdb8d');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1800)
        .attr('y', 616)
        .text('Turkey');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1850)
        .attr('y', 646)
        .text('UK');

        legend.append('circle')
        .attr('cx', 100)
        .transition().duration(1000).delay(1900)
        .attr('cy', 670)
        .attr('r', 6)
        .style('fill', '#17becf');
    legend.append('text')
        .attr('x', 120)
        .transition().duration(1000).delay(1950)
        .attr('y', 676)
        .text('US');
}

function parseData(data, keyIn) {
    return data.map(function(d) {
        var obj = {};
        for (const key in d) {
            if (d.hasOwnProperty(key) && ['Moral', keyIn].includes(key)) {
                obj[key] = d[key];
                console.log(obj)
            }
        }
    })
}