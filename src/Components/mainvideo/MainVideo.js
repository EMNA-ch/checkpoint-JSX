import React from 'react';
import './MainVideo.css';
const VideoLink = {
  url: 'https://www.youtube.com/embed/SMgQlTSoXf0',
  videoName: 'React : Chapitre 1 Introduction',
  hachtag: '#React',
};

const MainVideo = () => {
  return (
    <div className='vid'>
      <iframe
        style={{ width: '800px', height: '500px' }}
        src={VideoLink.url}
        frameborder='0'
      />

      <h6 style={{ color: 'blue', fontSize: '13px' }}>#{VideoLink.hachtag}</h6>
      <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>
        {VideoLink.videoName}
      </h3>
    </div>
  );
};

export default MainVideo;
