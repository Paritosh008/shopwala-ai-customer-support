# 🛍️ ShopWala AI Customer Support Automation

An AI-powered customer support automation system built with **n8n, Claude, RAG, Ollama embeddings, Simple Vector Store, and Node.js**.

The project provides a customer-facing chat interface where an AI agent can understand support requests, search a PDF knowledge base, look up order information, and return concise answers through an automated n8n workflow.

## 🎥 Demo

Watch the ShopWala AI Customer Support Automation demo:

[▶️ Watch Demo Video](https://github.com/Paritosh008/shopwala-ai-customer-support/raw/refs/heads/main/demo/ShopWala_VC_Demo_Final_BGM_720p.mp4)

> **Note:** Upload `ShopWala_VC_Demo_Final_BGM_720p.mp4` to the repository inside the `demo/` folder for the video link above to work.

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
