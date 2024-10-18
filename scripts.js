const svg = d3.select("#interactiveCanvas")
  .append("svg")
  .attr("width", 300)
  .attr("height", 600);

const nodes = d3.range(50).map(function(d) {
  return {radius: Math.random() * 12 + 4};
});

const simulation = d3.forceSimulation(nodes)
  .force("charge", d3.forceManyBody().strength(-50))
  .force("center", d3.forceCenter(150, 300))
  .force("collision", d3.forceCollide().radius(function(d) { return d.radius + 2; }))
  .on("tick", ticked);

function ticked() {
  const u = svg.selectAll("circle")
    .data(nodes);

  u.enter()
    .append("circle")
    .attr("r", function(d) { return d.radius; })
    .merge(u)
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });

  u.exit().remove();
}