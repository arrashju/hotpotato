import styled from "@emotion/styled";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <OrderDetails>
        <OrderItem name="Big Mac" price="$3.50" />
        <OrderItem name="Fries" price="$2.00" />
        <OrderItem name="Chicken Nuggets" price="$3.00" />
        <Hr />
        <OrderItem name="Total" price="$8.50" />
      </OrderDetails>
      <ButtonWrapper>
        <Button
          variant="contained"
          style={{
            textTransform: "none",
            height: "48px",
            minWidth: "301px",
            fontSize: "19px",
          }}
        >
          Place Order
        </Button>
      </ButtonWrapper>
    </>
  );
}

interface Item {
  name: string;
  price: string;
}

const OrderItem = ({ name, price }: Item) => {
  return (
    <>
      <ItemWrapper>
        <ItemName>{name}</ItemName>
        <ItemPrice>{price}</ItemPrice>
      </ItemWrapper>
    </>
  );
};

const Hr = styled.hr`
  color: #000;
  opacity: 50%;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 31px;
  left: 50%;
  transform: translateX(-50%);
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  padding-top: 20vh;
  max-width: 500px;
  margin: 0 auto;
  row-gap: 22px;
`;

const ItemName = styled.div`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  color: #000;
`;

const ItemPrice = styled.div`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  color: #000;
`;
