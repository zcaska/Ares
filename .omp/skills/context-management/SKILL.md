---
name: context-management
description: Select and validate the minimum sufficient project context while keeping repository state authoritative.
---

# OMP Context Management

1. Identify the current task and decision that needs context.
2. Inspect authoritative repository state first when relevant.
3. Select the smallest sufficient set of `.project-context/` artifacts.
4. Prefer fresh, verified context over historical summaries.
5. If context conflicts with repository evidence, investigate instead of silently choosing a side.
6. Do not promote temporary reasoning into durable project knowledge.
7. Persist only verified, reusable facts, decisions, or state changes.
