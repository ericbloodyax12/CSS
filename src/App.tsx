import React from 'react';
import './App.scss';
import Menu from "./mainlayout/header/Menu";
import Content from "./mainlayout/main content/Content";
import Footer from "./mainlayout/MainFooter/Footer";


type PropsType = {
    name?: string;
}
function App() {
    return (
        <div className="App">
            <Menu/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
