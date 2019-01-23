module.exports = ({user}, res, next) => {
  if (!user) return res.status(401).send({error: 'Ypu must be logged in!'});

  next();
};
