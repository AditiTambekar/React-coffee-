import React from 'react';
import img1 from '../images/cup (3).png'
import img2 from '../images/coffee-cup2.jpg'



function Static2() {
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
              <h1 className='cof head-menu'>Gallery</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='container'>
        <h2 class="reserv choose pt-5 gh">Gallery / Row Style</h2>
        <p className='cyp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className=' d-flex flex-column align-items-center justify-content-center'>
          <div className=' col-11'>
            <img className='' src={img2} alt="" />
          </div>
          <div className='foot-p static2-bg px-5'>
            <p className='im' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur rem ea quisquam, porro reprehenderit ipsum repudiandae excepturi voluptate unde reiciendis, cum veritatis odit optio sequi ad fugiat saepe eius sed.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur rem ea quisquam, porro reprehenderit ipsum repudiandae excepturi voluptate unde reiciendis, cum veritatis odit optio sequi ad fugiat saepe eius sed.</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex pb-4'>
                <div ><i class=" static2-social p-3 fa-brands fa-facebook-f"></i></div>
                <div><i class=" static2-social p-3 mx-3 fa-brands fa-twitter"></i></div>
                <div><i class=" static2-social p-3 fa-brands fa-behance"></i></div>
              </div>
              <div>
                <span className='im' >28 DECEMBER 2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Static2;
