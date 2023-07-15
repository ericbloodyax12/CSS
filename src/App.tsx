import React, {useCallback, useMemo, useState} from 'react';
import './App.scss';
import {MemoizedMenu} from "./mainlayout/header/Menu";
import {MemoizedContent} from "./mainlayout/main-content/Content";
import Footer from "./mainlayout/MainFooter/Footer";
import {articlesInfo} from "./data/data";
import {Users} from "./Components/users/Users";

type PropsType = {
    name?: string;
}

function getArticlesInfo () {
    let i = 0
    while (i<1000000000) {
        ++i
    }
    return articlesInfo
}

function App() {


   const [count,setCount] = useState(0)
   const [randomChange,setRandomChange] = useState(false)

    let inc = (count:number) => {
      setCount(++count)
    }
    let memoizedMenuCallBack = useCallback(inc, [])

    const articles = useMemo(()=>{
        return getArticlesInfo()
    }, [])
    return (
        <div className="App">
            <MemoizedMenu count={count} inc={memoizedMenuCallBack}/>
            <MemoizedContent randomChange={randomChange} setRandomChange={setRandomChange} articlesInfo={articles} />
            <Footer/>

        </div>
    );
}

export default App;
