import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
user.name = "AbdulRazaq";
user.city = "London";

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Abdul" city="NBO" color="firebrick"/>
      <About bio="I am learning React"/>
    </div>
  );
}

export default App;
