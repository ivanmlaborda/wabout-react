import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App/App';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
