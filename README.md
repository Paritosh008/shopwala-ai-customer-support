# 🛍️ ShopWala AI Customer Support Automation

ShopWala AI Customer Support Automation is a production-style customer support system built with **n8n, Claude, RAG, Ollama, Simple Vector Store, and Node.js**.

The system allows customers to ask support questions through a web chat interface. The AI agent can understand the request, search the company's knowledge base, look up order details, and provide accurate responses without relying on hardcoded answers.

## 🚀 Features

- 🤖 AI-powered customer support agent
- 🔎 RAG-based knowledge retrieval
- 📦 Order status lookup using an n8n workflow tool
- 🚚 Shipping and delivery information
- ↩️ Return and exchange policy support
- 💰 Refund and payment information
- 🧠 Ollama `nomic-embed-text` embeddings
- 🗄️ Simple Vector Store for document retrieval
- 🔧 n8n AI Agent Tool integration
- 💬 Customer-facing web chat UI
- 🐳 Docker-based n8n setup
- 🔗 Webhook-based communication between UI and n8n

## 🏗️ Architecture

Customer Chat UI
↓
Node.js API Proxy
↓
n8n Webhook
↓
AI Agent (Claude)
├── Order Lookup Tool
└── RAG Knowledge Base
↓
Customer Response

## 🛠️ Tech Stack

- n8n
- Claude / Anthropic
- RAG
- Ollama
- Simple Vector Store
- Node.js
- JavaScript
- Docker
- Webhooks
- PDF Knowledge Base

## 📂 Project Structure

```text
shopwala-ai-customer-support/
├── chat-ui/
│   ├── public/
│   │   └── index.html
│   └── server.js
├── knowledge/
│   ├── shopwala-exchange-policy.pdf
│   ├── shopwala-orders-account-help.pdf
│   ├── shopwala-payment-refund-policy.pdf
│   ├── shopwala-return-policy.pdf
│   └── shopwala-shipping-delivery.pdf
├── n8n/
│   ├── AI Customer Support Automation.json
│   ├── Order Lookup Tool.json
│   └── ShopWala Knowledge Base.json
├── docker-compose.yml
├── .gitignore
└── README.md
