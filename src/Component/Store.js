import React ,{useState} from 'react';
import ApiMenu from './ApiMenu';
import Menuapi from './Menuapi';

import img1 from '../images/cup (3).png'
import img27 from '../images/logo (3).png'

function Store() {
  const [menuData,setMenuData]=useState(ApiMenu)
  // console.log(menuData);
  const filterItems=(category)=>{
    const updateList=ApiMenu.filter((curEle)=>{
      return curEle.category===category;
    })
    setMenuData(updateList);
  }

  return (
    <>
      <section className='mhead'>
          
          <div className="container h-100">
            <div className="d-flex justify-content-around h-100 align-items-center ">
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <p className='fs-3 reserv text-end'>Our special & exclusive</p>
                <h1 className='cof head-menu'>Product</h1>
              </div>
            </div>
          </div>

      </section>  
      <section className='pb-5'>
        <div>
        <h1 className='d-none t d-lg-block text-capitalize text-center  our'>------------------------Our Online------------------------</h1>
        <h1 className='text-capitalize text-center fw-semibold t  our d-lg-none'>Our Online</h1>
        <span className='menu d-flex justify-content-center '>Store</span>

        </div>
        <div className='container'>
          <div className=' row '>
          <nav className='navbar  d-lg-flex justify-content-center align-items-center  '>
          <div className=' p-5 '>
            <button className='  px-5 py-2 mx-3 j my-2 my-lg-0 ' onClick={()=>setMenuData(ApiMenu)}>All</button>
            <button className='  j px-5 py-2 mx-3 my-2 my-lg-0  rounded-0' onClick={()=>filterItems('Coffee')}>Coffee</button>
            <button className='  j px-5 py-2 mx-3 my-2 my-lg-0  rounded-0' onClick={()=>filterItems('Beans')}>Beans</button>
            <button className='  j px-5 py-2 mx-3 my-2 my-lg-0  rounded-0' onClick={()=>filterItems('Organic')}>Organic</button>
            
          </div>
        </nav>
            <Menuapi menuData={menuData}/> 
            {/* </div> */}
          </div>
        </div>
       
      </section> 
      <section className='container-fluid foot'>
        <h1 className='d-none t d-lg-block text-uppercase text-center cyp'>Let's Visit Our</h1>
        <h1 className='text-capitalize text-center fw-semibold t text-dark  our d-lg-none'>Shop Today</h1>
        <span className='menu d-flex justify-content-center text-dark '>Shop Today</span>
        <div className='d-flex flex-column pt-5 justify-content-center  align-items-center'>
          <img className='pb-5' src={img27} alt="" />
          <button className='x px-5 py-3 text-uppercase fs-4'>order your coffee now</button>
        </div>
      </section>
      <div className=' container-fluid foot-p'>
          <div className='p-5 d-flex justify-content-center align-items-center l fs-6'>
            <p className=''>© 2016 0efforttheme. Trademarks and brands are the property of their respective owners.</p>
          </div>
        </div>
    </>
  );
}

export default Store;
