import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Start from "./components/Start";
import Programs from "./components/Programs";
import Video from "./components/Video";
import Price from "./components/Price";
import Trainer from "./components/Trainer";
import Testimonials from "./components/Testimonials";

const App = () => {
    return (
        <>
            <Home />
            <About />
            <Start />
            <Programs />
            <Video />
            <Price />
            <Trainer />
            <Testimonials />
        </>
    )
}

export default App;