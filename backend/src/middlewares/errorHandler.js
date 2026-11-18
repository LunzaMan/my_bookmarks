// Custom error name : status
const customErrorList = {
  InvalidID: {
    status: 404,
    message: "Page not found: Bookmark ID is invalid",
  },
};

const errorHandler = (err, req, res, next) => {
  if (err.name == "Error") {
    const customError = customErrorList[err.message];
    console.log("Error Name: ", customError.status);
    res.status(customError.status).json(customError.message);
  }

  if (err.name == "SyntaxError") {
    res.status(400).json({ message: "Bad json sent" });
  }

  if (err.name == "ValidationError") {
    res.status(400).json({ message: err.message });
  }

  switch (err.status) {
    case 404:
      res.status(err.status).json({ message: "Address Not Found" });
      break;
    case 500:
      res.status(500).json({ message: "Internal Server Error" });

    default:
      return next(err);
  }
};

export default errorHandler;
