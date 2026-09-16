# OMP Native Distribution

This directory is a distribution package for the consuming project's native OMP `.omp/` directory.

Copy the contents of this directory into the consuming repository's `.omp/` directory:

```text
omp/AGENTS.md        -> <project>/.omp/AGENTS.md
omp/RULES.md         -> <project>/.omp/RULES.md
omp/agents/          -> <project>/.omp/agents/
omp/skills/          -> <project>/.omp/skills/
omp/hooks/           -> <project>/.omp/hooks/
omp/extensions/      -> <project>/.omp/extensions/
```

This matches OMP's native project surfaces: task agents in `.omp/agents/`, Skills in `.omp/skills/`, hooks in `.omp/hooks/pre|post/`, and runtime extensions in `.omp/extensions/`.

## Native boundary

OMP remains responsible for native task execution, subagent lifecycle, model roles, isolation, extensions, hooks, and context loading. The universal repository supplies orchestration policy and reusable artifacts; it does not implement a replacement OMP runtime.

## Important

The distribution is designed to be copied into a consuming project. The source repository's `omp/` directory is not project state and is not the shared `.project-context/` directory.

Validate the installed OMP runtime after copying before enabling additional enforcement or model-routing configuration.
