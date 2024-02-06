// import { filter } from 'fontawesome';
import React from 'react';

function Menuapi({menuData}) {
  // console.log(menuData);

  return (
    <>
    {menuData.map((curEle)=>{
    
      return(
        <>

        
        <div className='container col-lg-3 px-3'>

        <div className=''>
          <figure className='w-100 '>
            <img className='img-fluid w-100' src={curEle.image} alt="" />
          <figcaption className='w-100'>
            <div className='q  text-white'>
              <span className='u ms-3 mb-3 p-3 fs-5 rounded-circle'>{curEle.price}</span>
            <h4 className='ps-3 mt-3' >{curEle.name}</h4>
            <p className='ps-3 r'>{curEle.para}</p>
            <div className=''>
            <button className=' col-6 y fw-semibold py-2' >{curEle.btn1}</button>
              <button className=' col-6 x fw-semibold py-2'>{curEle.btn2}</button>
            </div>
            </div>
          </figcaption>
          </figure>

        </div>
      </div>
        </>
      )
    })}

    </>
  );
}

export default Menuapi;

