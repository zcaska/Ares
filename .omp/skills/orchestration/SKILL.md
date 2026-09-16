---
name: orchestration
description: Execute the universal orchestration protocol using OMP-native task and agent capabilities without duplicating scheduler infrastructure.
---

# OMP Orchestration

Use the universal protocol as the durable contract and OMP-native mechanisms as the execution layer.

1. Establish or load the task contract before execution.
2. Inspect the consuming repository and only the relevant `.project-context/` artifacts.
3. Check whether objective, scope, acceptance criteria, constraints, or required verification are materially ambiguous.
4. Ask the human instead of guessing whenever such ambiguity blocks a sound decision. This applies during execution as well as at task start.
5. Keep simple work direct; delegate only when another OMP-native role materially improves quality, speed, isolation, or verification.
6. When delegating, provide a complete bounded task contract and required context; never rely on hidden conversation state.
7. Preserve universal lifecycle, clarification, evidence, and verification semantics regardless of OMP execution details.
8. Inspect actual repository state after work and run required verification.
9. Record durable evidence and update the task artifact.
10. On failed verification, repair or replan. On unresolved human-dependent intent, enter `NEEDS_HUMAN` rather than inventing a decision.
