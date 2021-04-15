import React, { useEffect, useState } from "react";

import Autocomplete from "./Autocomplete";

import './App.css'

function App() {
  const [data, setData] = useState("");

  useEffect(async () => {
    const resp = await fetch('https://rickandmortyapi.com/api/character/?name=rick')
    const d = await resp.json()
    const results = d.results.map(r => r.name)
    setData(results)
  }, [])
  
  return (
    <div>
      <h1>My own React Autocomplete</h1>
      <Autocomplete
        suggestions={data}
      />
    </div>
  );
}

export default App;
