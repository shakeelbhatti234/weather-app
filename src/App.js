import logo from './logo.svg';
import './App.css';

function App() {
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
<div className='container-fluid'>
  <div className="row">
    <div className="col-4">
      <div className="bg-color">
      
      <div className="position-relative w-75 mt-5">
        <i className="bi bi-search search-icon-left"></i>

        <input type="text" className="form-control search-box" placeholder="Search city"></input>
      </div>
      <img src="image/Weather img.png " className="img-fluid" alt="" />
      <div className='tem-text text-center'>30°C</div>
      <div className="d-flex justify-content-center">
         <div className="">Kuala Lumpur</div>
          <div className="">Monday</div>
      </div>
      <div className="d-flex ">
        <img src="image/Cloud Rain.png" className="img-fluid" alt="" />
          <div className="ps-2">Light Rain</div>
      </div>
       <div className="d-flex ">
        <img src="image/Temperature 01.png" className="img-fluid" alt="" />
          <div className="ps-2">Min Temperature - 28°C</div>
      </div>
       <div className="d-flex ">
        <img src="image/Temperature 02.png" className="img-fluid" alt="" />
          <div className="ps-2">Max Temperature - 31°C</div>
      </div>
      <div className="d-flex">
         <img src="image/water.png" className="img-fluid ps-5" alt="" />
          <div className="">83% <div>Humidity</div>
</div>
       <div className="d-flex">
         <img src="image/wind.png" className="img-fluid ps-5" alt="" />
          <div className="">6km/h
 <div>Wind Speed</div>
</div>
</div>
      
      </div>
      
    
    </div>
     </div>
     <div className="col-8">
      <div className="bg-color">
      <div className='d-flex'>Today <div>Week</div></div>
      <div className=''>
        <div>Sun</div>
         <img src="image/vecteezy windy.png" className="img-fluid" alt="" />
          <div></div>
      </div>
   </div>
   

   </div>
  
</div>
</div>
  );
}

export default App;
