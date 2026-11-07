"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    label: "发现热点",
    english: "Discover",
    title: ["发现热点，", "找到创作的机会。"],
    description:
      "从微博、抖音、知乎等平台热榜寻找线索，结合账号定位判断适配度。收藏到选题库，或直接交给 AI 展开。",
    navigation: "热点雷达",
  },
  {
    label: "策划选题",
    english: "Plan",
    title: ["把一个灵感，", "排进创作日历。"],
    description:
      "收藏选题、拆解对标内容，再推敲角度、标题和脚本。把待做、进行中与已完成的内容放进同一份计划。",
    navigation: "选题库",
  },
  {
    label: "创作内容",
    english: "Create",
    title: ["让文字与画面，", "一起成形。"],
    description:
      "带着账号画像和知识库开始创作，从文案、图文卡片到短视频脚本，调用已配置的媒体服务制作素材。",
    navigation: "创作对话",
  },
  {
    label: "发布准备",
    english: "Publish",
    title: ["准备好内容，", "也准备好发布。"],
    description:
      "按平台整理标题、正文、封面与素材，检查格式、导出内容包，再通过平台入口确认发布并记录到日历。",
    navigation: "发布中心",
  },
  {
    label: "反馈复盘",
    english: "Learn",
    title: ["这一次的经验，", "接上下一次创作。"],
    description:
      "把作品版本、观察窗口和反馈带回工作台。检索已有知识、学习新方法，让下一次选题有更多依据。",
    navigation: "学习知识库",
  },
];

export function MotionEffects() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(reducedMotion.matches);
    const update = () => setPaused(reducedMotion.matches);
    reducedMotion.addEventListener("change", update);
    return () => reducedMotion.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused);
    document.documentElement.classList.toggle("motion-enabled", !paused);
    return () =>
      document.documentElement.classList.remove(
        "motion-paused",
        "motion-enabled",
      );
  }, [paused]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".capabilities-intro, .capability-list article, .preview-heading, .ownership-section > div, .download-section > h2",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) =>
        element.classList.remove("scroll-reveal", "in-view"),
      );
    };
  }, []);

  return (
    <button
      className="motion-control"
      type="button"
      aria-pressed={paused}
      onClick={() => setPaused(!paused)}
    >
      {paused ? "播放动效" : "暂停动效"}
      <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
    </button>
  );
}

function DiscoverScene() {
  return (
    <>
      <div className="canvas-heading">
        <div>
          <small>热点雷达</small>
          <h3>今天，什么值得做？</h3>
        </div>
        <span className="canvas-tag">城市生活创作者</span>
      </div>
      <div className="platform-chips">
        <span className="selected">微博</span>
        <span className="selected">抖音</span>
        <span className="selected">知乎</span>
        <span>B站</span>
        <span>百度</span>
        <span>头条</span>
      </div>
      <div className="discovery-grid">
        <article className="canvas-card trend-board">
          <div className="card-label">
            热榜线索 <span>示例选题</span>
          </div>
          {[
            "周末，重新认识自己的城市",
            "年轻人的轻量户外生活",
            "把平凡日常拍成一支短片",
          ].map((title, index) => (
            <div className="trend-line" key={title}>
              <b>{index + 1}</b>
              <div>
                {title}
                <small>
                  {
                    [
                      "城市漫步 · 生活方式",
                      "周末出行 · 真实体验",
                      "记录生活 · 拍摄灵感",
                    ][index]
                  }
                </small>
              </div>
              <span className="trend-spark" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
          ))}
        </article>
        <article className="canvas-card topic-angle">
          <div className="card-label">
            找到你的角度 <span>✧</span>
          </div>
          <h4>
            一条散步路线，
            <br />
            三种内容讲法。
          </h4>
          <p>从自己的体验出发，把一个公共话题变成你的观察。</p>
          <div className="angle-tags">
            <span>路线攻略</span>
            <span>散步随笔</span>
            <span>拍摄记录</span>
          </div>
          <div className="canvas-action">收藏到选题库 ↗</div>
        </article>
        <div className="knowledge-bridge">
          <span className="bridge-icon">▤</span>
          <div>
            <strong>知识库也参与选题</strong>
            <p>参考人群定位、选题方法与已有经验</p>
          </div>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
    </>
  );
}

