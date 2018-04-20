import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
export default {
  entry: 'src/index.js',
  targets: [{
      dest: 'dist/d3-jsx.js',
      format: 'umd',
      moduleName: 'd3'
    },
    {
      dest: 'examples/d3-jsx.js',
      format: 'umd',
      moduleName: 'd3'
    }
  ],
  plugins: [resolve(), babel()],
  moduleName: 'd3'
};