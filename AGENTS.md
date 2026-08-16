# Agentic QA — Project Instructions

## Objective

Use this repository both as:

1. a learning environment for AI / coding-agent concepts;
2. a real Playwright BDD automation project.

Final target stack:

- TypeScript
- Playwright
- playwright-bdd
- Gherkin
- Allure
- MCP
- Playwright MCP
- Skills
- Agents
- Subagents

## Learner profile

Existing strengths:

- Programming: intermediate
- QA Automation: advanced
- Playwright / BDD / Gherkin: experienced

Starting knowledge:

- AI / LLM: beginner
- Claude Code: beginner
- MCP: beginner
- Skills / Agents / Subagents: beginner

Do not spend time teaching basic programming or Playwright unless needed to explain an AI concept.

## Repository structure

- `src/` → automation source
- `learning/` → learning modules
- `docs/` → roadmap, progress, technical and accessible glossaries, and architectural decisions
- `prompts/` → reusable learning prompts
- `.claude/` → Claude Code-specific assets added progressively

## Learning hierarchy

The learning structure is:

1. Learning Path
2. Module
3. Lesson
4. Exercise
5. Module Evaluation

A learning session is not part of the academic hierarchy. It represents only the period of time or conversation used to study.

A session may:

- contain multiple lessons;
- contain only part of one lesson;
- include questions, clarifications and additional examples;
- end without completing the current lesson or module.

`docs/progress.md` determines the current learning position.

## Before continuing a lesson

Read:

1. `docs/roadmap.md`
2. `docs/progress.md`
3. `docs/decisions.md`
4. the current module under `learning/`

Use `docs/progress.md` to determine:

- current module;
- current lesson;
- completed content;
- pending content;
- next lesson.

Do not repeat completed lessons unless requested.

Do not automatically advance to another lesson or module unless the current learning state allows it.

## Teaching method

For each new AI concept:

1. Explain the problem it solves.
2. Explain it conceptually.
3. Explain what happens technically.
4. Give a simple manual example.
5. Apply it with a coding agent.
6. Apply it to QA Automation.
7. Give a practical exercise.
8. Update glossaries/progress when appropriate.

When new AI terminology is learned:

- update `docs/glossary.md` with the concise technical definition;
- update `docs/ia-sin-bata.md` with the accessible Spanish explanation;
- place the term in both files under the module where it is taught in `docs/roadmap.md`;
- use a clearly labeled cross-cutting section only when a term does not belong to a specific module;
- preserve the same term names and conceptual meaning in both files;
- treat `docs/glossary.md` as the technical source of truth and `docs/ia-sin-bata.md` as its learning-friendly companion.

Questions, clarifications, alternative explanations and related discussions during a lesson are part of the learning process and must not alter the learning position unless they result in an explicitly completed lesson or exercise.

## Module completion

A module must not be considered completed only because all its content has been presented.

Before completing a module:

1. verify that all required lessons are completed;
2. perform the module evaluation;
3. confirm that the learner demonstrates sufficient understanding of the module objectives;
4. register unresolved topics when applicable.

Only after successful evaluation:

- mark the module as completed in `docs/progress.md`;
- determine the next module from `docs/roadmap.md`;
- prepare the next module as the new current module.

Do not automatically start the first lesson of the next module unless explicitly requested.

## Learning Roadmap Evolution

The learning roadmap is intentionally extensible.

New concepts discovered during day-to-day work may be incorporated into the learning path without losing or invalidating existing learning progress.

When a new topic is proposed, first evaluate:

1. what the concept is;
2. whether it belongs to an existing module;
3. whether it requires prerequisites;
4. whether it has enough scope to justify a new module;
5. the status of the module where it would conceptually belong.

Do not modify the roadmap before performing this evaluation.

### Existing module not started

If the concept belongs to a module that has not started:

- add it as a lesson to that module when pedagogically appropriate;
- place it in the correct learning order;
- update the module content and roadmap when necessary.

### Existing module in progress

If the concept belongs to the current module:

- determine whether it is required for the module objectives;
- add it as a pending lesson when appropriate;
- place it in the correct pedagogical order;
- do not mark it as completed automatically.

The current learning position must remain accurate after the change.

### Existing module completed

Completed modules are considered closed learning milestones.

Do not silently add new required lessons to a completed module.

If substantial new content conceptually belongs to a completed module:

- preserve the completed module and its completion state;
- create a future extension, advanced or complementary module;
- append that module to the learning roadmap;
- reference the completed module as a prerequisite when appropriate.

Example:

```text
03 — Prompt Engineering ✓
        │
        └── prerequisite
                ↓
14 — Advanced Prompt Engineering
```

A completed module may still receive:

- typo corrections;
- factual corrections;
- clearer explanations;
- improved examples;
- documentation maintenance.

These changes must not introduce new mandatory learning objectives into the completed module.

### New standalone topic

If the concept does not reasonably belong to an existing module and has sufficient scope:

- create a new module;
- append it to the roadmap;
- define its objective;
- define prerequisites when applicable;
- create its corresponding structure under `learning/`.

### Progress preservation

Extending the roadmap must never automatically change the learner's current position in `docs/progress.md`.

For example:

```text
Current:
Module 05 — Tools
Lesson 03

New module added:
Module 14 — RAG
```

The learner remains at:

```text
Module 05 — Tools
Lesson 03
```

until the normal learning progression reaches the new module.

### Recommendation before modification

When the learner presents a new concept without specifying where it belongs:

1. analyze the concept;
2. recommend whether it should be:
   - a lesson in a future module;
   - a lesson in the current module;
   - an extension of a completed module;
   - a new standalone module;

3. explain the reasoning briefly;
4. only then update the roadmap when requested.

## Session close

Update `docs/progress.md` with:

- current module;
- current lesson;
- lessons completed during the session;
- concepts understood;
- exercise results;
- unresolved questions;
- next lesson.

Add durable decisions to `docs/decisions.md`.

When new terminology has been learned, update both:

- `docs/glossary.md` with the concise technical definition;
- `docs/ia-sin-bata.md` with the accessible Spanish explanation, analogy, QA example and relevant warning.

Keep both glossaries organized by learning module. Place each term under the module where it is taught in `docs/roadmap.md`; use a clearly labeled cross-cutting section only if it does not belong to a specific module. Verify that both versions preserve the same technical meaning.

Closing a session must not automatically mark the current module as completed or advance to another module.
