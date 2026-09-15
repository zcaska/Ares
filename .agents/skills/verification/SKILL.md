---
name: verification
description: Verify an engineering task using repository state, deterministic checks, review, and durable evidence before completion.
---

# Verification

1. Read acceptance criteria and required checks.
2. Inspect the actual Git diff and affected files.
3. Run the smallest set of checks that provides sufficient evidence.
4. Run all explicitly required checks.
5. Treat failures and unperformed required checks as non-completion.
6. Record evidence suitable for the shared task protocol.
7. If verification reveals unresolved product intent, stop and escalate to the human.
