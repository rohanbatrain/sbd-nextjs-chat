# sbd-nextjs-chat

The **Chat Module** is a sophisticated conversational interface for the Second Brain Database. It leverages LLMs and RAG (Retrieval-Augmented Generation) to allow users to interact with their knowledge base naturally. Taken from 

## Features

-   **AI Chat**: Chat with your Second Brain using advanced LLMs.
-   **RAG Integration**: Retrieve relevant context from your database.
-   **Real-time Updates**: Live chat experience.
-   **Monorepo Structure**: Managed with Turbo for efficient development.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Language**: TypeScript
-   **Build System**: [Turbo](https://turbo.build/)
-   **Styling**: Tailwind CSS
-   **Linting**: ESLint, Prettier

## Prerequisites

-   Node.js 20+
-   pnpm (recommended)

## Getting Started

1.  **Install dependencies**:
    ```bash
    pnpm install
    ```

2.  **Run the development server**:
    ```bash
    pnpm dev
    ```
    This command runs both the web and agent services concurrently.

3.  **Build**:
    ```bash
    pnpm build
    ```

## Scripts

-   `pnpm dev`: Start development servers.
-   `pnpm build`: Build all packages.
-   `pnpm lint`: Lint all packages.
-   `pnpm format`: Format code.

## License & Credits

https://github.com/langchain-ai/agent-chat-ui
