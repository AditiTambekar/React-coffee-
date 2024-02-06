import React, {useState} from 'react';
import img1 from '../images/small-logo.png';
import img2 from '../images/coffee-drop3.png';
import img3 from'../images/cup.png';
import img4 from'../images/txt2.png';
import img5 from '../images/txt1.png';
import img6 from '../images/coffee-cup.png';
import img7 from'../images/order-type1.png';
import img8 from '../images/order-type2.png'
import img9 from '../images/order-type3.png'
import img10 from'../images/milk-pour-cup.png'
import img11 from '../images/service-img.jpg'
import img12 from '../images/book-table-img.jpg'
import img13 from '../images/percent-off.png'
import img14 from '../images/qr-code.jpg';
import Menuapi from './Menuapi';
import ApiMenu from './ApiMenu';
import img16 from'../images/member1.jpg'
import img17 from '../images/member02.jpg';
import img18 from '../images/memeber03.jpg'
import img19 from '../images/member04.jpg'
import img20 from '../images/member05.jpg'
import img21 from '../images/member06.jpg'
import img22 from '../images/testi-img.png'
import img23 from '../images/event-img.jpg'
import img24 from '../images/ipad.png'
import img25 from '../images/cap.png'
import img26 from '../images/contact-img.png'
import img27 from '../images/logo (3).png'


import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import OwlCarousel from 'react-owl-carousel';




