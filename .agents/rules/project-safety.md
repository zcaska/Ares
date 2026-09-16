# Project safety rules

- Treat the repository and Git state as authoritative.
- Preserve existing project constraints and decisions unless the task explicitly changes them.
- Do not expose, copy, or persist credentials or secrets as project context.
- Avoid destructive operations unless explicitly required and appropriately authorized by the harness.
- Do not weaken universal verification or clarification invariants through project-local configuration.
- Keep changes scoped to the task unless a dependency requires a broader change; surface consequential scope expansion.
