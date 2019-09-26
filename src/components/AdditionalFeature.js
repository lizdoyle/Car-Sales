import React, {useState} from 'react';

const AdditionalFeature = props => {

  const [newFeat, setNewFeat] = useState();

  const addFeature = e => {
    e.preventDefault();
    setNewFeat(newFeat)

  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
