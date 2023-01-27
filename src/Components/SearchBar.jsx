

// import React, { useState, useEffect } from "react";
// import Searchbar from "./Searchbar";
// import Image from "./Image";

// function Searchbar() {
//   const [characters, setCharacters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       const response = await fetch(
//         "https://atla-api-production.up.railway.app/characters"
//       );
//       const json = await response.json();
//       setCharacters(json);
//     };
//     fetchCharacters();
//   }, []);

//   return (
//     <>
//       <Searchbar setSearchTerm={setSearchTerm} />
//       {!characters.length ? (
//         <h2>Loading...</h2>
//       ) : (
//         <section>
//           <div className="gallery">
//             {characters
//               .filter((character) => {
//                 return character.name
//                   .toLowerCase()
//                   .includes(searchTerm.toLowerCase());
//               })
//               .map((character) => (
//                 <Image key={character.name} {...character} />
//               ))}
//           </div>
//         </section>
//       )}
//     </>
//   );
// }