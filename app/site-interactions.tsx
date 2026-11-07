"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const steps = [
  {
    label: "检索知识",
    title: "先找依据，再动笔。",
    description:
      "从自己的知识里找到相关方法，查看来源，把合适的内容用于当前任务。",
    tag: "知识检索",
    prompt: "想写一篇关于阅读习惯的内容，先看看选题方法。",
  },
  {
    label: "学习资料",
    title: "让新收获，沉淀下来。",
    description:
      "保留资料原文和出处，提炼成可复用的方法。由你确认哪些值得带进知识库。",
    tag: "学习新资料",
    prompt: "把这份阅读笔记整理成下次写作能用的方法。",
  },
  {
    label: "辅助创作",
    title: "带着你的方法，开始创作。",
    description:
      "把知识和任务放在一起，围绕选题、标题与文案展开，再保存到内容库。",
    tag: "辅助创作",
    prompt: "结合刚才的方法，写一篇给阅读新手的短文。",
  },
  {
    label: "反馈复盘",
    title: "每次尝试，都留下线索。",
    description:
      "记录作品版本和实际反馈，整理下一次要验证的改进方向，持续积累经验。",
    tag: "反馈与自学习",
    prompt: "记录这版内容的反馈，整理下一次要测试的方向。",
  },
];

