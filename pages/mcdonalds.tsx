import styled from "styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div style={{ textAlign: "center", padding: "27px 0 0" }}>
        <Typography variant="h3" component="h3" style={{ color: "#000" }}>
          McDonalds
        </Typography>
      </div>
      <FoodWrapper>
        <Food
          title="Big Mac"
          price="$3.50"
          description="We’ve recently tweaked our process to get hotter, meltier cheese and adjusting our grill settings for a better sear, added up to a big difference in making our burgers more flavorful than ever!"
          href="/cart"
        />
        <Food
          title="Fries"
          price="$2.00"
          description="McDonald's World Famous Fries® are made with premium potatoes such as the Russet Burbank and the Shepody. With 0g of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside"
          href="/cart"
        />
        <Food
          title="Chicken Nuggets"
          price="$3.00"
          description="McDonald's 6 piece Chicken McNuggets® are made with 100% chicken breast meat in a deliciously crispy coating, just waiting to be dipped. A firm favourite with everyone. The 9 piece Chicken McNuggets® and 20 Chicken McNuggets® ShareBox® are also available for when just 6 isn't enough! "
          href="/cart"
        />
      </FoodWrapper>
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
          Add to Cart
        </Button>
      </ButtonWrapper>
    </>
  );
}

interface Food {
  title: string;
  price: string;
  description: string;
  href: string;
}

const Food = ({ title, price, description, href }: Food) => {
  return (
    <>
      <Card style={{ width: "328px", cursor: "pointer" }}>
        <Link href={href} passHref>
          <span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CardHeader
                title={`${title} (${price})`}
                style={{
                  fontFamily: "'Roboto'",
                  opacity: "87%",
                  fontSize: "20px",
                  color: "#000",
                }}
              />
              <IconButton aria-label="share">
                <AddCircleIcon />
              </IconButton>
            </div>
            <CardContent
              style={{
                fontFamily: "'Roboto'",
                lineHeight: "150%",
                opacity: "60%",
                fontSize: "16px",
              }}
            >
              {description}
            </CardContent>
          </span>
        </Link>
      </Card>
    </>
  );
};

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 31px;
  left: 50%;
  transform: translateX(-50%);
`;

const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px;
  align-items: center;
  row-gap: 20px;
`;
