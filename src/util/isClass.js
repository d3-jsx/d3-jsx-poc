import Component from '../Component';

/**
 * NOTE: This is not robust.  May not handle classes with multiple levels of inheritance.
 * @param {*} func - An "element" that we want to check, it may be a string, function, or constructor
 */
export default function isClass(func) {
    return typeof func === 'function'
        && func.prototype instanceof Component;
}