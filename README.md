# Preflight Sandbox

**Live Demo**: [https://preflight-sandbox.zz41354899.workers.dev/](https://preflight-sandbox.zz41354899.workers.dev/)
這個資料夾是 Preflight 的網站沙盒工作區。正式可安裝的 skill 放在 `preflight-checker/` 子資料夾，不放在網站根目錄。

## Prerequisites

- Node.js `>=22.13.0`

## Skill Folder

正式 skill：

- `preflight-checker/SKILL.md`
- `preflight-checker/agents/openai.yaml`
- `preflight-checker/references/`

推薦發布方式：建立 GitHub repo `zz41354899/preflight-checker`，repo root 直接放 `preflight-checker/` 內的檔案。

```bash
npx skills add zz41354899/preflight-checker
```

安裝後使用：

```text
用 $preflight-checker 檢查這封 Email，幫我找出遺漏與錯誤。
```

如果未來保留在大型 repo 子資料夾中，則需使用 package 加上 skill 指定，例如：

```bash
npx skills add zz41354899/Preflight --skill preflight-checker
```

但如果不想公開網站專案，請使用前面的獨立 repo 方式。

## Quick Start

```bash
npm install
npm run dev
npm run build
```

本網站沙盒使用 vinext。後續若只要提供 GitHub skill 連結，請使用 `preflight-checker/` 這個子資料夾作為 skill 來源。

## MVP Scope

- Skill：`preflight-checker/` 內含 `SKILL.md`、`agents/openai.yaml` 和七個情境 references
- Install：`npx skills add zz41354899/preflight-checker`
- Hero：深色技術產品頁樣式，主打 Describe → Inspect → Compare
- Demo frame：出門前、睡前、辦事 / 看醫生、旅行 / 過夜、回家後
- References：daily-life、work-handoff、design-check、copy-check、instructor-content、event-planning、message-email
- Output：修改對照、修改重點、優先順序、最後 Preflight Checklist
- Skill：`preflight-checker` 觸發語、reference routing 與輸出格式
- Waitlist：本地互動狀態，尚未串接後端儲存

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm run lint`: run ESLint
