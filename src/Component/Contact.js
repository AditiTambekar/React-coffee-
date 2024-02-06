import React from 'react';
import img1 from '../images/cup (3).png'
import img27 from '../images/logo (3).png'

function Contact() {
  return (
    <>
      <section className='mhead'>       
                <div className="container h-100">
                  <div className="d-lg-flex justify-content-lg-around h-100 align-items-lg-center ">
                    <div>
                      <img src={img1} alt="" />
                    </div>
                    <div>
                      <p className='fs-3 reserv text-end'>Our special & exclusive</p>
                      <h1 className='cof head-menu text-end'>Contact Us</h1>
                    </div>
                  </div>
                </div>
      </section>
      <section className='container contact-map'>
        <h2 class="reserv choose pt-5 gh">contact page headng here</h2>
        <p className='cyp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className='d-lg-flex h-75 pt-5'>
          <div className='col-lg-6'>
              <div className='d-lg-flex justify-content-lg-center '>
                <i class="fa-solid fa-location-dot fs-1 pe-4 heart  "></i>
                <div>
                  <h3 className=''>102 / Cappuccino city</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className='d-lg-flex justify-content-lg-center pt-4'>
                  <i class="fa-solid fa-envelope fs-1 pe-4  heart"></i>
                  <div>
                  <h3 className=''>support@cofeeshop.com</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
          </div>
          <div className='col-lg-6 '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510491.47714201!2d148.85933182325263!3d-35.761598139155765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1319a51f0b567b%3A0x5017d681632e720!2sWollongong%20NSW%202500%2C%20Australia!5e0!3m2!1sen!2sin!4v1698471150949!5m2!1sen!2sin" className='h-100 w-100'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>  
      <section className='container pt-5'>
        <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <h2 class="reserv choose pt-5 gh">Contact Us</h2>
        <form action="" className='pt-5'>
          <div className='d-lg-flex  justify-content-around align-items-center pb-5'>
            <input type="text" placeholder='Name' className='w-25 p-2 '  />
            <input type="email" placeholder='Email Id' className='w-25 p-2' />
            <input type="text" placeholder='Subject' className='w-25 p-2' />
          </div>
          <div className='d-lg-flex justify-content-lg-center'>
            <textarea name="text Message" placeholder='Message' id="" cols="135" rows="5"></textarea>
          </div>
          <div className='d-flex justify-content-end pt-5 pe-lg-5'>
          <button className=' know-more text-white px-4 py-2 text-uppercase text-center  '>POST COMMENT</button>
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

export default Contact;
