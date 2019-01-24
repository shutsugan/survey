module.exports = ({user}, res, next) => {
  if (!user) return res.status(401).send({error: 'You must be logged in!'});

  next();
};
