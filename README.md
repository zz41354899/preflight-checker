# preflight-checker

`preflight-checker` is an installable agent skill for final preflight reviews. It checks everyday actions, work handoffs, design assets, copy, instructor introductions, event plans, and outbound messages before they are sent, published, handed off, or acted on.

This repository also includes a small website sandbox that demonstrates the skill flow and install command.

## Install

```bash
npx skills add zz41354899/preflight-checker
```

After installing, restart Codex so the new skill is loaded.

Use it like this:

```text
用 $preflight-checker 檢查這封 Email，幫我找出遺漏與錯誤。
```

## Skill Structure

The skill is available from the repository root:

```text
SKILL.md
agents/openai.yaml
references/
```

Because `SKILL.md` is at the repository root, `npx skills add zz41354899/preflight-checker` can install the skill directly even though this repository also includes website files.

## Skill Flow

The skill follows:

1. **Describe**: Understand the user's situation, task, artifact, or delivery context.
2. **Inspect**: Select and read the relevant reference.
3. **Compare**: Return a practical review with changes, priorities, and a final checklist.

## References

- `daily-life`: everyday pre-action checks
- `work-handoff`: task handoff, status, QA, specs, and collaboration notes
- `design-check`: banners, covers, visual assets, thumbnails, and design drafts
- `copy-check`: posts, website text, event announcements, and public-facing copy
- `instructor-content`: instructors, guests, speakers, partners, and collaborators
- `event-planning`: courses, events, workshops, programs, and planning documents
- `message-email`: Email, LINE, DM, Slack, outreach, replies, and reminders

## Website Sandbox

The website is built with vinext.

```bash
npm install
npm run dev
npm run build
```

The first screen demonstrates the install command and the `Describe -> Inspect -> Compare` skill flow.

## Validation

Validate the skill:

```bash
python3 /path/to/quick_validate.py .
```

Validate the website:

```bash
npm run lint
npm run build
```
