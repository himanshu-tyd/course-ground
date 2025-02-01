import app from "../backend/index.js";

export default async function handler(req, res) {
  app(req, res); // Pass requests to the Express app
}