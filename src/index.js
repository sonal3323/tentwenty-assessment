import React from "react";
import ReactDOM from 'react-dom/client'
import "./styles/main.scss"
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ImageSlider from "./components/ImageSliderSection/ImageSlider";

function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <ImageSlider />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

if (module.hot) {
    module.hot.accept();
}