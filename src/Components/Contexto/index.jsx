import React, { useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const categoria = [
    { id: 1, title: 'Front End', color: '#6bd1ff'},
    { id: 2, title: 'Back End', color: '#00C86F'},
    { id: 3, title: 'Innovación y Gestión', color: '#ffba05'}
  ];

  const videos = [
    { id: 1, titulo: 'Video 1', categoria: 1,  imagen: '/img/video1.png', video : '', descripcion: ''},
    { id: 2, titulo: 'Video 2', categoria: 1,  imagen: '/img/video2.png', video : '', descripcion: ''},
    { id: 3, titulo: 'Video 3', categoria: 1,  imagen: '/img/video3.png', video : '', descripcion: ''},
    { id: 4, titulo: 'Video 4', categoria: 2,  imagen: '/img/video4.png', video : '', descripcion: ''},
    { id: 5, titulo: 'Video 5', categoria: 2,  imagen: '/img/video5.png', video : '', descripcion: ''},
    { id: 6, titulo: 'Video 6', categoria: 2,  imagen: '/img/video6.png', video : '', descripcion: ''},
    { id: 7, titulo: 'Video 7', categoria: 3,  imagen: '/img/video7.png', video : '', descripcion: ''},
    { id: 8, titulo: 'Video 8', categoria: 3,  imagen: '/img/video8.png', video : '', descripcion: ''},
    { id: 9, titulo: 'Video 9', categoria: 3,  imagen: '/img/video9.png', video : '', descripcion: ''},
  ];

  const [showOverlay, setShowOverlay] = React.useState(false);
    
  const [videoData, setVideoData] = useState({ titulo: '', categoria:0, imagen: '', video:'', descripcion: ''});

  const handleInputChange = (event) => {
      setVideoData({ ...videoData, [event.target.name]: event.target.value });
  };
  const handleAddVideo = (event) => {
      event.preventDefault();
      console.log(videoData);
      setShowOverlay(false);
  };
  const handleEditVideo = (event) => {
    event.preventDefault();
    console.log(videoData);
    setShowOverlay(false);
  };
  const handleReset = () => {
      setVideoData({ titulo: '', categoria: 0, imagen: '', video:'', descripcion: '' });
  }

  return (
    <AppContext.Provider value={{ categoria, videos, showOverlay, setShowOverlay, videoData, setVideoData, handleInputChange, handleAddVideo, handleEditVideo, handleReset }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;