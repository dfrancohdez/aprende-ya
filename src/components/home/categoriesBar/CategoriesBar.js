import React, { useState } from "react";
import "./_categoriesBar.scss"
const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

const CategoriesBar=()=> {
  const [activeElemet,setActiveElement] =useState('All')
  const handleClick=(value)=>{
    setActiveElement(value)
  }
  return (
    <div className="home__categoriesBar">
        {
          keywords.map((value,index)=>(
          <span 
          onClick={()=>handleClick(value)}
          className={activeElemet===value?"active":""}
          key={index}>
            {value}
          </span>))
        }
    </div>
  );
}

export default CategoriesBar