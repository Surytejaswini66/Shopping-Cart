import styled from "styled-components";

export const CartContainer = styled.div`
  width: 90%;
  max-width: 1050px;
  padding: 20px;
  text-align: left;
  margin: 10px auto 0; /* Added small top margin */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CartItemsHeading = styled.h2`
  text-align: left;
  margin-top: 20px;  /* Keeps heading separate */
  margin-left: 220px;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 18px;
  width: 80%;
  margin-left: 0px;
  margin-right: auto;

  strong {
    flex-grow: 1; /* Pushes the next element to the right */
  }

  span {
    text-align: right; /* Ensures amount stays at the end */
  }
`;

export const HorizontalLine = styled.div`
margin-top:40px;
  width: 100%;
  height: 2px; /* Set explicit height */
  background-color: #8c8c8c; /* Background color now applies */
  margin: 10px auto;
`;





export const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
`;

export const QuantityButton = styled.button`
  background: ${(props) => props.color};
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
`;
export const CartHeading = styled.h2`
  text-align: left;
  margin-top: 20px;  /* Keeps heading separate */
  margin-left: 220px;
`;

export const GiftProgressContainer = styled.div`
background-color: #ccf3ff;
padding: 10px;
margin-top: 10px;
text-align: center;
font-size: 16px;
font-weight: bold;
width: 100%;
border-radius: 5px;
`;


export const FreeGiftMessage = styled.div`
  background-color: #ccf3ff;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
`;
export const CartItemContainer = styled.div`
  display: flex;
  align-items: center; /* Keep everything aligned */
  justify-content:space-around;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  gap: 0; /* Remove extra spacing */
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0; /* Remove space between buttons */
`;

export const CartContentCard = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 1050px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const FreeGiftTag = styled.span`
  font-weight: bold;
  background-color: skyblue;
  color: blue;
  padding: 4px 8px;
  border-radius: 4px;
`;
export const CartItemName = styled.h3`
  margin: 0 0 5px 0;
  font-weight: bold;
`;

export const CartItemPrice = styled.p`
  margin: 0;
`;