d3.selection.prototype.appendJSX = d3.jsx_append
let Bars = d3.Bars;
const data = [
  {name: "Locke",    value:  4},
  {name: "Reyes",    value:  8},
  {name: "Ford",     value: 15},
  {name: "Jarrah",   value: 16},
  {name: "Shephard", value: 23},
  {name: "Kwon",     value: 42}
];

const width = 1000;

const height = 800;      

const x = d3.scaleLinear()
          .range([0, width])
          .domain([0, d3.max(data, (d) => d.value)]);                       

let svg = d3.select("body").appendJSX(<svg className="chart" width={width} height={height}></svg>);


const bar = svg.selectAll("g")
.data(data)
.enter()
  .appendJSX( <Bars height={40} x={x} horizontal={true}/>);
