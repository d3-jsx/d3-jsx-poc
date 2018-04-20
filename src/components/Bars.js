import Component from './Component';

export class Bars extends Component{
  constructor(props){
    super(props)
  }

  render() {
    const barHeight = this.props.height | 50;
    const x = this.props.x;
    if(this.props.horizontal){
    return (
      <g transform={(d, i) => { return 'translate(0,' + i*barHeight + ')';}}>
      <rect width={(d) => x(d.value)} height={barHeight - 1}></rect>
      <text x={(d)=>x(d.value)-10} y={ barHeight / 2 } dy=".35em">{(d) => d.value}</text>
    </g>   
    );
  } else {
    return (
      <g transform={(d, i) => { return 'translate(' + i*barHeight + ',0)';}}>
      <rect height={(d) => x(d.value)} width={barHeight - 1}></rect>
      <text y={(d)=>x(d.value)-10} x={ barHeight / 2 } dx=".35em">{(d) => d.value}</text>
    </g>   
    );
  }
  }
}