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

  if (date === undefined || date.length < 1) {
    let currentDate = new Date();
    let utcFormat = currentDate.toUTCString();
    
    return res.json({ unix: currentDate.getTime(), utc: utcFormat });
  } else {
    // Check if the provided date is a valid in YYYY-MM-DD format
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    if (regex.test(date)) {
      let parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        let utcFormat = parsedDate.toUTCString();
        return res.json({ unix: parsedDate.getTime(), utc: utcFormat });
      }
    }

    return res.json({ error: "Invalid Date" });
  }
};

