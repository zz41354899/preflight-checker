"use client";

import { useMemo, useState } from "react";
import {
  AlarmClock,
  Bed,
  Briefcase,
  Check,
  ClipboardCheck,
  Copy,
  DoorOpen,
  Home,
  Luggage,
  Mail,
  Plus,
  RefreshCw,
  ShieldAlert,
  TerminalSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Scenario = {
  id: string;
  label: string;
  subtitle: string;
  icon: LucideIcon;
  prompt: string;
  risks: string[];
  checklist: string[];
};

const scenarios: Scenario[] = [
  {
    id: "leaving",
    label: "Before Leaving",
    subtitle: "Bag / Door / Commute",
    icon: DoorOpen,
    prompt: "Use $preflight-checker to verify I'm not forgetting anything before I head out.",
    risks: ["Phone", "Wallet / Cards", "Keys"],
    checklist: [
      "Phone",
      "Wallet / Cards / Cash",
      "Keys",
      "Earbuds",
      "Charger / Power Bank",
      "Umbrella / Jacket",
      "Transit Card / Tickets",
      "Windows / Appliances / Gas",
      "Special items for today",
    ],
  },
  {
    id: "night",
    label: "Before Bed",
    subtitle: "Tomorrow / Charge / Wrap up",
    icon: Bed,
    prompt: "Use $preflight-checker to review my end-of-day wind-down routine.",
    risks: ["Alarm", "Device Charging", "Items for Tomorrow"],
    checklist: [
      "First task for tomorrow is written down",
      "Alarm is set",
      "Phone / Laptop are charging",
      "Items needed for tomorrow are placed by the door",
      "Doors locked / Appliances checked",
      "Medications / Supplements taken",
      "Pending tasks from today are logged safely",
    ],
  },
  {
    id: "errand",
    label: "Errands / Medical",
    subtitle: "ID / Booking / Next Steps",
    icon: Briefcase,
    prompt: "Use $preflight-checker to ensure I have everything needed for my appointment.",
    risks: ["Primary ID", "Appointment Time", "Insurance / Proof Docs"],
    checklist: [
      "Primary ID (e.g., Driver's License)",
      "Insurance Card / Required Documents",
      "Verified appointment time",
      "Address / Floor / Desk location",
      "Physical copies or photos if required",
      "Payment method prepared",
      "List of questions to ask written down",
      "Next actionable step after the errand",
    ],
  },
  {
    id: "travel",
    label: "Travel / Overnight",
    subtitle: "Tickets / Meds / Home Security",
    icon: Luggage,
    prompt: "Use $preflight-checker to review my pre-travel packing and preparation.",
    risks: ["Passport / ID", "Tickets / Bookings", "Medications"],
    checklist: [
      "Passport / Primary ID",
      "Wallet / Credit Cards / Cash",
      "Phone / Charger / Power Bank",
      "Clothes / Toiletries",
      "Medications",
      "Tickets / Hotel Bookings / Transit Info",
      "Emergency contact information",
      "Home secured (Windows / Appliances / Gas)",
    ],
  },
  {
    id: "wrap",
    label: "Returning Home",
    subtitle: "Unpack / Charge / Tomorrow",
    icon: Home,
    prompt: "Use $preflight-checker to check my post-arrival wrap-up routine.",
    risks: ["Keys / Wallet returned", "Devices Charging", "Items for Tomorrow"],
    checklist: [
      "Keys / Wallet returned to their designated spot",
      "Phone / Laptop plugged in",
      "Important receipts / documents filed",
      "Items needed for tomorrow prepared",
      "Trash / Food / Laundry handled",
      "New tasks generated today are logged",
      "Doors locked / Appliances checked",
    ],
  },
];

function initialScenario() {
  return scenarios[0];
}

export function PreflightDemo() {
  const [selectedId, setSelectedId] = useState(initialScenario().id);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [customContext, setCustomContext] = useState("");
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scenario = useMemo(
    () => scenarios.find((item) => item.id === selectedId) ?? initialScenario(),
    [selectedId],
  );

  const progress = Math.round(
    (checkedItems.size / scenario.checklist.length) * 100,
  );
  const promptText = customContext.trim()
    ? `${scenario.prompt} Additional context: ${customContext.trim()}.`
    : `${scenario.prompt}`;

  function selectScenario(id: string) {
    setSelectedId(id);
    setCheckedItems(new Set());
    setCopied(false);
  }

  function toggleItem(item: string) {
    setCheckedItems((current) => {
      const next = new Set(current);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  }

  function saveCommonItem(item: string) {
    setSavedItems((current) =>
      current.includes(item) ? current : [...current, item].slice(-6),
    );
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  function resetChecklist() {
    setCheckedItems(new Set());
    setCopied(false);
  }

  function submitWaitlist(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <div className="bg-[var(--surface-dark)] text-[var(--on-dark)] flex flex-col h-full w-full font-sans">
      {/* IDE Top Bar */}
      <div className="flex h-[40px] items-center justify-between bg-[#111111] px-4 border-b border-[#222]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="hidden font-mono text-[13px] text-[#666] sm:block">
          preflight-checker / studio
        </div>
        <button
          className="grid h-7 w-7 place-items-center rounded-[4px] text-[#888] hover:bg-[#222] hover:text-[#fff] transition-colors"
          onClick={resetChecklist}
          title="Reset Environment"
          type="button"
        >
          <RefreshCw aria-hidden className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 min-h-[600px]">
        {/* Left Sidebar (Scenarios) */}
        <aside className="w-full lg:w-[260px] bg-[var(--surface-dark)] border-b lg:border-b-0 lg:border-r border-[#222] p-4 flex flex-col gap-1">
          <p className="px-2 mb-2 text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--muted)] flex items-center gap-2">
            Environments
          </p>
          {scenarios.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === scenario.id;
            return (
              <button
                aria-pressed={isActive}
                className={`group flex items-center gap-3 w-full rounded-[6px] px-3 py-2.5 text-left transition-colors ${
                  isActive
                    ? "bg-[var(--surface-dark-elevated)] text-[var(--on-dark)]"
                    : "text-[var(--on-dark-soft)] hover:bg-[#222]"
                }`}
                key={item.id}
                onClick={() => selectScenario(item.id)}
                type="button"
              >
                <Icon aria-hidden className={`h-4 w-4 ${isActive ? "text-[var(--on-dark)]" : "text-[#666]"}`} />
                <span className="min-w-0 flex-1 flex flex-col justify-center">
                  <span className="block text-[14px] font-medium leading-[1.2]">
                    {item.label}
                  </span>
                </span>
                {isActive && (
                  <div className="h-1.5 w-1.5 rounded-full bg-[#fff]" />
                )}
              </button>
            );
          })}
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 bg-[var(--surface-dark)] p-6 sm:p-8 flex flex-col">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[13px] font-mono text-[var(--on-dark-soft)]">
                <ClipboardCheck aria-hidden className="h-4 w-4" />
                {scenario.id}.yaml
              </div>
              <h2 className="text-[28px] font-semibold tracking-[-0.84px] text-[var(--on-dark)]">
                {scenario.label} Checklist
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-[14px]">
              <span className="text-[var(--on-dark-soft)]">progress:</span>
              <span className="text-[var(--on-dark)] font-semibold">{checkedItems.size}/{scenario.checklist.length}</span>
            </div>
          </div>

          {/* High Risks */}
          <div className="grid gap-3 sm:grid-cols-3 mb-8">
            {scenario.risks.map((risk) => (
              <div
                className="rounded-[8px] bg-[#222] p-4 flex flex-col gap-1.5"
                key={risk}
              >
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.88px] text-[#ff8a8a]">
                  <ShieldAlert aria-hidden className="h-3 w-3" />
                  High Risk
                </div>
                <p className="text-[14px] font-medium text-[var(--on-dark)]">
                  {risk}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-8">
            <label
              className="block text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--on-dark-soft)]"
              htmlFor="context"
            >
              Custom Context
            </label>
            <input
              className="h-[44px] w-full rounded-[6px] border border-[#333] bg-[#111] px-4 text-[14px] text-[var(--on-dark)] placeholder:text-[#666] outline-none focus:border-[#666] focus:bg-[#1a1a1a] transition-colors"
              id="context"
              onChange={(event) => setCustomContext(event.target.value)}
              placeholder="e.g. Needs to print documents, might rain"
              value={customContext}
            />
          </div>

          {/* Progress Line */}
          <div className="mb-4 h-[4px] w-full rounded-[2px] bg-[#222] overflow-hidden">
            <div
              className="h-full bg-[var(--on-dark)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Checklist */}
          <div className="grid gap-2 flex-1">
            {scenario.checklist.map((item) => {
              const isChecked = checkedItems.has(item);
              return (
                <div
                  className={`group flex items-center justify-between rounded-[6px] border border-transparent px-3 py-2 transition-colors ${
                    isChecked
                      ? "bg-[var(--surface-dark-elevated)]"
                      : "hover:bg-[#1a1a1a]"
                  }`}
                  key={item}
                >
                  <button
                    className="flex min-w-0 flex-1 items-center gap-3 text-left"
                    onClick={() => toggleItem(item)}
                    type="button"
                  >
                    <span
                      className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[4px] border ${
                        isChecked
                          ? "border-[var(--on-dark)] bg-[var(--on-dark)] text-[var(--primary)]"
                          : "border-[#444] bg-transparent text-transparent group-hover:border-[#666]"
                      }`}
                    >
                      <Check aria-hidden className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span
                      className={`text-[14px] leading-[1.5] transition-colors ${
                        isChecked ? "text-[var(--on-dark)] font-medium" : "text-[var(--on-dark-soft)]"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                  <button
                    aria-label={`Save to common risks: ${item}`}
                    className="ml-3 grid h-7 w-7 place-items-center rounded-[4px] text-[#666] opacity-0 group-hover:opacity-100 hover:bg-[#333] hover:text-[var(--on-dark)] transition-all"
                    onClick={() => saveCommonItem(item)}
                    title="Pin to recurring risks"
                    type="button"
                  >
                    <Plus aria-hidden className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Right Sidebar (Output) */}
        <aside className="w-full lg:w-[320px] border-t lg:border-t-0 lg:border-l border-[#222] bg-[#111] flex flex-col">
          <div className="p-6 border-b border-[#222]">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--muted)]">
              <TerminalSquare className="h-3.5 w-3.5" />
              Agent Prompt
            </p>
            <div className="rounded-[6px] bg-[#1a1a1a] p-4 border border-[#333]">
              <p className="font-mono text-[13px] leading-[1.5] text-[#e0e0e0] break-words">
                {promptText}
              </p>
            </div>
            <button
              className="mt-4 w-full flex h-[40px] items-center justify-center gap-2 rounded-[6px] bg-[var(--on-dark)] text-[var(--primary)] font-medium text-[14px] hover:bg-[#e0e0e0] transition-colors"
              onClick={copyPrompt}
              type="button"
            >
              {copied ? (
                <>
                  <Check aria-hidden className="h-4 w-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy aria-hidden className="h-4 w-4" />
                  Copy Command
                </>
              )}
            </button>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--muted)]">
              <AlarmClock className="h-3.5 w-3.5" />
              Pinned Risks
            </div>
            {savedItems.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {savedItems.map((item) => (
                  <span
                    className="rounded-[4px] bg-[#222] px-2.5 py-1 text-[13px] font-mono text-[var(--on-dark-soft)]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[13px] text-[#666] leading-[1.5]">
                Pin recurring items to track them easily next time.
              </p>
            )}

            <div className="mt-auto pt-8">
              <form onSubmit={submitWaitlist}>
                <label
                  className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--muted)]"
                  htmlFor="email"
                >
                  Waitlist
                </label>
                <div className="flex flex-col gap-2">
                  <input
                    className="h-[40px] w-full rounded-[6px] border border-[#333] bg-[#1a1a1a] px-3 text-[14px] text-[var(--on-dark)] placeholder:text-[#666] outline-none focus:border-[#666] transition-colors"
                    id="email"
                    inputMode="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="you@example.com"
                    type="email"
                    value={email}
                  />
                  <button
                    className="h-[40px] w-full rounded-[6px] bg-[#333] text-[var(--on-dark)] font-medium text-[14px] hover:bg-[#444] transition-colors"
                    type="submit"
                  >
                    Join
                  </button>
                </div>
                {submitted && (
                  <p className="mt-2 text-[13px] text-[#27c93f]">
                    Thanks! We'll be in touch.
                  </p>
                )}
              </form>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
