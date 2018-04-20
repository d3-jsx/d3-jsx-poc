d3.selection.prototype.appendJSX = d3.jsx_append
d3.select('#chart').appendJSX(<svg width={84} height={42}></svg>).appendJSX(<g id="group">
<rect className="test" width={50} height={50}></rect>
<text x={25} y={25} dy="0.35em" textAnchor="middle" fill="white">Text</text>
</g>)