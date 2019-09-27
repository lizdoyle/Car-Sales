import React from 'react';

import { connect } from "react-redux";

import {removeFeat} from "../actions/index";


const AddedFeature = props => {

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeat()}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}


export default connect(mapStateToProps, {removeFeat})(AddedFeature);
