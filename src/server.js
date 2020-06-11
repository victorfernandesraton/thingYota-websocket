#!/usr/bin/env node

/**
 * Env decisio
 */
const path = require("path");
const envDecision = require("./utils/envDecision");

require("dotenv").config({
  path: path.resolve(__dirname, "./", envDecision(process.env.NODE_ENV)),
});

/**
 * Module dependencies.
 */
const env = require("../env/index");
const app = require("./app");
const http = require("http");

/**
 * Utils
 */

const normalizePort = require("./utils/normalizePort");

/**]
 * Controllers
 */

const { onError, onListening } = require("./controller/serverEvents");
const socketController = require("./controller/socket");

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(env.server.port || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.on("error", onError);
server.on("listening", onListening);

module.exports = server;