function moveTab(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  total: number,
  select: (index: number) => void,
) {
  let next = index;
  if (event.key === "ArrowRight" || event.key === "ArrowDown")
    next = (index + 1) % total;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
    next = (index - 1 + total) % total;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = total - 1;
  else return;
  event.preventDefault();
  select(next);
  event.currentTarget.parentElement
    ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    [next]?.focus();
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-nav">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-links"
        aria-label={open ? "关闭导航" : "打开导航"}
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "☰"}
      </button>
      <nav id="mobile-links" aria-label="手机导航" hidden={!open}>
        {[
          ["workflow", "工作流"],
          ["capabilities", "产品能力"],
          ["preview", "软件界面"],
          ["download", "下载与帮助"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function Workflow() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <div className="workflow">
      <div className="workflow-copy">
        <div className="workflow-tabs" role="tablist" aria-label="创作流程">
          {steps.map((item, index) => (
            <button
              type="button"
              key={item.label}
              id={`step-${index}`}
              role="tab"
              aria-selected={active === index}
              aria-controls="workflow-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) =>
                moveTab(event, index, steps.length, setActive)
              }
            >
              <span className="step-icon" aria-hidden="true">
                {["⌕", "▤", "✧", "↻"][index]}
              </span>
              <span>{item.label}</span>
              <span className="step-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>
        <div className="workflow-explanation" aria-live="polite">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      </div>
      <div
        id="workflow-panel"
        className="demo-window"
        role="tabpanel"
        aria-labelledby={`step-${active}`}
        tabIndex={0}
      >
        <div className="window-bar">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>Kivo · 创作工作台</span>
          <small>示例流程</small>
        </div>
        <div className="demo-body">
          <aside className="demo-sidebar" aria-hidden="true">
            <span className="demo-brand">Kivo</span>
            <span>工作台</span>
            <span>对话</span>
            <span className="selected">学习知识库</span>
            <span>技能库</span>
            <span>内容库</span>
            <span>账号与画像</span>
          </aside>
          <div className="demo-content" key={active}>
            <div className="demo-section-label">
              <span>{step.tag}</span>
              <span className="small-dot" /> 本地工作区
            </div>
            <div className="demo-prompt">{step.prompt}</div>
            {active === 0 && (
              <>
                <h4>让好方法，出现在需要的时候。</h4>
                <div className="method-card">
                  <span className="mini-tag">选题方法</span>
                  <h5>从读者的具体问题出发</h5>
                  <p>先想清楚写给谁，再找到一个值得回答的问题。</p>
                  <div className="method-source">
                    ▤ 阅读与写作笔记 · 方法示例
                  </div>
                </div>
                <div className="method-row">
                  <span>来源可追溯</span>
                  <span className="demo-action">用于本次创作 ↗</span>
                </div>
              </>
            )}
            {active === 1 && (
              <>
                <h4>从一份笔记，到一个可复用的方法。</h4>
                <div className="learning-flow">
                  <div>
                    <span className="mini-tag">保存原文</span>
                    <h5>我的阅读与写作笔记</h5>
                    <p>
                      把抽象的建议，放进一个具体场景。每次写作只回答一个问题。
                    </p>
                  </div>
                  <span className="flow-down" aria-hidden="true">
                    ↓
                  </span>
                  <div>
                    <span className="mini-tag warm-tag">等待确认</span>
                    <h5>方法 · 用具体场景展开观点</h5>
                    <p>先描述遇到问题的时刻，再给出可尝试的行动。</p>
                  </div>
                </div>
              </>
            )}
            {active === 2 && (
              <>
                <h4>每天十分钟，从读完一页开始</h4>
                <div className="writing-paper">
                  <p>总想等到有整块时间，才开始读一本书？</p>
                  <p>
                    今天，先给自己十分钟。翻开你最想读的那一页，记下一个让你停顿的句子。
                  </p>
                  <p>把目标缩小一点，也给行动留一点空间。</p>
                  <div className="paper-footer">
                    <span>创作文案示例</span>
                    <span>可保存至内容库</span>
                  </div>
                </div>
              </>
            )}
            {active === 3 && (
              <>
                <h4>把反馈，变成下一次的好问题。</h4>
                <div className="feedback-card">
                  <span className="mini-tag">版本 A · 观察记录示例</span>
                  <h5>读者对哪种开头更感兴趣？</h5>
                  <p>记录作品、版本与观察窗口，补充已有反馈。</p>
                  <div className="feedback-hypothesis">
                    <small>下次复测方向</small>
                    <p>试试用一个具体的阅读场景开头，继续观察反馈。</p>
                  </div>
                </div>
                <div className="method-source">
                  保留来源 · 跟踪版本 · 累积经验
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const screenshots = [
  {
    label: "知识检索",
    src: "/images/knowledge-desktop.png",
    description: "检索知识、查看来源，并将方法用于当前创作。",
  },
  {
    label: "资料学习",
    src: "/images/learning-desktop.png",
    description: "保留原文与出处，确认需要采用的新方法。",
  },
  {
    label: "反馈复盘",
    src: "/images/feedback-learning.png",
    description: "记录作品版本和反馈，为下一次改进积累线索。",
  },
];

export function ProductPreview() {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const selected = screenshots[active];
  return (
    <div className="product-preview">
      <div className="preview-tabs" role="tablist" aria-label="实际软件界面">
        {screenshots.map((item, index) => (
          <button
            type="button"
            key={item.label}
            role="tab"
            id={`preview-tab-${index}`}
            aria-controls="preview-panel"
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) =>
              moveTab(event, index, screenshots.length, setActive)
            }
          >
            {item.label}
          </button>
        ))}
      </div>
      <figure
        id="preview-panel"
        role="tabpanel"
        aria-labelledby={`preview-tab-${active}`}
      >
        <button
          type="button"
          className="screenshot-button"
          onClick={() => dialog.current?.showModal()}
          aria-label={`放大查看${selected.label}界面`}
        >
          <img
            src={selected.src}
            width="1440"
            height="1000"
            loading="lazy"
            alt={`Kivo ${selected.label}实际软件界面`}
          />
          <span className="expand-hint">放大查看 ↗</span>
        </button>
        <figcaption>
          <span>{selected.description}</span>
          <span>v0.3.3 测试环境实拍 · 使用示例资料</span>
        </figcaption>
      </figure>
      <dialog
        ref={dialog}
        className="image-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        aria-label={`${selected.label}放大截图`}
      >
        <button
          type="button"
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          autoFocus
          aria-label="关闭截图"
        >
          ×
        </button>
        <img
          src={selected.src}
          width="1440"
          height="1000"
          alt={`Kivo ${selected.label}实际界面放大图`}
        />
      </dialog>
    </div>
  );
}
