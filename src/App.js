import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

//import routes
import Home from './components/pages/Home/HomePage';
import Faq from './components/pages/Faq/FaqPage';
import Terms from './components/pages/Terms/TermsPage';
import Contact from './components/pages/Contact/ContactPage';
import Cart from './components/pages/Cart/CartPage';
import NotFoundPage from './components/pages/404/NotFoundPage'

// We have to use Switch to ensure only one route will be returned
function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/faq' exact component={Faq} />
        <Route path='/terms' exact component={Terms} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/cart' exact component={Cart} />
        <Route component={NotFoundPage} />
      </Switch>
    </MainLayout>
  );
}

export default App;
