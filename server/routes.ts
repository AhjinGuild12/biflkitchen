import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for deployment systems
  app.get("/health", (req, res) => {
    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
      database: !!process.env.DATABASE_URL ? "configured" : "in-memory"
    });
  });

  // API status endpoint
  app.get("/api/status", (req, res) => {
    res.json({
      status: "ok",
      message: "BIFL Kitchen Directory API is running",
      timestamp: new Date().toISOString()
    });
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
