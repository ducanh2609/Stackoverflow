import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import QuestionPage from "./pages/QuestionPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="stack-overflow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
