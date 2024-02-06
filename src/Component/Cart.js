import React from 'react';
import img1 from '../images/cup (3).png'
import img27 from '../images/logo (3).png'



function Cart() {
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
      <section className='container h-25 pt-5'>
        <div className='d-lg-flex justify-content-between align-items-center'>
          <img src={img27} alt="" />
          <p className='call'>THURSDAY 2NOVEMBER 2023</p>
        </div>
        <div className='empty my-5'></div>
        <div className='d-lg-flex justify-content-between align-items-center'>
          <h2 className='opc'>CONFIRM YOUR ORDER</h2>
          <p className='call'>you have selected 1 product</p>
        </div>
      </section>  
      <section className='container pt-5'>
         <h2 className='im2'>YOUR<span className='im'>DETAILS</span> </h2>
         <form action="" className='pt-5'>
            <div className='row justify-content-center '>
              <input className='col-lg-5 p-2 m-3' type="text" placeholder='Name' />
              <input className='col-lg-5 p-2 m-3' type="tel" placeholder='Phone' />
              <input className='col-lg-5 p-2 m-3' type="email" placeholder='Email' />
              <input className='col-lg-5 p-2 m-3' type="text" placeholder='Address' />
            </div>
            <div className='d-lg-flex justify-content-center '>
            <button className=' know-more text-white px-3 py-2 text-uppercase text-center  '>Order Now</button>
            </div>
         </form>
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

export default Cart;
