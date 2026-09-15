# Verification rules

- Completion is evidence-backed, never an agent assertion.
- Inspect repository state and the actual Git diff before completion.
- Run required deterministic checks.
- A failed required check prevents completion.
- An unperformed required check is not a pass.
- Verification proportionality is based on task risk.
- If verification exposes unresolved product intent, enter `NEEDS_HUMAN` and stop the affected path.
