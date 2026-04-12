import { asyncHandler } from "../utils/aysncHandler.js";

  console.log("hello");

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({

    message: "ok",
  });
});

export { registerUser };
