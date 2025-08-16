import React, { useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Start from "./components/Start";
import Programs from "./components/Programs";
import Video from "./components/Video";
import Price from "./components/Price";
import Trainer from "./components/Trainer";
import Testimonials from "./components/Testimonials";
import Personalized from "./components/Personalized";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const programsRef = useRef(null);
    const pricingRef = useRef(null);
    const blogsRef = useRef(null);
    const contactRef = useRef(null);
    const getInTouch = useRef(null);

    return (
        <>
            <Home 
                homeRef={homeRef}
                aboutRef={aboutRef}
                programsRef={programsRef}
                pricingRef={pricingRef}
                blogsRef={blogsRef}
                contactRef={contactRef}
                getInTouch={getInTouch}
            />
            <About aboutRef={aboutRef} />
            <Start />
            <Programs programsRef={programsRef} />
            <Video />
            <Price pricingRef={pricingRef} />
            <Trainer />
            <Testimonials blogsRef={blogsRef} />
            <Personalized />
            <Contact contactRef={contactRef} />
            <Footer getInTouch={getInTouch}/>
        </>
    )
}

export default App;