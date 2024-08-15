import React, { useState, FormEvent, ChangeEvent } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.conatiner}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          value={query}
          onChange={handleInputChange}
          className={css.text}
        />
        <Toaster />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </header>
  );
}
