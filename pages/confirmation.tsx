import CheckIcon from "@mui/icons-material/Check";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <>
      <IconWrapper>
        <Text>Order Placed</Text>
        <Circle>
          <CheckIcon style={{ fontSize: "80px", color: "#1976d2" }} />
        </Circle>
      </IconWrapper>
    </>
  );
}

const Text = styled.div`
  color: #000;
  font-family: "Roboto";
  font-size: 33px;
  margin-bottom: 50px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Circle = styled.span`
  border: 4px solid #1976d2;
  border-radius: 50%;
  padding: 30px;
`;
