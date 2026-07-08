# Codex Local Assistant

A local web app for chatting with an OpenAI-powered coding assistant that can read, edit, and run commands inside your project folder.

- **UI:** `http://localhost:5173`
- **API server:** `http://localhost:8787`

## Features

- Streaming chat with real-time tool progress
- Read, write, and edit files inside a workspace
- Run shell commands in the workspace
- Multi-turn context via the OpenAI Responses API
- Edit previous messages and rewind the conversation
- Automatic file checkpointing when files are mutated
- Optional approval mode for mutating actions
- Multi-instance support with configurable ports

## Requirements

- Node.js 18+: https://nodejs.org
- Python 3: https://www.python.org
- An OpenAI API key: https://platform.openai.com/api-keys

## Quick Start

Run from the project root.

### macOS / Linux / WSL

```bash
bash start.sh
```

### Windows PowerShell

```powershell
python run_api.py
```

The launcher installs dependencies if needed, starts the server and UI, and opens `http://localhost:5173`.

### Clean Restart

If ports are stuck or builds look stale:

```bash
bash start.sh --clean
```

or

```powershell
python run_api.py --clean
```

Press `Ctrl+C` to stop.

## First Use

1. Open `http://localhost:5173`.
2. Click **New Chat**.
3. Enter your OpenAI API key.
4. Pick a **Workspace Folder** the assistant can work in.
5. Send a message.

## Running Multiple Instances

Use different ports for a second copy:

```powershell
$env:PORT="8788"; $env:UI_PORT="5174"; python run_api.py
```

or in Bash/WSL:

```bash
PORT=8788 UI_PORT=5174 bash start.sh
```

Then open `http://localhost:5174`.

## Configuration

| Service | Default | Variable |
|---------|---------|----------|
| API server | 8787 | `PORT` |
| Vite UI | 5173 | `UI_PORT` |

Client state (chats and API keys) is stored per origin in `localStorage`, so instances on different ports keep separate settings.

## Common Issues

- **`npm` missing** — install Node.js 18+ and reopen your terminal.
- **`python` missing** — install Python 3 and reopen your terminal.
- **Port already in use** — use `--clean` or pick different ports.
- **API key rejected** — verify the key and billing at https://platform.openai.com/api-keys.

## License

MIT
