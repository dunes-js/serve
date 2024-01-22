
import type { Prom } from "@dunes/tools";
import { type Express } from "express"
import { Server } from 'http';
import { Server as IoServer } from "socket.io";

export interface ServerConfig {
  port: number
  host?: string
  assign(app: Express, express: typeof import("express")): Prom<void>
}

export interface ServerResult {
  io: IoServer
  server: Server
}
