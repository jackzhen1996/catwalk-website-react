import styled from 'styled-components';


const TopRow = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between
`;

const ReviewContainer = styled.div`
  border: 1px solid black;
  margin-top: 5px;
  width: 100%;
  margin-top: 5px;

`;

const ResponseContainer = styled.div`
  background-color: #D3D3D3;
  height: 50px;
  width: 100%;
  margin-top: 5px;

`;

const Stars = styled.div`
  border: 1px solid black;
  font-size: 12px;
`;

const UserAndDate = styled.div`
  border: 1px solid black;
  font-size: 12px;

`;

const Summary = styled.h3`
  border: 1px solid black;
  margin:0px;

`;

const Body = styled.p`
  margin-top: 5px;
  border: 1px solid black;
  font-size: 12px;
  margin: 0px;

`;


const Recommend = styled.span`
  margin-top: 5px;
  border: 1px solid black;
  font-size: 12px;
  margin: 0px;

`;

const Response = styled.p`
  margin-top: 5px;
  border: 1px solid black;
  font-size: 12px;
  margin: 0px;

`;

const Helpful = styled.span`
  margin-top: 5px;
  border: 1px solid black;
  font-size: 12px;
  margin: 0px;

`;

export {ResponseContainer, ReviewContainer,TopRow, Stars, UserAndDate, Summary, Body, Recommend, Response, Helpful };