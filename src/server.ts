
  
import express from "express"
import http from 'http';
import { Server as IoServer } from "socket.io";
import type { ServerConfig, ServerResult } from "./index.js";


export async function serve({assign, port, host = "localhost"}: ServerConfig): Promise<ServerResult> {
  const app = express();
  await assign(app, express);
  const server = http.createServer(app);
  const io = new IoServer(server);
  await new Promise<void>(res => server.listen(port, host, res));

  return { io, server, port, host }
}