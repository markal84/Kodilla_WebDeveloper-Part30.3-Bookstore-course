import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


import cartReducer from './redux/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>    
);

// combine reducers - problematic part
/*const rootReducer = combineReducers({
    cartReducer,
}); */

const store = createStore(cartReducer);

ReactDOM.render(<Root />, document.getElementById('root'));
