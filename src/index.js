import React from "react";
import ReactDOM from 'react-dom/client'
import "./styles/main.scss"
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";


function App() {

    return (
        <>
            <Header/>  
            <HeroSection/>
            <ImageSlider/>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)




if (module.hot) {
    module.hot.accept();
}