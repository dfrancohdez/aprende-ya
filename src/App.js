
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css';
import "react-toastify/dist/ReactToastify.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";
import GetStart from "./Start";
import Profile from "./components/auth/profile";
import { ToastContainer } from "react-toastify";
import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "./components/auth/firebase";


function App() {
    const [user, setUser] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    });
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={user ? <Navigate to="/profile" /> : <GetStart />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;