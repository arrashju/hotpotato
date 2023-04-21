import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState(4);

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setValue(0);
        break;
      case "/selection":
        setValue(1);
        break;
      case "/cart":
        setValue(2);
        break;
      default:
        setValue(3);
        break;
    }
  }, []);

  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => {
            router.push("/", undefined, { shallow: true });
          }}
        />
        <BottomNavigationAction
          label="Selection"
          icon={<RestaurantIcon />}
          onClick={() => {
            router.push("/selection", undefined, { shallow: true });
          }}
        />
        <BottomNavigationAction
          label="Cart"
          icon={<ShoppingCartIcon />}
          onClick={() => {
            router.push("/cart", undefined, { shallow: true });
          }}
        />
      </BottomNavigation>
    </>
  );
}
