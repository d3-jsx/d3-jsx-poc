d3.selection.prototype.appendJSX = d3.jsx_append;
var Bars = d3.Bars;
var data = [{ name: "Locke", value: 4 }, { name: "Reyes", value: 8 }, { name: "Ford", value: 15 }, { name: "Jarrah", value: 16 }, { name: "Shephard", value: 23 }, { name: "Kwon", value: 42 }];

var width = 500;

var height = 400;

var svg = d3.select("body").appendJSX({
  elementName: "svg",
  attributes: {
    className: "chart",
    width: width,
    height: height
  },
  children: []
}).selectAll("g").data(data).enter().appendJSX({
  elementName: Bars,
  attributes: {
    data: data,
    height: 40,
    dimensions: [width, height],
    horizontal: true
  },
  children: null
});