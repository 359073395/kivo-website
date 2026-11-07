"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { basePath } from "./site-config";

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

const screenshots = [
  {
    label: "知识检索",
    src: `${basePath}/images/knowledge-desktop.png`,
    description: "检索知识、查看来源，并将方法用于当前创作。",
  },
  {
    label: "资料学习",
    src: `${basePath}/images/learning-desktop.png`,
    description: "保留原文与出处，确认需要采用的新方法。",
  },
  {
    label: "反馈复盘",
    src: `${basePath}/images/feedback-learning.png`,
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
