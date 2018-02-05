var React = require('react');
var ReactDom = require('react-dom');

function Hello() {
    return (<h1>Yo!</h1>)
}

ReactDom.render(
    <Hello />
    , document.getElementById('root')
);