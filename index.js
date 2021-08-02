// start your server here
const server = require('./api/server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`\n**** Listening on port: ${PORT} ****\n`);
});
