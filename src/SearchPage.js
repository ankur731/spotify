import React from 'react'
import Sidebar from './Sidebar';
import "./Sidebar.css";
import Body from './Body';
import Footer from './Footer';
import SearchPageBody from './SearchPageBody';
import Header from './Header';
import "./Body.css";

function SearchPage({spotify}) {
    return (
      <div className='player '>
       <div className='player_body '>
       <Sidebar />
       <div className='body'>
       <Header spotify={spotify} />
       <SearchPageBody />
       </div>
       </div>
       <Footer />
      
      </div>
    )
  }
  

export default SearchPage
