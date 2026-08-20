# Requirements Analyst — Discussion Scripts (P1–P9 full wording)

> Reference for the `requirements-analyst` skill. Loaded on demand — the lazy-loaded companion to the
> always-loaded skill. The nine-probe checklist, core stances and quality bar live in `SKILL.md`; this
> file holds the full per-probe question scripts and the elicitation wording used by `/discuss-phase`.

## BA Elicitation — work through ALL nine probes

**P1. Problem & Success** — What problem, for whom, why now? What measurable outcome = success? If the request is a solution ("add a button"), ask for the underlying problem before accepting it.

**P2. Role & Permission Impact** — Which of the 6 roles (Admin/PMO/PM/Team Lead/Member + project roles) sees/uses this? New permission needed (LESSON Backend #40)? Project-scoped or global? Does any role need it HIDDEN?

**P3. Scope Negotiation (MoSCoW)** — Must / Should / Could / **Won't (this phase)**. The Won't list is mandatory and explicit — it is the anti-scope-creep contract (Process #10; Phase 137 needed 4 follow-ups because this was never asked).

**P4. Acceptance Criteria** — For each Must: numbered `AC-{n}` in Given/When/Then form, concrete values not adjectives ("loads in <1s for 50k nodes", not "fast"). These become `T-{phase}-{nn}` TESTPLAN rows at `/plan`.

**P5. NFR Checklist (repo-specific)** — walk every line:
- RBAC: permission + `RequirePermission` middleware? (BE #40)
- Audit: create/update/delete logged? (BE #39)
- Pagination for any list? (BE #14) · English-only UI (FE #1) · 255-char inputs (BE #26)
- Pencil design to match 1:1? Which screen ID? Light + dark?
- Performance target vs SPEC (10k users / 100 projects / 50k WBS nodes)? ⇒ a **numeric perf AC** (query-count bound or latency budget) for any scale-target endpoint (QUALITY_POLICY C2)

**P6. Data & Edge Cases** — Source of truth? Backfill/migration for existing rows? Empty-state (135: verify hit an empty table)? Duplicates/case-sensitivity (BE #30)? Timezone (FE #23)? Recurring items? Concurrency?

**P7. Assumptions & Open Questions** — List every assumption you're making (feeds `/list-phase-assumptions`). Open questions get an owner: USER decides vs RESEARCH answers.

**P8. Business Rules & State Machine** — Surface the domain logic code will otherwise guess. For each behaviour ask:
- **Lifecycle / state machine:** if the entity has states, build the FULL transition table (see `references/decisions-template.md`) — every state listed, and for each legal `from → to`: who (actor/permission), the guard/condition, and side-effects (notify, timestamp set, derived field recomputed). Then every ILLEGAL transition → its response (400/409). Terminal states, re-open rules, delete-in-use.
- **Derived / calculated values:** any value computed from others? Give the exact formula AND the source of truth (e.g. priority = Impact×Urgency matrix, server-authoritative) + when it recomputes + rounding. A derived value is a `BR-n`, NOT a user input field.
- **Cross-entity invariants:** rules spanning two records (e.g. a workflow's dept must equal the request type's dept, else 400/409).
- **Defaults & conflicts:** default when a field is omitted? PUT-replace vs PATCH-merge semantics? Behaviour on duplicate / concurrent edit (lost update) / conflict?
Write each as a numbered `BR-{n}` — each becomes its own AC + test (a legal transition proven AND ≥1 illegal transition rejected). Don't let a rule live only "in the code".

**P9. Field & Validation Sweep (per field)** — Walk EVERY input field of EVERY form/endpoint this phase adds or edits against the 12 dimensions in [`.gsd/FIELD_SPEC_TAXONOMY.md`](../../../../.gsd/FIELD_SPEC_TAXONOMY.md) (FS-1…FS-12). Per field, resolve each cell of its Validation-Matrix row:
- **Identity (FS-1):** meaning; user-entered / system-set / derived (derived ⇒ a `BR-n`, no client field).
- **Requiredness (FS-2):** required / optional / **conditionally required** (only when another field or state holds); create vs update.
- **Type & bounds (FS-3/4/5):** type (string/int/decimal/date/enum/FK/money…); min/max length (cap 255, BE #26); numeric/temporal range + inclusivity.
- **Format & set (FS-6/7):** pattern (email/phone/slug/regex) + normalization (trim/case-fold); enum/allowed-set, static-vs-table source, retired-option behaviour, FK must exist AND be in scope (dept/project/team).
- **Default/null & uniqueness (FS-8/9):** default; absent vs null vs `""`; unique? scope (global / per-parent), case-sensitivity, soft-deleted collisions (→409).
- **Cross-field & mutability (FS-10/11):** start<end / total==Σ / A-required-if-B; set-once vs editable-in-which-state; who may see vs edit the field (field-level RBAC), masking.
- **Enforced-where (FS-12) — decide EXPLICITLY:** client-UX (exact inline message, English) / server-400 (+ stable error code) / DB constraint. Client validation is UX and mandatory on every submit handler (UIUX_POLICY §D4, LESSON FE #7/#56); the backend enforces security/integrity independently (BE #32). Security/ownership rules are **server-403, never trusted from the client**.

Each field carrying a rule → ≥1 validation AC phrased as a rejection with a concrete value (`title=""` → inline + 400), tagged with its edge category. A form whose fields have no matrix is NOT ready for `/plan`.

## Elicitation wording — ONE question at a time

Ask **one question at a time** and wait for the answer before the next — never dump a numbered list of questions in a single message. The nine probes are your internal checklist; walk them in order but surface only the single most important open decision now, with your recommendation + why. Let each answer shape the next question (an answer often closes or reframes later probes). Start with P1 framing, confirm it, then proceed probe by probe. Ask ONLY questions the user can answer; route technical unknowns to `/research-phase`. Once enough is settled, present the Won't-have list for a final confirmation.

## Gathering user input

Ask → wait → record → ask the next (one question per turn). Listen for scope decisions, approach picks, constraints not in SPEC, priority calls. Push back (politely) when an answer contradicts SPEC, an NFR, or a LESSON — cite the rule.
