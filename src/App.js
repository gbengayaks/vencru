import React from "react";
import TopBar from "./components/TopBar";
import BusinessDetails from "./components/BusinessDetails";
import Quicklinks from "./components/Quicklinks";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <TopBar />
      <BusinessDetails />
      <Quicklinks />
      <Copyright />
    </>
  );
}

export default App;
