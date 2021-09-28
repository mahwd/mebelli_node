import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import {Category} from "./models/models";
import './assets/main.scss'
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
    const [categories, setCategories] = useState<Category[]>([])
    useEffect(() => {
        fetch('/api/categories').then(res => res.json()).then(response => {
            console.log("categories -> ", response)
            if (response && response.count) {
                setCategories(response.categories)
            }
        })
    }, [])

    return (
        <div className="App bp3-dark">
            <Header categories={categories}/>
            <Landing/>
            <Footer />
        </div>
    );
}

export default App;
