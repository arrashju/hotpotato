import Navbar from "./navbar";
import styled from "styled-components";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  background-color: #eee;
  min-height: 100vh;
`;
