---
name: preflight-checker
description: "Run a Preflight Checker review for everyday life, work handoffs, design assets, copy, confirmation emails, events, courses, workshops, plans, email, LINE, DM, Slack, and external messages. Use when the user asks to inspect, compare, preflight, check for missing details, reduce risk, review before publishing/sending/handing off, or wants a final actionable checklist."
---

# Preflight Checker

Preflight Checker is the main agent skill for pre-action and pre-delivery checks. Use it to turn natural language, drafts, plans, or deliverables into an actionable inspection result.

## Core Flow

Always follow this three-step flow after selecting the reference:

1. **Describe**: Understand the user's natural-language situation, task, or deliverable. Choose the best check type. Ask only one key question when the missing information blocks a useful inspection.
2. **Inspect**: Read the matching reference and check for omissions, errors, ambiguity, risks, mismatches, and needed revisions.
3. **Compare**: Output an executable review result with modification comparisons, key changes, priorities, and a final Preflight Checklist.

## Decision Procedure

Use this order every time:

1. Classify the artifact being checked, not just the topic mentioned inside it.
2. Select one primary reference from the routing table.
3. Read the primary reference before inspecting.
4. Load at most one secondary reference only when the primary reference cannot cover a material risk.
5. If no reference fits, use `general-preflight` and inspect only clarity, missing information, risks, next action, and checklist items.
6. If the request needs professional medical, legal, financial, official, or government advice, do not answer as an expert. Inspect only logistics and clarity, and tell the user to verify with the appropriate official or professional source.

## Reference Routing

Select the primary reference with this table:

| Primary reference | Use when the artifact is |
|---|---|
| `references/confirmation-email.md` | Confirmation email, pre-event notice, registration confirmation, attendee reminder, logistics confirmation, or participant-facing final notice. |
| `references/message-email.md` | Email, LINE, DM, Slack, outreach, reply, reminder, follow-up, or any sendable message that is not primarily a confirmation notice. Use this even when the message is about an event or work topic. |
| `references/event-planning.md` | Event, course, workshop, program, proposal, rundown, registration information, or planning document that is not primarily a message. |
| `references/work-handoff.md` | Work deliverable, task handoff, status update, QA note, spec, file package, or collaboration note. |
| `references/design-check.md` | Design draft, banner, cover, visual asset, thumbnail, poster, landing visual, or design brief. |
| `references/copy-check.md` | Public copy, post, website text, activity announcement, product blurb, landing page section, or copy draft that is not primarily a message. |
| `references/daily-life.md` | Everyday life, leaving home, bedtime, errands, doctor visit logistics, documents, travel, returning home, or daily wrap-up. |

Secondary reference examples:

- Message about an event: primary `message-email.md`, secondary `event-planning.md` only for missing event logistics.
- Event confirmation email: primary `confirmation-email.md`, secondary `event-planning.md` only for missing event logistics.
- Banner for an event: primary `design-check.md`, secondary `event-planning.md` only for missing event facts.

## Describe

Identify:

- what is being checked
- who will receive or use it
- what outcome it must support
- what would be costly if missed
- which reference should drive the inspection

Ask exactly one clarifying question only when either:

- the primary reference cannot be selected from the artifact
- a missing P0 fact would make the inspection misleading
- the user asks to compare against a source of truth but provides only one side

Do not ask for multiple details at once. Ask the smallest useful question, then proceed.

Good question:

```text
這份內容最後是要給內部同事、合作方，還是公開發布？
```

Proceed without asking when the available context is enough to inspect.

## Input Fallbacks

Handle absent, mismatched, or inaccessible input explicitly:

- If the user provides no draft or artifact, replace `修改對照` with `需要補齊 / 確認`.
- If the user provides a source of truth and a draft, compare the draft against the source of truth and flag mismatches first.
- If the user provides only a non-text attachment that cannot be inspected in the current environment, say what cannot be seen and ask for one concrete input: pasted text, screenshot details, image dimensions, or the intended use.
- If an image or visual is visible, inspect only visible elements and mark hidden or unreadable details as `需要確認`.
- If the request is outside all listed domains, use `general-preflight` or state the unsupported part before giving a limited clarity/risk checklist.

## Inspect

Use the selected reference to check:

- missing details
- unclear wording or vague responsibility
- inconsistent names, dates, links, scope, or format
- risks, edge cases, and likely misunderstandings
- items that should be changed before sending, publishing, or acting

Keep the inspection practical. Do not turn a small check into a full strategy project.

## Compare

Use this output structure unless the user asks for another format. Keep section names stable.

```markdown
### 檢查類型
...

### 修改對照
| 原本 / 目前 | 建議修改 | 原因 |
|---|---|---|
| ... | ... | ... |

### 修改重點
- ...
- ...

### 優先順序
1. P0 ...
2. P1 ...
3. P2 ...

### 最後 Preflight Checklist
- [ ] ...
- [ ] ...
- [ ] ...
```

If there is no draft text to compare, replace `修改對照` with `需要補齊 / 確認` and list the missing inputs or actions.

When comparing a correct version against a version to check, make the table columns:

```markdown
| 項目 | 正確資訊 | 目前內容 | 建議修改 |
|---|---|---|---|
```

## Tone

Write in the user's language. For Chinese, prefer Traditional Chinese when the user writes in Traditional Chinese.

Be direct, concrete, and useful. Avoid blame, vague encouragement, or over-polishing. The result should feel like a calm final check before action.

## Safety

For medical, legal, financial, official, or government-related workflows, only inspect logistics, clarity, documents, links, and process risks. Do not invent current rules or give professional advice. Tell the user to verify official requirements when rules may vary.
