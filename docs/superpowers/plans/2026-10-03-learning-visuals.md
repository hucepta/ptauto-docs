# Learning Visuals Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make PTAuto Docs visually consistent and turn lessons/projects into understandable, illustrated workflows.

**Architecture:** Extend existing Astro content pages and content graph. One shared flow/output illustration component consumes canonical lesson/project metadata or article headings. The homepage RC demo uses short excerpts from the supplied AutoLISP file and a labeled SVG simulation. No new runtime dependency.

**Tech Stack:** Astro, TypeScript, CSS/SVG, Playwright, Vitest.

**Spec:** `docs/superpowers/specs/2026-10-03-learning-visuals.md`

## Global Constraints

- Preserve all published IDs and URLs and six technologies.
- Keep Vietnamese text, original API identifiers, keyboard support and reduced-motion behavior.
- Do not claim the RC file or host-dependent examples have run in CAD.
- Keep deployed Site access unchanged.

## Review Focus

- Long code and 390 px viewports must not create horizontal page overflow.
- A saved item on the homepage must come from real local progress; empty state must be useful.
- RC demo must show one correct excerpt per selected stage and visibly change the schematic.
- Project links, prerequisites and example IDs must resolve after the new grouping and diagrams.
- Scrollspy must update the current TOC link without stealing focus or breaking hash navigation.

---

### Task 1: Shared visual system and reading controls

**Files:** `src/styles/tokens.css`, `src/styles/reading.css`, `src/components/TableOfContents.astro`, `src/client/navigation.ts`, course/lesson pages, `tests/e2e/reading.spec.ts`.

- [ ] Add failing E2E checks for no grid background, progress placement, CTA label, accessible end buttons, scrollspy and mobile overflow.
- [ ] Apply one gradient atmosphere, readable surfaces, paragraph indent, table style and responsive button layout; remove first-result display.
- [ ] Add IntersectionObserver scrollspy with aria-current and hash fallback.
- [ ] Run focused E2E and visual screenshots.

### Task 2: Compact RC demo and homepage destinations

**Files:** `src/components/landing/CodeGeometryDemo.astro`, `src/client/landing.ts`, `src/styles/landing.css`, `src/pages/index.astro`, `src/components/landing/KnowledgeCard.astro`, `tests/e2e/landing.spec.ts`.

- [ ] Add failing E2E checks for one visible code step, RC-specific geometry, short cards, project/saved previews and beginner terms.
- [ ] Replace the stake demo with four faithful stages from `Road_Contours_Tool_VI.lsp`, compact SVG and controls.
- [ ] Make homepage previews derive from content graph and bookmark state; distinguish API reference from glossary.
- [ ] Run focused E2E and inspect desktop/mobile.

### Task 3: Explanatory lesson and exercise visuals

**Files:** `src/components/ArticleSteps.astro`, shared diagram component, relevant lesson/exercise content, `src/styles/reading.css`, `tests/e2e/reading.spec.ts`.

- [ ] Add failing checks that all published lesson pages have a real step flow and annotated output illustration, and exercises expose solution guidance.
- [ ] Build flow from authored `lesson.flow` or actual section headings, plus one clearly labeled outcome schematic for each technology.
- [ ] Rewrite IDE and Civil beginner pages, normalize generic headings and expand exercise explanation.
- [ ] Run content/build and reader E2E.

### Task 4: Project learning paths and release

**Files:** `src/pages/du-an/index.astro`, project detail page/component, all project Markdown sources or project schema, `src/styles/reading.css`, `tests/e2e/authoring.spec.ts`.

- [ ] Add failing checks for six project groups and an input → solution → validation flow and outcome illustration on each project.
- [ ] Add authored solution guidance to each of the 19 projects; render shared flow and technology-specific CAD/GIS schematic.
- [ ] Run `astro check`, lint, unit, full E2E, build-search and artifact verification; inspect visual screenshots.
- [ ] Publish the verified commit to the existing private Site and confirm successful deployment.
