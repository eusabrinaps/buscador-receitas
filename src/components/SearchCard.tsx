import { useState } from "react";
import type { FormEvent } from "react";

type SearchFormProps = {
  onSearch: (query: string) => void;
};

export function SearchCard({ onSearch }: SearchFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); 

    const query = value.trim(); 
    if (query) onSearch(query); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ex: chicken, rice"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}