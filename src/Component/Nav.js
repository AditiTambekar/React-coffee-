import React from "react";
import { Link } from "react-router-dom";
function Nav(){
  function abc(){
  let abc=  document.getElementById('nav');
  abc.classList.toggle('nav-content');  
  }

  return(
    <>
    <div className="d-flex justify-content-end "> 
        <i className="fa-solid fa-bars d-lg-none" onClick={abc}></i> 
    </div>
    <div className="nav-content " id="nav">
      <div className=" d-flex flex-column ps-3  align-items-start text-uppercase"  >
            <p className="a"  >Home</p>
            <Link to="/Menu" className="a" >Menu</Link>  
            <p className="a" >Blog</p>
            <div className="a" id="efg"  >Gallery</div>
            <p className="a" >Store</p>
            <p className="a" >Contact</p>
            <p className="a" >cart</p>
      </div>     
    </div>
    <div className="container-fluid  ">
      <div className="d-lg-flex  d-none  justify-content-end text-uppercase fw-semibold  container">
              <Link to="/" className="a px-4 text-decoration-none text-dark">Home</Link>
              <Link to="/Menu" className="a px-4 text-decoration-none text-dark" >Menu</Link>  
              <Link to="/Blog" className="a px-4 text-decoration-none text-dark " >Blog</Link>  
              <p to="/Gallery" className="a px-4   k text-decoration-none " >Gallery
              <div className="droup-menu ">
                  <ul className="list-unstyled ">
                    <li className="q4 l1 fs-6 text-white">Fluid 
                      <div className="droup-menu1">
                        <ul className="list-unstyled">
                          <Link to="/Fluid1" className="l1 fs-6 q4 text-white px-4 text-decoration-none ">MASONARY</Link>
                          <Link to="/Fluid2" className="l1 d-block px-4 list-unstyled fs-6 q4 text-white text-decoration-none ">ISOTOPE</Link>                  
                        </ul>
                      </div>
                    </li>
                    <li className="q4 l1 fs-6 text-white">Static
                    <div className="droup-menu1">
                        <ul className="list-unstyled">
                        <Link to="/Static1" className="l1 fs-6 q4 text-white text-decoration-none px-4 "> gallary page</Link>
                          {/* <li className="l1 fs-6 q4 text-white"></li> */}
                          {/* <li className="l1 fs-6 q4 text-white">single page gallary</li> */}
                        <Link to="/Static2" className="l1 fs-6 q4 text-white text-decoration-none px-4 ">single gallery</Link>

                        </ul>
                      </div>
                    </li>
                  </ul>
                </div></p>   
              <Link to="/Store" className="a px-4 text-decoration-none text-dark" >Store</Link>  
              <Link to="/Contact" className="a px-4 text-decoration-none text-dark " >Contact</Link>  
              <Link to="/Cart" className="a px-4 text-decoration-none text-dark d-flex" >Cart
                <div >
                <i class="fa-solid fa-cart-shopping heart "></i>
                <sup>{'3'}</sup>
                </div>
              </Link>  
      </div>
    </div>


      
    </>
  )
}
export default Nav;