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

const width = 500;

const height = 400;                           

let svg = d3.select("body")
.appendJSX(<svg className="chart" width={width} height={height}></svg>)
.selectAll("g")
.data(data)
.enter()
  .appendJSX( <Bars data={data} height={40} 
    dimensions={[width, height]} horizontal={true}/>);
