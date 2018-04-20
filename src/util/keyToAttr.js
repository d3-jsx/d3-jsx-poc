/**
 * A lookup table for translating reserved words
 * @example 'className' becomes 'class' because class is a reserved word in JS
 */
const keyLookup = {
    'className': "class"
}

/**
 * Changes the input to paramCase
 * @param {string} input 
 * @returns {string}
 */
function paramCase(input) {
    return input.split(/(?=[A-Z])/g)
            .map( function (value) { 
                return value.charAt(0).toLowerCase() + value.substring(1) 
            }).join("-");
}

/**
 * Applies rules for reserved words and casing to get attribute name
 * @param {string} key 
 * @returns {string}
 */
export default function keyToAttr(key) {
    if (keyLookup[key] === undefined) { 
        // convert case, e.g. fontName to font-name
        return paramCase(key);
    } else {
        // special attr names for reserved words (e.g. className)
        return keyLookup[key];
    }
}
