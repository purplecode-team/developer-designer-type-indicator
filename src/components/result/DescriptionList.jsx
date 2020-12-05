import React from 'react';
import styled from 'styled-components';

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
  const descArray = Object.values(description);
  return (
    <List>
      {descArray &&
        descArray.map((item, index) => <li key={index}> {item} </li>)}
    </List>
  );
};

export default DescriptionList;
