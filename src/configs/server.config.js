import express from "express";
import { readFile } from "fs/promises";

async function readJsonFile(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);
    console.log("JSON data:", jsonData);
    return jsonData;
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }
}

const server = express();

server.use("/", async (req, res) => {
  const data = await readJsonFile("/root/list.json");
  res.status(200).json(data);
});

export default server;
