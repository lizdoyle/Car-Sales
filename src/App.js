import React, {useState} from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from "react-redux";

//import actions instead of reducers - my note

import {removeFeat, buyItem} from "./actions";

const App = props => {

  const [remove, setRemove] = useState();
  const [buy, setBuy] = useState(false)

  const removeFeature = item => {
    // dispatch an action here to remove an 
    item.preventDefault();
    setRemove(remove = '')
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    item.preventDefault();
    setBuy(buy)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(mapStateToProps, {})(App);
