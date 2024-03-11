import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import StudentRoute from "./routes/StudentRoute";
import AdminRoute from "./routes/AdminRoute";
import InstructorRoute from "./routes/InstructorRoute";
import { VideoProvider } from "./components/StudentComponent/learning page/VideoContext";

function App() {
  return (
    <Router>
      <VideoProvider>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<StudentRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="/instructor/*" element={<InstructorRoute />} />
        </Routes>
      </VideoProvider>
    </Router>
  );
}

export default App;
