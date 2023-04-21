import styled from "styled-components";
import { TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const handleSubmit = (e: any) => {
    console.log("here");
    e.preventDefault();

    router.push(`/selection?location=${location}`, undefined, {
      shallow: true,
    });
  };
  return (
    <>
      <Div>
        <H1>Home Cart</H1>

        <Location>
          <LocationOnIcon style={{ color: "#888888", marginRight: "3px" }} />
          <Form onSubmit={handleSubmit}>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              label="Enter Location"
              variant="filled"
              value={location}
              onInput={(e: any) => {
                setLocation(e.target.value);
              }}
              inputProps={{
                style: {
                  height: "40px",
                  padding: "16px 12px 0px",
                },
              }}
            />
          </Form>
        </Location>
      </Div>
    </>
  );
}

const Form = styled.form``;

const H1 = styled.h1`
  font-size: 96px;
  font-family: "Roboto";
  text-align: center;
  color: black;
  font-weight: 300;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;
