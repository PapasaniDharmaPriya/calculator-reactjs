import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const StyledBtnPanel = styled.div`
  .row {
    height: 100px;
    display: flex;
    flex-grow: 1;
  }
`;

export default function ButtonPanel(props) {
  const { clickHandler } = props;
  return (
    <StyledBtnPanel>
      <div className="row">
        <Button name="AC" wide handleClick={clickHandler} />
        <Button name=""/>
        <Button name="÷" handleClick={clickHandler} />
      </div>
      <div className="row">
        <Button name="1" handleClick={clickHandler} />
        <Button name="2" handleClick={clickHandler} />
        <Button name="3" handleClick={clickHandler} />
        <Button name="X" handleClick={clickHandler} />
      </div>
      <div className="row">
        <Button name="4" handleClick={clickHandler} />
        <Button name="5" handleClick={clickHandler} />
        <Button name="6" handleClick={clickHandler} />
        <Button name="-" handleClick={clickHandler} />
      </div>
      <div className="row">
        <Button name="7" handleClick={clickHandler} />
        <Button name="8" handleClick={clickHandler} />
        <Button name="9" handleClick={clickHandler} />
        <Button name="+" handleClick={clickHandler} />
      </div>
      <div className="row">
        <Button name="0" handleClick={clickHandler} />
        <Button name="." handleClick={clickHandler} />
        <Button name="=" wide handleClick={clickHandler} width='40%'/>
      </div>
    </StyledBtnPanel>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
