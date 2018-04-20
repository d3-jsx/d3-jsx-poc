d3.selection.prototype.appendJSX = d3.jsx_append;

var data = [{ name: "Locke", value: 4 }, { name: "Reyes", value: 8 }, { name: "Ford", value: 15 }, { name: "Jarrah", value: 16 }, { name: "Shephard", value: 23 }, { name: "Kwon", value: 42 }];

var SimpleBars = function SimpleBars(props) {

  var barHeight = props.height | 50;

  return {
    elementName: "g",
    attributes: {
      transform: function transform(d, i) {
        return 'translate(0,' + i * barHeight + ')';
      }
    },
    children: [{
      elementName: "rect",
      attributes: {
        width: function width(d) {
          return _x(d.value);
        },
        height: barHeight - 1
      },
      children: []
    }, {
      elementName: "text",
      attributes: {
        x: function x(d) {
          return _x(d.value) - 10;
        },
        y: barHeight / 2,
        dy: ".35em"
      },
      children: [function (d) {
        return d.value;
      }]
    }]
  };
};

var width = 1000;

var height = 800;

var _x = d3.scaleLinear().range([0, width]).domain([0, d3.max(data, function (d) {
  return d.value;
})]);

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
  elementName: SimpleBars,
  attributes: {
    height: 40
  },
  children: null
});