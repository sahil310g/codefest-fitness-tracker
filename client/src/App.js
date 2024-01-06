import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
// import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseDescription from "./pages/ExerciseDescription";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/exercise-description"
            element={<ExerciseDescription />}
          />

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
