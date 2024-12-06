import React from 'react';
import './Serch.css';

function Serch(){
    return(
        <>
       <div className='serch'>
        <p className='serchname'>Serch</p>
        <div className='serchlogo'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
            <div className='mic'>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
            </div>
            <div className='create'>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" />
            </div>
            <div className='mare'>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" />
            </div>
            <div className='bell'>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" />
            </div>
            <div className='accound'>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true" alt="" />
            </div>
        </div>
        
       </div>
       <hr className='horizontzl' />
         <div>
            <div className='canal'>
                <p className='all'>All</p>
                <p className='cook'>Cook Studio</p>
                <p className='uk'>UK</p>
                <p className='case'>Case Study</p>
                <p className='case'>Music</p>
                <p className='case'>Bnagla lofi</p>
                <p className='tour'>tour</p>
                <p className='case'>Saintmartin</p>
                <p className='tech'>Tech</p>
                <p className='case'>iPhone 13</p>
                <p className='user'>User interface Design</p>
            </div>
         </div>
         <hr />
        
        </>
    )
}
export default Serch;