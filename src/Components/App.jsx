import React from "react";
import NavBar from "./NavBarComp/NavBar";
import Trending from "./PosterComp/Trending";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />;
      <Trending />;
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
