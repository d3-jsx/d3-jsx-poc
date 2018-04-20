d3.selection.prototype.appendJSX = d3.jsx_append;
var Bars = d3.Bars;
var data = [{ name: "Locke", value: 4 }, { name: "Reyes", value: 8 }, { name: "Ford", value: 15 }, { name: "Jarrah", value: 16 }, { name: "Shephard", value: 23 }, { name: "Kwon", value: 42 }];

var width = 800;

var height = 1000;

var x = d3.scaleLinear().range([0, height]).domain([0, d3.max(data, function (d) {
  return d.value;
})]);

// const x = d3.scale.ordional()
//   .rangeRoundBands([0, width], 0.2);

var svg = d3.select("body").appendJSX({
  elementName: "svg",
  attributes: {
    className: "chart",
    width: width,
    height: height
  },
  children: []
});

var bar = svg.selectAll("g").data(data).enter().appendJSX({
  elementName: Bars,
  attributes: {
    height: 40,
    x: x,
    horizontal: false
  },
  children: null
});