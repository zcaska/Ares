# OMP Native Boundary

This package defines the universal roles and behavioral invariants that OMP should express using its own native runtime.

The universal layer does not replace OMP's task system, agent execution, model routing, isolation, hooks, extensions, or other native mechanisms.

Use OMP-native mechanisms for:

- agent execution;
- task delegation;
- reusable Skills;
- project/session rules and context;
- model roles and capability routing;
- isolation/worktrees where appropriate;
- hooks/extensions where deterministic enforcement is required.

Use the shared universal protocol only for information that must survive a harness boundary: task identity, objective, scope, acceptance criteria, lifecycle, clarification, evidence, context references, and handoff state.

If an OMP capability is unavailable or unsuitable, record the gap and design the smallest interoperability mechanism required. Do not introduce a universal replacement for an OMP-native subsystem without evidence that it is necessary.
