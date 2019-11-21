import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


import cartReducer from './components/reducers/CartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const Root = () => (
    <Router>
        <App />
    </Router>
);

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));
