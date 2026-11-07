import { Workflow, ProductPreview, MobileNav } from "./site-interactions";

const repository = "https://github.com/359073395/Kivo";
const release = `${repository}/releases/tag/v0.3.1`;

export default function Landing() {
  return (
    <>
      <a href="#main" className="skip-link">
        跳到正文
      </a>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Kivo 首页">
          <img src="/images/kivo-icon.png" width="40" height="40" alt="" />
          <span>Kivo</span>
          <small>创作工作台</small>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#workflow">工作流</a>
          <a href="#capabilities">产品能力</a>
          <a href="#preview">软件界面</a>
          <a href="#download">下载与帮助</a>
        </nav>
        <a
          className="header-cta"
          href={repository}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <MobileNav />
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-wash" aria-hidden="true" />
          <aside
            className="floating-note source-note"
            aria-label="知识方法示例"
          >
            <div className="note-heading">
              <span className="tiny-icon">▤</span> 从知识里找线索{" "}
              <span>方法示例</span>
            </div>
            <p>
              先找到读者
              <br />
              真正关心的问题
            </p>
            <div className="note-rule" />
            <small>
              人群定位 <span>·</span> 选题方法
            </small>
          </aside>
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" /> 本地知识驱动的创作工作台
            </p>
            <h1 id="hero-title">
              把你的积累，
              <br />
              写进下一次<span className="title-accent">创作</span>。
            </h1>
            <p className="hero-description">
              连接你的资料、方法与灵感。从选题到成稿，
              <br />
              让创作有据可循，让经验持续生长。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#download">
                下载 Kivo <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline" href="#workflow">
                看看如何工作 <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <aside className="floating-note draft-note" aria-label="创作片段示例">
            <div className="note-heading">
              下一篇内容 <span>成稿示例</span>
            </div>
            <p>
              把一个好问题，
              <br />
              写成值得读的内容。
            </p>
            <div className="note-footer">
              <span>
                <i /> 有方法可参考
              </span>
              <span className="round-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </aside>
          <div className="hero-footnote">
            <span>Windows 桌面端</span>
            <span>自选模型 API</span>
            <span>知识与作品保存在本机</span>
          </div>
        </section>
        <section
          id="workflow"
          className="workflow-section"
          aria-labelledby="workflow-title"
        >
          <div className="section-heading">
            <p className="eyebrow">创作工作流</p>
            <h2 id="workflow-title">好内容，从已有的积累开始。</h2>
            <p>让资料走进创作，也让每一次创作留下经验。</p>
          </div>
          <Workflow />
        </section>
        <section
          id="capabilities"
          className="capabilities-section"
          aria-labelledby="capabilities-title"
        >
          <div className="capabilities-intro">
            <p className="eyebrow">为持续创作而准备</p>
            <h2 id="capabilities-title">
              你的知识，
              <br />
              有了更顺手的用法。
            </h2>
            <p>
              从日常收集的资料，到你已经验证的方法，
              <br />
              在一个工作台里连接起来。
            </p>
          </div>
          <div className="capability-list">
            <article>
              <span className="capability-symbol" aria-hidden="true">
                ⌕
              </span>
              <div>
                <h3>找得到，也追溯得回去</h3>
                <p>
                  检索相关知识，查看来源与版本。选中的方法可以带入当前创作，让内容有依据。
                </p>
              </div>
            </article>
            <article>
              <span className="capability-symbol" aria-hidden="true">
                ✧
              </span>
              <div>
                <h3>把新资料，变成能用的方法</h3>
                <p>
                  保存原文与来源，提炼要点，再由你确认采用。让值得留下的经验进入下一次创作。
                </p>
              </div>
            </article>
            <article>
              <span className="capability-symbol" aria-hidden="true">
                ↻
              </span>
              <div>
                <h3>让复盘，接上下一次尝试</h3>
                <p>
                  记录作品版本与反馈，整理可检验的改进方向。保留观察窗口，也保留证据的边界。
                </p>
              </div>
            </article>
          </div>
        </section>
        <section
          id="preview"
          className="preview-section"
          aria-labelledby="preview-title"
        >
          <div className="preview-heading">
            <div>
              <p className="eyebrow">走进 Kivo</p>
              <h2 id="preview-title">
                资料、创作与复盘，
                <br />
                在这里连起来。
              </h2>
            </div>
            <p>
              看看工作台的实际界面。
              <br />
              点击图片，可以放大查看细节。
            </p>
          </div>
          <ProductPreview />
        </section>
        <section
          className="ownership-section"
          aria-labelledby="ownership-title"
        >
          <div>
            <p className="eyebrow">你的创作空间</p>
            <h2 id="ownership-title">
              积累留在身边，
              <br />
              工具由你选择。
            </h2>
          </div>
          <div className="ownership-details">
            <div>
              <h3>本地保存</h3>
              <p>
                知识、作品、画像和反馈保存在本机。桌面端可以直接打开数据目录，管理自己的积累。
              </p>
            </div>
            <div>
              <h3>自选模型</h3>
              <p>
                配置 OpenAI 兼容 API 或本机模型。使用云端 API
                时，任务与相关知识片段会发送给所选模型服务。
              </p>
            </div>
          </div>
        </section>
        <section
          id="download"
          className="download-section"
          aria-labelledby="download-title"
        >
          <img src="/images/kivo-icon.png" width="72" height="72" alt="" />
          <p className="eyebrow">开始你的下一次创作</p>
          <h2 id="download-title">
            带上积累，
            <br />
            从一个想法开始。
          </h2>
          <p className="download-description">
            安装 Kivo，连接你常用的模型，
            <br />
            把第一份资料带进创作。
          </p>
          <a
            className="button button-dark"
            href={release}
            target="_blank"
            rel="noreferrer"
          >
            前往 Windows 下载页 <span aria-hidden="true">↗</span>
          </a>
          <p className="release-note">公开下载 v0.3.1 · Windows 10 / 11 x64</p>
          <p className="release-detail">
            v0.3.3 已完成本机验证，公开下载以 GitHub 发布页为准。
          </p>
          <div className="download-links">
            <a
              href={`${repository}/blob/main/README-Kivo.md`}
              target="_blank"
              rel="noreferrer"
            >
              安装与使用说明 ↗
            </a>
            <a href={`${repository}/releases`} target="_blank" rel="noreferrer">
              版本记录 ↗
            </a>
          </div>
        </section>
        <section className="faq-section" aria-labelledby="faq-title">
          <h2 id="faq-title">开始前，你可能想了解</h2>
          <div className="faq-list">
            <details>
              <summary>
                安装后需要准备什么？<span aria-hidden="true">+</span>
              </summary>
              <p>
                桌面安装包自带运行环境。首次使用，在设置中填写模型的 Base
                URL、API Key
                和模型名，然后保存并自测。完整工具流程需要模型支持工具调用。媒体生成、转写等能力还需要配置对应的服务。
              </p>
            </details>
            <details>
              <summary>
                我的资料会发送到哪里？<span aria-hidden="true">+</span>
              </summary>
              <p>
                知识与作品保存在本机。调用云端模型时，当前任务、附件和检索到的相关片段会发送给你配置的供应商。你也可以选择本机模型
                API。
              </p>
            </details>
            <details>
              <summary>
                如何使用自己的知识库？<span aria-hidden="true">+</span>
              </summary>
              <p>
                可以在“学习知识库”中添加文字资料、保存来源并确认提炼的方法。桌面菜单也支持选择包含
                knowledge-base.json 的其他知识目录，重启后生效。
              </p>
            </details>
            <details>
              <summary>
                Kivo 和 Easel 有什么关系？<span aria-hidden="true">+</span>
              </summary>
              <p>
                Kivo 基于 Easel
                的内容创作底座，增加本地知识检索、资料学习、反馈复盘和 Windows
                桌面体验。感谢 Easel 开源项目。
                <a
                  href="https://github.com/ZJU-REAL/Easel"
                  target="_blank"
                  rel="noreferrer"
                >
                  查看上游项目 ↗
                </a>
              </p>
            </details>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href="#">
          <img src="/images/kivo-icon.png" width="32" height="32" alt="" />
          <span>Kivo</span>
        </a>
        <p>让每次创作，都有知识可依。</p>
        <a href={repository} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a
          href="https://github.com/ZJU-REAL/Easel"
          target="_blank"
          rel="noreferrer"
        >
          基于 Easel
        </a>
      </footer>
    </>
  );
}
