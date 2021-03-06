import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  return <button className={`square ${props.isWinner ? "winner" : ""}`} onClick={ () => {props.onClickCallback(props.id)}}>
    {props.value}
    </button>
}

Square.propTypes = {
  value: PropTypes.string,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isWinner: PropTypes.bool.isRequired,
};

export default Square
