import React, { useEffect, useState } from 'react';
import './Mainmenu.css';
import './Serch.css';

function Mainmenu() {
  const API_KEY = 'AIzaSyDaUG4c5bL5ccwWaGHJV_ULBlqFxwUWBmw'; 
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