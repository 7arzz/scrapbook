import React, { useState, useEffect } from 'react';
import './ArtOfCode.css';

const ArtOfCode = () => {
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
    <div className="art-of-code-container">
      <div 
        className="book" 
        style={getBookStyle()}
        onClick={handleBookClick}
      >
        {/* Paper 1 (Cover) */}
        <div className="paper" style={getPageStyle(0)}>
          <div className="front cover-front">
            <img src="/cover.png" alt="The Art of Code Front Cover" />
          </div>
          <div className="back cover-back-inner">
            <img src="/inner.png" alt="Interior Illustration" />
          </div>
        </div>

        {/* Paper 2 */}
        <div className="paper" style={getPageStyle(1)}>
          <div className="front">
            <span className="author-tag">Chapter 1</span>
            <h2>The Craft of Logic</h2>
            <p>
              Programming is not just about writing syntax; it is about crafting an architecture that resonates with human logic. A well-written code should read like a poem.
            </p>
            <div className="code-snippet">
              function elegance(code) {'{'}
              <br />
              &nbsp;&nbsp;return beauty + logic;
              <br />
              {'}'}
            </div>
            <div className="page-footer">
              <span>Logic & Mind</span>
              <span>1</span>
            </div>
          </div>
          <div className="back">
            <h2>Deep Architecture</h2>
            <p>
              When we build complex systems, the foundation must be solid. Design patterns are the blueprints of our digital cathedrals.
            </p>
            <p>
              Modularity ensures that each piece can evolve independently, creating a resilient and maintainable ecosystem.
            </p>
            <div className="page-footer">
              <span>2</span>
              <span>Architecture</span>
            </div>
          </div>
        </div>

        {/* Paper 3 */}
        <div className="paper" style={getPageStyle(2)}>
          <div className="front">
            <span className="author-tag">Chapter 2</span>
            <h2>Modern Aesthetics</h2>
            <p>
              In the modern era, the interface is the bridge between human emotion and machine precision. Glassmorphism and gradients define our visual language.
            </p>
            <p>
              Minimalism is not the absence of design, but the perfection of clarity.
            </p>
            <div className="page-footer">
              <span>Aesthetics</span>
              <span>3</span>
            </div>
          </div>
          <div className="back">
            <h2>The Future</h2>
            <p>
              As we move towards agentic systems and AI synergy, the role of a developer shifts from a builder to an architect of intelligence.
            </p>
            <p>
              The journey has just begun. Embrace the unknown and code your reality.
            </p>
            <div className="page-footer">
              <span>4</span>
              <span>Innovation</span>
            </div>
          </div>
        </div>

        {/* Paper 4 (End) */}
        <div className="paper" style={getPageStyle(3)}>
          <div className="front">
            <span className="author-tag">Epilogue</span>
            <h2>End of Part I</h2>
            <p>
              Thank you for embarking on this visual journey through the art of code. This component demonstrates the power of CSS 3D and React state management.
            </p>
            <button 
              className="btn btn-restart" 
              style={{ marginTop: '20px', width: '100%' }}
              onClick={(e) => {
                e.stopPropagation();
                restart();
              }}
            >
              Restart Journey
            </button>
            <div className="page-footer">
              <span>Conclusion</span>
              <span>5</span>
            </div>
          </div>
          <div className="back">
            <div className="end-cover">
              <h2>Back Cover</h2>
              <p>Crafted with passion for the next generation of architects.</p>
              <div className="end-icon">
                <i className="fas fa-microchip"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtOfCode;
