const login = (req, res) => {
  req.session.user = req.body;
  console.log("req.session.user: ", req.session.user);
  res.status(200).json(req.session.user);
};

const logout = (req, res) => {
  req.session.destroy();
  res.status(200).json(req.session);
};

const getUser = (req, res) => {
  res.status(200).json(req.session.user);
};

module.exports = {
  login,
  logout,
  getUser
};
