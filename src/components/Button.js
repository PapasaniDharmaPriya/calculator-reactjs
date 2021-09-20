import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBtn = styled.button`
  width: ${props => (props.wide ? '50%' : '25%')};
  border: solid 2px #000;
  background: orange;
  p {
    font-size: 2rem;
  }
  outline: none;
  &:hover {
    background: purple;
    cursor:pointer;
  }
`;

export default function Button(props) {
  const {
    name, color, wide, handleClick,
  } = props;
  return (
    <StyledBtn
      color={color}
      wide={wide}
      type="button"
      onClick={() => handleClick(name)}
    >
      <p>
        {name}
      </p>
    </StyledBtn>
  );
}