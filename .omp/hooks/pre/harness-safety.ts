import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

const PROTECTED_PATTERNS: RegExp[] = [
  /(^|[;&|]\s*)rm\s+-rf\s+\//i,
  /git\s+push\s+--force(?:-with-lease)?\s+.*\b(?:main|master)\b/i,
  /git\s+clean\s+-[a-z]*x[a-z]*f/i,
  /(?:cat|type|Get-Content)\s+[^\n]*(?:\.env|id_rsa|credentials|token)/i,
  /(?:curl|wget|nc|Invoke-WebRequest)[^\n]*(?:\.env|id_rsa|credentials|token)/i,
];

export default function harnessSafety(pi: ExtensionAPI): void {
  pi.on("tool_call", async (event) => {
    if (event.toolName !== "bash") return;

    const command = String((event.input as { command?: unknown }).command ?? "");
    const matched = PROTECTED_PATTERNS.find((pattern) => pattern.test(command));

    if (matched) {
      return {
        block: true,
        reason:
          "Blocked by Harness-Engineering safety policy. The operation is potentially destructive or may expose credentials. Ask the human for an explicit decision and proceed only through an authorized, safer path.",
      };
    }
  });
}
