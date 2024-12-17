// import React from 'react';
// import './Serch.css';

// function Serch(){
      
// const suggestion=[
//     {id:1,title:'All'},
//     {id:1,title:'Coock Studio'},
//     {id:1,title:'UX'},
//     {id:1,title:'Case study'},
//     {id:1,title:'music'},
//     {id:1,title:'Bnagla lofi'},
//     {id:1,title:'Tour'},
//     {id:1,title:'Saintmartian'},
//     {id:1,title:'Tech'},
//     {id:1,title:'iPhone 13'},
//     {id:1,title:'User interface Design'},
    
// ]


//     return(
//         <>
       
        
//         <div className="cont">
//         <input class='serchname' type="text" name="" id="" placeholder='Search'/>
          
//             <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
            
//             <div className='mic'>
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
//             </div>
//             <div className='create'>
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" />
//             </div>
//             <div className='mare'>
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" />
//             </div>
//             <div className='bell'>
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" />
//             </div>
//             <div className='accound'>
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true" alt="" />
//             </div>
//             </div>
        
         


//        <hr className='horizontzl' />
//          <div>
//             <div className='canal'>
//                 {suggestion.map((i)=>(
// <p className='all'>{i.title}</p>
//                 ))}
//             </div>
//          </div>
//          <hr />
        
//         </>
       
//     )
// }
// export default Serch;



























// import React, { useEffect, useState } from 'react';
// import './Mainmenu.css';
// import './Serch.css';

// function Mainmenu() {
//   const API_KEY = 'AIzaSyDaUG4c5bL5ccwWaGHJV_ULBlqFxwUWBmw';
//   const [main, setMain] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
  
//   useEffect(() => {
//     if (searchQuery) {
//       fetchVideos(searchQuery);
//     }
//   }, [searchQuery]);

//   const fetchVideos = (query) => {
//     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=500&q=${query}&type=video&key=${API_KEY}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const formattedData = data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           channel: item.snippet.channelTitle,
//           thumbnail: item.snippet.thumbnails.medium.url,
//           description: item.snippet.description,
//         }));
//         setMain(formattedData);
//       })
//       .catch((error) => console.error('Error fetching YouTube data:', error));
//   };

//   return (
//     <>
//       <div className="cont">
//         <input
//           className="serchname"
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <img
//           src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//           alt="Search"
//         />
//         <div className="mic">
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
//             alt="Mic"
//           />
//         </div>
//         <div className="create">
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
//             alt="Create"
//           />
//         </div>
//         <div className="mare">
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
//             alt="More"
//           />
//         </div>
//         <div className="bell">
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
//             alt="Notifications"
//           />
//         </div>
//         <div className="accound">
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true"
//             alt="Account"
//           />
//         </div>
//       </div>

//       <hr className="horizontzl" />

//       <div className="mainmenu">
//         <div className="frame">
//           {main.map((video) => (
//             <div key={video.id}>
//               <img
//                 className="img-thumbnail"
//                 src={video.thumbnail}
//                 alt="thumbnail"
//               />
//               <h4 className="disc">
//                 {video.title}
//                 <p className="Views">{video.channel}</p>
//                 <p className="Views">{video.description}</p>
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Mainmenu;













