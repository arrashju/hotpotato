import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <Div>
        Copyright © 2023 - Home Cart
        <Hr />
        <SocialMedia>
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </SocialMedia>
      </Div>
    </>
  );
}

const Hr = styled.hr`
  margin-top: 20px;
  opacity: 40%;
`;

const Div = styled.div`
  background-color: #fff;
  color: #222;
  text-align: center;
  padding: 20px 0;
  font-family: "Roboto";
`;

const SocialMedia = styled.div`
  padding: 10px;
  padding-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 150px;
  column-gap: 10px;
  margin: 0 auto;

  > * {
    color: #444;
  }
`;
