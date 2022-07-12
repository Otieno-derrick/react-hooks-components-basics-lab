import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <>
    <div id="home">
      <h1>Home</h1>
    </div>
    <div id="about">
      {<h1 >about</h1>}
    </div>
    </>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      {<Home />}
      {<about />}
    </div>
  );
}

export default App;
