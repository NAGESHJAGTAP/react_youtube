import React from 'react';
import './Serch.css';

function Serch(){

const suggestion=[
    {id:1,title:'All'},
    {id:1,title:'Coock Studio'},
    {id:1,title:'UX'},
    {id:1,title:'Case study'},
    {id:1,title:'music'},
    {id:1,title:'Bnagla lofi'},
    {id:1,title:'Tour'},
    {id:1,title:'Saintmartian'},
    {id:1,title:'Tech'},
    {id:1,title:'iPhone 13'},
    {id:1,title:'User interface Design'},
    
]





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
                {suggestion.map((i)=>(
<p className='all'>{i.title}</p>
                ))}
            </div>
         </div>
         <hr />
        
        </>
    )
}
export default Serch;