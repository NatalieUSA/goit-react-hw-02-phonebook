import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 250px 400px;
  gap: 30px;

     @media (max-width: 640px) {
      display: block;
      width: 80%;
       margin-right: auto;
  margin-left: auto;

     @media (max-width: 320px) {
      width: 90%;
    }

     @media (min-width: 420px) {
      width: 350px;
    }
`;

export const Block = styled.div`
  border-radius: 15px;
  padding: 10% 2%;
  background-color: rgb(223, 224, 224);
  @media (max-width: 640px) {
    margin-bottom: 15px;
  }
`;
