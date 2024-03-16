import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import './App.css'; // Import your CSS for styling

function App() {
  const [icons, setIcons] = useState([]);

  // Function to generate random number within a range
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const initializeIcons = () => {
    const numIcons = 10; // Number of icons for each type
    const iconSize = 25; // Updated icon size to 25
    const gridWidth = 90 * window.innerWidth / 100; // Calculate grid width based on 90vw
    const gridHeight = 90 * window.innerHeight / 100; // Calculate grid height based on 90vh
  
    const newIcons = [];
    let id = 1;
  
    // Function to create icons for a given type and position them
    const createIcons = (type, startX, startY) => {
      for (let i = 0; i < numIcons; i++) {
        const x = startX + (i % 5) * (iconSize + 10);
        const y = startY + Math.floor(i / 5) * (iconSize + 10);
  
        newIcons.push({
          id: id++,
          type: type,
          position: { x, y },
          direction: { x: getRandomDirection(), y: getRandomDirection() },
        });
      }
    };
  
    // Create icons for each type and position them
    createIcons('rock', (gridWidth - iconSize) / 2, 10); // Top middle
  
    // Adjusted position for paper icons
    const paperStartX = gridWidth - (numIcons % 5) * (iconSize + 10) - (numIcons > 5 ? 10 : 0) - iconSize;
    const paperStartY = gridHeight - (Math.ceil(numIcons / 5) - 1) * (iconSize + 10) - iconSize - 10;
    createIcons('paper', paperStartX, paperStartY); // Bottom right
  
    createIcons('scissors', 10, gridHeight - iconSize - 10); // Bottom left
  
    setIcons(newIcons);
  };
  

  // Function to generate random direction (-1, 0, 1)
  const getRandomDirection = () => {
    const directions = [-1, 0, 1];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  const moveIcons = () => {
    const gridWidth = 90 * window.innerWidth / 100; // Calculate grid width based on 90vw
    const gridHeight = 90 * window.innerHeight / 100; // Calculate grid height based on 90vh
    const iconSize = 25; // Updated icon size to 25
    const speed = 2; // Adjust speed as needed
  
    setIcons(icons =>
      icons.map(icon => {
        let { x, y } = icon.position;
        let { x: dx, y: dy } = icon.direction;
  
        // Add slight deviation to direction
        dx += getRandomDirection() * 0.1;
        dy += getRandomDirection() * 0.1;
  
        // Calculate the magnitude of the current velocity
        const currentSpeed = Math.sqrt(dx * dx + dy * dy);
  
        // If speed is zero, set a random direction
        if (currentSpeed === 0) {
          dx = getRandomDirection();
          dy = getRandomDirection();
          currentSpeed = speed;
        }
  
        // Normalize the direction vector to maintain speed
        dx = (dx / currentSpeed) * speed;
        dy = (dy / currentSpeed) * speed;
  
        x += dx;
        y += dy;
  
        // Check collision with walls
        if (x <= 0) {
          x = 0;
          dx *= -1;
        } else if (x >= gridWidth - iconSize) {
          x = gridWidth - iconSize;
          dx *= -1;
        }
  
        if (y <= 0) {
          y = 0;
          dy *= -1;
        } else if (y >= gridHeight - iconSize) {
          y = gridHeight - iconSize;
          dy *= -1;
        }
  
        // Check collision with other icons
        icons.forEach(otherIcon => {
          if (otherIcon.id !== icon.id) {
            const distance = Math.sqrt((x - otherIcon.position.x) ** 2 + (y - otherIcon.position.y) ** 2);
            if (distance < iconSize) {
              // Collision detected
              if (icon.type !== otherIcon.type) {
                // Different types, determine winner
                const winner = determineWinner(icon.type, otherIcon.type);
                if (winner === icon.type) {
                  // Icon wins, other icon becomes the winner's type
                  otherIcon.type = icon.type;
                } else if (winner === otherIcon.type) {
                  // Other icon wins, current icon becomes the winner's type
                  icon.type = otherIcon.type;
                }
  
                // Bounce off each other
                const tempDx = dx;
                const tempDy = dy;
                dx = otherIcon.direction.x;
                dy = otherIcon.direction.y;
                otherIcon.direction.x = tempDx;
                otherIcon.direction.y = tempDy;
              }
            }
          }
        });
  
        // Update position and direction
        return { ...icon, position: { x, y }, direction: { x: dx, y: dy } };
      })
    );
  };
  

  // Function to determine the winner based on rock-paper-scissors rules
const determineWinner = (type1, type2) => {
  if (type1 === type2) {
    return null; // It's a tie
  }
  if ((type1 === 'rock' && type2 === 'scissors') ||
      (type1 === 'scissors' && type2 === 'paper') ||
      (type1 === 'paper' && type2 === 'rock')) {
    return type1;
  }
  return type2;
};
    
  // Use useEffect to run initializeIcons and moveIcons
  useEffect(() => {
    initializeIcons();
    const interval = setInterval(moveIcons, 20); // Adjust speed as needed (50 milliseconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Grid icons={icons} />
    </div>
  );
}

export default App;
