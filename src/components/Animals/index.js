import React from "react";
import { connect } from "react-redux";
const Animals = (props) => {
  const handleDelete = (name) => {
    const newAnimals = props.animals.filter((animal) => animal !== name);
    props.delete(newAnimals);
  };
  return (
    <>
      {props.animals.map((animal) => (
        <div key={animal}>
          <h1>{animal}</h1>
          <button onClick={() => handleDelete(animal)}>Delete</button>
        </div>
      ))}
    </>
  );
};
const mapStateToProps = (state) => {
  return { animals: state.animalsReducer.animals };
};
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (animals) => dispatch({ type: "DELETE", payload: animals }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Animals);
