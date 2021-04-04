import React, {lazy, Suspense} from 'react';
// import UserProfile from './components/UserProfile/UserProfile';
// import ProductList from './pages/Products/Product';

import Nav from './components/Nav/Nav';
import Error404 from './pages/ErrorPage/Error';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

const UserProfile = lazy(() => import("./components/UserProfile/UserProfile"));
const Products = lazy(() => import("./pages/Products/Product"));
const ProductDetail = lazy(() => import("./pages/Products/ProductDetail"));

function App() {
  const routes  = (
    <Suspense fallback={<div>Loading....</div>}>
    <Switch>
      <Route path= "/" exact component= {UserProfile}/>
      <Route path= "/productList" exact component= {Products}/>
      <Route path= "/productDetail/:pid" exact component= {ProductDetail}/>
      <Route path= "/error404"  component= {Error404}/>
      <Redirect to= "/error404" />
    </Switch>
    </Suspense>
  )
  return (
    <div className="App">
      <Nav/>
      {routes}
    </div>
  );
}

export default App;
