import React, { useState, useEffect } from 'react';
import './BlueRomanceScrapbook.css';

const BlueRomanceScrapbook = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  const numOfPapers = 4;
  const maxLocation = numOfPapers + 1;

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      setCurrentLocation(currentLocation + 1);
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 1) {
      setCurrentLocation(currentLocation - 1);
    }
  };

  const restart = () => {
    setCurrentLocation(1);
  };

  const handleBookClick = (e) => {
    if (e.target.closest('.btn-restart')) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    if (x > rect.width / 2) {
      goNextPage();
    } else {
      goPrevPage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrevPage();
      if (e.key === "ArrowRight") goNextPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentLocation]);

  const getPageStyle = (index) => {
    const paperNum = index + 1;
    const isFlipped = currentLocation > paperNum;
    
    let zIndex;
    if (isFlipped) {
      zIndex = paperNum;
    } else {
      zIndex = numOfPapers - index;
    }

    return {
      zIndex,
      transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
    };
  };

  const getBookStyle = () => {
    if (currentLocation === 1) {
      return { transform: 'translateX(0%)' };
    } else if (currentLocation === maxLocation) {
      return { transform: 'translateX(100%)' };
    } else {
      return { transform: 'translateX(50%)' };
    }
  };

  return (
    <div className="scrapbook-container">
      <div 
        className="book" 
        style={getBookStyle()}
        onClick={handleBookClick}
      >
        {/* Paper 1 (Cover) */}
        <div className="paper" style={getPageStyle(0)}>
          <div className="front cover-front">
            <img src="/sc_cover.png" alt="Blue Romance Scrapbook Cover" />
            <div className="washi-tape top-left"></div>
            <div className="washi-tape bottom-right"></div>
          </div>
          <div className="back interior-page">
            <div className="torn-edge"></div>
            <img src="/sc_page1.png" alt="Memories" className="polaroid-img" />
            <div className="handwritten cursive">
               "The stars aligned the day we met..."
            </div>
          </div>
        </div>

        {/* Paper 2 */}
        <div className="paper" style={getPageStyle(1)}>
          <div className="front interior-page">
             <span className="sticker moon"><i className="fas fa-moon"></i></span>
            <h2 className="scrapbook-title">Midnight Whispers</h2>
            <p className="journal-entry">
              The moon was at its peak, and the world felt silent. In that quietude, we shared dreams that only the stars could hear. Every word was a promise written in the indigo sky.
            </p>
            <div className="washi-tape horizontal blue"></div>
            <div className="page-footer">
              <span>Chapter I</span>
              <span>1</span>
            </div>
          </div>
          <div className="back interior-page">
            <h2 className="scrapbook-title">Azure Dreams</h2>
            <p className="journal-entry">
              Walking along the shore, the waves whispered secrets of time. The blue of the ocean matched the peacefulness in my heart.
            </p>
             <img src="/sc_page2.png" alt="Botanical" className="scrapbook-detail-img" />
            <div className="page-footer">
              <span>2</span>
              <span>Reflections</span>
            </div>
          </div>
        </div>

        {/* Paper 3 */}
        <div className="paper" style={getPageStyle(2)}>
          <div className="front interior-page">
            <span className="sticker floral"><i className="fas fa-leaf"></i></span>
            <h2 className="scrapbook-title">Collected Memories</h2>
            <p className="journal-entry">
              The tickets, the dried flowers, the small notes—each a fragment of a journey that defined us. Layers of paper, layers of love.
            </p>
            <div className="polaroid-frame">
                <div className="polaroid-content">
                    <img src="/inner.png" alt="Abstract Art" />
                </div>
            </div>
            <div className="page-footer">
              <span>Memory Lane</span>
              <span>3</span>
            </div>
          </div>
          <div className="back interior-page">
            <h2 className="scrapbook-title">Under the Stars</h2>
            <p className="journal-entry">
              I'll never forget that night. The air was cool, and your hand in mine felt like home. We are made of stardust and memories.
            </p>
             <div className="doodles">
                <i className="fas fa-star gold"></i>
                <i className="fas fa-star gold small"></i>
             </div>
            <div className="page-footer">
              <span>4</span>
              <span>Everglow</span>
            </div>
          </div>
        </div>

        {/* Paper 4 (End) */}
        <div className="paper" style={getPageStyle(3)}>
          <div className="front interior-page">
            <h2 className="scrapbook-title">Till We Meet Again</h2>
            <p className="journal-entry">
              This chapter closes, but the story continues. Thank you for being part of this dreamy journey through my azure scrapbook.
            </p>
            <button 
              className="btn-scrapbook btn-restart" 
              onClick={(e) => {
                e.stopPropagation();
                restart();
              }}
            >
              Restart Journey
            </button>
            <div className="page-footer">
              <span>End of Part I</span>
              <span>5</span>
            </div>
          </div>
          <div className="back end-cover">
            <div className="end-content">
              <h2 className="white">Blue Romance</h2>
              <div className="ribbon-placeholder"></div>
              <p className="white-faded">A Journal of Peace and Love</p>
              <div className="end-icon-scrapbook">
                <i className="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueRomanceScrapbook;
