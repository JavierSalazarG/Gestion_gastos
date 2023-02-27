import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);

  return (
    <React.Fragment>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
    </React.Fragment>
  );
}

export default App;
