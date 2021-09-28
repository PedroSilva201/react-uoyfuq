import React from "react";
import "./style.css";

import A from "./A";
import B from "./B";

export default function App() {
  const [origem, setOrigem] =useState("")

  return (
    <div>
      <p>Origem: (origem) </p>
      <div className="linha">
        <A set={setOrigem}/>
        <B set={setOrigem}/>
      </div>
    </div>
  );
}
