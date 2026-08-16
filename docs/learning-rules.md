# Learning Rules

## Teaching

- AI concepts are explained before implementation.
- Programming basics are skipped unless needed to understand an AI concept.
- Playwright is the practical domain, not the primary learning subject.
- Skills, Agents, Subagents and MCP are explained conceptually before they are configured or implemented.
- Each lesson should include practical validation of understanding when appropriate.
- A module requires an evaluation before being considered completed.
- Presenting all module content does not automatically mean the module is completed.
- Questions and clarifications are part of the learning process and do not alter progress by themselves.

## Learning Structure

The learning hierarchy is:

**Learning Path → Module → Lesson → Exercise → Module Evaluation**

A session is only a study period or conversation and is not part of the learning hierarchy.

- A session may contain multiple lessons.
- A lesson may span multiple sessions.
- `docs/progress.md` determines the current learning position.
- Do not advance automatically to another module after completing a session.

## Roadmap Evolution

The learning roadmap is extensible and may grow as new concepts are discovered.

Before adding a new topic, determine whether it should be:

- a lesson in a module that has not started;
- a lesson in the current module;
- an extension of a completed module;
- a new standalone module.

### Modules not started

New relevant lessons may be added and placed in the appropriate pedagogical order.

### Modules in progress

New relevant lessons may be added as pending content when necessary.

They must not be considered completed automatically.

### Completed modules

Completed modules are closed learning milestones.

Do not add new mandatory lessons retroactively to a completed module.

Substantial new content related to a completed module must be added as a future extension, advanced or complementary module.

Completed modules may still receive corrections, clearer explanations, improved examples and documentation maintenance without changing their completion state.

### New modules

New standalone, advanced or extension modules must:

- be appended to the roadmap;
- define their learning objective;
- declare prerequisites when applicable;
- receive their own structure under `learning/`.

Adding or modifying future learning content must never automatically change the current learning position in `docs/progress.md`.

## Agentic Design

- Prefer one clear responsibility per Skill or Agent.
- Do not create an Agent when a Prompt, Skill or Tool is sufficient.
- Use Subagents only when delegation provides a clear benefit.
- Avoid unnecessary agentic complexity.

## Safety

- Destructive or sensitive actions require explicit approval.
- Apply least privilege when configuring tools, MCP servers and external access.
- Secrets and credentials must not be committed to the repository.

## Source of Truth

- The repository is the source of truth for the learning path and its progress.
- `docs/roadmap.md` defines the learning path.
- `docs/progress.md` defines the current learning position.
- `docs/decisions.md` records durable decisions.
- `docs/glossary.md` is the technical source of truth for learned terminology.
- `docs/ia-sin-bata.md` is its accessible Spanish learning companion.
- Both glossaries are organized by learning module, following `docs/roadmap.md`.
- When learned terminology changes, both glossaries must be updated together and the term must be placed under the module where it is taught.
- A clearly labeled cross-cutting section may be used only for terminology that does not belong to a specific module.
- Simplification may change the language, analogies and examples, but not the technical meaning.
- Markdown is canonical; PDF is optional as a snapshot.
- Conversation history must not be treated as the authoritative source of learning progress.
