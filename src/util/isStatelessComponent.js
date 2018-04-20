import isClass from './isClass';

export default function isStatelessComponent( element ) {
    return !isClass(element) && typeof element === 'function';
}