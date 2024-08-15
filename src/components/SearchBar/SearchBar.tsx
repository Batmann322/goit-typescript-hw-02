import React, { useState } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.conatiner}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.text}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

// export default function SearchBar({ onSubmit }: SearchBarProps) {
//   const [query, setQuery] = useState<string>("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (query.trim() === "") {
//       // Використай бібліотеку для сповіщень або стандартний alert
//       alert("Please enter a search term.");
//       return;
//     }
//     onSubmit(query);
//     setQuery("");
//   };

//   return (
//     <header lassName={css.conatiner}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={query}
//           onChange={handleInputChange}
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           className={css.text}
//         />
//         <button className={css.btn} type="submit">
//           Search
//         </button>
//       </form>
//     </header>
//   );
// }
