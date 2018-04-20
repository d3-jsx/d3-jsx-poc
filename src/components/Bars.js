import Component from './Component';

export class Bars extends Component{
  constructor(props){
    super(props)
  }

  render() {
    const horizontal = this.props.horizontal;
    const barHeight = this.props.height | 50;
    const [width, height] = this.props.dimensions || [500, 400];
    const scale = d3.scaleLinear()
      .range([0, horizontal ? width: height])
      .range([0, height])
      .domain([0, d3.max(this.props.data, (d) => d.value)]);
    
    if(horizontal){
    return (
      <g transform={(d, i) => { return 'translate(0,' + i*barHeight + ')';}}>
      <rect width={(d) => scale(d.value)} height={barHeight - 1}></rect>
      <text x={(d)=>scale(d.value)-10} y={ barHeight / 2 } dy=".35em">{(d) => d.value}</text>
    </g>   
    );
  } else {
    return (
      <g transform={(d, i) => { return 'translate(' + i*barHeight + ','+ (height-scale(d.value)).toString() +')';}}>
      <rect height={(d) => scale(d.value)} width={barHeight - 1}></rect>
      <text y={(d)=>scale(d.value)-10} x={ barHeight / 2 } dx=".35em">{(d) => d.value}</text>
    </g>   
    );
  }
  }
}