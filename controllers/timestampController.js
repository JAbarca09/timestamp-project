exports.getTimeStamp = (req, res) => {
  let date_string = req.params.date;

  if (date_string === undefined || date_string.length < 1) {
    let currentDate = new Date();
    let utcFormat = currentDate.toUTCString();

    return res.json({ unix: currentDate.getTime(), utc: utcFormat });
  } else {
    // Parse the date as a string
    let parsedDate = new Date(date_string);

    if (parsedDate.toString() !== "Invalid Date") {
      let utcFormat = parsedDate.toUTCString();
      return res.json({ unix: parsedDate.getTime(), utc: utcFormat });
    }

    // Check if the provided date is a valid UNIX timestamp
    let timestamp = parseInt(date_string);
    if (!isNaN(timestamp)) {
      let parsedUnixDate = new Date(timestamp);
      if (!isNaN(parsedUnixDate.getTime())) {
        let utcFormat = parsedUnixDate.toUTCString();
        return res.json({ unix: parsedUnixDate.getTime(), utc: utcFormat });
      }
    }
    
    return res.json({ error: "Invalid Date" });
  }
};
