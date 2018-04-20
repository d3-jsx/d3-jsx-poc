d3.selection.prototype.appendJSX = d3.jsx_append;
d3.select('#chart').appendJSX({
  elementName: "svg",
  attributes: {
    width: 84,
    height: 42
  },
  children: []
}).appendJSX({
  elementName: "g",
  attributes: {
    id: "group"
  },
  children: [{
    elementName: "rect",
    attributes: {
      className: "test",
      width: 50,
      height: 50
    },
    children: []
  }, {
    elementName: "text",
    attributes: {
      x: 25,
      y: 25,
      dy: "0.35em",
      textAnchor: "middle",
      fill: "white"
    },
    children: ["Text"]
  }]
});