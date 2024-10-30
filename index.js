const express = require("express");
const { ExpressPeerServer } = require("peer");
const cors = require("cors") ;
const app = express();

app.use(cors()) ;
app.get("/", (req, res, next) => res.send("Hello world!"));

const http = require("http");

const server = http.createServer(app);
const PORT = process.env.PORT || 9000;
const peerServer = ExpressPeerServer(server, {
	debug: true,
	path: "/myapp",
});

app.use("/peerjs", peerServer);

server.listen(PORT , ()=>{
    console.log("Peerserver is running")
});

// ========