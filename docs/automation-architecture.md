# Automation Architecture

```text
Feature (.feature)
      ↓
Step Definitions
      ↓
Actions / Validations
      ↓
Pages
      ↓
Playwright
      ↓
Browser
```

## Pages
Expose locators and UI structure.

## Actions
Represent user interactions and reusable business actions.

## Validations
Contain assertions.

## Steps
Translate Gherkin intent into automation calls.

## Fixtures
Own shared lifecycle/context where required.

## MCP boundary
Playwright MCP belongs to the coding-agent exploration workflow, not to deterministic test execution.
