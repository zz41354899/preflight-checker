import {
  CheckCircle2,
  ClipboardCheck,
  Copy,
  FileCheck2,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const featureCards = [
  {
    tag: "Agent Skill",
    title: "One Core Skill, Three Seamless Steps",
    text: "The core skill handles the workflow—Describe, Inspect, Compare—while dynamically loading specific references to match your unique context.",
  },
  {
    tag: "References",
    title: "Context-Aware References",
    text: "Specialized rule sets like daily-life, design-handoff, and copy-check are automatically routed and applied by the main skill.",
  },
  {
    tag: "Install",
    title: "Install with a single command",
    text: "Run `npx skills add zz41354899/preflight-checker` to install, and trigger it instantly using the `$preflight-checker` command.",
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
    role: "Understand",
    text: "Analyze natural language descriptions of your scenario, task, or deliverable.",
    load: "Determine the ideal check type and ask precisely one clarifying question if necessary.",
  },
  {
    title: "Inspect",
    role: "Audit",
    text: "Load the relevant reference rules to identify missing pieces, errors, ambiguities, and potential risks.",
    load: "Utilize contextual references like daily-life, work-handoff, or design-check.",
  },
  {
    title: "Compare",
    role: "Deliver",
    text: "Output a clear diff, key modifications, prioritized risks, and the final Preflight Checklist.",
    load: "Generate a comprehensive checklist of missing items that need your attention.",
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
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--body)] font-sans selection:bg-[var(--surface-strong)] selection:text-[var(--ink)] overflow-x-hidden">
      <SiteHeader />

      <section
        className="relative px-6 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32"
        id="top"
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,var(--gradient-sky-light),transparent_80%)] opacity-100 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-[48px] sm:text-[64px] font-semibold text-[var(--ink)] leading-[1.05] tracking-[-1.92px]">
              Your Preflight Agent Skill.
            </h1>
            <p className="mx-auto mt-6 max-w-[500px] text-[18px] text-[var(--body)] leading-[1.5]">
              Catch missing details and risks before you execute. Describe your context, and let the agent do the rest.
            </p>
          </div>

          <div className="relative mx-auto mt-[80px] max-w-[1000px] h-[450px] md:h-[550px]" aria-hidden="true">
            {/* MacBook / IDE Window */}
            <div className="absolute top-0 left-0 right-[40px] md:right-[160px] bottom-[40px] md:bottom-[80px] rounded-[16px] shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-[#222] bg-[var(--surface-dark)] overflow-hidden flex flex-col z-0 transition-transform duration-700 hover:-translate-y-1">
              <div className="flex h-[40px] items-center px-4 border-b border-[#222] bg-[#111]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="ml-4 font-mono text-[12px] text-[#666]">preflight-checker / analyze</span>
              </div>
              <div className="p-6 sm:p-8 font-mono text-[13px] sm:text-[14px] leading-[1.7] text-[var(--on-dark-soft)] text-left overflow-x-auto">
                <div className="flex">
                  <span className="text-[#666] select-none w-8 shrink-0 text-right mr-4">1</span>
                  <span className="whitespace-pre"><span className="text-[#8145b5]">const</span> <span className="text-[#47c2ff]">scenario</span> = <span className="text-[#16a34a]">"Before Leaving"</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-[#666] select-none w-8 shrink-0 text-right mr-4">2</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="text-[#666] select-none w-8 shrink-0 text-right mr-4">3</span>
                  <span className="whitespace-pre"><span className="text-[#888]">// Check for potential risks</span></span>
                </div>
                <div className="flex">
                  <span className="text-[#666] select-none w-8 shrink-0 text-right mr-4">4</span>
                  <span className="whitespace-pre text-[var(--on-dark)]">await agent.inspect(scenario, &#123;</span>
                </div>
                <div className="flex">
                  <span className="text-[#666] select-none w-8 shrink-0 text-right mr-4">5</span>
                  <span className="whitespace-pre text-[var(--on-dark)]">  risks: [<span className="text-[#16a34a]">"Wallet"</span>, <span className="text-[#16a34a]">"Keys"</span>],</span>
                </div>
                <div className="flex">
                  <span className="text-[#666] select-none w-8 shrink-0 text-right mr-4">6</span>
                  <span className="whitespace-pre text-[var(--on-dark)]">  context: <span className="text-[#16a34a]">"Might rain"</span></span>
                </div>
                <div className="flex">
                  <span className="text-[#666] select-none w-8 shrink-0 text-right mr-4">7</span>
                  <span className="whitespace-pre text-[var(--on-dark)]">&#125;);</span>
                </div>
                <div className="flex mt-6 pt-6 border-t border-[#222]">
                  <span className="text-[#666] select-none w-8 shrink-0 text-right mr-4"></span>
                  <span className="whitespace-pre text-[#27c93f] flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    High risk identified: Remember to bring an umbrella.
                  </span>
                </div>
              </div>
            </div>

            {/* iPhone / Checklist Window */}
            <div className="absolute right-0 bottom-0 w-[240px] md:w-[320px] h-[360px] md:h-[460px] rounded-[36px] shadow-[0_32px_80px_rgba(0,0,0,0.16)] border-[8px] border-[#e5e5e5] bg-[var(--canvas)] overflow-hidden flex flex-col z-10 transition-transform duration-700 hover:-translate-y-2">
               {/* iPhone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[28px] bg-[#e5e5e5] rounded-b-[16px] z-20 flex justify-center pt-2">
                 <div className="w-[48px] h-[5px] rounded-full bg-[#ccc]" />
               </div>
               
               {/* UI Header */}
               <div className="bg-[var(--canvas)] pt-12 pb-4 px-6 border-b border-[var(--hairline)]">
                 <h3 className="text-[18px] font-semibold text-[var(--ink)] tracking-tight">Before Leaving</h3>
                 <p className="text-[13px] text-[var(--muted)] font-medium mt-1">Checklist generated</p>
               </div>
               
               {/* UI List */}
               <div className="flex-1 p-5 md:p-6 bg-[#fafafa] overflow-y-auto space-y-3">
                 {["Phone", "Wallet / Cards", "Keys", "Umbrella (Rain)"].map((item) => (
                   <div key={item} className="flex items-center gap-3 bg-[var(--surface-card)] p-3 rounded-[12px] border border-[var(--hairline-strong)] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--semantic-success)]" />
                     <span className="text-[13px] font-medium text-[var(--ink)] truncate">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--canvas-soft)] border-t border-[var(--hairline)]" id="showcase">
        <div className="mx-auto max-w-7xl px-6 py-[96px] sm:px-8">
        <div className="mx-auto mb-[64px] max-w-3xl text-center">
          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[var(--ink)] leading-[1.1] tracking-[-1.44px]">
            The skill output is the product.
          </h2>
          <p className="mt-5 text-[18px] leading-[1.5] text-[var(--body)] max-w-[600px] mx-auto">
            This isn't a standalone web app. It's an installable Agent Skill: the main skill orchestrates the workflow, while context references handle the inspection details.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <article
              className="bg-[var(--surface-card)] border border-[var(--hairline)] rounded-[12px] p-8 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
              key={card.title}
            >
              <span className="mb-6 inline-flex rounded-full bg-[var(--surface-strong)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--ink)]">
                {card.tag}
              </span>
              <h3 className="text-[18px] font-semibold tracking-tight text-[var(--ink)] mb-3">
                {card.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[var(--body)]">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="bg-[var(--surface-card)] border border-[var(--hairline)] rounded-[12px] p-8 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--muted)]">
              Main skill flow
            </p>
            <h3 className="text-[28px] font-semibold tracking-[-0.84px] text-[var(--ink)] mb-8 leading-[1.2]">
              Describe <br/> Inspect <br/> Compare
            </h3>
            <ul className="grid gap-3">
              {generatedStructure.map((item) => (
                <li
                  className="flex items-center gap-4 rounded-[8px] bg-[var(--surface-strong)] px-4 py-3 text-[14px] text-[var(--ink)]"
                  key={item}
                >
                  <span className="font-mono text-[13px] font-medium text-[var(--muted)]">
                    {item.slice(0, 2)}
                  </span>
                  <span className="font-medium">{item.slice(3)}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[var(--surface-card)] border border-[var(--hairline)] rounded-[12px] p-8 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--muted)]">
                Reference routing
              </p>
              <h3 className="text-[18px] font-semibold tracking-tight text-[var(--ink)] leading-[1.4]">
                Contextual reasoning is an internal structure, delivering a single, cohesive checklist to the user.
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--body)]">
                Instead of cramming every rule into the main skill, it routes inspections to specific references like daily-life, work-handoff, or design-check to catch missing details and risks.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {referenceTypes.map((item) => (
                  <span
                    className="rounded-[4px] border border-[var(--hairline-strong)] bg-[var(--canvas)] px-2 py-1 font-mono text-[12px] text-[var(--ink)] shadow-sm"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10 overflow-hidden rounded-[12px] border border-[var(--hairline-strong)] bg-[#fafafa] relative h-[140px] flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-[url('/preflight-entryway.png')] bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none" />
              <div className="relative z-10 flex flex-wrap justify-center gap-2 p-4">
                {["Phone", "Wallet / Cards", "Keys"].map((item) => (
                  <div
                    className="flex items-center gap-2 rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--canvas)] px-3 py-2 shadow-sm"
                    key={item}
                  >
                    <CheckCircle2
                      aria-hidden
                      className="h-4 w-4 text-[var(--semantic-success)]"
                    />
                    <span className="text-[13px] font-medium text-[var(--ink)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
        </div>
      </section>

      <section className="bg-[var(--surface-dark)] px-6 py-[128px] sm:px-8 border-y border-[#222]" id="pipeline">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-[80px] max-w-3xl text-center">
            <h2 className="text-[36px] sm:text-[48px] font-semibold text-white leading-[1.1] tracking-[-1.44px]" style={{ color: "#ffffff" }}>
              Describe, inspect, then compare.
            </h2>
            <p className="mt-5 text-[18px] leading-[1.6] text-[var(--on-dark-soft)]">
              preflight-checker is fundamentally an agent skill. It comprehends the scenario, pulls the relevant reference framework, and outputs an actionable inspection result.
            </p>
          </div>
          
          <div className="mb-12 flex flex-col md:flex-row md:items-center gap-6 bg-[#1a1a1a] border border-[#333] rounded-[16px] p-6 shadow-[0_12px_48px_rgba(0,0,0,0.4)]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--on-dark-soft)] shrink-0">
              Install command
            </span>
            <code className="break-words rounded-[12px] bg-[#111] px-5 py-4 font-mono text-[13px] text-white flex-1 text-center md:text-left border border-[#222] shadow-inner">
              npx skills add zz41354899/preflight-checker
            </code>
          </div>
          
          <ol className="grid gap-8 md:grid-cols-3">
            {pipelineSteps.map((step, index) => (
              <li
                className="bg-[#1a1a1a] border border-[#333] rounded-[16px] p-8 shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
                key={step.title}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="grid h-[32px] w-[32px] place-items-center rounded-[8px] bg-[#222] font-mono text-[13px] font-medium text-white shadow-inner">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex rounded-full bg-[#222] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.88px] text-white border border-[#333]">
                    {step.role}
                  </span>
                </div>
                <strong className="block text-[22px] font-semibold tracking-[-0.5px] text-white mb-4" style={{ color: "#ffffff" }}>
                  {step.title}
                </strong>
                <span className="block text-[15px] leading-[1.6] text-[var(--on-dark-soft)] flex-1">
                  {step.text}
                </span>
                <span className="mt-8 block border-t border-[#333] pt-5 text-[14px] leading-[1.5] text-[#888]">
                  {step.load}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="mx-auto my-[128px] max-w-5xl px-6 sm:px-8"
        id="skill"
      >
        <div className="bg-[var(--surface-dark)] rounded-[16px] p-10 sm:p-16 grid gap-12 lg:grid-cols-[1fr_1fr] items-center shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-[#222]">
          <div>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-[-1.44px] text-white leading-[1.1]" style={{ color: "#ffffff" }}>
              Install the skill.<br/>Run a check.
            </h2>
            <p className="mt-6 text-[18px] leading-[1.5] text-[var(--on-dark-soft)]">
              Once installed, preflight-checker operates as a pre-delivery inspection skill right inside your agent interface.
            </p>
          </div>
          
          <div className="grid gap-3 rounded-[12px] bg-[#111111] border border-[#2a2a2a] p-6 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#47c2ff] to-transparent opacity-20" />
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-4 w-4 text-[#888]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.88px] text-[#888]">Terminal</span>
            </div>
            {commands.map((command) => (
              <div
                className="group grid grid-cols-[1fr_auto] items-center gap-4 rounded-[8px] bg-[#1a1a1a] px-4 py-3 border border-[#333] hover:border-[#555] transition-colors shadow-sm"
                key={command}
              >
                <code className="break-words font-mono text-[13px] text-[#e0e0e0] truncate flex items-center gap-3">
                  <span className="text-[#666]">$</span>
                  {command}
                </code>
                <button className="text-[#666] hover:text-[#fff] transition-colors">
                  <Copy aria-hidden className="h-4 w-4" />
                </button>
              </div>
            ))}
            <div className="mt-6 flex flex-wrap gap-4 pt-6 border-t border-[#2a2a2a]">
              <span className="inline-flex items-center gap-2 text-[13px] text-[#888]">
                <ShieldCheck aria-hidden className="h-4 w-4 text-[#47c2ff]" />
                Describe → Inspect → Compare
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#111111] text-[var(--on-dark-soft)]">
        <section className="mx-auto max-w-4xl px-6 py-[96px] text-center sm:px-8">
          <p className="text-[24px] sm:text-[28px] font-medium tracking-[-0.84px] text-white leading-[1.3]" style={{ color: "#ffffff" }}>
            <span className="text-[#888]">It's not about creating more documentation.</span><br/>
            It's about never missing a critical detail before you execute.
          </p>
        </section>

        <footer className="border-t border-[#222] px-6 py-[64px] text-center text-[14px] text-[var(--on-dark-soft)] sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="font-semibold text-white flex items-center gap-2 tracking-tight text-[15px]" style={{ color: "#ffffff" }}>
              <ClipboardCheck className="h-4 w-4" /> preflight-checker
            </span>
            <span className="hidden sm:inline-block h-[4px] w-[4px] rounded-full bg-[#333]"></span>
            <span className="text-[15px]">Pre-delivery and Pre-action Agent Skill</span>
            <span className="hidden sm:inline-block h-[4px] w-[4px] rounded-full bg-[#333]"></span>
            <a className="text-[#47c2ff] hover:underline font-medium text-[15px]" href="https://github.com/zz41354899/preflight-checker" target="_blank" rel="noopener noreferrer">
              View Documentation
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
