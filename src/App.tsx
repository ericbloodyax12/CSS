import React from 'react';
import './App.css';
import Menu from "./MainMenu/Menu";

type PropsType = {
    name?: string;
}
function App() {
    return (
        <div className="App">
            <Menu/>
        </div>
    );
}

export default App;
