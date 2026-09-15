import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

export default function harnessObservability(pi: ExtensionAPI): void {
  pi.on("tool_result", async (event) => {
    if (!event.isError) return;

    pi.logger.warn("Harness-Engineering tool failure", {
      toolName: event.toolName,
      toolCallId: event.toolCallId,
    });
  });
}
