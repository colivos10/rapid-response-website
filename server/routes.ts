import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactRequestSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          error: "Invalid request data",
          details: parsed.error.issues 
        });
      }
      
      const contactRequest = await storage.createContactRequest(parsed.data);
      
      return res.status(201).json({ 
        success: true,
        message: "Demo request received. We'll be in touch within 24 hours.",
        id: contactRequest.id
      });
    } catch (error) {
      console.error("Error creating contact request:", error);
      return res.status(500).json({ error: "Failed to submit request" });
    }
  });

  return httpServer;
}
