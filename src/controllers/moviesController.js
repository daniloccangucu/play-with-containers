import Movie from "../models/Movie.js";

export const getAllMovies = async (_req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    // res.status(500).json({ error: 'An error occurred' });
    res.status(500).json({ error: `Error fetching movies: ${error}` });
  }
};
