import React from "react";

const Tribes = props => {
  console.log(props);
  return (
    <div>
      {props.tribesArr &&
        props.tribesArr.map(tribe => <div key={tribe.id}>{tribe.name}</div>)}
    </div>
  );
};

export default Tribes;
