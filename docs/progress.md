# Learning Progress

Last update: 2026-08-15

## Current module

Module 01 — AI and LLM fundamentals (in progress)

## Completed

- [ ] 01 AI and LLM fundamentals (Lessons 01–02 done, module not finished)
- [ ] 02 Coding agents and Claude Code
- [ ] 03 Prompt Engineering
- [ ] 04 Context Engineering
- [ ] 05 Tools
- [ ] 06 Skills
- [ ] 07 Agents
- [ ] 08 Subagents
- [ ] 09 MCP fundamentals
- [ ] 10 Playwright MCP
- [ ] 11 Security
- [ ] 12 Agentic workflows
- [ ] 13 Final Agentic QA project

## Current lesson

Module 01 / Lesson 02 — "Model knowledge vs. supplied context — and why that leads to hallucinations." (completed)

## Concepts understood

- LLM = statistical model predicting the next token, not a fact database or logic engine.
- Tokens: text is processed as word-pieces, not whole words.
- Inference: the model "running" now, generating output token by token from a prompt/context — distinct from training, which already happened.
- Temperature: a dial for how much randomness is used picking the next token (low = predictable/repeatable, high = varied/creative).
- Deterministic software (Playwright assertions) vs probabilistic model behavior (LLM output): same-meaning answers can have different wording across runs; this is expected, not a bug.
- Consequence for QA: AI output (drafts, suggestions) needs verification; the versioned Playwright/playwright-bdd suite stays the deterministic source of truth (ADR-002).
- Model knowledge (parametric, frozen at training cutoff) vs supplied context (specific, current, only exists if given) are two separate sources behind any answer.
- Hallucination: fluent, confident, wrong output produced when neither source has the real answer — generation has no built-in fact-check step, so tone never signals "guessed" vs "grounded."
- Practical defense: ground answers in real supplied context (read the actual file/data) instead of trusting model knowledge whenever specific facts matter — this is why Claude Code reads files before answering.

## Exercises completed

Exercise 01 (Module 01 / Lesson 01) — done. See `learning/01-ai-fundamentals/notes.md` for full result:
1. Same prompt asked 3 times: content stable, wording varied.
2. Identified a deterministic testing task (login with valid credentials) and a probabilistic one (generating login test cases).
3. Explained why ADR-002 keeps Playwright as the permanent suite (reproducibility vs an agent's variable judgment).

Exercise 02 (Module 01 / Lesson 02) — done. See `learning/01-ai-fundamentals/notes.md` for full result:
1. Guessed `src/pages/ExamplePage.ts` contents from filename/convention alone, then compared to the real file — general shape matched, specific details (locators, no `goto()`) did not.
2. Explained why answering "does this cover X?" without reading the file first is risky: fluent output gives a false sense of real knowledge even when it's a guess.

## Pending questions

None yet.

## Next lesson

Module 01 / Lesson 03:
"Context and the context window — what the model can actually see right now."
