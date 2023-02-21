import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import QuestionPage from "./pages/QuestionPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from './pages/AboutPage'
import AskPage from "./pages/AskPage";

function App() {
  return (
    <div className="stack-overflow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/questions/">
          <Route path=":element" element={<QuestionPage />}>
            <Route path=":title" element={<QuestionPage />} />
          </Route>
          <Route path="ask" element={<AskPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
