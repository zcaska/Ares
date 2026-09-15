#!/usr/bin/env python3
"""Deterministic Antigravity PreToolUse safety gate.

The hook protects only clearly high-risk operations. It does not replace
Antigravity permissions or decide product intent.
"""

import json
import re
import sys

PROTECTED_PATTERNS = [
    r"\brm\s+-rf\b",
    r"\bgit\s+reset\s+--hard\b",
    r"\bgit\s+clean\s+-[a-z]*f",
    r"\bgit\s+push\s+--force(?:-with-lease)?\b",
    r"\b(?:sudo|su)\b",
    r"(?:curl|wget)[^\n|]*(?:\.env|id_rsa|credentials|token)[^\n|]*\|",
]


def main() -> int:
    try:
        payload = json.load(sys.stdin)
    except Exception:
        print(json.dumps({
            "decision": "force_ask",
            "reason": "Unable to parse hook input; require explicit approval.",
        }))
        return 0

    args = payload.get("toolCall", {}).get("args", {})
    command = str(args.get("CommandLine", ""))

    if any(re.search(pattern, command, re.IGNORECASE) for pattern in PROTECTED_PATTERNS):
        print(json.dumps({
            "decision": "force_ask",
            "reason": (
                "This command matches a protected high-risk operation. "
                "Explicit human approval is required; cached permission grants do not satisfy this gate."
            ),
        }))
        return 0

    print(json.dumps({"decision": "allow"}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
