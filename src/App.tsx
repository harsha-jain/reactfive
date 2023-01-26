import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Addparams from "./Addparams";
import Carousel from "./carousel";
import Donald from "./Donald";
import Form from "./Form";
import Home from "./Home";
import Notetaking from "./Notetaking";
import Obama from "./Obama";
import Sachin from "./Sachin";
import UserParams from "./UserParams";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sachin" element={<Sachin />}></Route>
        <Route path="/obama" element={<Obama/>}></Route>
        <Route path="/donald" element={<Donald />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/user/:userId" element={<UserParams />}></Route>
        <Route path="/:x/:operator/:y" element={<Addparams />}></Route>
        <Route path="/:x///:y" element={<Addparams />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
        <Route path="/notetaking" element={<Notetaking />}></Route>
        <Route path="/carousel" element={<Carousel/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


