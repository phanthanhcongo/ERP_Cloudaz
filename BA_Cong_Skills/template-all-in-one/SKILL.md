---
name: template-all-in-one
description: Create all-in-one BA document templates in the lead BA's style. Use when the user asks to generate or update a single business-analysis template for a project, especially when the output should be either a business-only template or a page-by-page template with Figma/screenshots.
---

# Template All In One

## Purpose
Create reusable all-in-one BA document templates that match the lead BA's style: concise title block, numbered sections, and detailed per-tab/per-page breakdowns.

## Use This Skill When
- The user asks to create or update a BA document template.
- The user wants the lead BA's writing style.
- The user needs a business-only template or a page-based template with Figma/screenshots.

## Inputs
- Project name.
- Module / Epic / Feature.
- Mode: `business-only` or `page-based`.
- If page-based: page list and Figma references.
- Scope, CTA/form rules, roles, notes.

If required inputs are missing, ask only for the missing ones.

## Output Rules
- Return markdown only unless the user asks otherwise.
- Keep the structure close to the reference style.
- Use short, concrete bullets and numbered sections.
- Do not add unrelated BRD/SRS theory.

## Structure Rules
- Start with a title block: document title, module, epic, feature, author, version.
- Use numbered sections and sub-sections.
- For each page/tab include:
  - short description
  - block list or table
  - CTA / action
  - form / input
  - rule / status / behavior
  - note
  - permission if relevant
- If business-only, organize by business section, workflow, rule, permission, and acceptance criteria.

## Template Sources
- `assets/Template_All_in_one/template_business_only.md`
- `assets/Template_All_in_one/template_page_based.md`
