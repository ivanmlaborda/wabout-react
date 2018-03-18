import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import registerServiceWorker from './services/registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
