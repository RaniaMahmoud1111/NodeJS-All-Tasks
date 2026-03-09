import { validationResult } from "express-validator";
import HTTPError from "../util/httpError.js";

export default (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HTTPError(400, "Validation Error");
    error.errors = errors.array();
    return next(error);
  }

  next();
};