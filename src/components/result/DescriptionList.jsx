import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.ul`
  width: 92%;
  line-height: 1.5em;
  margin: 0 auto;
  color: #5c5c5c;
  font-size: 16px;
  font-family: 'jua', sans-serif;
  white-space: pre-wrap;
  list-style-type: '-';
  li {
    padding: 0.5em 0;
  }
`;

const DescriptionList = ({ description }) => {
  return (
    <List>
      {description &&
        description.map((item, index) => <li key={index}> {item} </li>)}
    </List>
  );
};

DescriptionList.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DescriptionList;
