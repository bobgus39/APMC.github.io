import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Libreria() {
  let pathName = window.location.pathname;
  console.log(pathName);
  return (
    <>
      <NavBar></NavBar>

      <Footer />
    </>
  );
}
