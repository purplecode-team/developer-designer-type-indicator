import React, { useEffect, useState } from 'react';
import media from '../../lib/styles/media';
import styled from 'styled-components';
import { loadData } from '../../lib/firebase/api';
import { names, title, shortBio, characters } from '../../lib/util/util';
import BarChart from '../../components/statistics/BarChart';

const Container = styled.div`
  position: relative;
  width: 70rem;
  height: 40rem;
  z-index: 100;
  background-color: white;
  font-family: 'hannaPro', sans-serif;
  padding: 20px;
  border: 2px solid #b6af4a;
  border-radius: 2rem;
  display: grid;
  @media (max-width: ${media.laptopM}) {
    width: 80%;
  }
`;

const ChartContainer = () => {
  const [designerData, setDesignerData] = useState(null);
  const [developerData, setDeveloperData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const parseData = (data) => {
      const array = Object.keys(data).map((key) => ({
        shortBio: shortBio[names[key]],
        name: title[names[key]],
        img: characters[names[key]],
        count: data[key],
      }));
      array.sort((a, b) => (a.count < b.count ? 1 : -1));

      return array;
    };
    const fetchData = async () => {
      try {
        const devResponse = await loadData('devCount');
        setDeveloperData(parseData(devResponse));
        const designerResponse = await loadData('designerCount');
        setDesignerData(parseData(designerResponse));
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1> 개발자 </h1>
      {!error && developerData && (
        <BarChart data={developerData} title="개발자 유형" />
      )}
    </Container>
  );
};

export default ChartContainer;
