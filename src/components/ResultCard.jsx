import React from 'react';

const ResultCard = ({ movie, index }) => {
  return (
    <div
      style={{ animationDelay: `${index * 60}ms` }}
      className="
        w-full max-w-[600px]
        bg-cardbg border border-borderdark
        rounded-xl p-4
        flex items-center gap-4
        hover:border-lafred hover:-translate-y-0.5
        transition-all duration-200
        opacity-0 animate-fadeSlideUp
        cursor-pointer
      "
    >
      {/* Poster */}
      {movie.Poster && movie.Poster !== 'N/A' ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-[60px] h-[90px] object-cover rounded-md flex-shrink-0"
        />
      ) : (
        <div className="w-[60px] h-[90px] bg-[#333] rounded-md flex items-center justify-center flex-shrink-0 text-2xl">
          🎬
        </div>
      )}

      {/* Info */}
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <p className="font-dm font-semibold text-white text-base leading-snug truncate">
          {movie.Title}
        </p>
        <p className="font-dm text-gray-500 text-sm">{movie.Year}</p>
        {movie.Plot && movie.Plot !== 'N/A' && (
          <p className="font-dm text-gray-400 text-xs mt-1 line-clamp-2">
            {movie.Plot}
          </p>
        )}
        
        <a
          href={`https://www.playimdb.com/title/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-lafred hover:bg-red-700 text-white font-dm font-medium text-sm px-4 py-1.5 rounded-md mt-2 transition-colors w-fit"
        >
          Watch for free
        </a>
      </div>
    </div>
  );
};

export default ResultCard;
