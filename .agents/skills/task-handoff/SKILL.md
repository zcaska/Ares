---
name: task-handoff
description: Prepare a bounded task for execution by another agent or the OMP harness using the shared protocol without relying on hidden conversation context.
---

# Task Handoff

Use this only when another execution endpoint materially improves the task.

1. Confirm objective and scope.
2. Confirm acceptance criteria and verification requirements.
3. Identify only the context needed by the receiver.
4. Record dependencies, constraints, current state, blockers, and unresolved questions.
5. Identify source and target harness/role.
6. Write the shared task/handoff artifact in the consuming project's `.project-context/tasks/`.
7. Do not transfer authority to weaken universal invariants.
8. After execution, consume the recorded evidence and verify repository state as required.

For OMP, target its native task execution rather than implementing a second scheduler in the universal layer.
