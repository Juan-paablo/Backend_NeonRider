const { userModel } = require("../models/user.models");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const data = req.body;
    const user = await userModel.findOne({ correo: data.correo });
    if (!user) return res.status(401).json({ error: "Correo invalido" });

    if (data.password !== user.password) {
      return res.status(401).json({ error: "Contraseña invalida" });
    }

    const token = jwt.sign(
      { correo: user.correo, id: user._id },
      process.env.SECRET_JWT_KEY,
      { expiresIn: "1d" }
    );

    // ⬇️ Tu frontend espera { token, id }
    res.status(200).json({ token, id: user._id });
  } catch (error) {
    res.status(500).json(error);
  }
};
