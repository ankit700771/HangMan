import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartGame from "./pages/startGame";
import PlayGame from "./pages/PlayGame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
      </Routes>
    </>
  );
}

export default App;
