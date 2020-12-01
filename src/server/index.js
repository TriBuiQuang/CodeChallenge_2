const app = require("http").createServer();

const PORT = process.env.PORT || 3231;

const io = (module.exports.io = require("socket.io")(app, {
   cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
   },
}));

const SocketManager = require("./SocketManager");

io.on("connection", SocketManager);

app.listen(PORT, () => {
   console.log("Connected to port:" + PORT);
});
