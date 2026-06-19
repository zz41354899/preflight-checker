import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  FileCheck2,
  ListChecks,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { PreflightDemo } from "@/components/preflight-demo";

const featureCards = [
  {
    tag: "Agent Skill",
    title: "一個主 Skill，三段流程",
    text: "preflight-checker 只保留 Describe、Inspect、Compare，把複雜情境交給 references 按需載入。",
    accent: "border-t-[#e8a55a]",
  },
  {
    tag: "References",
    title: "情境都放在 ref 裡",
    text: "daily-life、work-handoff、design-check、copy-check 等情境規則由主 skill 路由。",
    accent: "border-t-[#5db8a6]",
  },
  {
    tag: "Install",
    title: "用 npx skills add 安裝",
    text: "目標安裝指令固定為 npx skills add zz41354899/preflight-checker，安裝後用 $preflight-checker 觸發。",
    accent: "border-t-[#cc785c]",
  },
];

const generatedStructure = [
  "01 Describe",
  "02 Inspect",
  "03 Compare",
];

const pipelineSteps = [
  {
    title: "Describe",
    role: "提問",
    text: "理解使用者用自然語言描述的情境、任務或交付內容。",
    load: "判斷最適合的檢查類型，必要時只追問一個關鍵問題。",
  },
  {
    title: "Inspect",
    role: "檢查",
    text: "根據情境讀取對應 reference，檢查遺漏、錯誤、模糊與風險。",
    load: "使用 daily-life、work-handoff、design-check 等情境 ref。",
  },
  {
    title: "Compare",
    role: "輸出",
    text: "輸出修改對照、修改重點、優先順序與最後 Preflight Checklist。",
    load: "沒有原稿時改列需要補齊或確認的項目。",
  },
];

const referenceTypes = [
  "daily-life",
  "work-handoff",
  "design-check",
  "copy-check",
  "instructor-content",
  "event-planning",
  "message-email",
];

