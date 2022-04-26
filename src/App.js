import "./App.css";
import Content from "./landing-page-components/Content";
import Header from "./landing-page-components/Header";
import SignIn from "./landing-page-components/SignIn";
import SignUp from "./landing-page-components/SignUp";
import CoursesPage from "./courses-page/CoursesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/vidyarthi-app"
          element={
            <div>
              <Header />
              <Content />
            </div>
          }
        />
        {/* <Route path="/" element={<Content />} /> */}
        <Route path="/courses" element={<CoursesPage />} />
        {/* <Route path="/courses" element={<CoursesPage />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
