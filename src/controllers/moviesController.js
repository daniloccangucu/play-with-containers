import Movie from "../models/Movie.js";
import { pool } from "../config/db.js";

export const getAllMovies = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM movies");
    const movies = result.rows.map(
      (row) => new Movie(row.id, row.title, row.description)
    );
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
