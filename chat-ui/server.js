const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const N8N_WEBHOOK =
  "http://localhost:5678/webhook/customer-support";

const publicDir = path.join(__dirname, "public");

const server = http.createServer(async (req, res) => {
  // Serve the chat UI
  if (req.method === "GET" && req.url === "/") {
    const html = fs.readFileSync(
      path.join(publicDir, "index.html"),
      "utf8"
    );

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    return res.end(html);
  }

  // Chat API
  if (req.method === "POST" && req.url === "/api/chat") {
    try {
      let body = "";

      req.on("data", chunk => {
        body += chunk;
      });

      req.on("end", async () => {
        const { customerName, message } = JSON.parse(body);

        if (!message || !message.trim()) {
          res.writeHead(400, {
            "Content-Type": "application/json",
          });

          return res.end(
            JSON.stringify({
              error: "Message is required",
            })
          );
        }

        const response = await fetch(N8N_WEBHOOK, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerName: customerName || "Guest",
            message: message.trim(),
          }),
        });

        const data = await response.json();

        res.writeHead(response.status, {
          "Content-Type": "application/json",
        });

        return res.end(JSON.stringify(data));
      });

      return;
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "application/json",
      });

      return res.end(
        JSON.stringify({
          error: "Failed to contact AI support",
        })
      );
    }
  }

  res.writeHead(404, {
    "Content-Type": "text/plain",
  });

  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log(`ShopSphere Chat UI running at http://localhost:${PORT}`);
});