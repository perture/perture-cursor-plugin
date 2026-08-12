# Perture for Cursor (private source package)

This is a local Cursor adapter for the Perture Integration Gateway v1. It does
not contain brand rules, customer data, API keys, or a generic MCP server.

Set `PERTURE_ACCESS_TOKEN` locally and run the included standalone script when
the agent needs explicit Perture context. The token must be issued for the
`cursor` client and the gateway audience. The package contains no dependency
on the Perture app repository.

```bash
node scripts/perture-integration.mjs --operation list-brands
```

This private GitHub source package is not registered in the Cursor Marketplace.
The gateway URL in the package is a release target, not evidence that the
corresponding app release has already been deployed.

The package uses Cursor's documented `.cursor-plugin/plugin.json`, `skills/`,
and `rules/` structure. Authentication, authorization, and customer data policy
remain on `app.perture.co`.
