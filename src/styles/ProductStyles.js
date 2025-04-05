import styled from "styled-components";


export const ProductCard = styled.div`
  width: 250px;
  height:150px;
  background-color:white;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h4 {
  margin-top:10px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }
`;


export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  height: 40px;
  width: 180px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ProductHeading = styled.h2`
  text-align: left;
  margin-top: 20px;
  margin-left: 220px; /* optional, to give a bit of spacing from the edge */
`;