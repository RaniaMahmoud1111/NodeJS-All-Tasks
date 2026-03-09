import HTTPError from "../../util/httpError.js";

export default (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const customError = new HTTPError(400, "Joi Validation Error");

      customError.errors = error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      }));

      return next(customError);
    }

    next();
  };
};