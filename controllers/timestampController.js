// endpoints logic go here

/*
Logic notes:
Check if the date is in the YYYY-MM-DD format
  return a date following this format {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
Check if the date is in the UNIX format
  return a date in this format {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
If not either then send invalid date
If empty then send the current time with a unix key
*/

exports.getTimeStamp = (req, res) => {
  let date = req.params.date;

  res.status(200).json({ message: date });
};
