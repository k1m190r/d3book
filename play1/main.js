var body = d3.select('body');
var p = body.append('p');
p.text('new paragraph');

d3.csv('food.csv', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    dataset = data;
    body.selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', d => {
        return (d.Deliciousness * 5) + 'px';
      });
  }
});

var ds2 = [];
for (var i = 0; i < 25; i++) {
  var newNum = Math.random() * 30;
  ds2.push(newNum);
}

body.selectAll('div')
  .data(ds2)
  .enter()
  .append('div')
  .attr('class', 'bar2')
  .style('height', d => {
    return d + 'px';
  });


// SVG
var w = 500;
var h = 50;

var svg = body.append('svg');
svg.attr('width', w).attr('height', h);
var circles = svg.selectAll('circle')
  .data(ds2)
  .enter()
  .append('circle');

circles.attr('cx', (d, i) => {
    return (i * 50) + 25;
  })
  .attr('cy', h / 2)
  .attr('r', d => {
    return d;
  })
  .attr('fill', 'yellow')
  .attr('stroke', 'orange')
  .attr('stroke-width', d => {
    return d/2;
  });
