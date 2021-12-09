import { Router } from "express";

const userrouter = Router();

userrouter.get("/users", (req, res) => {
  res.send("hello user");
});

export default userrouter;
