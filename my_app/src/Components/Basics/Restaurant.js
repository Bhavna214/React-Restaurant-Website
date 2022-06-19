import React, { useState } from 'react'
import "./style.css"
import Menu from "./MenuAPI"
import MenuCard from './MenuCard'

const Restaurant = () => {

    const [MenuData, setMenuData] = useState(Menu)
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(updatedList);
    }
  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item subtle' onClick={()=> filterItem("breakfast")}>Breakfast</button>
                <button className='btn-group__item subtle' onClick={()=> filterItem("lunch")}>Lunch</button>
                <button className='btn-group__item subtle' onClick={()=> filterItem("evening")}>Evening</button>
                <button className='btn-group__item subtle' onClick={()=> filterItem("dinner")}>Dinner</button>
                <button className='btn-group__item subtle' onClick={()=> setMenuData(Menu)}>All</button>
            </div>
        </nav>
        <MenuCard MenuData = {MenuData}/>
    </>
  )
}

export default Restaurant