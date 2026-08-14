async function readInput() {
  let raw = "";
  for await (const chunk of process.stdin) raw += chunk;
  if (!raw.trim()) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

await readInput();

process.stdout.write(JSON.stringify({
  additional_context:
    "If Perture is connected, check once for user-approved work associated with this workspace. Use only the host-managed connection and the server-provided scope. Continue silently when there is nothing pending. This does not authorize deployment, publication, destructive actions, or unrelated changes."
}));
