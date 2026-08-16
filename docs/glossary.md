# AI Glossary

Terms are grouped by the learning module where they are taught in
`docs/roadmap.md`. Cross-cutting project terminology is listed separately.

## Module 01 — AI and LLM fundamentals

### LLM
Large Language Model. A model that predicts/generates language based on the context it receives.
Analogy: like your phone's autocomplete, but trained on almost all of the internet — it doesn't "think," it's just very good at guessing the next word.

### Token
A unit of text (roughly a word-piece) that a model reads and generates. Input and output length/cost are measured in tokens, not characters or words.

### Inference
The process of a model computing a probability distribution over the next token and generating output from it — the model "running," as opposed to the fixed training process that produced it.
Analogy: the moment the model is actually "working" to answer you right now, live — like the split second your phone takes to show word suggestions. Training already happened, way before; inference is what happens each time you ask something.

### Hallucination
A fluent, confident-sounding model output that is factually wrong — produced because generation always predicts a plausible continuation, even when the real answer isn't in the model's training knowledge or in the supplied context. Not lying: there is no built-in fact-check step, just pattern completion.

### Model Knowledge (Parametric Knowledge)
General patterns learned into a model's weights during training, frozen at a training cutoff date. Statistical/general — not a live lookup — as opposed to [[Context]], which is specific and supplied for the current task.

### Temperature
A generation parameter controlling how much randomness is used when picking the next token during inference. Lower = more deterministic/predictable output; higher = more varied output.
Analogy: how much the model is "allowed to improvise." Low temperature = the friend who always orders the same safe dish. High temperature = the friend who orders the weirdest thing on the menu "just to try something different."

### Prompt
Instruction or input supplied to the model.

### Context
Information available to the model for the current task.

### Context Window
Maximum amount of information the model can consider in a working context.

## Module 05 — Tools

### Tool
External capability an agent can invoke.

## Module 06 — Skills

### Skill
A reusable procedure or capability for a recurring class of task.

## Module 07 — Agents

### Agent
A system combining a model with goals, instructions, context and tools.

## Module 08 — Subagents

### Subagent
A specialized agent delegated a bounded task.

## Module 09 — MCP fundamentals

### MCP
Model Context Protocol. A protocol for exposing tools/context to AI applications in a standardized way.

### MCP Client
The AI application side that connects to an MCP server.

### MCP Server
A program exposing tools/resources/prompts through MCP.

## Module 12 — Agentic workflows

### Human in the Loop
A workflow where selected decisions/actions require human review or approval.

## Cross-cutting project terminology

### ADR (Architecture Decision Record)
Not an AI term — a general software-engineering practice used in this repo. A short, versioned document that records a significant technical decision and *why* it was made, so the reasoning isn't lost over time. In this repo they live in `docs/decisions.md` as ADR-001, ADR-002, etc.
Example: ADR-002 — Playwright MCP is used by the coding agent for exploration/browser interaction, but the permanent test suite stays versioned Playwright + playwright-bdd code, not agent-driven checks. Ties back to Lesson 01 (deterministic vs probabilistic): exploration = the agent's variable judgment; the permanent test = reproducible and deterministic.
