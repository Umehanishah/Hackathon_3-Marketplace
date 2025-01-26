// components/SearchBar.tsx
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.trim() !== '') {
      // Redirect to /search with the query
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={handleSearch}
      className="p-2 border rounded-md"
    />
  );
};

export default SearchBar;
