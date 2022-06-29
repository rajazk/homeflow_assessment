import SearchBox from "../searchBox/SearchBox";

function Header({query,setQuery}) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">Posh Properties</h1>

      <SearchBox query={query} setQuery={setQuery} />
    </header>
  );
}

export default Header;
