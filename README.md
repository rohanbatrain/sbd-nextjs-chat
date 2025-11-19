# second-brain-database-chat

A Next.js chat UI for the **Second Brain Database** Python backend, using `@langchain/langgraph-sdk` for seamless integration.

## Overview

This frontend connects to the Second Brain Database Python backend through a LangGraph SDK-compatible API layer, providing a beautiful chat interface for conversational AI powered by LangGraph workflows.

## Architecture

- **Frontend**: Next.js 15 + React 19 + `@langchain/langgraph-sdk`
- **Backend**: Second Brain Database FastAPI (Python)
- **Integration**: LangGraph SDK-compatible API adapter layer

## Getting Started

### Prerequisites

1. **Python Backend Running**:
   ```bash
   cd /path/to/second_brain_database
   uv run uvicorn src.second_brain_database.main:app --reload
   ```

2. **Node.js 20 or later** and **pnpm**

### Installation

```bash
pnpm install
```

### Configuration

The `.env.example` is already configured for local development:

```bash
NEXT_PUBLIC_API_URL="http://localhost:8000"
NEXT_PUBLIC_ASSISTANT_ID="general"  # Options: general, vector_rag, master
```

Copy it to `.env` if you need custom configuration:
```bash
cp .env.example .env
```

### Running the Application

```bash
pnpm dev
```

The web UI will start at: **http://localhost:3000**

## Available Assistants

| Assistant ID | Description |
|--------------|-------------|
| `general` | General-purpose conversational AI |
| `vector_rag` | Vector search + Retrieval Augmented Generation |
| `master` | Intelligent workflow orchestrator |

Change the assistant by setting `NEXT_PUBLIC_ASSISTANT_ID` in your `.env` file.

## Authentication

The frontend uses the Second Brain Database authentication system:

1. Get a JWT token from the backend: `POST /auth/login`
2. The frontend will use this token automatically for API requests
3. For development, you may need to handle authentication in the browser dev tools

## Project Structure

```
apps/web/              # Next.js web application
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── providers/    # Context providers (Stream, Thread)
│   ├── lib/          # Utilities and helpers
│   └── hooks/        # Custom React hooks
```

## Backend Integration

The Python backend provides these LangGraph SDK-compatible endpoints:

- `GET /info` - Graph metadata
- `POST /threads` - Create thread
- `POST /threads/search` - List threads
- `GET /threads/{id}` - Get thread details
- `POST /threads/{id}/runs/stream` - Stream chat responses
- `GET /threads/{id}/state` - Get thread state
- `DELETE /threads/{id}` - Delete thread

The backend adapter automatically converts:
- **Threads** ↔ **Sessions** (ChatService)
- **Messages** ↔ **ChatMessages**
- **Streaming format** (LangGraph SDK ↔ AI SDK Data Stream Protocol)

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Lint code
pnpm lint
```

## Features

- 🎨 Modern, responsive UI with dark mode support
- 💬 Real-time streaming responses
- 📝 Message history and conversation management
- 🔍 Thread search and filtering
- ⚡ Optimistic UI updates
- 🎯 Multiple graph assistants
- 🔐 Secure authentication

## Documentation

For detailed integration documentation, see the main Second Brain Database repository.

## License

See the main repository for license information.
