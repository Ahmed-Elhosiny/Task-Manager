const {
  CustomAPIError,
} = require('../errors/custom-error');

module.exports = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message:
      'Somthing went wrong, please try again...',
  });
};
