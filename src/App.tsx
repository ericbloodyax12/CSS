import React, {useCallback, useState} from 'react';
import './App.scss';
import {MemoizedMenu} from "./mainlayout/header/Menu";
import {MemoizedContent} from "./mainlayout/main content/Content";
import Footer from "./mainlayout/MainFooter/Footer";


type PropsType = {
    name?: string;
}

function App() {

   const [count,setCount] = useState(0)
   const [randomChange,setRandomChange] = useState(false)

    let inc = (count:number) => {
      setCount(++count)
    }
    let memoizedMenuCallBack = useCallback(inc, [])


    return (
        <div className="App">
            <MemoizedMenu count={count} inc={memoizedMenuCallBack} />
            <MemoizedContent randomChange={randomChange} setRandomChange={setRandomChange}/>
            <Footer/>

        </div>
    );
}

export default App;
