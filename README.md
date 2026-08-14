# Perture for Cursor

Official thin connection package for Perture.

The package contains only host metadata, a remote-service locator, and minimal
connection safeguards. Authentication is completed and stored by Cursor. No
credentials, customer data, business rules, scoring, prompts, validators,
request clients, or implementation logic are bundled.

All protected behavior is executed on Perture infrastructure and authorized on
every request.

## Install

Until the reviewed Cursor Marketplace listing is available, clone this
repository into Cursor's local plugin directory:

```text
~/.cursor/plugins/local/perture-cursor
```

Restart Cursor or run `Developer: Reload Window`, enable Perture, and complete
the browser sign-in when Cursor requests authorization.

The thin connector is MIT licensed so Cursor can review and distribute it. The
Perture service, backend, models, policies, prompts, validators, and customer
data are not part of this repository and remain protected.
