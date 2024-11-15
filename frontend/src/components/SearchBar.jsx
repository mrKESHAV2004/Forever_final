import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
    const {search, setSearch ,showSearch, setShowSearch} = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible?(
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-600 px-5 py-5 my-5 mx-5 rounded-full w-3/4 sm:w-1/2'>
        <input className='flex-1 outline-none bg-inherit text-sm ' value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search'/>
        <img className='w-4' src={assets.search_icon}/>
      </div>
      <img className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)} src={assets.cross_icon} alt="" />
    </div>
  ):null
}

export default SearchBar
