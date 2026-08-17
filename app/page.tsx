"use client";

import { useEffect, useState } from "react";

type Journey = {
  city: string;
  season: string;
  title: string;
  date: string;
  days: string;
  summary: string;
  image: string;
};

const journeys: Journey[] = [
  {
    city: "京都",
    season: "秋",
    title: "在京都，等一场枫叶变红",
    date: "2026.11.18—11.23",
    days: "6 DAYS",
    summary: "从清水寺的晨光走到鸭川的黄昏，收集一座古都最温柔的颜色。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    city: "东京",
    season: "春",
    title: "东京散步：霓虹、咖啡与樱花",
    date: "2026.03.27—04.01",
    days: "6 DAYS",
    summary: "在高速运转的城市里，寻找代代木、谷中和神保町的慢节奏。",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=85",
  },
  {
    city: "镰仓",
    season: "夏",
    title: "沿着江之电去看海",
    date: "2025.07.12—07.14",
    days: "3 DAYS",
    summary: "海风、旧电车和傍晚的富士山，把夏日剪成一帧一帧的电影。",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=85",
  },
];

const food = [
  {
    type: "正餐",
    name: "麺屋 猪一",
    city: "京都 · 下京区",
    note: "清澈出汁与柚子香，是雨天里最暖的一碗面。",
    price: "¥1,500",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
  },
  {
    type: "咖啡",
    name: "Kurasu Kyoto",
    city: "京都 · 京都站",
    note: "明亮、安静，适合在出发前写完当天的旅行手账。",
    price: "¥800",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85",
  },
  {
    type: "甜品",
    name: "茶寮都路里",
    city: "京都 · 祇园",
    note: "浓郁抹茶、柔软白玉，还有可以慢慢看的窗边街景。",
    price: "¥1,400",
    image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&w=1000&q=85",
  },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=85", alt: "京都街道两旁的传统木屋", caption: "京都 · 清晨六点的二年坂" },
  { src: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=85", alt: "日本街头暖色灯笼", caption: "东京 · 夜色亮起以后" },
  { src: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=1200&q=85", alt: "日本寺院屋檐与红叶", caption: "京都 · 屋檐下的秋天" },
  { src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=85", alt: "东京夜晚的街道与招牌", caption: "东京 · 雨后的新宿" },
  { src: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=85", alt: "富士山与湖面倒影", caption: "山梨 · 去看一座山" },
  { src: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?auto=format&fit=crop&w=1200&q=85", alt: "日本城市铁路沿线风景", caption: "镰仓 · 江之电沿线" },
];

const navItems = [
  ["旅程", "#journeys"], ["目的地", "#destinations"], ["美食", "#food"],
  ["Vlog", "#vlog"], ["摄影", "#gallery"], ["关于我", "#about"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFood, setActiveFood] = useState("全部");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((lightbox + 1) % gallery.length);
      if (event.key === "ArrowLeft") setLightbox((lightbox - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox]);

  const visibleFood = activeFood === "全部" ? food : food.filter((item) => item.type === activeFood);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页顶部">
          <span className="brand-mark">旅</span>
          <span>PAOLA&apos;S<small>JAPAN JOURNAL</small></span>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <button className="menu-button" type="button" aria-label="打开导航菜单" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="移动端导航">
            {navItems.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                <small>0{index + 1}</small>{label}<span>↗</span>
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=2200&q=90" alt="京都清晨的传统街道" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">日本旅行 · 摄影 · 生活记录</p>
          <h1>把旅途写成<br /><em>一封很长的信</em></h1>
          <p className="hero-copy">从广州出发，记录我在日本遇见的城市、食物、光线，<br className="desktop-only" />以及那些值得被慢慢记住的普通瞬间。</p>
          <a className="hero-cta" href="#journeys">开始阅读 <span>↓</span></a>
        </div>
        <div className="hero-meta" aria-label="网站简介">
          <span>35.0116° N</span><span>135.7681° E</span><span>ISSUE 01 — 2026</span>
        </div>
      </section>

      <section className="section journeys-section" id="journeys">
        <div className="section-heading">
          <div><p className="eyebrow">01 · JOURNEYS</p><h2>最近的旅程</h2></div>
          <p>不赶景点，把每座城市住成一段生活。</p>
        </div>
        <div className="journey-grid">
          {journeys.map((journey, index) => (
            <article className="journey-card" key={journey.title}>
              <a href="#featured-journey" aria-label={`阅读${journey.title}`}>
                <div className="image-wrap"><img src={journey.image} alt={`${journey.city}旅行照片`} /><span className="card-index">0{index + 1}</span></div>
                <div className="card-meta"><span>{journey.city}</span><span>{journey.season}</span><span>{journey.days}</span></div>
                <h3>{journey.title}</h3><p>{journey.summary}</p>
                <div className="card-footer"><span>{journey.date}</span><b>阅读全文 ↗</b></div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-journey" id="featured-journey">
        <div className="featured-aside"><p className="eyebrow">FEATURED STORY</p><span className="vertical-word">KYOTO</span></div>
        <div className="featured-main">
          <div className="featured-title-row">
            <div><p className="feature-kicker">六日行程摘录</p><h2>京都，适合把脚步放慢</h2></div>
            <p>早起避开人潮，在町屋吃早餐；下午沿着鸭川散步，天黑后钻进一间只有八个座位的小店。</p>
          </div>
          <div className="story-layout">
            <img src="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1400&q=85" alt="京都寺院前的传统景色" />
            <ol className="timeline">
              <li><span>DAY 01</span><div><b>抵达京都</b><small>京都站 · 东寺 · 梅小路</small></div></li>
              <li><span>DAY 02</span><div><b>东山晨间散步</b><small>清水寺 · 二年坂 · 祇园</small></div></li>
              <li><span>DAY 03</span><div><b>山与庭院</b><small>岚山 · 常寂光寺 · 渡月桥</small></div></li>
              <li><span>DAY 04</span><div><b>留白的一天</b><small>出町柳 · 鸭川 · 书店与咖啡</small></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section destinations-section" id="destinations">
        <div className="section-heading">
          <div><p className="eyebrow">02 · DESTINATIONS</p><h2>城市足迹</h2></div><p>点击城市，发现相关旅程、照片和味道。</p>
        </div>
        <div className="destination-grid">
          <a className="destination-card destination-main" href="#featured-journey"><img src={journeys[0].image} alt="京都秋日街景" /><div><small>6 JOURNEYS · 42 PLACES</small><h3>京都 <em>Kyoto</em></h3></div></a>
          <a className="destination-card" href="#journeys"><img src={journeys[1].image} alt="东京城市夜景" /><div><small>4 JOURNEYS · 31 PLACES</small><h3>东京 <em>Tokyo</em></h3></div></a>
          <a className="destination-card" href="#journeys"><img src={journeys[2].image} alt="镰仓夏日街景" /><div><small>2 JOURNEYS · 12 PLACES</small><h3>镰仓 <em>Kamakura</em></h3></div></a>
        </div>
      </section>

      <section className="food-section" id="food">
        <div className="food-intro">
          <p className="eyebrow light">03 · TASTE NOTES</p>
          <h2>一座城市，<br /><em>从味道开始记住</em></h2>
          <p>不是美食榜单，只记录当时为什么觉得好吃。</p>
          <div className="filter-chips" role="group" aria-label="美食分类筛选">
            {["全部", "正餐", "咖啡", "甜品"].map((item) => <button key={item} type="button" className={activeFood === item ? "active" : ""} onClick={() => setActiveFood(item)}>{item}</button>)}
          </div>
        </div>
        <div className="food-list" aria-live="polite">
          {visibleFood.map((item) => (
            <article className="food-card" key={item.name}>
              <img src={item.image} alt={`${item.name}美食照片`} />
              <div><span>{item.type} · {item.city}</span><h3>{item.name}</h3><p>{item.note}</p><b>人均 {item.price}</b></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section vlog-section" id="vlog">
        <div className="section-heading"><div><p className="eyebrow">04 · VLOG</p><h2>旅途放映室</h2></div><p>用镜头保存声音、风和走路时的心情。</p></div>
        <article className="vlog-feature">
          <div className="vlog-cover">
            <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1800&q=90" alt="日本夜晚街道" />
            <button type="button" aria-label="播放京都秋日旅行Vlog" onClick={() => alert("这里可以替换成你的 Bilibili 或 YouTube 视频链接。")}>▶</button><span>08:42</span>
          </div>
          <div className="vlog-copy"><span>EP. 01 · KYOTO AUTUMN</span><h3>六天五夜，<br />把京都过成日常</h3><p>清晨的寺院、雨后的石板路、便利店早餐，以及没有安排的下午。</p><div><b>拍摄 / 剪辑</b><span>Paola</span></div><div><b>发布日期</b><span>2026.12.08</span></div></div>
        </article>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading"><p className="eyebrow light">05 · PHOTO DIARY</p><h2>光落下来的时候，<br /><em>我刚好在那里</em></h2><p>点击照片全屏查看 · 支持键盘方向键</p></div>
        <div className="photo-grid">
          {gallery.map((photo, index) => <button type="button" key={photo.src} className={`photo photo-${index + 1}`} onClick={() => setLightbox(index)} aria-label={`查看大图：${photo.caption}`}><img src={photo.src} alt={photo.alt} /><span>{photo.caption}</span></button>)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-number">私</div>
        <div className="about-copy">
          <p className="eyebrow">06 · ABOUT</p><h2>你好，我是 Paola。</h2>
          <p className="about-lead">来自广州的工业设计研究生，也是一名喜欢观察人与生活的产品经理。我用 Vlog、照片和文字记录旅行，因为细节会让一段记忆重新有温度。</p>
          <div className="about-facts"><div><small>现在在做</small><b>产品 · 用户研究</b></div><div><small>喜欢记录</small><b>城市 · 食物 · 人</b></div><div><small>下一站</small><b>还在计划中</b></div></div>
          <a href="mailto:hello@example.com">写信给我 ↗</a>
        </div>
        <blockquote>“不一定要去很远的地方，<br />重要的是认真看过。”</blockquote>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">旅</span><span>PAOLA&apos;S<small>JAPAN JOURNAL</small></span></a>
        <p>记录城市、味道与光线。<br />示例图片来自 Unsplash，发布前请替换为你的原创照片。</p>
        <div className="footer-links"><a href="#vlog">BILIBILI ↗</a><a href="#gallery">XIAOHONGSHU ↗</a><a href="mailto:hello@example.com">EMAIL ↗</a></div>
        <small>© 2026 PAOLA&apos;S JAPAN JOURNAL</small>
      </footer>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="照片大图预览">
          <button className="lightbox-close" type="button" onClick={() => setLightbox(null)} aria-label="关闭照片">×</button>
          <button className="lightbox-arrow prev" type="button" onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)} aria-label="上一张">←</button>
          <figure><img src={gallery[lightbox].src} alt={gallery[lightbox].alt} /><figcaption>{gallery[lightbox].caption} · {lightbox + 1} / {gallery.length}</figcaption></figure>
          <button className="lightbox-arrow next" type="button" onClick={() => setLightbox((lightbox + 1) % gallery.length)} aria-label="下一张">→</button>
        </div>
      )}
    </main>
  );
}
