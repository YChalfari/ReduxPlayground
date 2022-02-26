import React from "react";
import { connect } from "react-redux";

import { countAction } from "../../redux/actions/counter.actions";

const Counter = (props) => {
  return (
    <div>
      Counter:
      <button onClick={props.decrement}>DEC</button>
      {props.count}
      <button onClick={props.increment}>INC</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { count: state.countReducer.count };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INC" }),
    decrement: () => dispatch({ type: "DEC" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
