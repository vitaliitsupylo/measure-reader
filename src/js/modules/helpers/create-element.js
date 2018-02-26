export default function createElement(tag, props, ...children) {

    const element = document.createElement(tag);

    Object.keys(props).forEach(prop => element[prop] = props[prop]);

    if (children.length > 0) {
        children.forEach((child) => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }
            element.appendChild(child);
        });
    }
    return element;
}
