# Playwright MCP Setup Notes

Playwright MCP is separate from the automated Playwright test suite.

## Claude Code

```bash
claude mcp add playwright npx @playwright/mcp@latest
```

## Purpose

Use Playwright MCP so a coding agent can:

- open the target application
- inspect accessibility structure
- navigate flows
- identify components and states
- gather information before proposing tests

Do not treat MCP interaction as a replacement for committed BDD tests.
