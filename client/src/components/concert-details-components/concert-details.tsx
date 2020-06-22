import React from 'react'
import './concert-details.css'

export const ConcertDetailsComponent: React.FC = () => {

    return (
        
           <div className="concert-details row">
               <div className="col-3 profile-pic">
                   <br></br>
                   <h3>Concert Name</h3>
                </div>
               <div className="col-4">
                   <br></br>
                   <h4>Genre</h4>
                   <ul className="myList">
                       <li>Rock</li>
                   </ul>
                   <h4>Bands</h4>
                   <ul className="myList">
                       <li>Rolling stones</li>
                       <li>And here too</li>
                   </ul>
                   <h4>Location</h4>
                   <ul className="myList">

                   <p>Louisville, KY</p>
                   </ul>
                   <h4>Bio</h4>
                   <ul className="myList">
                       <p>concert description</p>
                   </ul>
               </div>
               <div className="col-5 iframe-container">
                   <h3>Favorite song</h3>
                   <br></br>
                
               <iframe className='responsive-iframe' src="https://www.youtube.com/embed/kfORcR2VSbc"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </div>
           </div>
           
    )
}