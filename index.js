const http = require("http");
const port = process.env.PORT || 8000;

const stopServer = err => {
  console.error("An error has occured!\n", err);
  process.exit(1);
};

http
  .createServer((req, res) => {
    res.write("Hello, world!\n...also gmem.");
    res.end();
  })
  .listen(port, err =>
    err
      ? stopServer(err)
      : console.log(`Server running...\nhttp://localhost:${port}`)
  );
