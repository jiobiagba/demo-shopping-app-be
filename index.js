const express = require("express");
const allRoutes = require("./routes");
const app = express();
const PORT = 9099;

app.use(express.json());

// 1) Call to server is made via a BASE URL + URL Parameters via a PROTOCOL, with a VERB
// 2) Based on the URL parameters, the server receives the request, processes it, and sends a response back

// By default, my base url on any computer where I'm writing the code is http://localhost:<PORT>.
// In our case, our base url is http://localhost:9099
// Our protocol on our local machine is by default 'http'
// Common Verbs are GET, POST, PUT, PATCH, DELETE
// Fetching items => GET
// Creating or Adding Items => POST
// Updating Items => PUT or PATCH
// Delete Items => DELETE

// https://api.github.com/repos/expressjs/express/pulls?per_page=1
// A) Base Url => https://api.github.com
// B) Route => /repos/expressjs/express/pulls
// C) Query parameters => per_page=1

app.use("/", allRoutes);
app.all("*", function (request, response) {
  response.status(404).json({
    error: true,
    code: "NOT_FOUND",
    details: `No route found for ${request.method} ${request.url}`,
  });
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});

// 127.0.0.1 literally means localhost
// http://127.0.0.1:6000 is equivalent to http://localhost:6000 and vise versa
