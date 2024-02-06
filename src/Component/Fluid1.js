import React from 'react';
import img1 from '../images/cup (3).png'
import img2 from '../images/small01.jpg';
import img3 from '../images/small-03.jpg';
import img4 from '../images/big-02.jpg';
import img5 from '../images/small-04.jpg';
import img6 from '../images/small-02.jpg';
import img26 from '../images/contact-img.png'
import img27 from '../images/logo (3).png'





function Fluid1() {
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
      <section className='container text-start ps-5'>
      <h2 class="reserv choose pt-5 gh">Gallery / Masonry Layout</h2>
      <p className='cyp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </section>
      <section className=''>
          <div className='d-flex justify-content-center pt-5'>
            <div>
              <div>
                <img src={img2} alt="" />
              </div>
              <div className='pt-4'>
                <img src={img3} alt="" />
              </div>
            </div>
            <div className='ps-4'>
              <img src={img4} alt="" />
            </div>
            <div className='ps-4'>
              <div className=''>
                <img src={img5} alt="" />
              </div>
              <div className='pt-4'>
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
      </section>
      <section>
        <h1 className='d-none t d-lg-block text-capitalize text-center  our'>------------------------Contact------------------------</h1>
        <h1 className=' text-center fw-semibold t  our d-lg-none'>Contact</h1>
        <span className='menu d-flex justify-content-center '>With us</span>
        <div className='row '>
           <div className='col-lg-6 i   '>
            <div className='  container w-100 h-100'>
              <div className='d-flex justify-content-center align-items-center cont'>
                <div>
                  <img src={img26} alt="" />
                </div>
                <div className=''>
                  <h2 className='c w-25'>COFFEE AND YOU</h2>
                </div>
              </div>
              <div className='cont pt-0 '>
                <span className='fs-1 fw-bold'>44</span>
                <span className='fs-1 park'>PARK STREET</span>
                <p className='lp w-50'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.</p>

              </div>
            </div>
            

          </div> 
          <div className='col-lg-6 px-0'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510491.47714201!2d148.85933182325263!3d-35.761598139155765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1319a51f0b567b%3A0x5017d681632e720!2sWollongong%20NSW%202500%2C%20Australia!5e0!3m2!1sen!2sin!4v1698471150949!5m2!1sen!2sin" className='h-100 w-100'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Fluid1;
