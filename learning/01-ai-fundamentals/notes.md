# Notes

Add personal notes, questions and conclusions here.

## Lesson 01 — Exercise 01 result

**Step 1 — same prompt asked 3 times:**
Content stayed stable (finding bugs / verifying quality / before release), wording varied each time. Confirms: model picks the highest-probability *meaning*, but samples different token sequences to express it.

**Step 2 — deterministic vs probabilistic testing task:**
- Deterministic: entering valid email + password in a login → grants access. Single correct outcome, safe to `expect()` on.
- Probabilistic: generating test cases to validate login behavior. No single correct set (rate limiting? case sensitivity? SSO?) — useful for an LLM to draft, but needs review before becoming a real test.

**Step 3 — why ADR-002 keeps Playwright as the permanent suite:**
Own answer: "porque ADR-002 permite que playwright siga unos estandares ya definidos, el agente puede variar el criterio."
Refinement discussed: the key reason is reproducibility, not standards — the agent's judgment is probabilistic and can vary run to run, while a versioned Playwright test gives the same, auditable result every time. Playwright MCP is for exploration (ADR-002); the permanent test stays deterministic.

## Lesson 02 — Exercise 02 result

**File chosen:** `src/pages/ExamplePage.ts`

**Guess (model knowledge only, file not read):** a `ExamplePage` Page Object class with `constructor(page: Page)`, several named `readonly` locators (e.g. a "get started" link), possibly a `goto()` method, no Actions/Validations logic mixed in.

**Actual content:**
```ts
import { type Page } from '@playwright/test';

export class ExamplePage {
  constructor(readonly page: Page) {}

  readonly heading = this.page.getByRole('heading', { level: 1 });
}
```

**Comparison:** the general *shape* (Page Object convention, constructor storing `page`, readonly locators, no Actions/Validations mixed in) matched — that's well-represented in training patterns. The *specific* details (only one generic `heading` locator, no `goto()`, no named links) did not match — those facts only exist in the real file and cannot be guessed.

**Step 3 — why is it risky for a QA agent to answer "does this cover X?" without reading the file first:**
Own answer: "Porque va a generar respuestas ingeniosas pero engañosas porque esta adivinando el contenido sin verlo antes. Esto va a generar una sensacion falsa de 'conocimiento real'." — confirmed: fluent phrasing does not signal whether an answer is grounded or guessed, which is exactly what makes hallucinations dangerous in QA contexts.
