const asyncHandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, rex, next)).catch((err) => next(err));
};

// export {asyncHandler}

// This is higher order function
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
