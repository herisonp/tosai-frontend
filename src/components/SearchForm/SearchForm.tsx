import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./SearchForm.css";

export function SearchForm({ search }: { search?: string }) {
  return (
    <form action="/search" className="search-form">
      <Input
        type="text"
        placeholder="Pesquise um serviço"
        name="search"
        defaultValue={search}
        required
      />
      <Button type="submit" variant="secundary">
        Pesquisar
      </Button>
    </form>
  );
}
