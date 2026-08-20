# Requirements Analyst — DECISIONS.md Phase-Section Template

> Reference for the `requirements-analyst` skill. Loaded on demand — the lazy-loaded companion to the
> always-loaded skill. The AC quality bar and completeness map live in `SKILL.md`; this file holds the
> full DECISIONS.md phase-section template, the Validation Matrix template, and the AC Traceability
> check used by `/discuss-phase` §5.

## Document Decisions

Update `.gsd/DECISIONS.md`:

```markdown
## Phase {N}: {name}
**Date:** {date} · **Problem:** {1 line} · **Success metric:** {measurable}

### Scope (MoSCoW)
- MUST: … · SHOULD: … · COULD: …
- **WON'T (this phase):** …

### Acceptance Criteria
- AC-1: Given … When … Then …
- AC-2: …

### Business Rules
- BR-1: {state/transition/derivation/invariant, concrete} → AC-{n}
- BR-2: …

### State-Transition Table (per lifecycle entity — omit if none)
| From | To | Actor / permission | Guard / condition | Side-effects | Illegal-from → response |
|---|---|---|---|---|---|
| Open | Resolved | agent on fulfiller dept | resolution note set | set resolved_at, notify requester | from Closed → 409 |

### Validation Matrix (every input field of every form/endpoint touched — walk FS-1…FS-12)
| Field | Req? (cond) | Type | Len/Range | Format/Norm | Allowed set / FK-scope | Default·null | Unique (scope) | Cross-field | Mutability·field-RBAC | Client message | Enforced |
|---|---|---|---|---|---|---|---|---|---|---|---|
| title | yes | string | ≤255 | trim | — | — | — | — | editable | "Title is required" | both (400) |

> Any row with a rule ⇒ the field's label gets a red `*` on the UI (UIUX_POLICY §D4 / LESSON FE #57). Security/ownership rules are server-403, never client-trusted (BE #32).

### AC Traceability (completeness check before sign-off)
- Every `BR-n`, every matrix row with a rule, every legal + ≥1 illegal transition, every applicable role×action (EC-5) → maps to ≥1 numbered AC. List any rule with no AC here — write the AC or drop the rule.

### Roles & NFRs
- Roles: {who sees/does what} · Permission: {existing|new `x:y:z`}
- NFR hits: {audit? pagination? Pencil screen? perf target?}

### Decisions
- D1: Chose {option} over {alt} — {why}

### Assumptions / Open Questions
- A1: … · Q1 (USER): … · Q2 (RESEARCH): …
```
