# Verification rules

- Completion is an evidence-backed state, not an agent assertion.
- Inspect the actual repository and Git diff before completion.
- Run required deterministic checks appropriate to the task.
- A failed required check prevents completion.
- An unperformed required check is not a pass.
- If verification exposes an unresolved product decision, stop the affected path and ask the human.
- Verification should be proportional to risk; do not impose heavyweight review on trivial work without justification.
