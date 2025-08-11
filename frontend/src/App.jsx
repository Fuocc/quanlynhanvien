import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import IMonitorSoftPage from "./pages/IMonitorSoftPage";
import MonitorPage from "./pages/MonitorPage";
import StaffCopPage from "./pages/StaffCopPage";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lien-he" element={<Contact />} />
                <Route
                    path="/giai-phap-giam-sat-trung-quoc"
                    element={<MonitorPage />}
                />
                <Route
                    path="/giai-phap-giam-sat-my"
                    element={<IMonitorSoftPage />}
                />
                <Route
                    path="/giai-phap-giam-sat-nga"
                    element={<StaffCopPage />}
                />
                <Route path="/tin-tuc" element={<Blog />} />
                <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
            {/* Footer */}
            <Footer />
        </>
    );
}

export default App;
