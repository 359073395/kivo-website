import { ProductPreview, MobileNav } from "./site-interactions";
import { ScrollStory, MotionEffects } from "./scroll-story";
import { basePath } from "./site-config";

const repository = "https://github.com/359073395/Kivo";
const release = `${repository}/releases/latest`;

export default function Landing() {
  return (
    <>
      <a href="#main" className="skip-link">
        跳到正文
      </a>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Kivo 首页">
          <img
            src={`${basePath}/images/kivo-icon.png`}
            width="40"
            height="40"
            alt=""
          />
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
            aria-label="热点选题示例"
          >
            <div className="note-heading">
              <span className="tiny-icon">↗</span> 热点雷达{" "}
              <span>选题示例</span>
            </div>
            <p>
              周末城市漫步
              <br />
              日常，也有新鲜视角
            </p>
            <div className="note-rule" />
            <small>
              微博 <span>·</span> 抖音 <span>·</span> 知乎
            </small>
          </aside>
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" /> 从热点到作品，一站式创作工作台
            </p>
            <h1 id="hero-title">
              从一个好选题，
              <br />
              到一份<span className="title-accent">好内容</span>。
            </h1>
            <p className="hero-description">
              发现热点、策划选题、制作内容、准备发布，
              <br />
              让你的知识与经验，参与每一步创作。
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
          <aside
            className="floating-note calendar-note"
            aria-label="内容排期示例"
          >
            <div className="note-heading">
              内容日历 <span>排期示例</span>
            </div>
            <div className="hero-calendar-row">
              <b>周二</b>
              <span>城市漫步 · 图文</span>
            </div>
            <div className="hero-calendar-row">
              <b>周四</b>
              <span>街角光线 · 视频</span>
            </div>
            <div className="hero-calendar-row">
              <b>周日</b>
              <span>一周内容复盘</span>
            </div>
          </aside>
          <aside
            className="floating-note knowledge-note"
            aria-label="知识辅助创作"
          >
            <div className="note-heading">
              带着知识创作 <span>本地知识库</span>
            </div>
            <p>
              你的方法与经验，
              <br />
              在需要时派上用场。
            </p>
            <div className="note-footer">
              <span>
                <i /> 来源可追溯
              </span>
              <span aria-hidden="true">▤</span>
            </div>
          </aside>
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
            <a href="#workflow">
              滚动探索完整工作流 <span aria-hidden="true">↓</span>
            </a>
            <MotionEffects />
          </div>
        </section>
        <div className="product-overview" aria-label="Kivo 创作能力概览">
          <div>
            <strong>6</strong>
            <span>平台热榜来源</span>
          </div>
          <div>
            <strong>选题 + 日历</strong>
            <span>收藏灵感，规划内容节奏</span>
          </div>
          <div>
            <strong>114</strong>
            <span>内置创作技能</span>
          </div>
          <div>
            <strong>本地知识</strong>
            <span>资料、方法与反馈持续积累</span>
          </div>
        </div>
        <ScrollStory />
        <section
          id="capabilities"
          className="capabilities-section"
          aria-labelledby="capabilities-title"
        >
          <div className="capabilities-intro">
            <p className="eyebrow">日常创作，也照顾每一个细节</p>
            <h2 id="capabilities-title">
              灵感有去处，
              <br />
              创作有方法。
            </h2>
            <p>
              把热点、选题、内容和反馈连接起来，
              <br />
              也把你的积累带进整个过程。
            </p>
          </div>
          <div className="capability-list">
            <article>
              <span className="capability-symbol" aria-hidden="true">
                ↗
              </span>
              <div>
                <h3>热点雷达与选题库</h3>
                <p>
                  聚合多个平台的热榜线索，收藏灵感、记录来源，推进到创作与排期。热榜获取依赖对应数据源和网络连接。
                </p>
              </div>
            </article>
            <article>
              <span className="capability-symbol" aria-hidden="true">
                ▦
              </span>
              <div>
                <h3>对标拆解与内容日历</h3>
                <p>
                  拆解内容的钩子与结构，整理可用的选题方向，再把草稿、待发内容与活动节点排进日历。
                </p>
              </div>
            </article>
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
          <img
            src={`${basePath}/images/kivo-icon.png`}
            width="72"
            height="72"
            alt=""
          />
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
          <p className="release-note">最新正式版 · Windows 10 / 11 x64</p>
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
          <img
            src={`${basePath}/images/kivo-icon.png`}
            width="32"
            height="32"
            alt=""
          />
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
