import React from 'react';
import './App.css';
import Menu from "./MainMenu/Menu";
import Content from "./MainContent/Content";
import Footer from "./MainFooter/Footer";

type PropsType = {
    name?: string;
}
function App() {
    return (
        <div className="App">
            <Footer/>
            <Content/>
            <Menu/>
        </div>
    );
}

export default App;
