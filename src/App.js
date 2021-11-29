import { BrowserRouter, Route,Routes} from "react-router-dom";
import Dashboard from "./components/dashboard";

//import { Component } from 'react';
// import OpcionesMenu from "./pages/opcionesMenu";
 import Cocina from "./pages/cocina";
// import PrincipalDesayuno from "./pages/principalDesayunos";
// import PrincipalMesero from "./pages/principalMesero";
//import NotFound from "./pages/notFound";
import Home from "./pages/home";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cocina" element={<Cocina />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

