import React, { useState, useEffect, useRef } from 'react';
import { Camera, Maximize2, Minimize2, Info } from 'lucide-react';

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-50 px-2 py-1 text-sm text-white bg-black rounded shadow-lg -translate-x-1/2 left-1/2 -top-8 transition-opacity opacity-90">
          {content}
          <div className="absolute w-2 h-2 rotate-45 bg-black -bottom-1 left-1/2 -translate-x-1/2" />
        </div>
      )}
    </div>
  );
};

const VirtualTour = () => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(0);
  const [autoRotate, setAutoRotate] = useState(false);

  const containerRef = useRef(null);

  const rooms = [
    {
      name: 'Reception',
      description: 'Welcome to our modern reception area, where our friendly staff will greet you.',
      image: "/highlights/highligh1.jpg",
      hotspots: [
        { angle: 45, name: 'Front Desk' },
        { angle: 180, name: 'Waiting Area' },
      ]
    },
    {
      name: 'Waiting Area',
      description: 'A comfortable space designed for your convenience while you wait.',
      image: "/highlights/highligh2.jpg",
      hotspots: [
        { angle: 90, name: 'Magazine Stand' },
        { angle: 270, name: 'Water Station' },
      ]
    },
    {
      name: 'Consultation',
      description: 'Private consultation rooms equipped with the latest technology.',
      image: "/highlights/highligh3.jpg",
      hotspots: [
        { angle: 135, name: 'Examination Area' },
        { angle: 225, name: 'Doctor\'s Desk' },
      ]
    },
    {
      name: 'Treatment',
      description: 'State-of-the-art treatment rooms ensuring the highest standard of care.',
      image: "/highlights/highligh4.jpg",
      hotspots: [
        { angle: 0, name: 'Treatment Chair' },
        { angle: 180, name: 'Equipment Station' },
      ]
    }
  ];

  useEffect(() => {
    let rotationInterval;
    if (autoRotate && !isDragging) {
      rotationInterval = setInterval(() => {
        setCurrentAngle((prev) => (prev + 0.5) % 360);
      }, 50);
    }
    return () => clearInterval(rotationInterval);
  }, [autoRotate, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - currentAngle);
    setAutoRotate(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newAngle = (e.pageX - startX) % 360;
    setCurrentAngle(newAngle);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - currentAngle);
    setAutoRotate(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const newAngle = (e.touches[0].pageX - startX) % 360;
    setCurrentAngle(newAngle);
  };

  const switchRoom = (index) => {
    setCurrentRoom(index);
    setCurrentAngle(0);
    setShowInfo(true);
    setTimeout(() => setShowInfo(false), 3000);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const renderHotspots = () => {
    return rooms[currentRoom].hotspots.map((hotspot, index) => {
      const position = (hotspot.angle - currentAngle + 360) % 360;
      const isVisible = position > 270 || position < 90;

      if (!isVisible) return null;

      return (
        <Tooltip key={index} content={hotspot.name}>
          <div
            className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
            style={{
              left: `${50 + Math.sin((position * Math.PI) / 180) * 40}%`,
              opacity: 1 - Math.abs(position - 360) / 90,
            }}
          >
            <div className="bg-white rounded-full p-2 shadow-lg animate-pulse">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
            </div>
          </div>
        </Tooltip>
      );
    });
  };

  return (
    <div ref={containerRef} className={`relative ${isFullscreen ? 'w-screen h-screen' : 'w-full h-[500px]'} rounded-2xl overflow-hidden bg-gray-900`}>
      {/* Virtual Tour Viewer */}
      <div
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="w-full h-full bg-center bg-cover transition-transform duration-300"
          style={{
            backgroundImage: `url(${rooms[currentRoom].image})`,
            transform: `rotateY(${currentAngle}deg)`
          }}
        />
        {renderHotspots()}
      </div>

      {/* Room Info Overlay */}
      {showInfo && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white p-4 rounded-lg max-w-md text-center">
          <h3 className="font-bold mb-2">{rooms[currentRoom].name}</h3>
          <p className="text-sm">{rooms[currentRoom].description}</p>
        </div>
      )}

      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button onClick={() => setAutoRotate(!autoRotate)} className={`p-2 rounded-full ${autoRotate ? 'bg-blue-500' : 'bg-black/50'} text-white hover:bg-opacity-70 transition-colors`} aria-label="Toggle auto-rotate">
          <Camera className="w-5 h-5" />
        </button>
        <button onClick={toggleFullscreen} className="p-2 rounded-full bg-black/50 text-white hover:bg-opacity-70 transition-colors" aria-label="Toggle fullscreen">
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
        <button onClick={() => setShowInfo(!showInfo)} className="p-2 rounded-full bg-black/50 text-white hover:bg-opacity-70 transition-colors" aria-label="Show information">
          <Info className="w-5 h-5" />
        </button>
      </div>

      {/* Room Selection Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 bg-black/50 p-4 rounded-full">
        {rooms.map((room, index) => (
          <button key={index} onClick={() => switchRoom(index)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentRoom === index ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/20'}`}>
            {room.name}
          </button>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
        <button onClick={() => setCurrentAngle((prev) => (prev - 90) % 360)} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors" aria-label="Rotate left">←</button>
        <button onClick={() => setCurrentAngle((prev) => (prev + 90) % 360)} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors" aria-label="Rotate right">→</button>
      </div>
    </div>
  );
};

export default VirtualTour;