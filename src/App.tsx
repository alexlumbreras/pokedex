import React from "react";
import { Icon } from "./components/Icon/Icon";
import { Tag } from "./components/Tag";
import { Pokeball } from "./components/Icon/icons/Pokeball";
import { SearchIcon } from "./components/Icon/icons/SearchIcon";

function App() {
  return (
    <main>
      <h1>My Pokedex</h1>
      <Tag color="grass">grass</Tag>
      <Icon icon={Pokeball} />
      <Icon icon={SearchIcon} />
    </main>
  );
}

export default App;
