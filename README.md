# LAFlix

A complete Vite + React app for searching movies using the OMDb API.

## Setup Instructions

1. Obtain a free OMDb API key at [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx).
2. Create a `.env` file in the project root and add your API key:
   ```
   VITE_OMDB_API_KEY=your_omdb_api_key_here
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Features

- Search for movies by title
- Displays a list of matching movies with posters, titles, years, and IMDb IDs
- Click "View on IMDb" to open the movie's page on IMDb
