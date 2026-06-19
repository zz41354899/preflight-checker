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
  ShieldCheck,
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
    label: "出門前",
    subtitle: "包包 / 門口 / 交通",
    icon: DoorOpen,
    prompt: "用 $preflight-checker 檢查我出門前有沒有漏東西",
    risks: ["手機", "錢包 / 信用卡", "鑰匙"],
    checklist: [
      "手機",
      "錢包 / 信用卡 / 現金",
      "鑰匙",
      "耳機",
      "充電器 / 行動電源",
      "雨傘 / 外套",
      "交通卡 / 票券",
      "門窗 / 電器 / 瓦斯",
      "今天要帶的特殊物品",
    ],
  },
  {
    id: "night",
    label: "睡前",
    subtitle: "明早 / 充電 / 收尾",
    icon: Bed,
    prompt: "用 $preflight-checker 檢查我的睡前收尾",
    risks: ["鬧鐘", "手機 / 電腦充電", "明天要帶的東西"],
    checklist: [
      "明天第一件事已寫下",
      "鬧鐘設定",
      "手機 / 電腦充電",
      "明天要帶的東西放到固定位置",
      "門窗 / 電器確認",
      "藥品 / 保健品",
      "今天未完成但不能忘的事已記下",
    ],
  },
  {
    id: "errand",
    label: "辦事 / 看醫生",
    subtitle: "證件 / 預約 / 下一步",
    icon: Briefcase,
    prompt: "用 $preflight-checker 檢查我要去辦文件會不會漏東西",
    risks: ["身分證件", "預約時間", "健保卡 / 證明文件"],
    checklist: [
      "身分證件",
      "健保卡 / 證明文件",
      "預約時間",
      "地址 / 樓層 / 櫃台",
      "需要影本或照片嗎",
      "付款方式",
      "要問的問題先寫下來",
      "辦完後下一步是什麼",
    ],
  },
  {
    id: "travel",
    label: "旅行 / 過夜",
    subtitle: "票券 / 藥品 / 家中",
    icon: Luggage,
    prompt: "用 $preflight-checker 檢查我的旅行行前準備",
    risks: ["證件 / 護照", "票券 / 訂房", "藥品"],
    checklist: [
      "證件 / 護照",
      "錢包 / 信用卡 / 現金",
      "手機 / 充電器 / 行動電源",
      "衣物 / 盥洗用品",
      "藥品",
      "票券 / 訂房 / 交通資訊",
      "緊急聯絡資訊",
      "家中門窗 / 電器 / 瓦斯",
    ],
  },
  {
    id: "wrap",
    label: "回家後",
    subtitle: "歸位 / 充電 / 明天",
    icon: Home,
    prompt: "用 $preflight-checker 檢查我的回家後收尾",
    risks: ["鑰匙 / 錢包歸位", "手機 / 電腦充電", "明天要用的東西"],
    checklist: [
      "鑰匙 / 錢包放回固定位置",
      "手機 / 電腦充電",
      "重要收據 / 文件歸位",
      "明天要用的東西先放好",
      "垃圾 / 食物 / 洗衣處理",
      "今天新產生的待辦記下",
      "門窗 / 電器確認",
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
    ? `${scenario.prompt}。補充：${customContext.trim()}。`
    : `${scenario.prompt}。`;

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
    <div className="bg-[#181715]">
      <div className="flex min-h-12 items-center justify-between border-b border-white/10 bg-[#11100f] px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#cc785c]" />
          <span className="h-3 w-3 rounded-full bg-[#e8a55a]" />
          <span className="h-3 w-3 rounded-full bg-[#5db8a6]" />
        </div>
        <div className="hidden font-mono text-xs text-[#a09d96] sm:block">
          preflight-checker / skill demo
        </div>
        <button
          className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-[#a09d96] transition hover:bg-white/10 hover:text-white"
          onClick={resetChecklist}
          title="重來"
          type="button"
        >
          <RefreshCw aria-hidden className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-0 lg:grid-cols-[18rem_1fr]">
        <aside className="border-b border-white/10 bg-[#1f1e1b] p-4 lg:border-b-0 lg:border-r">
          <p className="mb-3 text-xs font-semibold uppercase text-[#8e8b82]">
            Scenario
          </p>
          <div className="grid gap-2">
            {scenarios.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === scenario.id;
              return (
                <button
                  aria-pressed={isActive}
                  className={`grid min-h-16 grid-cols-[2.25rem_1fr_auto] items-center gap-3 rounded-lg border px-3 text-left transition ${
                    isActive
                      ? "border-[#cc785c]/60 bg-[#cc785c]/14 text-[#faf9f5]"
                      : "border-white/10 bg-[#252320] text-[#d8d2c8] hover:border-white/20 hover:bg-[#2f2c28]"
                  }`}
                  key={item.id}
                  onClick={() => selectScenario(item.id)}
                  type="button"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#11100f]">
                    <Icon aria-hidden className="h-4 w-4 text-[#5db8a6]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">
                      {item.label}
                    </span>
                    <span className="block truncate text-xs text-[#a09d96]">
                      {item.subtitle}
                    </span>
                  </span>
                  <Check
                    aria-hidden
                    className={`h-4 w-4 ${
                      isActive ? "text-[#cc785c]" : "text-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </aside>

        <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_20rem]">
          <section className="p-4 sm:p-6">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#5db8a6]">
                  <ClipboardCheck aria-hidden className="h-4 w-4" />
                  30-second checklist
                </div>
                <h2 className="text-3xl font-semibold leading-tight text-[#faf9f5]">
                  {scenario.label} preflight
                </h2>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#252320] px-4 py-3">
                <div className="text-xs uppercase text-[#8e8b82]">Progress</div>
                <div className="mt-1 font-mono text-lg text-[#faf9f5]">
                  {checkedItems.size}/{scenario.checklist.length}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {scenario.risks.map((risk) => (
                <div
                  className="rounded-lg border border-white/10 bg-[#252320] p-4"
                  key={risk}
                >
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-[#cc785c]">
                    <ShieldCheck aria-hidden className="h-4 w-4" />
                    High risk
                  </div>
                  <p className="text-sm font-semibold leading-6 text-[#faf9f5]">
                    {risk}
                  </p>
                </div>
              ))}
            </div>

            <label
              className="mt-5 block text-sm font-semibold text-[#d8d2c8]"
              htmlFor="context"
            >
              Context
            </label>
            <input
              className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#11100f] px-4 text-base text-[#faf9f5] outline-none transition placeholder:text-[#6c6a64] focus:border-[#cc785c] focus:ring-2 focus:ring-[#cc785c]/25"
              id="context"
              onChange={(event) => setCustomContext(event.target.value)}
              placeholder="例如：要下雨、要帶合約、要先寄包裹"
              value={customContext}
            />

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#5db8a6] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-5 grid gap-2">
              {scenario.checklist.map((item) => {
                const isChecked = checkedItems.has(item);
                return (
                  <div
                    className={`grid min-h-14 grid-cols-[1fr_auto] items-center gap-3 rounded-lg border px-3 py-2 transition ${
                      isChecked
                        ? "border-[#5db8a6]/50 bg-[#5db8a6]/12"
                        : "border-white/10 bg-[#1f1e1b]"
                    }`}
                    key={item}
                  >
                    <button
                      className="flex min-w-0 items-center gap-3 text-left"
                      onClick={() => toggleItem(item)}
                      type="button"
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border ${
                          isChecked
                            ? "border-[#5db8a6] bg-[#5db8a6] text-[#11100f]"
                            : "border-white/16 bg-[#11100f] text-transparent"
                        }`}
                      >
                        <Check aria-hidden className="h-4 w-4" />
                      </span>
                      <span
                        className={`min-w-0 text-sm font-medium leading-6 ${
                          isChecked ? "text-[#faf9f5]" : "text-[#d8d2c8]"
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                    <button
                      aria-label={`加入常忘項目：${item}`}
                      className="grid h-9 w-9 place-items-center rounded-lg text-[#a09d96] transition hover:bg-white/10 hover:text-[#faf9f5]"
                      onClick={() => saveCommonItem(item)}
                      title="加入常忘項目"
                      type="button"
                    >
                      <Plus aria-hidden className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          <aside className="border-t border-white/10 bg-[#11100f] p-4 sm:p-6 xl:border-l xl:border-t-0">
            <p className="mb-3 text-xs font-semibold uppercase text-[#8e8b82]">
              Skill prompt
            </p>
            <div className="rounded-lg border border-white/10 bg-[#252320] p-4">
              <p className="break-words font-mono text-sm leading-7 text-[#faf9f5]">
                {promptText}
              </p>
              <button
                className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#cc785c] px-4 text-sm font-semibold text-white transition hover:bg-[#a9583e]"
                onClick={copyPrompt}
                type="button"
              >
                {copied ? (
                  <Check aria-hidden className="h-4 w-4" />
                ) : (
                  <Copy aria-hidden className="h-4 w-4" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="mt-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#d8d2c8]">
                <AlarmClock aria-hidden className="h-4 w-4 text-[#e8a55a]" />
                常忘項目
              </div>
              {savedItems.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {savedItems.map((item) => (
                    <span
                      className="rounded-lg border border-white/10 bg-[#252320] px-3 py-2 text-sm text-[#d8d2c8]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="rounded-lg border border-dashed border-white/12 p-4 text-sm leading-7 text-[#8e8b82]">
                  點任一清單右側的 +，把它加入下次優先提醒。
                </p>
              )}
            </div>

            <form className="mt-6" onSubmit={submitWaitlist}>
              <label
                className="text-sm font-semibold text-[#d8d2c8]"
                htmlFor="email"
              >
                Waitlist
              </label>
              <input
                className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-[#181715] px-3 text-base text-[#faf9f5] outline-none transition placeholder:text-[#6c6a64] focus:border-[#cc785c] focus:ring-2 focus:ring-[#cc785c]/25"
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
                className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-white/12 bg-[#252320] px-4 text-sm font-semibold text-[#faf9f5] transition hover:bg-[#2f2c28]"
                type="submit"
              >
                <Mail aria-hidden className="h-4 w-4" />
                Join
              </button>
              <p className="mt-3 min-h-6 text-sm text-[#5db8a6]" role="status">
                {submitted ? "收到，第一版開放測試時會通知你。" : ""}
              </p>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
}
