import Movie from "../models/Movie.js";
import { Op } from "sequelize";

export const getAllMovies = async (req, res) => {
  try {
    const { title } = req.query;
    let whereClause = {};

    if (title) {
      whereClause = {
        title: {
          [Op.iLike]: `%${title}%`,
        },
      };
    }

    const movies = await Movie.findAll({ where: whereClause });
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: `Error fetching movies: ${error}` });
  }
};

export const createMovie = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newMovie = await Movie.create({
      title,
      description,
    });

    res.status(201).json(newMovie);
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).json({ error: `Error creating movie: ${error}` });
  }
};

export const deleteAllMovies = async (_req, res) => {
  try {
    const result = await Movie.destroy({ truncate: true });
    if (result !== 0) {
      res.status(200).json({ message: `Movies were not deleted.` });
    } else {
      res.status(200).json({ message: `All movies deleted.` });
    }
  } catch (error) {
    console.error("Error deleting movies:", error);
    res.status(500).json({ error: `Error deleting movies: ${error}` });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error("Error getting movie:", error);
    res.status(500).json({ error: `Error getting movie: ${error}` });
  }
};

export const updateMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const [updated] = await Movie.update(
      { title, description },
      { where: { id } }
    );

    if (updated === 0) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json({ message: "Movie updated successfully" });
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({ error: `Error updating movie: ${error}` });
  }
};

export const deleteMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Movie.destroy({
      where: { id },
    });

    if (deleted === 0) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ error: `Error deleting movie: ${error}` });
  }
};
