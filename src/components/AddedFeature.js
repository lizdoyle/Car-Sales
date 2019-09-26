import React from 'react';

import { connect } from "react-redux";

import {removeFeat} from "../actions/index";


const AddedFeature = props => {

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeat}>X</button>
      {props.feature.name}
    </li>
  );
};



export default connect(null, removeFeat)(AddedFeature);
