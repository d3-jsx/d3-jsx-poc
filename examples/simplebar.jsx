d3.selection.prototype.appendJSX = d3.jsx_append

const data = [
  {name: "Locke",    value:  4},
  {name: "Reyes",    value:  8},
  {name: "Ford",     value: 15},
  {name: "Jarrah",   value: 16},
  {name: "Shephard", value: 23},
  {name: "Kwon",     value: 42}
];

const width = 1000,
    barHeight = 50;

const height = barHeight*data.length;      

const x = d3.scaleLinear()
          .range([0, width])
          .domain([0, d3.max(data, (d) => d.value)]);                       

let svg = d3.select("body").appendJSX(<svg className="chart" width={width} height={height}></svg>);


const bar = svg.selectAll("g")
.data(data)
.enter()
  .appendJSX((
    <g transform={(d, i) => { return 'translate(0,' + i*barHeight + ')';}}>
        <rect width={(d) => x(d.value)} height={barHeight - 1}></rect>
        <text x={(d)=>x(d.value)-10} y={ barHeight / 2 } dy=".35em">{(d) => d.value}</text>
    </g>
  ));