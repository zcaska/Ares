---
name: orchestration
description: Apply the universal orchestration protocol to coding tasks, including context selection, clarification, delegation, verification, recovery, and cross-harness handoff.
---

# Orchestration Skill

1. Establish objective, scope, acceptance criteria, constraints, verification requirements, dependencies, and current state.
2. Inspect the repository and relevant project context before relying on assumptions.
3. Prefer authoritative, fresh context; do not load the entire project indiscriminately.
4. Ask the human when missing or contradictory information could materially change the implementation, acceptance, architecture, safety, or product behavior. Reassess this during execution.
5. Execute straightforward work directly. Decompose or delegate only when that materially improves quality, independence, parallelism, or specialist coverage.
6. For delegated work, preserve objective, bounded scope, relevant context, acceptance criteria, verification requirements, blockers, and expected evidence.
7. For OMP delegation, write the shared task/handoff artifact in the consuming project's `.project-context/tasks/`; never rely on hidden conversational state.
8. Inspect actual changes and perform proportional deterministic verification.
9. Repair objectively fixable failures and re-verify. If recovery requires a product decision, enter `NEEDS_HUMAN`.
10. Promote only verified durable knowledge into long-lived project context.

## Hard stop

If two materially different paths depend on unresolved product intent, stop the affected work and ask the human. Do not manufacture an assumption to keep execution moving.
