import React from "react";
import Header from "../header";
import GeneratorBox from "../generatorBox";

function Layout() {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <Header />
      <GeneratorBox />
    </div>
  );
}

export default Layout;
