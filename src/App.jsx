import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ResultCard from './components/ResultCard';
import Spinner from './components/Spinner';
import upiQr from './assets/upi-qr.jpg';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError('');
    setResults([]);
    setSearched(true);
    setQuery(searchQuery);
    
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
      );
      const data = await res.json();
      if (data.Response === 'True') {
        const top5 = data.Search.slice(0, 5);
        const detailedResults = await Promise.all(
          top5.map(async (m) => {
            const detailRes = await fetch(`https://www.omdbapi.com/?i=${m.imdbID}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
            const detailData = await detailRes.json();
            return { ...m, Plot: detailData.Plot };
          })
        );
        setResults(detailedResults);
      } else {
        setError('no_results');
      }
    } catch {
      setError('network_error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-pagegray">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wide text-white leading-none mb-3">
            Watch any Movie or Web-Series for free.
          </h1>
          <p className="font-dm text-sm md:text-base text-gray-500">
            Search by title and start watching instantly.
          </p>
        </div>
        
        <SearchBox onSearch={handleSearch} />

        {(loading || error || results.length > 0) && (
          <div className="w-full flex flex-col items-center mt-8 gap-3">
            {loading && <Spinner />}
            {!loading && error === 'no_results' && (
              <p className="text-gray-500 font-dm text-sm mt-6">No movies found. Try a different title.</p>
            )}
            {!loading && error === 'network_error' && (
              <p className="text-lafred font-dm text-sm mt-6">Something went wrong. Please try again.</p>
            )}
            {!loading && results.map((movie, i) => (
              <ResultCard key={movie.imdbID} movie={movie} index={i} />
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 bg-cardbg border border-borderdark rounded-2xl p-6 md:p-10 max-w-[800px] w-full mx-auto shadow-xl hover:border-[#444] transition-colors">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-widest mb-3">Buy Me a Coffee ☕</h2>
            <p className="font-dm text-gray-400 text-base md:text-lg leading-relaxed">
              If you love using LAFlix to watch your favorite movies for free, consider supporting the project by scanning the QR code!
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl flex-shrink-0">
            <img src={upiQr} alt="UPI QR Code" className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-lg" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
