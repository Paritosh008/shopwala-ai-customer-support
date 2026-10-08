# 🛍️ ShopWala AI Customer Support Automation

An AI-powered customer support automation system built with **n8n, Claude, RAG, Ollama embeddings, Simple Vector Store, and Node.js**.

The project provides a customer-facing chat interface where an AI agent can understand support requests, search a PDF knowledge base, look up order information, and return concise answers through a

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

##📂 Project Structure

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

##💬 Example Customer Queries
The agent can handle questions such as:
Where is my order ORD-10245?
What is the return policy?
Where is my order ORD-10245, and what is the return policy?

##⚙️ How It Works
1. Knowledge Base Ingestion
The knowledge-base workflow reads the ShopWala PDF documents and loads them into the vector store.
PDF Files
   ↓
Document Loader
   ↓
Text Splitting
   ↓
Ollama Embeddings
   ↓
Simple Vector Store

##🐳 Run n8n with Docker
docker compose up -d
##🧠 Run Ollama
ollama pull nomic-embed-text

##💬 Run the Customer Chat UI
From the project root:
cd chat-ui
node server.js

##🔮 Future Improvements
- 🎫 Automatic support-ticket creation
- 👨‍💻 Human-agent escalation
- 🗄️ Real database integration for live orders
- 📱 WhatsApp customer support
- 📞 Voice customer support
- 🔐 Customer authentication
- 📊 Support analytics and monitoring
- 🌐 Production deployment

👨‍💻 Author
Paritosh Chaudhary
GitHub: @Paritosh008
Project Repository: ShopWala AI Customer Support
