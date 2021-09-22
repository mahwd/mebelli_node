import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import {Category} from "./models/models";
import './assets/main.scss'
import Dashboard from "./components/Dashboard";

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
        <div className="App">
            <Header categories={categories} />
            <Dashboard/>
        </div>
    );
}

export default App;
