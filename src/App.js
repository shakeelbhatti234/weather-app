import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState ();
  const [loading , setLoading] = useState (true);


  useEffect( ()=> { fetch('http://api.weatherapi.com/v1/current.json?key=f4222bd54dbf4d4697045151250210&q=Lahore')
    .then(res => res.json())
    .then(weather => {
      setdata(weather);
      setLoading(false);
    });
  } , []);
  
if(loading)
  {return(<h1>Loading...</h1>);

  }

  return (
    //     <div className="bg-color">
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-5 d-flex flex-column justify-content-center ">
    //         <div className="h-heading">
    //           Grab Big Deals
    //           <div>
    //             on <span className="text-primary">Yummy Meals!</span>{" "}
    //           </div>{" "}
    //         </div>
    //         <div className="text-heading">
    //           Lorem ipsum dolor sit amet consectetur. Aenean mau risnam tortor
    //           curabitur phasellus.
    //         </div>
    //         <button className="btn btn-primary rounded-pill w-25 mt-4">
    //           Get started
    //         </button>
    //         <img
    //           src="assets/img/happy customer.png"
    //           alt=""
    //           className="img-fluid mt-5"
    //         />
    //       </div>
    //       <div className="col-7">
    //         <img src="assets/img/Group 1.png " className="img-fluid" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
     <>
      <div className="container-fluid bg-color-2 ">
        <div className="row p-3">
          <div className='col-3 bg-color rounded-end-5 rounded-start-5 align-items-center text-center text-white'>
            <div>
              <form className="d-flex mt-5 " >
                <input className="form-control rounded-pill me-2" type="search" placeholder="Search City" />
              </form>
            </div>
            <div>
              <img src="image/Weather image.png" className='w-75 h-100' />
              <div className='text-center' style={{ fontSize: "20px" }}>
                <h1>{data.current.temp_c} </h1>
              </div>
            </div>
            <div className='d-flex gap-5 pb-3 justify-content-center '>
              Kuala Lumpur
              <div>
                Monday
              </div>
            </div>

            <div className='d-flex gap-2 pt-3'>

              <img src='/image/Cloud Rain.png' />
              <div>
                Light Rain
              </div>
            </div>
            <div className='d-flex gap-2'>

              <img src='/image/temperature 01.png' />
              <div>
                Min temperature -28°C
              </div>
            </div>
            <div className='d-flex gap-2'>

              <img src='/image/temperature 02.png' />
              <div>
                Min temperature -31°C
              </div>
            </div>

            <div className='d-flex gap-4 mt-5 mb-5 justify-content-center bg-color-2'>
              <div className='d-flex gap-2'>

                <img src='/image/water.png' />
                <div>
                  83%
                  <div>Humidity</div>
                </div>
              </div>

              <div className='d-flex gap-2'>

                <img src='/image/wind.png' />
                <div>
                  6km/h
                  <div>Wind Speed</div>
                </div>
              </div>
            </div>



          </div>

          <div className='col-9 bg-color rounded-end-5 rounded-start-5 text-white '>
            <div className="d-flex gap-5 mt-3 mx-5">
              <div>Today</div>
              <div>Week</div>

            </div>

            <div className="row g-2 mt-4 mx-5 text-center d-flex gap-3">
              <div className="card bg-color-2 " style={{ width: "5rem" }}>
                <div className="card-body text-center text-white">
                  <h5 className="card-title">Sun</h5>
                  <img
                    src="/image/sun.png"
                    alt="Sun"
                    className="img-fluid mx-auto d-block"
                    style={{ width: "30px", height: "30px", objectFit: "contain" }}
                  />
                  <p className="card-text">32°</p>
                </div>
              </div>


              <div className="card bg-color-2" style={{ width: "5rem" }}>
                <div className="card-body text-center text-white">
                  <h6 className="card-title">Mon</h6>
                  <img
                    src="/image/sun1.png"
                    alt="Sun"
                    className="img-fluid mx-auto d-block"
                    style={{ width: "30px", height: "30px", objectFit: "contain" }}
                  />
                  <p className="card-text">32°</p>
                </div>
              </div>


              <div className="card bg-color-2" style={{ width: "5rem" }}>
                <div className="card-body text-center text-white">
                  <h5 className="card-title">Tue</h5>
                  <img
                    src="/image/sun2.png"
                    alt="Sun"
                    className="img-fluid mx-auto d-block"
                    style={{ width: "30px", height: "30px", objectFit: "contain" }}
                  />
                  <p className="card-text">32°</p>
                </div>
              </div>


              <div className="card bg-color-2" style={{ width: "5rem" }}>
                <div className="card-body text-center text-white">
                  <h6 className="card-title">Wed</h6>
                  <img
                    src="/image/sun3.png"
                    alt="Sun"
                    className="img-fluid mx-auto d-block"
                    style={{ width: "30px", height: "30px", objectFit: "contain" }}
                  />
                  <p className="card-text">32°</p>
                </div>
              </div>


              <div className="card bg-color-2" style={{ width: "5rem" }}>
                <div className="card-body text-center text-white">
                  <h5 className="card-title">Thu</h5>
                  <img
                    src="/image/sun4.png"
                    alt="Sun"
                    className="img-fluid mx-auto d-block"
                    style={{ width: "30px", height: "30px", objectFit: "contain" }}
                  />
                  <p className="card-text">32°</p>
                </div>
              </div>

              <div className="card bg-color-2" style={{ width: "5rem" }}>
                <div className="card-body text-center text-white">
                  <h5 className="card-title">Fri</h5>
                  <img
                    src="/image/sun4.png"
                    alt="Sun"
                    className="img-fluid mx-auto d-block"
                    style={{ width: "30px", height: "30px", objectFit: "contain" }}
                  />
                  <p className="card-text">32°</p>
                </div>
              </div>

              <div className="card bg-color-2" style={{ width: "5rem" }}>
                <div className="card-body text-center text-white">
                  <h5 className="card-title">Sat</h5>
                  <img
                    src="/image/sun6.png"
                    alt="Sun"
                    className="img-fluid mx-auto d-block"
                    style={{ width: "30px", height: "30px", objectFit: "contain" }}
                  />
                  <p className="card-text">32°</p>
                </div>
              </div>
            </div>

            <div className='mt-3 mx-5' style={{ fontSize: "20px" }}>
              Today Overview
            </div>

            <div className="d-flex gap-3 mt-3 mx-5   ">
              <div className='bg-color-2 p-3 '>
                <div>
                  Air Quality Index
                </div>
                <div style={{ fontSize: "50px" }}>
                  53
                </div>
                <div className='d-flex gap-2 '>
                  <div className='g-heading mt-2'>
                    good
                  </div>
                  <div>
                    <img src='/image/air-pollution.png' style={{ marginLeft: "70px" }} />
                  </div>
                </div>
              </div>

              <div className='bg-color-2 p-3' >
                <div>
                  UV Index
                </div>
                <div style={{ fontSize: "50px" }}>
                  3
                </div>
                <div className='d-flex gap-2 '>
                  <div className='m-heading mt-2'>
                    Moderate
                  </div>
                  <div>
                    <img src='/image/uv.png' style={{ marginLeft: "70px" }} />
                  </div>
                </div>
              </div>

              <div className='bg-color-2 p-3'>
                <div>
                  Barometer
                </div>
                <div style={{ fontSize: "50px" }}>
                  1016
                </div>
               <div  className='d-flex gap-2 '>
                 <div className='mt-2'>
                  Normal
                </div>
                <div>
                  <img src='/image/barometer.png' style={{ marginLeft: "70px" }} />
                </div>
               </div>
              </div>
            </div>

           



          </div>




        </div>

      </div>
    </>
  );
}

export default App;
