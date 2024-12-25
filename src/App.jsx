import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Layout from "./components/layout/index";
import NotFound from "./pages/NotFound";
import ModalProvider from 'Store/modalProvider';
import ComingSoon from "./pages/ComingSoon";
import Project from "./pages/project";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="coming-soon" element={<ComingSoon />} />
            <Route path="project/:id" element={<Project isIndependent={true}/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ModalProvider>
  );
}

export default App;