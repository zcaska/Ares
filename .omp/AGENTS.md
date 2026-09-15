# Universal Harness Orchestration — OMP Context

OMP is a native execution harness for the universal orchestration protocol.

## Operating contract

- Treat the universal task protocol as the durable interoperability contract.
- Treat the repository and Git state as authoritative.
- Load only context relevant to the active task.
- Ask the human whenever required information is materially missing; this includes ambiguity discovered after implementation has started.
- Use OMP-native task agents, Skills, hooks, extensions, isolation, and model roles rather than recreating them in the universal layer.
- Keep simple tasks direct.
- Delegate only when delegation materially improves quality, reliability, speed, cost, isolation, or verification.
- Never claim completion without evidence.
- Preserve task lifecycle and clarification semantics across OMP execution.
- Cross-harness work is represented through the shared `.project-context/tasks/` artifacts; do not rely on hidden conversation state.

## Cross-harness role

When OMP determines that a portion of work is better suited to Antigravity, create or update the shared task artifact with the required objective, scope, context, acceptance criteria, verification requirements, evidence, and target harness. Do not invent missing product decisions.
