// endpoints logic go here

exports.getTimeStamp = (req, res) => {
  let date = req.params.date;

  res.status(200).json({ message: date });
};