function Hero() {
  const [menuData,setMenuData]=useState(ApiMenu)
  // console.log(menuData);
  const filterItems=(category)=>{
    const updateList=ApiMenu.filter((curEle)=>{
      return curEle.category===category;
    })
    setMenuData(updateList);
  }
  const [user, setUser]=useState({
    selectTable:"",
    slectOccassion:"",
    name :"",
    email:"" ,
    message:""
  })

  let name,value;
  const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value; 

    setUser({...user,[name]:value})
}
const postData=async(e)=>{
  e.preventDefault();

  const{selectTable,slectOccassion,name , email, message }=user;
  if(selectTable && slectOccassion && name && email && message){
    const res = await fetch('https://foodreactwedsite-default-rtdb.firebaseio.com/FoodReactWebsite.json',{
    method:'POST',
    header:{
     " Content-Type":"application/json"
    },
    body:JSON.stringify({
    selectTable,
    slectOccassion,  
    name ,
    email,
    message
    }),
  },
  )
  if(res){
    setUser({
    selectTable:"",
    slectOccassion:"",
    name :"",
    email:"" ,
    message:""
    })
    alert("Data Stored Successfully")
  }
  }else{
    alert('please fill all the data!!');  
  }

  
};
  
  
       
    
  

  return (
    <>
    
      <section className=' ab container d-flex justify-content-center align-items-center mb-5 '>
          <div className='  d-flex flex-column  align-items-center'>
            <img className='img-fluid img1'  src={img1} alt="" />
            <img className='img-fluid img2 ' src={img2} alt="" />
            <img className='img-fluid img3 ' src={img3} alt="" />
            <img className='img-fluid img4  ' src={img4} alt="" />
            <img className='img-fluid  img5 ' src={img5} alt="" />          
          </div>
      </section>
      <section className='container-fluid  mt-5'>
        <div className='container '>
            <h1 className='d-none d-lg-block text-capitalize text-center  our'>------------------------our special------------------------</h1>
            <h1 className='text-capitalize text-center fw-semibold  our d-lg-none'>our special</h1>
            <span className='menu d-flex justify-content-center '>menu</span>
            <div className='row container   '>
                <div className='img6  col-lg-4 d-flex flex-column justify-content-center align-items-center pt-3'>
                  <img src={img6} alt="" />
                  <h2 className='text-capitalize morning  '>good morning</h2>
                  <p className='morning-p'>Lorem ipsum Qui mollit sit elit Ut.</p>
                </div>
                <div className='coffee-content col-lg-8' id='wxy' >
                  <div className='d-lg-flex container justify-content-between'>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish '>01/Cappucino</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center  p-3'>
                      <span className=''>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish'>01/Irish Coffee</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center p-3'>
                      <span>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                  </div>

                  <div className='d-lg-flex container justify-content-between'>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish '>01/Cappucino</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center  p-3'>
                      <span className=''>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish'>01/Irish Coffee</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center p-3'>
                      <span>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                  </div>

                  <div className='d-lg-flex container justify-content-between'>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish '>01/Cappucino</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center  p-3'>
                      <span className=''>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish'>01/Irish Coffee</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center p-3'>
                      <span>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                  </div>

                  <div className='d-lg-flex container justify-content-between'>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish '>01/Cappucino</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center  p-3'>
                      <span className=''>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish'>01/Irish Coffee</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center p-3'>
                      <span>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                  </div>

                  <div className='d-lg-flex container justify-content-between'>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish '>01/Cappucino</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center  p-3'>
                      <span className=''>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish'>01/Irish Coffee</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center p-3'>
                      <span>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                  </div>

                  <div className='d-lg-flex container justify-content-between'>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish '>01/Cappucino</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center  p-3'>
                      <span className=''>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center b justify-content-start p-3'>
                      <h2 className='irish'>01/Irish Coffee</h2>
                      <p className='p'>Lorem ipsum Culpa in ut aute dolor minim irure elit pariatur mollit dolor  </p>  
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center b justify-content-center p-3'>
                      <span>$12.99</span>
                      <p className='heart'><i class="fa-solid fa-heart"></i>10</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
      <section className='container-fluid '>
          <div className='container '>
            <div className=' mt-5 d-lg-flex justify-content-center'>
              <div className='col-lg-4 py-5   strong d-flex flex-column align-items-center justify-content-center'>
                <img src={img7} alt="" />
                <h2 className='pt-4'>Strong</h2>
                <span>afternoon</span>
                <button className=' btn btn-outline-dark rounded-0'>order now</button>
              </div>

              <div className='col-lg-4 py-5 mx-lg-2 strong1 d-flex flex-column align-items-center justify-content-center'>
                <img src={img8} alt="" />
                <h2 className=''>Cookies</h2>
                <span>& more</span>
                <button className='btn btn-outline-dark rounded-0'>order now</button>
              </div>

              <div className='col-lg-4 py-5  strong2 d-flex flex-column align-items-center justify-content-center'>
                <img src={img9} alt="" />
                <h2 className=''>Special</h2>
                <span>afternoon</span>
                <button className='btn btn-outline-dark rounded-0'>order now</button>
              </div>            

            </div>
          </div>
          <div className='border1 mt-5 p-3 container d-lg-flex justify-content-around align-items-center '>
            <div className=''>
              <h2 className='book-coffee text-center'>Book your coffee now</h2>  
              <p className='call text-center'>Call NOW @ our toll free number</p>            
            </div>
            {/* <span className='d-none d-lg-block slash'>/</span> */}
            <div className=''>
              <p className='text-center number'>+0987654321</p>
            </div>
          </div>
      </section>
      <section className='container-fluid milk-bg ' >
        <div className=' d-lg-flex justify-conten-end align-items-center container'>
          <div className='col-lg-6   text-center d-flex justify-content-center '>
            <img className='img-fluid img-10 w-50' src={img10} alt="" />
          </div>
          <div className='col-lg-5 d-flex flex-column align-items-lg-end'>
            <h2 className='text-white text-center text-lg-end w-100 fs-1'>WE ARE "COFFEE AND YOU" A PREMIUM COFFEE SHOP </h2>
            <p className='shop-p text-center text-lg-end '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aliquid aliquam asperiores, saepe alias dignissimos consectetur ea cum sint tenetur magnam. Illo quasi neque cupiditate beatae optio eos iusto, architecto!</p>
            <button className=' know-more text-white px-4 py-2 text-uppercase text-center  '>know more</button>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className=''>
        <h1 className='d-none t d-lg-block text-capitalize text-center  our'>------------------------our special------------------------</h1>
            <h1 className='text-capitalize text-center fw-semibold t  our d-lg-none'>our special</h1>
            <span className='menu d-flex justify-content-center '>Services</span>
        </div>
        <div className='row'>
          <div className='d-none d-lg-block col-lg-5'>
            <img src={img11} alt="" />
          </div>
          <div className='col-lg-6'>
            <h2 className='cy text-center '>Coffee and You</h2>
            <p className='cyp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatum iusto aspernatur. Odio dignissimos facere ducimus id quo amet similique suscipit, asperiores eveniet quis vero beatae nobis veritatis ab ipsum!</p>
            <div className='row ps-3 '>
              <div className=' col-5 col-lg-4 p-lg-0 m-lg-0 m-2 serv-bg d-flex align-items-center  '>
                <p className='text-white text-center s' >Service 01</p>
              </div>
              <div className=' col-5 col-lg-4 p-lg-0 m-lg-0 m-2 serv-bg d-flex align-items-center '>
                <p className='text-white text-center s' >Service 02</p>
              </div>
              <div className=' col-5 col-lg-4 p-lg-0 m-lg-0 m-2 serv-bg d-flex align-items-center '>
                <p className='text-white text-center s' >Service 03</p>
              </div>
              <div className=' col-5 col-lg-4 p-lg-0 m-lg-0 m-2  mt-lg-3 serv-bg d-flex align-items-center '>
                <p className='text-white text-center s' >Service 04</p>
              </div>
              <div className=' col-5 col-lg-4 p-lg-0 m-lg-0 m-2  mt-lg-3 serv-bg d-flex align-items-center '>
                <p className='text-white text-center s ' >Service 05</p>
              </div>
              <div className=' col-5 col-lg-4 p-lg-0 m-lg-0 m-2 mt-lg-3 serv-bg d-flex align-items-center '>
                <p className='text-white text-center s' >Service 06</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid morn'>
        <div className='container  '>
           <div className='d-flex flex-column align-items-center justify-content-center pt-5 '>
           <h2 className='text-white  mor   pt-5 text-center '>A MORNING WITHOUT <span className='cof'>Coffee </span> IS LIKE SLEEP</h2>
           <p className='cofp  text-center fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam, voluptatibus amet eius. Aperiam voluptate hic fugiat repudiandae, aliquid culpa error doloribus necessitatibus quod, iste quas est sint corporis ipsa!</p>
          <div className='text-center pt-4'>
           <button className=' know-more text-white px-4 px-lg-3 py-2 text-uppercase   fs-6  '>know more</button>
          </div>
           </div>
        </div>
      </section>
      <section>
        <div className='container'>
        <h1 className='d-none t d-lg-block text-capitalize text-center  our'>------------------------Book your------------------------</h1>
            <h1 className='text-capitalize text-center fw-semibold t  our d-lg-none'>Book your</h1>
            <span className='menu d-flex justify-content-center '>Table</span>
            <div className='row d-lg-flex justify-content-center' >
              <div className='col-lg-5'>
                <img className='img-fluid' src={img12} alt="" />
              </div>
              <div className='col-lg-5 k px-5   '>
                <form action="" className='container p-3' method='POST'>
                  <h2  className='text-capitalize  p-lg-4 reserv'>online<br/> reservation form</h2>
                  <label htmlFor="" className='pb-3 fw-semibold '>Table for</label>
                  <select className="form-select border-outline-none rounded-0"
                   placeholder='select table' 
                   name='selectTable'
                   value={user.select}
                   onChange={getUserData} 
                    autoComplete='off'
                     required >
                    <option selected>select menu</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Person</option>
                    <option value="3">3 Person</option>
                  </select>

                  <label htmlFor="" className='pb-lg-3 pt-3 fw-semibold'>Occassion</label>
                  <select className="form-select border-outline-none rounded-0"
                   placeholder='select occassion'
                   name='slectOccassion'
                   value={user.select}
                   onChange={getUserData}
                    autoComplete='off'
                     required  >
                    <option selected>select Occassion</option>
                    <option >Birthday</option>
                    <option value="2">Anniversary</option>
                    <option value="3">Holiday</option>
                    <option value="4">Date</option>`  `
                  </select>

                  <div className='d-lg-flex justify-content-around'>
                    <div>
                      <label htmlFor="" className='pb-lg-3 pt-3 fw-semibold '>Your Name </label>
                      <input type="text"
                       placeholder='Name'
                       name='name'
                       value={user.name}
                       onChange={getUserData}
                        className='form-control rounded-0'
                         autoComplete='off'
                          required   />
                    </div>
                    <div>
                      <label htmlFor="" className='pb-lg-3 pt-3 fw-semibold '>Your Email </label>
                      <input type="email"
                      name='email'
                       placeholder='Email'
                       value={user.email}
                       onChange={getUserData}
                        className='form-control rounded-0 mx-1'
                         autoComplete='off'
                          required   />
                    </div>
                  </div>

                  <label htmlFor="" className='pb-lg-3 pt-3 fw-semibold'>Leave a Message </label><br/>
                  <textarea name="" id="" cols="22  " rows="4"
                    className='from-control d-lg-none'
                   placeholder='Writer a text'
                   type="text"
                   value={user.message}
                   onChange={getUserData}
                    autoComplete='off'
                     required  />
                  <textarea name="message" id="" cols="47" rows="4"
                  type="text"
                   placeholder='Writer a text '
                   value={user.message}
                   onChange={getUserData}
                    className='from-control d-none d-lg-block '
                    autoComplete='off'
                     required  />
                  <div className='d-flex justify-content-end pt-4'>
                     <button className=' text-white text-uppercase fw-semibold order px-4 py-2' onClick={postData}>order now</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        <div className='container-fluid  x mt-5'>
          <div className='container d-flex justify-content-center align-items-center'>
            <div className='d-flex py-5    '>
              <div >
                <img src={img13}alt="" />
              </div>
              <div className='px-lg-5 d-flex flex-column justify-content-center'>
                <span className='flav text-capitalize'>on all flavors</span>
                <h2 className='text-white fw-semibold'>FRIDAY SPECIAL</h2>
                <p className='flav text-capitalize'>Offer valid only on Fridays from 1st July to 30th August 2015</p>
              </div>
            </div>
            <div className='d-none d-lg-flex flex-column bg-white px-5 py-4 '>
              <img className='img-fluid h p-3 ' src={img14} alt="" />
              <span className='fs-5 fw-semibold'>FS12 13TV4556</span>
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
      <section className='d '>
        <h1 className='d-none pt-5 d-lg-block text-capitalize text-center  our'>------------------------our happy------------------------</h1>
        <h1 className='text-capitalize text-center fw-semibold t  our d-lg-none'>our special</h1>
        <span className='menu d-flex justify-content-center '>Visitors</span>   
        <div className='container pt-5'>
          <OwlCarousel
          className="owl-theme"
          items = "2"
          loop = "true"
          margin = {20}
          autoplay = "true"
        
          >
          <div className="item w-75">
            <div className=' d-flex '>
              <div className='w-75'>
                <img className='img-fluid w-75 rounded-circle  ' src={img16} alt="" />
              </div>
              <div className='col-7'>
                <h3>Jhons</h3>
                <p className='owl-p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, commodi labore veritatis quasi fugiat, officiis eligendi architecto molestias non soluta.</p>
              </div>
            </div>
          </div>
          <div className="item w-75 ">
            <div className=' d-flex '>
              <div className='me-5'>
                <img className='img-fluid w-100 rounded-circle  ' src={img17} alt="" />
              </div>
              <div className='col-7'>
                <h3>Jhons</h3>
                <p className='owl-p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, commodi labore veritatis quasi fugiat, officiis eligendi architecto molestias non soluta.</p>
              </div>
            </div>
          </div>
          <div className="item w-75">
            <div className=' d-flex '>
              <div className=''>
                <img className='img-fluid w-75 rounded-circle  ' src={img18} alt="" />
              </div>
              <div className='col-7'>
                <h3>Jhons</h3>
                <p className='owl-p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, commodi labore veritatis quasi fugiat, officiis eligendi architecto molestias non soluta.</p>
              </div>
            </div>
          </div>
          <div className="item w-75">
            <div className=' d-flex '>
              <div className=''>
                <img className='img-fluid w-75 rounded-circle  ' src={img19} alt="" />
              </div>
              <div className='col-7'>
                <h3>Jhons</h3>
                <p className='owl-p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, commodi labore veritatis quasi fugiat, officiis eligendi architecto molestias non soluta.</p>
              </div>
            </div>
          </div>
          <div className="item w-75">
            <div className=' d-flex '>
              <div className=''>
                <img className='img-fluid w-75 rounded-circle  ' src={img20} alt="" />
              </div>
              <div className='col-7'>
                <h3>Jhons</h3>
                <p className='owl-p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, commodi labore veritatis quasi fugiat, officiis eligendi architecto molestias non soluta.</p>
              </div>
            </div>
          </div>
          <div className="item w-75">
            <div className=' d-flex '>
              <div className=''>
                <img className='img-fluid w-75 rounded-circle  ' src={img21} alt="" />
              </div>
              <div className='col-7'>
                <h3>Jhons</h3>
                <p className='owl-p '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, commodi labore veritatis quasi fugiat, officiis eligendi architecto molestias non soluta.</p>
              </div>
            </div>
          </div>
      </OwlCarousel>
        </div>
        <div className='container pt-5'>
          <div className='row  '> 
            <div className='col-lg-2  text-end'>
              <img src={img22} alt="" />
            </div>
            <div className='col-lg-9 text-center d-flex flex-column justify-content-center'>
              <h2 className='fs-2 l '>Our happy coffee lover and their awesome comments</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt porro aliquid laborum omnis labore sit, pariatur neque veritatis quaerat tempore mollitia, tempora placeat. Recusandae ullam assumenda ipsa, eum laboriosam eius.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-5'>
      <h1 className='d-none t d-lg-block text-capitalize text-center  our'>------------------------View Our------------------------</h1>
        <h1 className='text-capitalize text-center fw-semibold t  our d-lg-none'>Event</h1>
        <span className='menu d-flex justify-content-center '>Event</span>
      <OwlCarousel
          className="owl-theme"
          items = "1"
          loop = "true"
          margin = {20}
          autoplay = "true" 
          >
            <div className='container'>
              <div className='d-flex  justify-content-center'>
                <div className='col-lg-5  px-0'>
                  <img className='img-fluid' src={img23} alt="" />
                </div>
                <div className='col-lg-5 k px-0 d-flex flex-column  align-items-center'>
                  <h2 className=' pb-3 pt-5 fs-1 reserv ps-0 text-start'>Event name goes there 01</h2>
                  <p className='px-5 py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sed, qui quam ipsa nobis, dolore assumenda culpa earum esse accusantium quas quidem iusto in aut reiciendis, provident, deserunt iste perferendis.</p>
                  <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum aliquam exercitationem repellat, harum minima, tenetur esse! Aut neque ex, expedita fugiat, alias animi consequatur culpa dignissimos laboriosam non. Eum, deleniti.</p>
                  <div className='d-flex'>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='d-flex  justify-content-center'>
                <div className='col-lg-5  px-0'>
                  <img className='img-fluid' src={img23} alt="" />
                </div>
                <div className='col-lg-5 k px-0 d-flex flex-column  align-items-center'>
                  <h2 className=' pb-3 pt-5 fs-1 reserv ps-0 text-start'>Event name goes there 02</h2>
                  <p className='px-5 py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sed, qui quam ipsa nobis, dolore assumenda culpa earum esse accusantium quas quidem iusto in aut reiciendis, provident, deserunt iste perferendis.</p>
                  <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum aliquam exercitationem repellat, harum minima, tenetur esse! Aut neque ex, expedita fugiat, alias animi consequatur culpa dignissimos laboriosam non. Eum, deleniti.</p>
                  <div className='d-flex'>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='d-flex  justify-content-center'>
                <div className='col-lg-5  px-0'>
                  <img className='img-fluid' src={img23} alt="" />
                </div>
                <div className='col-lg-5 k px-0 d-flex flex-column  align-items-center'>
                  <h2 className=' pb-3 pt-5 fs-1 reserv ps-0 text-start'>Event name goes there 03</h2>
                  <p className='px-5 py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sed, qui quam ipsa nobis, dolore assumenda culpa earum esse accusantium quas quidem iusto in aut reiciendis, provident, deserunt iste perferendis.</p>
                  <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum aliquam exercitationem repellat, harum minima, tenetur esse! Aut neque ex, expedita fugiat, alias animi consequatur culpa dignissimos laboriosam non. Eum, deleniti.</p>
                  <div className='d-flex'>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    <div className='d-flex mx-2 flex-column rounded-circle u w-100 px-4 py-3 text-white justify-content-center align-items-center'>
                      <span>00</span>
                      <span>days</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
      </OwlCarousel>
      </section>
      <section className='k1 container-fluid'>
        <div className='container'>
        <div className=' d-lg-flex  align-items-center container justify-content-center'>
          <div className='col-lg-6 img24  d-flex align-items-center '>
            <div className='row'>
              <div className='col-6 a1'>
                <img src={img24} alt="" />
              </div>
              <div className='col-6 '>
                <img className='  a2' src={img25} alt="" />
              </div>
            </div>
          </div> 
          <div className=' col-lg-4 d-flex flex-column align-items-lg-end justify-content-center img241'>
            <h2 className=' text-center text-lg-end w-100    l1'>OUR SHOP <br/> AT YOUR FINGERTIPS  </h2>
            <p className=' text-center text-lg-end '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aliquid aliquam asperiores, saepe alias dignissimos consectetur ea cum sint tenetur magnam. Illo quasi neque cupiditate beatae optio eos iusto, architecto!</p>
            <button className=' know-more text-white px-4 py-2 text-uppercase text-center  '>Download Now</button>
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

export default Hero;
