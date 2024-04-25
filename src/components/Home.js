import { username, city } from "../data/user";

import React from "react";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
  
export default Home