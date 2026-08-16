# Exercises

Exercises will be added progressively during the course.

## Exercise 01 — Deterministic vs probabilistic, in your own testing world

1. Ask Claude (plain chat, no coding-agent tools) the same question three times in separate messages:
   `"Write one sentence describing what a QA engineer does."`
   Compare the three answers. Note in `notes.md` what stayed the same and what varied.
2. From your own QA experience, write down in `notes.md`:
   - one testing task that is inherently **deterministic** (has exactly one right answer), and
   - one testing task that is inherently **probabilistic/judgment-based** (an LLM could plausibly help, but the output still needs verification).
3. One sentence: why does ADR-002 keep Playwright/playwright-bdd as the permanent test suite instead of letting an agent "just check the UI" each time?

## Exercise 02 — Model knowledge vs. real context (hallucination check)

1. Pick a file under `src/` that hasn't been read or discussed yet in this conversation. Ask Claude to *guess* its contents from the filename/path alone and general Playwright/BDD conventions — explicitly without reading it.
2. Then ask Claude to actually read that file, and compare the guess to the real content. In `notes.md`, note what matched (model knowledge of common patterns) and what didn't (repo-specific facts it could not have known).
3. One sentence: why is it risky for a QA agent to answer "does this test cover X?" before actually reading the test file?