const commands = [
  "npx skills add zz41354899/preflight-checker",
  "用 $preflight-checker 檢查這份活動企劃，找出遺漏與風險",
  "用 $preflight-checker 檢查這封合作邀請 Email",
  "用 $preflight-checker 檢查這張 Banner 文案與視覺重點",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#11100f] text-[#faf9f5]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#11100f]/90 backdrop-blur">
        <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 sm:px-8">
          <a className="flex items-center gap-3 justify-self-start" href="#top">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/18 bg-[#252320]">
              <ClipboardCheck aria-hidden className="h-5 w-5 text-[#faf9f5]" />
            </span>
            <span className="text-base font-medium">Preflight Checker</span>
          </a>
          <div className="hidden items-center gap-9 justify-self-center text-sm font-medium text-[#a09d96] md:flex">
            <a className="transition hover:text-[#faf9f5]" href="#showcase">
              Showcase
            </a>
            <a className="transition hover:text-[#faf9f5]" href="#pipeline">
              Modules
            </a>
            <a className="transition hover:text-[#faf9f5]" href="#skill">
              Skill
            </a>
          </div>
          <a
            className="hidden h-10 items-center justify-center rounded-lg bg-[#cc785c] px-4 text-sm font-semibold text-white transition hover:bg-[#a9583e] sm:inline-flex sm:justify-self-end"
            href="#skill"
          >
            Install
          </a>
        </nav>
      </header>

      <section
        className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24"
        id="top"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,249,245,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(250,249,245,0.035)_1px,transparent_1px)] bg-[length:48px_48px] [mask-image:linear-gradient(180deg,black,transparent_78%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-normal sm:text-7xl">
              Install a 30-second life preflight skill.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#d8d2c8] sm:text-lg">
              preflight-checker 是行動前與交付前的 agent skill。用 Describe、Inspect、Compare 三步，把情境導到正確 reference，產生可直接執行的檢查結果。
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#cc785c] px-5 text-sm font-semibold text-white transition hover:bg-[#a9583e]"
                href="#demo"
              >
                看 Skill Demo
                <ArrowRight aria-hidden className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/18 bg-[#252320] px-5 text-sm font-semibold text-[#faf9f5] transition hover:bg-[#2f2c28]"
                href="#skill"
              >
                查看 Skill
              </a>
            </div>
          </div>

          <div
            className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-[#181715] shadow-[rgba(0,0,0,.42)_0_32px_96px_-40px]"
            id="demo"
          >
            <PreflightDemo />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8" id="showcase">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
            The skill output is the product.
          </h2>
          <p className="mt-4 text-base leading-8 text-[#a09d96]">
            第一版不是完整 App，而是一個可安裝的 ChatGPT Skill：主 skill 負責流程，情境 ref 負責檢查細節。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <article
              className={`min-h-64 rounded-xl border border-white/10 bg-gradient-to-b from-[#252320] to-[#1f1e1b] p-8 ${card.accent} border-t-[3px]`}
              key={card.title}
            >
              <span className="mb-7 inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 text-sm font-medium text-[#d8d2c8]">
                {card.tag}
              </span>
              <h3 className="font-serif text-3xl font-normal leading-tight">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#a09d96]">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-xl border border-[#e6dfd8] bg-[#faf9f5] p-8 text-[#141413]">
            <p className="mb-4 text-xs font-semibold uppercase text-[#8e8b82]">
              Main skill flow
            </p>
            <h3 className="font-serif text-3xl font-normal leading-tight">
              Describe → Inspect → Compare
            </h3>
            <ul className="mt-6 grid gap-3">
              {generatedStructure.map((item) => (
                <li
                  className="flex items-center gap-3 rounded-lg border border-[#e6dfd8] bg-white/70 px-4 py-3 text-sm"
                  key={item}
                >
                  <span className="font-mono text-xs font-semibold text-[#cc785c]">
                    {item.slice(0, 2)}
                  </span>
                  <span>{item.slice(3)}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-[#e6dfd8] bg-[#efe9de] p-8 text-[#141413]">
            <p className="mb-4 text-xs font-semibold uppercase text-[#8e8b82]">
              Reference routing
            </p>
            <h3 className="text-lg font-semibold leading-7">
              情境判斷是內部結構，使用者拿到的是一次清楚的檢查結果。
            </h3>
            <p className="mt-3 text-base leading-7 text-[#3d3d3a]">
              不把所有規則塞進主 skill，而是依照 daily-life、work-handoff、design-check 等 reference 檢查遺漏與風險。
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {referenceTypes.map((item) => (
                <span
                  className="rounded-full border border-[#d8cfc4] bg-[#faf9f5] px-3 py-1 font-mono text-xs text-[#3d3d3a]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-[#d8cfc4] bg-[#faf9f5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Preflight Checker entryway checklist illustration"
                className="h-48 w-full object-cover opacity-90"
                src="/preflight-entryway.png"
              />
              <div className="grid gap-2 p-4 text-sm">
                {["手機", "錢包 / 信用卡", "鑰匙"].map((item) => (
                  <div
                    className="flex items-center gap-3 rounded-md border border-[#e6dfd8] bg-white px-3 py-2"
                    key={item}
                  >
                    <CheckCircle2
                      aria-hidden
                      className="h-4 w-4 text-[#5db8a6]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#faf9f5] px-5 py-20 text-[#141413] sm:px-8" id="pipeline">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:text-left lg:text-center">
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Describe, inspect, then compare.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#3d3d3a]">
              preflight-checker 的主體是一個 agent skill。它先理解情境，再讀取對應 reference，最後輸出可執行的檢查結果。
            </p>
          </div>
          <div className="mb-5 grid gap-3 rounded-xl border border-[#e6dfd8] bg-white p-5 md:grid-cols-[11rem_1fr] md:items-center">
            <span className="text-sm font-semibold text-[#8e8b82]">
              Install command
            </span>
            <code className="break-words rounded-lg border border-[#e6dfd8] bg-[#faf9f5] px-4 py-3 font-mono text-sm text-[#141413]">
              npx skills add zz41354899/preflight-checker
            </code>
          </div>
          <ol className="grid gap-4 md:grid-cols-3">
            {pipelineSteps.map((step, index) => (
              <li
                className="min-h-56 rounded-xl border border-[#e6dfd8] bg-[#efe9de] p-6"
                key={step.title}
              >
                <span className="font-mono text-xs font-semibold text-[#cc785c]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="mt-8 block text-lg font-semibold">
                  {step.title}
                </strong>
                <span className="mt-2 inline-flex rounded-full border border-[#d8cfc4] bg-[#faf9f5] px-3 py-1 text-xs font-semibold text-[#746f66]">
                  {step.role}
                </span>
                <span className="mt-2 block text-sm leading-6 text-[#3d3d3a]">
                  {step.text}
                </span>
                <span className="mt-4 block border-t border-[#d8cfc4] pt-3 text-xs leading-5 text-[#746f66]">
                  {step.load}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="mx-auto my-20 grid max-w-6xl gap-10 rounded-xl bg-[#cc785c] p-8 text-white sm:p-12 lg:grid-cols-[0.82fr_1.18fr]"
        id="skill"
      >
        <div>
          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
            Install the skill. Run a sandbox check.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/82">
            安裝後，preflight-checker 就是一個可在 ChatGPT 裡直接使用的交付前檢查 skill。
          </p>
        </div>
        <div className="grid gap-3 rounded-xl border border-white/15 bg-[#181715] p-5">
          {commands.map((command) => (
            <div
              className="grid min-h-16 grid-cols-[1fr_2.25rem] items-center gap-3 rounded-lg border border-white/12 bg-[#252320] px-4"
              key={command}
            >
              <code className="break-words font-mono text-sm leading-6 text-[#faf9f5]">
                {command}
              </code>
              <Copy aria-hidden className="h-4 w-4 text-white/70" />
            </div>
          ))}
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck aria-hidden className="h-4 w-4 text-[#5db8a6]" />
              Describe → Inspect → Compare
            </span>
            <span className="inline-flex items-center gap-2">
              <FileCheck2 aria-hidden className="h-4 w-4 text-[#e8a55a]" />
              reference routing
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageSquareText aria-hidden className="h-4 w-4 text-[#cc785c]" />
              修改對照與 checklist
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-6 max-w-4xl px-5 pb-20 text-center sm:px-8">
        <p className="font-serif text-xl leading-8 text-[#faf9f5] sm:text-2xl">
          <em>
            不是多做一份文件，是在送出前少漏一個關鍵細節。
          </em>
        </p>
      </section>

      <footer className="border-t border-white/10 bg-[#181715] px-5 py-8 text-center text-sm text-[#a09d96] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4">
          <span className="font-medium text-[#faf9f5]">preflight-checker</span>
          <span>交付前與行動前檢查</span>
          <a className="inline-flex items-center gap-2 text-[#faf9f5]" href="#demo">
            <ListChecks aria-hidden className="h-4 w-4" />
            Demo
          </a>
        </div>
      </footer>
    </main>
  );
}
