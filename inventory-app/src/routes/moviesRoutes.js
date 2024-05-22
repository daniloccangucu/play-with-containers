import express from "express";

import {
  getAllMovies,
  createMovie,
  deleteAllMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById,
} from "../controllers/moviesController.js";

const router = express.Router();

router.get("/", getAllMovies);
router.post("/", createMovie);
router.delete("/", deleteAllMovies);
router.get("/:id", getMovieById);
router.put("/:id", updateMovieById);
router.delete("/:id", deleteMovieById);

export default router;
