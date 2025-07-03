import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add environment variable logging for debugging
const nodeEnv = process.env.NODE_ENV || "development";
const hasDatabase = !!process.env.DATABASE_URL;
log(`Starting server in ${nodeEnv} mode`);
log(`Database URL configured: ${hasDatabase ? "Yes" : "No"}`);

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Graceful error handling for server startup
async function startServer() {
  try {
    log("Initializing server...");
    
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      log(`Error: ${message} (Status: ${status})`);
      res.status(status).json({ message });
      
      // Don't throw in production to prevent server crashes
      if (nodeEnv === "development") {
        throw err;
      }
    });

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (nodeEnv === "development") {
      log("Setting up Vite development server...");
      await setupVite(app, server);
    } else {
      log("Setting up static file serving...");
      serveStatic(app);
    }

    // ALWAYS serve the app on port 5000
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = 5000;
    
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`Server successfully started on port ${port}`);
      log(`Environment: ${nodeEnv}`);
      log(`Ready to accept connections`);
    });

    // Handle server errors
    server.on("error", (err) => {
      log(`Server error: ${err.message}`, "error");
      if (nodeEnv === "production") {
        // In production, try to gracefully handle the error
        process.exit(1);
      } else {
        throw err;
      }
    });

  } catch (error) {
    log(`Failed to start server: ${error instanceof Error ? error.message : String(error)}`, "error");
    
    // Log additional debugging information
    if (error instanceof Error) {
      log(`Stack trace: ${error.stack}`, "error");
    }
    
    // Exit with error code for deployment systems
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  log(`Unhandled Rejection at: ${promise}, reason: ${reason}`, "error");
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  log(`Uncaught Exception: ${error.message}`, "error");
  log(`Stack trace: ${error.stack}`, "error");
  process.exit(1);
});

// Start the server
startServer();
