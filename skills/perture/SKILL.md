---
name: perture
description: Use the Perture Integration Gateway for brand context, frontend contracts, and validation.
---

# Perture for Cursor

Use the local `scripts/perture-integration.mjs` adapter. The standalone adapter
binds every request to the `cursor` platform. Keep the bearer token in the
local environment only.

Workflow:

1. List brands only when a brand needs to be resolved.
2. Request compact context or a reference for the current task.
3. For frontend changes, retrieve the frontend contract before editing.
4. Run local checks and submit the complete report to the validation operation.
5. Summarize returned guidance without exposing private rules or prompts.

Correction operations are allowed only after the signed-in user explicitly
creates a correction request in Perture. They do not authorize deployment,
publishing, unrelated refactors, or destructive changes.

The gateway performs OAuth audience validation, platform binding, brand access
checks, entitlement checks, rate limiting, and audit recording. Do not recreate
any of those decisions inside Cursor.
