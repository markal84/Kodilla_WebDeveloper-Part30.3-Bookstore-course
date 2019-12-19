import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


import cartReducer from './redux/reducers'; // wille be in store.js once fixed
import { Provider } from 'react-redux'; // wille be in store.js once fixed
import { createStore } from 'redux'; // wille be in store.js once fixed
//import store from './redux/store';


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

const store = createStore(cartReducer); // wille be in store.js once fixed

ReactDOM.render(<Root />, document.getElementById('root'));
