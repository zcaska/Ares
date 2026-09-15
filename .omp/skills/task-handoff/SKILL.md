---
name: task-handoff
description: Consume and produce shared task and handoff artifacts when work crosses harness or agent boundaries.
---

# OMP Task Handoff

Use shared protocol artifacts for durable transfer.

- Read objective, scope, acceptance criteria, constraints, context references, blockers, questions, and verification requirements.
- Treat the consuming project's `.project-context/tasks/` as the durable cross-harness boundary.
- Do not assume hidden conversational context from AGY or another agent.
- Preserve universal invariants when executing a received task.
- Record status, evidence, blockers, and unresolved questions in the task/handoff artifact.
- Return control to the receiving orchestrator with enough durable evidence to continue verification.
- Use OMP's native task execution rather than creating a second scheduler in the universal repository.