function PlanScene() {
  return (
    <>
      <div className="canvas-heading">
        <div>
          <small>选题库 · 内容日历</small>
          <h3>给灵感，一个落地的时间。</h3>
        </div>
        <span className="canvas-tag warm">本周计划示例</span>
      </div>
      <div className="planning-grid">
        <article className="canvas-card idea-board">
          <div className="card-label">
            选题推进 <span>从收藏到创作</span>
          </div>
          <div className="idea-columns">
            <div>
              <small>待做</small>
              <div className="idea-card">
                下班后的一小时散步<em>日常观察</em>
              </div>
              <div className="idea-card">
                用手机记录街角光线<em>拍摄灵感</em>
              </div>
            </div>
            <div>
              <small>进行中</small>
              <div className="idea-card working">
                周末走一条新路线<em>图文 · 正在写作</em>
              </div>
            </div>
          </div>
        </article>
        <article className="canvas-card week-calendar">
          <div className="card-label">
            内容日历 <span>一周节奏</span>
          </div>
          <div>
            <b>周二</b>
            <p>
              城市漫步路线<span>选题</span>
            </p>
          </div>
          <div>
            <b>周四</b>
            <p>
              散步随手拍<span>草稿</span>
            </p>
          </div>
          <div>
            <b>周日</b>
            <p>
              一周创作复盘<span>已排期</span>
            </p>
          </div>
        </article>
        <div className="planning-bottom">
          <span>选题角度</span>
          <span aria-hidden="true">→</span>
          <span>标题与钩子</span>
          <span aria-hidden="true">→</span>
          <span>脚本大纲</span>
          <span aria-hidden="true">→</span>
          <span>内容排期</span>
        </div>
      </div>
    </>
  );
}

function CreateScene() {
  return (
    <>
      <div className="canvas-heading">
        <div>
          <small>创作对话 · 内容库</small>
          <h3>一个选题，长出不同的表达。</h3>
        </div>
        <span className="canvas-tag">知识与画像参与创作</span>
      </div>
      <div className="creation-stage">
        <article className="canvas-card script-sheet">
          <div className="card-label">
            短视频脚本 <span>内容示例</span>
          </div>
          <h4>周末，走一条没走过的路。</h4>
          <p>
            <b>开场</b> 把手机放进口袋，给自己一小时。
          </p>
          <p>
            <b>展开</b> 街角的花店、傍晚的光和偶遇的咖啡香。
          </p>
          <p>
            <b>收尾</b> 你的城市，还有哪些地方等着被发现？
          </p>
          <div className="script-bottom">已参考 · 场景化叙事方法</div>
        </article>
        <article className="story-cover">
          <small>图文封面示意</small>
          <span>
            给日常
            <br />
            一点新鲜感。
          </span>
          <div className="cover-line" />
          <em>WALK · OBSERVE · CREATE</em>
        </article>
        <article className="audio-preview">
          <div>
            <span>配音与字幕</span>
            <small>媒体制作流程示意</small>
          </div>
          <div className="audio-wave" aria-hidden="true">
            {[22, 43, 28, 57, 38, 64, 30, 48, 22, 53, 36, 60, 26, 44, 20].map(
              (height, index) => (
                <i
                  key={index}
                  style={{
                    height: `${height}%`,
                    animationDelay: `${index * -0.12}s`,
                  }}
                />
              ),
            )}
          </div>
        </article>
      </div>
    </>
  );
}

function PublishScene() {
  return (
    <>
      <div className="canvas-heading">
        <div>
          <small>发布中心</small>
          <h3>把内容准备到可以交付。</h3>
        </div>
        <span className="canvas-tag warm">发布前检查</span>
      </div>
      <div className="publishing-grid">
        <article className="canvas-card publish-draft">
          <div className="card-label">
            本次内容 <span>图文笔记示例</span>
          </div>
          <h4>
            周末散步，
            <br />
            走一条没走过的路。
          </h4>
          <p>根据目标平台整理文案、封面与素材。</p>
          <ul>
            <li>标题与正文格式</li>
            <li>素材与封面核对</li>
            <li>事实与来源检查</li>
          </ul>
          <div className="canvas-action">导出内容包 ↗</div>
        </article>
        <article className="canvas-card publish-platforms">
          <div className="card-label">选择平台</div>
          <div>
            {["小红书", "抖音", "快手", "知乎", "B站", "视频号", "公众号"].map(
              (label) => (
                <span key={label}>{label}</span>
              ),
            )}
          </div>
          <p>按各平台要求适配内容</p>
        </article>
        <article className="canvas-card publish-record">
          <div className="card-label">发布与记录</div>
          <p>打开官方平台</p>
          <span aria-hidden="true">↓</span>
          <p>确认发布结果，回写内容日历</p>
        </article>
      </div>
    </>
  );
}

