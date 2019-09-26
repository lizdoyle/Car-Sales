import React, {useState} from 'react';

import { connect } from "react-redux";

import {removeFeat} from "../actions/index";


const AddedFeature = props => {

  const [removeFeat, setRemoveFeat] = useState();

  const remove = e => {
    setRemoveFeat(removeFeat)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={remove}>X</button>
      {props.feature.name}
    </li>
  );
};



export default connect(null, removeFeat)(AddedFeature);
