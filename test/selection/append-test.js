var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("d3-selection");

const {JSDOM} = jsdom;

require("../../src");
import {Component} from '../../src';

tape("selection.append will accept an svg tag with attributes", function(test) {
    var dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    var document = dom.window.document;
    var result = d3.select(document.body).append(<svg width={84} height={42}></svg>);
    test.equal(document.body.firstElementChild.localName, 'svg');
    test.equal(document.body.firstElementChild.getAttribute("width"), '84');
    test.equal(document.body.firstElementChild.getAttribute("height"), '42');
    test.end();
});

tape("selection.append will accept items with children", function(test) {
    // Setup
    var dom = new JSDOM(`<!DOCTYPE html><body><svg height='200' width='200'></svg></body>`);
    var document = dom.window.document;
    var svg = document.body.firstElementChild;

    // Execute the method
    var result = d3.select(svg).append(
        <g id="group">
            <rect className="test" width={50} height={50}></rect>
            <text x={25} y={25} dy="0.35em" textAnchor="middle">Text</text>
        </g>
    );

    test.equal(result.empty(), false, "Result should not be an empty selection");

    // validate the group element
    var group = svg.firstElementChild;
    test.equal(group.localName, 'g');
    test.equal(group.children.length, 2, "Outer tag should have 2 children");

    // validate the rect element
    var rect = group.children[0];
    test.equal(rect.localName, 'rect');
    test.equal(rect.getAttribute("class"), "test", "className attribute gets applied as class");
    test.equal(rect.getAttribute("width"), '50');
    test.equal(rect.getAttribute("height"), '50');

    // validate the text tag
    var text = group.children[1];
    test.equal(text.localName, 'text');
    test.equal(text.getAttribute("x"), '25');
    test.equal(text.getAttribute("y"), '25');
    test.equal(text.getAttribute("dy"), "0.35em");
    test.equal(text.getAttribute("text-anchor"), "middle", "textAnchor is converted to text-anchor");
    test.equal(text.innerHTML,"Text");

    test.end();
});


tape("Executes a stateless, functional component and appends the results", function(test) {
    // Setup
    var dom = new JSDOM(`<!DOCTYPE html><body><svg height='200' width='200'></svg></body>`);
    var document = dom.window.document;
    var svg = document.body.firstElementChild;

    // A test version of a stateless, functional components - no props
    function FuncComponent(props) {
        return(
            <text x={25} y={25} textAnchor="middle">Functional</text>
        )
    }

    // Execute the method
    var result = d3.select(svg).append(
        <FuncComponent />
    );

    test.equal(result.empty(), false, "Result should not be an empty selection");

    // validate the text element
    var text = svg.firstElementChild;
    test.equal(text.localName, 'text');
    test.equal(text.getAttribute('x'), '25');
    test.equal(text.getAttribute('y'), '25');
    test.equal(text.innerHTML, "Functional");

    test.end();
});

tape("Instantiates a component, calls render, and appends the results", function(test) {
    // Setup
    var dom = new JSDOM(`<!DOCTYPE html><body><svg height='200' width='200'></svg></body>`);
    var document = dom.window.document;
    var svg = document.body.firstElementChild;

    // Test Component
    class TestComponent extends Component {
        render() {
            return(
                <text x={25} y={25} textAnchor="middle">Class</text>
            )                
        }
    }

    // Execute the method
    var result = d3.select(svg).append(
        <TestComponent />
    );

    test.equal(result.empty(), false, "Result should not be an empty selection");

    // validate the text element
    var text = svg.firstElementChild;
    test.equal(text.localName, 'text');
    test.equal(text.getAttribute('x'), '25');
    test.equal(text.getAttribute('y'), '25');
    test.equal(text.innerHTML, "Class");

    test.end();
});