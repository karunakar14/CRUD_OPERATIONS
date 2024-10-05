import Fetched from "./components/Read";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddStudent from "./components/create(post)";
import EditStudent from "./components/update";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Fetched />} />
    <Route path="/add" element={<AddStudent/>}/>
    <Route path="/edit/id" element={<EditStudent />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
