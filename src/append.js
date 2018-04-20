import { 
    keyToAttr,
    isClass,
    isStatelessComponent
} from './util/index';

/**
 * Takes an object created by <code>babel-plugin-transform-jsx</code> and makes
 * the necessary d3 calls to add the elements, and attributes.
 * @param {object} content 
 */
function appendObject(content) {
    let el = content.elementName,
        attrs = content.attributes,
        children = content.children, 
        element = null,
        instance = null;

    if ( isClass(el) ) {
        instance = new el(attrs);
        return appendObject.call(this, instance.render());
    } else if ( isStatelessComponent(el) ) {
        return appendObject.call(this, el(attrs));
    } else {
        element = this.append(el);  // append the element using d3's original append
    }

    let keys = Object.keys(attrs);
    keys.map( (key) => {
        element = element.attr(keyToAttr(key), attrs[key]);
    });

    if (children) {
        children.map( (child) => {
            if (typeof child === 'string' || typeof child === 'function') {
                element.text(child);    // Append text
            } else {
                appendObject.call(element, child);  // Call this recursively to add children
            }
        });
    }
    return element;
}

/**
 * Appends objects to the selection.  If the input is a string, an element with that 
 * tag name is created.  If it is a function, the function is called.  If it is an object
 * with an elementName, it is treated like an object from <code>babel-plugin-transform-jsx</code>.
 * @param {*} name 
 */
export default function(name) {
    if (typeof name == "object" && typeof name.elementName != 'undefined') {
        return appendObject.call(this, name);
    } else {
        // call the original append
        this.append(name);
    }
}