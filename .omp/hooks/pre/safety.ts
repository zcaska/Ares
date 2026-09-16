import type { HookAPI } from "@oh-my-pi/pi-coding-agent/extensibility/hooks";

const HIGH_RISK = [
  /\brm\s+-rf\b/i,
  /\bgit\s+reset\s+--hard\b/i,
  /\bgit\s+clean\s+-[a-z]*f/i,
  /\b(?:sudo|su)\b/i,
];

export default function safetyHook(pi: HookAPI): void {
  pi.on("tool_call", async (event, ctx) => {
    if (event.toolName !== "bash") return;

    const command = String((event.input as { command?: unknown }).command ?? "");
    if (!HIGH_RISK.some((pattern) => pattern.test(command))) return;

    if (!ctx.hasUI) {
      return {
        block: true,
        reason: "Protected high-risk command requires explicit human approval.",
      };
    }

    const approved = await ctx.ui.confirm(
      "Protected command",
      `Allow this high-risk command?\n\n${command}`,
    );

    if (!approved) {
      return { block: true, reason: "Human denied the protected command." };
    }
  });
}
