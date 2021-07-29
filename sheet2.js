async function sheet2() {
    var data = await d3.csv('data/ALL_MFQ30.csv')
    var map = d3.map(data, function(d) {
        return {
            care: d.CARE_AVG,
            fairness: d.FAIRNESS_AVG,
            loyalty: d.LOYALTY_AVG,
            authority: d.AUTHORITY_AVG,
            sanctity: d.SANCTITY_AVG,
            sex: d.Sex,
            country: d.Country
        }
    });

    var counts = getCounts(map, 'care');

    document.getElementById('graph').innerHTML = '';

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
        .domain([0, 500])
        .range([height, 0]);
    svg.append('g')
        .call(d3.axisLeft(y));

    svg.append('g')
        .append('rect')
        .attr('x', 0)
        .attr('y', function() { return 700 - counts.male.bin_1; })
        .attr('width', 100)
        .attr('height', counts.male.bin_1)
}

function getCounts(data, column) {

    male = {
        bin_1: 0,
        bin_2: 0,
        bin_3: 0,
        bin_4: 0,
        bin_5: 0
    }
    female = {
        bin_1: 0,
        bin_2: 0,
        bin_3: 0,
        bin_4: 0,
        bin_5: 0
    }

    for (let i = 1; i < data.length; i++) {
        if (data[i].sex == 1) {
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
        } else if (data[i].sex == 0) {
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
        }
    }
    console.log(male);
    console.log(female);
    return {male: male, female: female}
}
