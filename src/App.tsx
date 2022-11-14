import React from "react";
import { Icon } from "./components/Icon/Icon";
import { Tag } from "./components/Tag";
import { Pokeball } from "./components/Icon/icons/Pokeball";

function App() {
  return (
    <div className="App">
      <h1>My Pokedex</h1>
      <Tag color="grass">grass</Tag>
      <Icon icon={Pokeball} />
    </div>
  );
}

export default App;
