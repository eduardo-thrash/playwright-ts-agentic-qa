# Theory

Content will be added progressively during the course.

## Lesson 01 — From deterministic software to probabilistic AI: what an LLM actually does

### 1. Problem it solves
Traditional software (including the Playwright suites in `src/`) is deterministic: given the same input and the same code, it produces the same output every time. That is exactly why `expect(x).toBe(y)` is a meaningful assertion — correctness has one right answer.
Most real-world QA input is not that clean: a bug report written in free text, a UI screenshot, a vague acceptance criterion, an unfamiliar codebase. Writing explicit rules to handle every phrasing/shape of that input does not scale. An LLM exists to turn ambiguous, unstructured input into useful output without being hand-coded for every case.

### 2. Conceptual explanation
An LLM does not "know" facts or "run" logic the way a program does. It is a statistical model trained on huge amounts of text that learned: *given this sequence of text, what text is likely to come next?*
It generates its response one small piece at a time by repeatedly predicting the most probable continuation. This is why two runs of the same prompt can produce slightly different wording — the model is sampling from a probability distribution, not executing a fixed algorithm. "Probabilistic" here means: likely-correct and reviewable, not guaranteed-correct like a compiler.

### 3. What happens technically
- **Tokens**: input and output text are split into tokens (roughly word-pieces, not whole words). "playwright" might be one token or split into pieces like "play" + "wright".
- **Inference**: the model takes the sequence of tokens seen so far (prompt + context) and computes a probability distribution over "what token comes next." It picks one (via a sampling strategy), appends it, and repeats until it decides to stop.
- **Determinism knob**: a parameter often called *temperature* controls how much randomness is used when picking the next token. Temperature 0 ≈ always pick the most likely token (closer to deterministic, still not guaranteed identical across all systems). Higher temperature = more variety, more risk of drifting off-topic.
- This loop — predict next token, append, repeat — is the entire generation mechanism. There is no separate "understanding" step and no built-in fact database being queried.

### 4. Manual example
Prompt: `"The capital of France is"` → the model assigns very high probability to the token `"Paris"`, so it (almost always) continues with it.
Prompt: `"Write one sentence describing what a QA engineer does."` → there is no single correct token sequence, so probability mass is spread across many valid phrasings. Asking twice can yield two different, both-reasonable sentences. That variability is normal and expected — it is not a bug, it's the nature of the mechanism in §2–3.

### 5. Applying it with a coding agent
Claude Code (this tool) is an LLM with tools wrapped around it (files, shell, search — covered in Module 05). The same probabilistic-generation mechanism applies to everything it writes: code, explanations, commit messages, plans. That is *why* Claude Code shows diffs for review instead of silently trusting its own output, and why this course's teaching method always ends with a manual/practical step instead of "trust the explanation." Verification is not paranoia, it is required by how the underlying mechanism works.

### 6. Applying it to QA Automation
This is the core mental model shift for QA work with AI:
- `expect(locator).toBeVisible()` → deterministic, one right answer, safe to assert on.
- "Does this login flow look correct?" asked to an LLM → probabilistic, plausible-sounding output that still needs a human or a deterministic check to confirm.
Consequence for this course: AI can *draft* Gherkin scenarios, suggest locators, or propose fixes, but the executable, versioned Playwright test remains the deterministic source of truth (see ADR-002). AI output is a draft to verify, not a result to trust — this theme returns in later modules (hallucinations, verification, human-in-the-loop).

## Lesson 02 — Model knowledge vs. supplied context — and why that leads to hallucinations

### 1. Problem it solves
Sometimes an LLM answers a question about your specific repo/data accurately; sometimes it states something wrong with total confidence. Knowing *why* tells you when to trust an answer as-is and when you must hand the model the actual source (file, log, test result) before trusting anything it says.

### 2. Conceptual explanation
There are two separate sources behind anything a model says:
- **Model knowledge (parametric knowledge)**: general patterns baked into its weights during training — frozen at a training cutoff date, statistical/general, not a live lookup into a database.
- **Supplied context**: whatever is actually placed in front of it right now — this conversation, files it read, tool output. Specific, current, authoritative for *this* task, but it only exists because it was explicitly given.
Generation (Lesson 01, §2–3) always works the same way: predict the most plausible next token. If the real answer isn't in model knowledge *or* supplied context, the model doesn't reliably stop and say "I don't know" — it keeps predicting a plausible-*sounding* continuation anyway. A fluent, confident, wrong answer is a **hallucination**. It is not lying; the generation mechanism has no built-in fact-check step.

### 3. What happens technically
- Weights encode statistics from training data up to a cutoff — no live internet/file access baked in.
- The context window (glossary: Context Window) is separate from the weights — it's the tokens visible for *this* call: system prompt, conversation, and any tool results (file reads, search results) added to it.
- When neither source has the real answer, the model pattern-completes on the *closest thing it has seen* — e.g. "a typical Playwright `login()` function looks like this" — and presents it with the same fluency as a grounded answer. Nothing in the surface style of the output signals "guessed" vs "grounded."
- This is exactly why Claude Code reads files (Read tool) before editing or explaining code, instead of answering from memorized patterns about "typical" projects.

### 4. Manual example
Ask an LLM "What does the `login()` function in this repo do?" without giving it the file → it produces a plausible generic answer based on common login-function patterns it has seen, which may or may not match your actual code. Ask again *after* pasting the real file content → the answer becomes grounded and specific. Same question, same model — the only variable is whether the real source was in context.

### 5. Applying it with a coding agent
Every time in this session a lesson or exercise referenced this repo, files were read first (`AGENTS.md`, `docs/roadmap.md`, `docs/progress.md`, `docs/decisions.md`) instead of answering from generic training patterns about "a typical learning repo." That's the practical defense against hallucination: ground the answer in supplied context instead of relying on model knowledge whenever the specific facts matter.

### 6. Applying it to QA Automation
Asking an AI "what does this test suite cover?" or "does this scenario handle X?" *without* feeding it the actual feature files/specs will get you a plausible-sounding but potentially wrong answer, built from generic Playwright/BDD patterns rather than your repo. Rule of thumb: any QA answer that depends on specific, current facts (this repo's coverage, this run's failures, this API's actual behavior) needs real supplied context, not the model's trained assumptions. This directly motivates Module 04 (Context Engineering) and Module 11 (Security/production restrictions — never trust ungrounded output for a release decision).
