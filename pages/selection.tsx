import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
} from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <RestaurantWrapper>
        <Restaurant
          src="mcdonalds.webp"
          title="McDonalds"
          description="American fast-food chain that is one of the largest in the world,
            known for its hamburgers, especially its Big Macs"
          href="/mcdonalds"
        />
        <Restaurant
          src="ihop.webp"
          title="IHOP"
          description="American multinational pancake house restaurant chain that specializes in American breakfast foods"
          href="/mcdonalds"
        />
      </RestaurantWrapper>
    </>
  );
}

interface Restaurant {
  src: string;
  title: string;
  description: string;
  href: string;
}

const Restaurant = ({ src, title, description, href }: Restaurant) => {
  return (
    <>
      <Card style={{ width: "298px" }}>
        <Link href={href} passHref>
          <span>
            <CardActionArea>
              <CardMedia>
                <img src={src} height="225px" />
              </CardMedia>
              <CardHeader
                title={title}
                style={{
                  fontFamily: "'Roboto'",
                  opacity: "87%",
                  fontSize: "20px",
                  color: "#000",
                }}
              />
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
            </CardActionArea>
          </span>
        </Link>
      </Card>
    </>
  );
};

const RestaurantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px;
  align-items: center;
  row-gap: 32px;
`;
