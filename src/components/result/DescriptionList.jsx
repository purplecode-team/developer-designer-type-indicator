import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.ul`
  width: 85%;
  //overflow-y 사용 시, 내부 스크롤 가능 but, list-style '-'이 가려짐
  overflow-y:auto;
  line-height: 1.5em;
  margin: 0 auto;
  color: #5c5c5c;
  font-size: 16px;
  font-family: 'hannaAir', sans-serif;
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
        description.map((item, index) => <li key={index+1}> {item} </li>)}
    </List>
  );
};

DescriptionList.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DescriptionList;
