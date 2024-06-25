import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='Buscar'/>
        </div>
        <div className='userChat'>
            <img src='https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-mar-hombre-caminando-costa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt=''/>
         <div className='userChatInfo'>
            <span>Jane</span>
         </div>
        </div>
    </div>
  )
}

export default Search