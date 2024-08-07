import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./header/Header.jsx";
import Banner from "./banner/Banner.jsx";
import Cards from "./cards/Cards.jsx";
import Info from "./info/Info.jsx";
import About from "./about/About.jsx";
import Comments from "./comments/Comments.jsx";
import Modal from "./modal/modal.jsx";

function Index() {

    return (
        <div>
            <Header />
            <Banner />
            <Cards />
            <Info />
            <About />
            <Comments />
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    const Root = ReactDOM.createRoot(document.getElementById("index"));

    Root.render(
        <React.StrictMode>
            <Index/>
        </React.StrictMode>
    )
}
