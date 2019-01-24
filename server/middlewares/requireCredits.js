module.exports = ({user}, res, next) => {
  if (user.credits < 1) return res.status(403).send({error: 'Not enough credits!'});

  next();
};
