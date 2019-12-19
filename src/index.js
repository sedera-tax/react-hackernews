import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './MyComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyComponent />, document.getElementById('my-component'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept() ;
}