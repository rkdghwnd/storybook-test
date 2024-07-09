import React from 'react';
import styled from 'styled-components';

const PictureBox = styled.picture`
  border: 1px solid #f2f2f2;
  box-shadow: 15px 15px 0px -3px #f2f2f2;

  // @media screen and (max-width: 768px) {
  //     max-width: 400px;
  // }

  // @media screen and (max-width: 480px) {
  //     max-width: 100%;
  // }
`;

const LandingGifs = ({ image }) => {
  return (
    <PictureBox>
      <source srcSet={`/images/${image}.webp`} type="image/webp" />
      <img src={`/images/${image}.jpg`} alt="tingel" />
    </PictureBox>
  );
};

export default LandingGifs;
