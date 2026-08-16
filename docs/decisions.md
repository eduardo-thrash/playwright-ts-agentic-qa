# Architecture Decisions

## ADR-001 — Repository is the source of truth
Conversation history is not considered reliable long-term course storage.

## ADR-002 — Playwright MCP does not replace the test suite
Playwright MCP is used by the coding agent for exploration and browser interaction.
Permanent tests remain versioned Playwright + playwright-bdd code.

## ADR-003 — AI topics first
Playwright/TypeScript/BDD are treated as the practical environment, not introductory subjects.

## ADR-004 — Markdown is canonical
PDF exports are optional snapshots. Markdown + Git remain editable and versionable.

## ADR-005 — Automation source lives in `src/`
The repository is treated as a real automation project, so source code lives directly under `src/` instead of a nested `project/` folder.

## ADR-006 — Two synchronized glossary views
`docs/glossary.md` is the technical source of truth for learned terminology.
`docs/ia-sin-bata.md` is its accessible Spanish learning companion.
Both are organized by learning module and must be updated together when new terminology is learned.
Terms that do not belong to a specific module are placed in a clearly labeled cross-cutting section.
