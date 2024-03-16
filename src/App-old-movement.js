// import React, { useState, useEffect } from 'react';
// import Grid from './components/Grid';
// import './App.css'; // Import your CSS for styling

// function App() {
//   const [icons, setIcons] = useState([]);

//   // Function to generate random number within a range
//   const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   // Function to initialize icons with random positions and directions
//   const initializeIcons = () => {
//     const newIcons = [
//       { id: 1, type: 'rock', position: { x: getRandomNumber(50, 350), y: getRandomNumber(50, 350) }, direction: { x: getRandomDirection(), y: getRandomDirection() } },
//       { id: 2, type: 'paper', position: { x: getRandomNumber(50, 350), y: getRandomNumber(50, 350) }, direction: { x: getRandomDirection(), y: getRandomDirection() } },
//       { id: 3, type: 'scissors', position: { x: getRandomNumber(50, 350), y: getRandomNumber(50, 350) }, direction: { x: getRandomDirection(), y: getRandomDirection() } },
//       // Add more icons as needed
//     ];
//     setIcons(newIcons);
//   };

//   // Function to generate random direction (-1, 0, 1)
//   const getRandomDirection = () => {
//     const directions = [-1, 0, 1];
//     return directions[Math.floor(Math.random() * directions.length)];
//   };

//   // Function to move icons
//   const moveIcons = () => {
//     const gridWidth = 90 * window.innerWidth / 100; // Calculate grid width based on 90vw
//     const gridHeight = 90 * window.innerHeight / 100; // Calculate grid height based on 90vh

//     setIcons(icons =>
//       icons.map(icon => {
//         let { x, y } = icon.position;
//         let { x: dx, y: dy } = icon.direction;
//         x += dx;
//         y += dy;

//         // Check collision with walls
//         if (x <= 0 || x >= gridWidth - 50) { // Subtract icon size from width
//           dx *= -1;
//         }
//         if (y <= 0 || y >= gridHeight - 50) { // Subtract icon size from height
//           dy *= -1;
//         }

//         // Update position and direction
//         return { ...icon, position: { x, y }, direction: { x: dx, y: dy } };
//       })
//     );
//   };

//   // Use useEffect to run initializeIcons and moveIcons
//   useEffect(() => {
//     initializeIcons();
//     const interval = setInterval(moveIcons, 0); // Adjust speed as needed (50 milliseconds)
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="App">
//       <Grid icons={icons} />
//     </div>
//   );
// }

// export default App;

