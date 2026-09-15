---
name: verification
description: Verify OMP-executed work against the universal task contract using repository state and durable evidence.
---

# OMP Verification

- Read acceptance criteria and required checks from the task artifact.
- Inspect the actual repository and Git diff; do not approve from agent claims.
- Run all explicitly required deterministic checks.
- Treat failed or unperformed required checks as non-completion.
- Record concise evidence with the command/check, result, and relevant artifact or repository reference.
- If verification exposes unresolved product intent, stop the affected path and escalate to the human.
- Keep verification proportional to task risk.
