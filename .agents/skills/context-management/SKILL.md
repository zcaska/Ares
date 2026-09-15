---
name: context-management
description: Select, validate, refresh, and promote project context without treating stale summaries or agent observations as authoritative.
---

# Context Management

1. Identify the current task and decision that needs context.
2. Inspect authoritative repository state first when relevant.
3. Select the smallest sufficient set of project-context artifacts.
4. Prefer verified and fresh context over historical summaries.
5. If context conflicts with the repository, investigate rather than blindly trusting either summary.
6. Mark or refresh potentially stale context when evidence warrants it.
7. Do not persist temporary task reasoning as durable project knowledge merely because it was generated.
8. Promote only verified, reusable facts, decisions, or state changes.