function LearnScene() {
  return (
    <>
      <div className="canvas-heading">
        <div>
          <small>反馈与自学习</small>
          <h3>把这次的经验，留给下一次。</h3>
        </div>
        <span className="canvas-tag">本地知识闭环</span>
      </div>
      <div className="learning-grid">
        <article className="canvas-card feedback-record">
          <div className="card-label">
            内容观察 <span>示例记录</span>
          </div>
          <h4>
            哪一种开场，
            <br />
            更能引发回应？
          </h4>
          <dl>
            <div>
              <dt>作品版本</dt>
              <dd>城市散步 · 版本 A</dd>
            </div>
            <div>
              <dt>观察窗口</dt>
              <dd>发布后的同一时段</dd>
            </div>
            <div>
              <dt>反馈来源</dt>
              <dd>补充实际数据与评论</dd>
            </div>
          </dl>
        </article>
        <article className="canvas-card next-experiment">
          <div className="card-label">
            下一次的尝试 <span>↗</span>
          </div>
          <h4>用一个具体场景开头。</h4>
          <p>保留主题，调整开场，再观察读者反馈。</p>
          <div className="learning-path">
            <span>记录</span>
            <i>→</i>
            <span>复盘</span>
            <i>→</i>
            <span>复测</span>
          </div>
        </article>
        <div className="knowledge-bridge">
          <span className="bridge-icon">▤</span>
          <div>
            <strong>经验可检索，方法由你确认</strong>
            <p>来源、作品与版本一起留下</p>
          </div>
          <span className="loop-arrow" aria-hidden="true">
            ↻
          </span>
        </div>
      </div>
    </>
  );
}

const scenes = [
  DiscoverScene,
  PlanScene,
  CreateScene,
  PublishScene,
  LearnScene,
];

export function ScrollStory() {
  const section = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = section.current;
      if (
        !element ||
        window.innerHeight <= 650 ||
        element.offsetHeight <= window.innerHeight + 5
      )
        return;
      const range = element.offsetHeight - window.innerHeight;
      const fraction = Math.min(
        1,
        Math.max(0, -element.getBoundingClientRect().top / range),
      );
      setActive(
        Math.min(stages.length - 1, Math.floor(fraction * stages.length)),
      );
      progress.current?.style.setProperty("--progress", String(fraction));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  const goToStage = (index: number) => {
    const element = section.current;
    if (!element) return;
    const range = element.offsetHeight - window.innerHeight;
    if (window.innerHeight <= 650 || range <= 5) {
      setActive(index);
      return;
    }
    const top = element.getBoundingClientRect().top + window.scrollY;
    const reduceMotion =
      document.documentElement.classList.contains("motion-paused");
    window.scrollTo({
      top: top + (range * (index + 0.25)) / stages.length,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <section
      id="workflow"
      className="story-scroll"
      ref={section}
      aria-label="从热点到复盘的五步创作工作流"
    >
      <div className="story-sticky">
        <div className="story-copy">
          <p className="eyebrow">Kivo / 完整创作工作流</p>
          <div className="story-copy-stack">
            {stages.map((stage, index) => (
              <article
                key={stage.english}
                className={`story-copy-step ${active === index ? "active" : ""}`}
                aria-hidden={active !== index}
              >
                <span className="stage-name">{stage.english}</span>
                <h2>
                  {stage.title[0]}
                  <br />
                  {stage.title[1]}
                </h2>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
          <nav className="story-navigation" aria-label="跳转创作阶段">
            {stages.map((stage, index) => (
              <button
                type="button"
                key={stage.label}
                aria-current={active === index ? "step" : undefined}
                onClick={() => goToStage(index)}
                aria-label={`查看${stage.label}阶段`}
              >
                {stage.label.slice(0, 2)}
              </button>
            ))}
          </nav>
          <div ref={progress} className="story-progress" aria-hidden="true">
            <i />
          </div>
          <div className="scroll-prompt">
            向下滚动，继续创作 <span aria-hidden="true">↓</span>
          </div>
        </div>
        <div className="story-studio" data-stage={active}>
          <div className="studio-bar">
            <div className="studio-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span>Kivo · 创作工作台</span>
            <small>流程演示 · 示例资料</small>
          </div>
          <div className="studio-body">
            <aside className="studio-sidebar" aria-hidden="true">
              <strong>Kivo</strong>
              {[
                "工作台",
                "热点雷达",
                "选题库",
                "内容日历",
                "创作对话",
                "发布中心",
                "学习知识库",
              ].map((label) => (
                <span
                  key={label}
                  className={
                    stages[active].navigation === label ? "selected" : ""
                  }
                >
                  {label}
                </span>
              ))}
              <small>账号画像</small>
              <b>城市生活创作者</b>
            </aside>
            <div className="studio-scenes">
              {scenes.map((Scene, index) => (
                <div
                  key={stages[index].english}
                  className={`studio-scene ${active === index ? "active" : ""}`}
                  aria-hidden={active !== index}
                >
                  <Scene />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
