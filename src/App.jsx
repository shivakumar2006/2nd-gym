import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Start from "./components/Start";
import Programs from "./components/Programs";
import Video from "./components/Video";

const App = () => {
    return (
        <>
            <Home />
            <About />
            <Start />
            <Programs />
            <Video />
        </>
    )
}

export default App;