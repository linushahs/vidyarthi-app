import "./App.css";
import Content from "./landing-page-components/Content";
import Header from "./landing-page-components/Header";
import SignIn from "./landing-page-components/SignIn";
import SignUp from "./landing-page-components/SignUp";
import CoursesPage from "./courses-page/CoursesPage";
import StudentDashboard from "./dashboard/StudentDashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Content />
            </div>
          }
        />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
