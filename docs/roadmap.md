# Learning Roadmap — AI + Claude Code + Agentic QA

## Goal

Go from zero AI/MCP/Claude Code knowledge to designing a QA Automation workflow where a coding agent can understand a repository, use reusable skills, delegate to specialized agents, explore a UI through Playwright MCP, generate/maintain BDD automation, execute tests and produce Allure reports.

## Module 01 — AI and LLM fundamentals
- AI, Generative AI and LLM
- Prompt, response and inference
- Tokens
- Context and context window
- Model knowledge vs supplied context
- Hallucinations
- Deterministic software vs probabilistic model behavior
- Verification

## Module 02 — Coding agents and Claude Code
- Chat assistant vs coding agent
- Repository awareness
- Read/edit/execute
- Sessions and context
- Permissions
- Human supervision
- Typical coding-agent workflow

## Module 03 — Prompt Engineering
- Objective, context, constraints and expected output
- Zero-shot and few-shot
- Examples as behavioral constraints
- Task decomposition
- Structured output
- Analysis vs implementation prompts
- Review prompts
- Evaluation criteria
- Avoiding unnecessary mega-prompts

## Module 04 — Context Engineering
- Prompt vs context
- Repository instructions
- Stable vs temporary context
- Progressive disclosure
- Documentation as agent context
- Keeping context relevant
- Context loss and recovery
- Project instruction files

## Module 05 — Tools
- What a tool is
- Tool calling
- Read / Write / Search / Shell
- Tool result → model → next action
- Tool permissions
- Tool failure handling

## Module 06 — Skills
- What a Skill is
- Prompt vs Skill
- Reusable procedures
- Inputs and outputs
- QA-oriented skills
- Designing small focused skills
- Skill versioning

## Module 07 — Agents
- Goal + instructions + context + tools
- Planning and execution loops
- Specialized agents
- Boundaries and responsibilities
- When not to create an agent

## Module 08 — Subagents
- Delegation
- Parent/child responsibilities
- Context isolation
- Parallel vs sequential work
- QA orchestrator pattern
- Avoiding overengineering

## Module 09 — MCP fundamentals
- Why MCP exists
- MCP Client
- MCP Server
- Tools
- Resources
- Prompts
- MCP vs API
- Lifecycle
- Permissions and trust boundaries

## Module 10 — Playwright MCP
- Browser as an agent tool
- Accessibility snapshots
- Navigation and interaction
- Exploration vs automated test execution
- UI discovery
- Test idea discovery
- Guardrails for destructive actions

## Module 11 — Security
- Authentication vs authorization
- API keys and tokens
- Secrets and `.env`
- Least privilege
- Tool permissions
- Approval gates
- Production restrictions

## Module 12 — Agentic workflows
- Observe → reason → act → verify
- Human-in-the-loop
- Retry and validation strategies
- Multi-agent QA workflow
- Preventing uncontrolled changes

## Module 13 — Final Agentic QA project

Use a real page supplied later.

Target flow:

1. Coding agent receives project context.
2. Playwright MCP explores the application.
3. UI Explorer identifies components, states and flows.
4. QA Agent performs risk analysis.
5. BDD Agent proposes scenarios.
6. Skills enforce Gherkin and architecture standards.
7. Automation Agent implements tests.
8. Playwright + playwright-bdd executes them.
9. Allure generates results/report.
10. Agent reviews failures and proposes fixes.
11. Human approves meaningful changes.

## Technical baseline included

The repository already includes:
- TypeScript
- Playwright
- playwright-bdd
- Gherkin
- Pages
- Actions
- Validations
- Fixtures
- Allure reporter
- screenshots/traces/video on failure
- notes for Playwright MCP
