
import Nav from './components/Nav';
import './App.css';
import FormMembre from './components/FormMembre';
import FormBook from './components/FormBook';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<FormMembre />} />
          <Route path="ForMembre" element={<FormMembre />} />
          <Route path="FormBook" element={<FormBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
