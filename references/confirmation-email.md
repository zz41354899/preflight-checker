# Confirmation Email

Use for confirmation emails, pre-event notices, registration confirmations, attendee reminders, logistics confirmations, check-in notices, and participant-facing final notices.

## Inspect For

- identity: correct recipient group, event name, host, and sender
- logistics: date, weekday, time, timezone, venue, floor, room, address, online link
- arrival: check-in time, ticket or QR code, reception process, access rules
- agenda: start/end time, major sessions, breaks, and any required preparation
- action: what the recipient needs to do next, bring, confirm, or avoid
- support: contact method, map, transportation note, cancellation or change policy
- consistency: subject, opening, body, CTA, and closing all match the source of truth
- formatting: scannable sections, compact spacing, readable dates and times

## Common Risks

- date, weekday, time, venue, floor, or room does not match the source of truth
- host, co-host, activity name, or sender is missing or inconsistent
- check-in method, ticket instruction, online link, or required material is absent
- subject line promises a different event or timing than the body
- recipient cannot tell what action is required before arrival
- excessive blank lines or merged closing words make the message look unfinished

## Output Notes

When the user provides a correct version and a draft to check, flag factual mismatches before style issues. Do not invent missing logistics; mark them as `需要確認`.
