# 🛍️ ShopWala AI Customer Support Automation

An AI-powered customer support automation system built with **n8n, Claude, RAG, Ollama embeddings, Simple Vector Store, and Node.js**.

The project provides a customer-facing chat interface where an AI agent can understand support requests, search a PDF knowledge base, look up order information, and return concise answers through an automated n8n workflow.

---

## 🚀 Features

- 🤖 AI-powered customer support agent
- 🧠 RAG-based knowledge retrieval from PDF policies
- 📦 Order lookup using an n8n workflow tool
- 🚚 Shipping and delivery support
- ↩️ Return and exchange policy support
- 💰 Payment and refund support
- 🔎 Vector-based document retrieval
- 🧩 n8n AI Agent tool integration
- 💬 Customer-facing web chat UI
- 🔗 Webhook-based communication
- 🐳 Docker-based n8n setup
- 🛡️ Designed to avoid inventing customer or order information

---

## 🏗️ Architecture

```text
Customer Web Chat
       │
       ▼
Node.js Chat UI / API Proxy
       │
       ▼
n8n Production Webhook
       │
       ▼
AI Agent (Claude)
       │
       ├──────────────► Order Lookup Tool
       │                 └── Mock Order Data
       │
       └──────────────► RAG Knowledge Base
                         ├── PDF Documents
                         ├── Ollama Embeddings
                         │   └── nomic-embed-text
                         └── Simple Vector Store
       │
       ▼
Customer Response
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **n8n** | Workflow automation and AI agent orchestration |
| **Claude / Anthropic** | LLM for customer support conversations |
| **RAG** | Retrieves relevant information from the knowledge base |
| **Ollama** | Local embedding generation |
| **nomic-embed-text** | Embedding model |
| **Simple Vector Store** | Stores and retrieves document embeddings |
| **Node.js** | Customer chat API proxy |
| **JavaScript** | Application and workflow code |
| **Docker** | Runs n8n in a container |
| **PDF** | Customer-support knowledge base |

---

## 📂 Project Structure

```text
shopwala-ai-customer-support/
│
├── chat-ui/
│   ├── public/
│   │   └── index.html
│   └── server.js
│
├── knowledge/
│   ├── shopwala-exchange-policy.pdf
│   ├── shopwala-orders-account-help.pdf
│   ├── shopwala-payment-refund-policy.pdf
│   ├── shopwala-return-policy.pdf
│   └── shopwala-shipping-delivery.pdf
│
├── n8n/
│   ├── AI Customer Support Automation.json
│   ├── Order Lookup Tool.json
│   └── ShopWala Knowledge Base.json
│
├── demo/
│   └── ShopWala_VC_Demo_Final_BGM_720p.mp4
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 💬 Example Customer Queries

The agent can handle questions such as:

```text
Where is my order ORD-10245?
```

```text
What is the return policy?
```

```text
Where is my order ORD-10245, and what is the return policy?
```

For order-related questions, the AI agent can call the **Order Lookup Tool**.

For policy questions, it can retrieve relevant information from the **RAG knowledge base**.

---

## ⚙️ How It Works

### 1. Knowledge Base Ingestion

The knowledge-base workflow reads the ShopWala PDF documents and loads them into the vector store.

```text
PDF Files
   ↓
Document Loader
   ↓
Text Splitting
   ↓
Ollama Embeddings
   ↓
Simple Vector Store
```

### 2. Customer Request

The web UI sends the customer's message to the Node.js server.

```text
Browser
   ↓
POST /api/chat
   ↓
Node.js
   ↓
n8n Webhook
```

### 3. AI Agent

The n8n AI Agent uses Claude to understand the request and select the appropriate tool.

For example:

```text
"Where is my order ORD-10245?"
            ↓
      AI Agent detects
       order request
            ↓
     Order Lookup Tool
            ↓
       Order information
            ↓
       Claude response
```

For policy questions:

```text
"What is the return policy?"
            ↓
         AI Agent
            ↓
      Vector Store Tool
            ↓
   Relevant policy chunks
            ↓
      Claude response
```

---

## 🐳 Run n8n with Docker

Make sure **Docker Desktop** is running.

From the project directory:

```powershell
docker compose up -d
```

Open n8n:

```text
http://localhost:5678
```

Check the container:

```powershell
docker ps
```

---

## 🧠 Run Ollama

Install Ollama on the host machine and make sure the embedding model is available:

```powershell
ollama pull nomic-embed-text
```

Verify:

```powershell
ollama list
```

The n8n Ollama embedding configuration uses:

```text
Base URL: http://host.docker.internal:11434/
Model: nomic-embed-text:latest
```

---

## 💬 Run the Customer Chat UI

From the project root:

```powershell
cd chat-ui
node server.js
```

Open:

```text
http://localhost:3001
```

The Node.js server forwards customer messages to the n8n production webhook.

---

## 🔗 n8n Workflows

The repository includes three main workflows.

### AI Customer Support Automation

Main workflow that receives customer messages, runs the AI Agent, uses tools, and returns the response.

### Order Lookup Tool

An n8n sub-workflow that accepts an order number and returns order information from the mock order dataset.

### ShopWala Knowledge Base

Workflow used to ingest the ShopWala PDF support documents into the vector store.

---

## 🔐 Environment & Security

Do **not** commit real API keys, credentials, or secrets.

Typical secret files should remain local:

```text
.env
.env.*
.n8n/
node_modules/
```

The repository `.gitignore` is configured to exclude sensitive and local development files.

The n8n workflow JSON files are exported workflow definitions and do not contain the n8n application database or credential store.

---

## 🎥 Demo

Watch the ShopWala AI Customer Support Automation demo:

[▶️ Watch Demo Video](https://github.com/Paritosh008/shopwala-ai-customer-support/raw/refs/heads/main/demo/ShopWala_VC_Demo_Final_BGM_720p.mp4)

> **Note:** Upload `ShopWala_VC_Demo_Final_BGM_720p.mp4` to the `demo/` folder in the repository for the video link above to work.

### Demo Flow

The demo shows a customer interacting with the AI support system through the web chat interface.

It includes:

- 📦 Order status lookup
- 🧠 Return policy retrieval using RAG
- 💰 Refund and payment policy questions
- 🔗 Combining order information and knowledge-base answers in one conversation

---

## 🔮 Future Improvements

- 🎫 Automatic support-ticket creation
- 👨‍💻 Human-agent escalation
- 🗄️ Real database integration for live orders
- 📱 WhatsApp customer support
- 📞 Voice customer support
- 🔐 Customer authentication
- 📊 Support analytics and monitoring
- 🌐 Production deployment

---

## 🎯 Portfolio Highlights

This project demonstrates practical experience with:

- **AI Agents**
- **RAG pipelines**
- **Vector databases / vector retrieval**
- **LLM tool calling**
- **n8n workflow automation**
- **Local embeddings with Ollama**
- **Webhooks and API integration**
- **Docker-based development**
- **Customer-support automation**

---

## 👨‍💻 Author

**Paritosh Chaudhary**

GitHub: [@Paritosh008](https://github.com/Paritosh008)

Project Repository: [ShopWala AI Customer Support](https://github.com/Paritosh008/shopwala-ai-customer-support)
