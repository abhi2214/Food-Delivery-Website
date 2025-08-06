import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
const Home = () => {

   const [category, setCategory] = useState('All');
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay categary={category}/>

    </div>
  )
}

export default Home
