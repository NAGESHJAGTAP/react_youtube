
// import React, { useEffect, useState } from 'react';
// import './Mainmenu.css';

// function Mainmenu() {
//   const [main, setMain] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/data')
//       .then((response) => response.json())
//       .then((data) => setMain(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="mainmenu">
//       <div className="frame">
//         {main.map((i) => (
//           <div key={i.id}>
//             <img className='img-thumbnail' src={i.img} alt="thumbnail" />
//             <br />
//             <img src={i.img_logo} alt="logo" />
//             <h4 className="disc">
//               {i.thumbnail}
//               <br />
//               {i.thumbnail1}
//               <p className="Views">
//                 {i.view}
//                 <br />
//                 {i.view1}
//               </p>
//             </h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Mainmenu;









// import React, { useEffect, useState } from 'react';
// import './Mainmenu.css';
// import './Serch.css';

// function Mainmenu() {
//   const API_KEY = 'AIzaSyDaUG4c5bL5ccwWaGHJV_ULBlqFxwUWBmw'; // Replace with your actual API key
//   const [main, setMain] = useState([]); // State to store video data
//   const [searchQuery, setSearchQuery] = useState(''); // State to store search query

//   // Fetch new data when the searchQuery changes
//   useEffect(() => {
//     if (searchQuery) {
//       fetchVideos(searchQuery);
//     }
//   }, [searchQuery]);

//   const fetchVideos = (query) => {
//     setMain([]); // Clear previous search results before fetching new ones
//     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}`;

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
//         setMain(formattedData); // Update state with the fetched video data
//       })
//       .catch((error) => console.error('Error fetching YouTube data:', error));
//   };

//   return (
//     <>
//       {/* Search input */}
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

//       {/* Main menu displaying videos */}
//       <div className="mainmenu">
//         <div className="frame">
//           {main.length > 0 ? (
//             main.map((video) => (
//               <div key={video.id}>
//                 <img
//                   className="img-thumbnail"
//                   src={video.thumbnail}
//                   alt="thumbnail"
//                 />
//                 <h4 className="disc">
//                   {video.title}
//                   <p className="Views">{video.channel}</p>
//                   <p className="Views">{video.description}</p>
//                 </h4>
//               </div>
//             ))
//           ) : (
//             <p>No results found. Try searching for something!</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Mainmenu;







import React, { useEffect, useState } from 'react';
import './Mainmenu.css';
import './Serch.css';

function Mainmenu() {
  const API_KEY = 'AIzaSyDaUG4c5bL5ccwWaGHJV_ULBlqFxwUWBmw'; // Replace with your API key
  const [main, setMain] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions] = useState([
    { id: 1, title: 'All' },
    { id: 2, title: 'Coock Studio' },
    { id: 3, title: 'UX' },
    { id: 4, title: 'Case study' },
    { id: 5, title: 'Music' },
    { id: 6, title: 'Bangla Lofi' },
    { id: 7, title: 'Tour' },
    { id: 8, title: 'Saintmartian' },
    { id: 9, title: 'Tech' },
    { id: 10, title: 'iPhone 13' },
    { id: 11, title: 'User Interface Design' },
  ]);

  useEffect(() => {
    if (searchQuery) {
      fetchVideos(searchQuery);
    }
  }, [searchQuery]);

  const fetchVideos = (query) => {
    setMain([]);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5000&q=${query}&type=video&key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
          description: item.snippet.description,
        }));
        setMain(formattedData);
      })
      .catch((error) => console.error('Error fetching YouTube data:', error));
  };

  return (
    <>
      {/* Search Bar */}
      <div className="cont">
        <input
          className="serchname"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
          alt="Search"
        />
      </div>

      {/* Suggestion Row */}
      <div className="suggestion-row">
        {suggestions.map((item) => (
          <button
            key={item.id}
            className="suggestion-item"
            onClick={() => setSearchQuery(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <hr className="horizontzl" />

      {/* Video Results */}
      <div className="mainmenu">
        <div className="frame">
          {main.length > 0 ? (
            main.map((video) => (
              <div key={video.id}>
                <img
                  className="img-thumbnail"
                  src={video.thumbnail}
                  alt="thumbnail"
                />
                <h4 className="disc">
                  {video.title}
                  <p className="Views">{video.channel}</p>
                  <p className="Views">{video.description}</p>
                </h4>
              </div>
            ))
          ) : (
            <p>No results found. Try searching for something!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Mainmenu;





















//       <div>
//      <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" alt="Bulbuli thumbnail" />
//      <br />
//         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true" alt="Coke Studio Bangla icon" />
//         <h4 className="disc">
//       Bulbuli | Coke Studio Bangla |<br /> Season One | Ritu Raj x Nandita
//      <p className="Views">Coke Studio Bangla <br /> 1.5M views - 2 days ago</p>
//         </h4>
//      </div>

//         <div>
//         <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true" alt="Infinix Note 12 thumbnail" />
//      <br />
//     <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true" alt="Infinix icon" />
//     <h4 className="disc">
//      Infinix Note 12: AMOLED... Helio G88 SoC!
//         <p className="views">ATC Android TO Company <br /> 4.2M views - 2 days ago</p>
//         </h4>
//         </div>

//         <div>
//         <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true" alt="UX design thumbnail" />
//         <br />
//         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true" alt="UX design icon" />
//         <h4 className="disc">
//         My First UX Design Case Study - <br /> This Got Me My First Job
//         <p className="views">Saptarshi Prakash <br /> 4.8M views - 1 year ago</p>
//         </h4>
//         </div>

//         <div>
//         <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true" alt="My Mix thumbnail" />
//         <h4 className="disc d6">
//           My Mix
//         <p className="views">Lopamudra Mitra, Anupam Roy, and more</p>
//         </h4>
//         </div>
    

//     <div>
//     <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true" alt="UX Design thumbnail" />
//     <br />
//     <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true" alt="AJ&Smart icon" />
//     <h4 className="disc">
//      UX Design - What is it? (from AJ&Smart)
//     <p className="views">AJ&Smart <br /> 3 years ago</p>
//     </h4>
//     </div>

//     <div>
//     <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true" alt="Mix Mombati thumbnail" />
//     <br />
//     <h4 className="disc d4">
//     Mix - Mombati | Mahan Sharif | Dhakaiya <br /> Does | Mahib Ahsan ft Anika
//     <p className="views"> Mahan Sharif, Odd Signature, Shayan Chowdhury Arnob, and more
//     </p>
//     </h4>
//       </div>

//     <div>
//     <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true" alt="Visa-free travel thumbnail" />
//                     <br />
// <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true" alt="Nadir on the Go icon" />
// <h4 className="disc">
//   48 Visa-Free
// <p className="views">Nadir on the Go <br /> 1.7M views - 1 year ago</p>
// </h4>
//  </div>

//  <div>
//   <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true" alt="Figma tips thumbnail" />
//  <br />
//    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true" alt="Mizko icon" />
//  <h4 className="disc">
//    14 Advanced Tips to Design Faster in Figma
//    <p className="views">Mizko <br /> 53K views - 1 year ago</p>
//    </h4>
                
//             </div>
//             <div className='discth'>
//                 <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true" alt="thumnnali" />
//             </div>
//             <div className='discth'>
//                 <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true" alt="thumnnali" />
//             </div>
//             <div className='discth'>
//                 <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true" alt="" />
//             </div>
//             <div className='discth'>
//                 <img className='img-thumbnail' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true" alt="" />
//             </div> 
       



