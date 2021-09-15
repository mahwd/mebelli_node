import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header';



function App() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('/api/categories').then(res => res.json()).then(categories => {
      if(categories) {
        setCategories(categories)
      }
    })
  }, [])

  return (
    <div className="App">
      <header title="Header" >
        <ul>
          {
          categories && categories.map(category => {
            return (
              <li>{category.title}</li>
            )
            })
        }
        </ul>
      </header>
    </div>
  );
}

export default App;
