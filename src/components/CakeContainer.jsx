import React from "react";
// import { buyCake } from "../redux/cake/cakeAction";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes-{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
