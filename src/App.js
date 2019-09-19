import React from 'react';
import './App.css';
import Basic from './Config/Router/Router.js'
import {Provider} from 'react-redux'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class App extends React.Component{
render(){
  return(
    <Provider store={store}>
    <div>
      <Basic/>

    </div>
    </Provider>
  )
}
}
export default App;
