import { GetStaticPaths, GetStaticProps } from "next";
import { ArrowUpRight } from "lucide-react";
import { defaultLanguage, languages } from "next-i18next-static-site";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

type Props = {
  lang: "zh-HK" | "en";
};

const content = {
  "zh-HK": {
    title: "The Fashion Ventures | 時尚品牌市場拓展與營運平台",
    description:
      "The Fashion Ventures 以品牌策略、市場推廣、數碼渠道、零售執行與跨境物流，協助時尚品牌進入香港及中國市場。",
    heroKicker: "THE FASHION VENTURES",
    heroTitle: "We find the brands people want.",
    heroLines: ["We get them on shelves.", "We make them sell."],
    inquire: "INQUIRE",
    eventsTitle: "Previous Events",
    eventCta: "CHECK IT OUT",
    events: [
      { title: "The Amalfi Epoch", date: "June, 2035", image: "/tfv-template/event-amalfi.jpg" },
      { title: "A Winter's Tale", date: "June, 2035", image: "/tfv-template/event-winter.jpg" },
      { title: "Shadows of the City's Icon", date: "June, 2035", image: "/tfv-template/event-city.jpg" }
    ],
    manifesto:
      "Strategy. Marketing. Digital. Retail. Logistics. All in-house. No outsourcing. No guesswork.",
    manifestoZh:
      "策略、市場推廣、數碼渠道、零售與物流由內部團隊一體化執行。不外判，不靠猜測。",
    capabilitiesTitle: "What we bring to the table.",
    capabilities: [
      {
        title: "Venture Building & Business Strategy",
        body:
          "15+ years launching and scaling ventures across real estate, telecom, hospitality, and retail. We take brands from zero to market - and keep them there.",
        bodyZh:
          "15 年以上跨房地產、電訊、酒店及零售的創業與增長經驗。我們把品牌由零推向市場，並持續建立增長。"
      },
      {
        title: "Market Entry",
        body:
          "6+ years in luxury fashion at Net-a-Porter. We know APAC consumer behavior. We know what sells. We know why.",
        bodyZh:
          "6 年以上 Net-a-Porter 奢侈時尚經驗，熟悉亞太消費者行為，理解產品為何被購買、如何被市場接受。"
      },
      {
        title: "Platform & Digital Marketing",
        body:
          "In-house Xiaohongshu, WeChat, Tmall, and Douyin specialists. Trend analysis. Content planning. Influencer partnerships. Ad placements. Campaigns that convert.",
        bodyZh:
          "內部配置小紅書、微信、天貓與抖音專才，涵蓋趨勢分析、內容規劃、KOL 合作、廣告投放與轉化型 campaign。"
      },
      {
        title: "Retail & Pop-Up Execution",
        body:
          "Strong relationships with major mall operators and multi-brand boutiques across Hong Kong and China. We secure prime space. We manage pop-ups. We handle VIP events.",
        bodyZh:
          "連結香港與中國主要商場營運方及多品牌買手店，協助品牌取得優質零售空間、管理 pop-up，並執行 VIP 活動。"
      },
      {
        title: "Cross-Border Logistics",
        body:
          "Bonded warehousing. Free port policy. Cross-border e-commerce. We move stock efficiently and compliantly into Hong Kong and Mainland China.",
        bodyZh:
          "善用保稅倉、自由港政策與跨境電商模式，協助貨品合規而高效地進入香港及中國內地市場。"
      }
    ],
    connectTitle: "Want to work together?",
    connectCta: "Let's Talk"
  },
  en: {
    title: "The Fashion Ventures | Fashion Market Entry and Venture Building",
    description:
      "The Fashion Ventures helps fashion brands enter Hong Kong and China through strategy, marketing, digital platforms, retail execution, and cross-border logistics.",
    heroKicker: "THE FASHION VENTURES",
    heroTitle: "We find the brands people want.",
    heroLines: ["We get them on shelves.", "We make them sell."],
    inquire: "INQUIRE",
    eventsTitle: "Previous Events",
    eventCta: "CHECK IT OUT",
    events: [
      { title: "The Amalfi Epoch", date: "June, 2035", image: "/tfv-template/event-amalfi.jpg" },
      { title: "A Winter's Tale", date: "June, 2035", image: "/tfv-template/event-winter.jpg" },
      { title: "Shadows of the City's Icon", date: "June, 2035", image: "/tfv-template/event-city.jpg" }
    ],
    manifesto:
      "Strategy. Marketing. Digital. Retail. Logistics. All in-house. No outsourcing. No guesswork.",
    manifestoZh:
      "Strategy. Marketing. Digital. Retail. Logistics. All in-house. No outsourcing. No guesswork.",
    capabilitiesTitle: "What we bring to the table.",
    capabilities: [
      {
        title: "Venture Building & Business Strategy",
        body:
          "15+ years launching and scaling ventures across real estate, telecom, hospitality, and retail. We take brands from zero to market - and keep them there.",
        bodyZh:
          "15+ years launching and scaling ventures across real estate, telecom, hospitality, and retail. We take brands from zero to market - and keep them there."
      },
      {
        title: "Market Entry",
        body:
          "6+ years in luxury fashion at Net-a-Porter. We know APAC consumer behavior. We know what sells. We know why.",
        bodyZh:
          "6+ years in luxury fashion at Net-a-Porter. We know APAC consumer behavior. We know what sells. We know why."
      },
      {
        title: "Platform & Digital Marketing",
        body:
          "In-house Xiaohongshu, WeChat, Tmall, and Douyin specialists. Trend analysis. Content planning. Influencer partnerships. Ad placements. Campaigns that convert.",
        bodyZh:
          "In-house Xiaohongshu, WeChat, Tmall, and Douyin specialists. Trend analysis. Content planning. Influencer partnerships. Ad placements. Campaigns that convert."
      },
      {
        title: "Retail & Pop-Up Execution",
        body:
          "Strong relationships with major mall operators and multi-brand boutiques across Hong Kong and China. We secure prime space. We manage pop-ups. We handle VIP events.",
        bodyZh:
          "Strong relationships with major mall operators and multi-brand boutiques across Hong Kong and China. We secure prime space. We manage pop-ups. We handle VIP events."
      },
      {
        title: "Cross-Border Logistics",
        body:
          "Bonded warehousing. Free port policy. Cross-border e-commerce. We move stock efficiently and compliantly into Hong Kong and Mainland China.",
        bodyZh:
          "Bonded warehousing. Free port policy. Cross-border e-commerce. We move stock efficiently and compliantly into Hong Kong and Mainland China."
      }
    ],
    connectTitle: "Want to work together?",
    connectCta: "Let's Talk"
  }
};

export default function HomePage({ lang }: Props) {
  const copy = content[lang];
  const isZh = lang === "zh-HK";

  return (
    <Layout lang={lang}>
      <Seo lang={lang} path={`/${lang}/`} title={copy.title} description={copy.description} />

      <section className="first-hero-section relative h-[100svh] min-h-[560px] overflow-hidden bg-neutral-950">
        <div className="first-hero-grid h-full">
          <div className="first-hero-panel first-hero-panel-one">
            <img src="/tfv-template/hero-1.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="first-hero-panel first-hero-panel-two">
            <img src="/tfv-template/hero-2.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <img
          src="/images/Logo-TFV.svg"
          alt="The Fashion Ventures"
          className="first-hero-logo pointer-events-none absolute left-1/2 top-1/2 z-10 h-auto -translate-x-1/2 -translate-y-1/2"
        />
      </section>

      <section className="relative overflow-hidden bg-[#0b0b0b] pt-16 text-white">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-16">
          <div className="relative z-10 pb-8 lg:pb-16">
            <p className="text-xs font-semibold tracking-[0.34em] text-white/54">{copy.heroKicker}</p>
            <h1 className="font-serif-brand mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal md:text-7xl xl:text-8xl">
              {copy.heroTitle}
            </h1>
            <div className="mt-7 space-y-2 text-2xl leading-tight text-white/76 md:text-4xl">
              {copy.heroLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a
              href="#connect"
              className="mt-10 inline-flex items-center gap-3 border border-white px-5 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-white hover:text-neutral-950"
            >
              {copy.inquire}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[680px]">
            <img
              src="/tfv-template/hero-portrait.jpg"
              alt=""
              className="absolute bottom-0 right-[18%] h-[78%] w-[46%] object-cover"
            />
            <img
              src="/tfv-template/hero-detail.png"
              alt=""
              className="absolute right-0 top-5 h-[48%] w-[48%] object-cover"
            />
            <img
              src="/tfv-template/tfv-logo-white.png"
              alt="The Fashion Ventures"
              className="absolute bottom-[8%] left-0 w-[58%] max-w-[470px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif-brand max-w-5xl text-4xl font-semibold leading-[1.04] tracking-normal md:text-6xl lg:text-7xl">
            {copy.heroTitle}
            <span className="block">{copy.heroLines[0]}</span>
            <span className="block">{copy.heroLines[1]}</span>
          </h2>
        </div>
      </section>

      <section id="events" className="bg-[#f4f1eb] px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif-brand text-4xl font-semibold tracking-normal md:text-6xl">
            {copy.eventsTitle}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {copy.events.map((event) => (
              <article key={event.title} className="group relative min-h-[520px] overflow-hidden bg-neutral-950 text-white">
                <img
                  src={event.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif-brand text-3xl font-semibold leading-tight">{event.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{event.date}</p>
                  <span className="mt-6 inline-flex items-center gap-3 border border-white/70 px-4 py-3 text-xs font-semibold tracking-[0.18em]">
                    {copy.eventCta}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-4 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <blockquote className="font-serif-brand text-4xl font-semibold leading-[1.05] tracking-normal md:text-6xl">
            {copy.manifesto}
          </blockquote>
          <div>
            <img
              src="/tfv-template/strategy-table.jpg"
              alt=""
              className="aspect-[1.42] w-full object-cover"
            />
            {isZh && <p className="mt-6 text-lg leading-8 text-white/68">{copy.manifestoZh}</p>}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif-brand max-w-3xl text-4xl font-semibold leading-tight tracking-normal md:text-6xl">
            {copy.capabilitiesTitle}
          </h2>
          <div className="mt-12 border-t border-neutral-950">
            {copy.capabilities.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-5 border-b border-neutral-950/22 py-8 md:grid-cols-[90px_0.9fr_1.1fr] md:items-start"
              >
                <p className="font-serif-brand text-3xl text-neutral-400">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-2xl font-semibold leading-tight text-neutral-950">{item.title}</h3>
                <p className="text-lg leading-8 text-neutral-600">{isZh ? item.bodyZh : item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="bg-[#101010] px-4 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="/tfv-template/collab-left.jpg" alt="" className="aspect-[0.75] h-full w-full object-cover" />
            <img src="/tfv-template/collab-right.jpg" alt="" className="mt-12 aspect-[0.75] h-full w-full object-cover" />
          </div>
          <div className="lg:pl-8">
            <h2 className="font-serif-brand text-5xl font-semibold leading-tight tracking-normal md:text-7xl">
              {copy.connectTitle}
            </h2>
            <a
              href="mailto:hello@thefashionventures.com"
              className="mt-10 inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-sm font-semibold tracking-[0.18em] text-neutral-950 transition hover:bg-transparent hover:text-white"
            >
              {copy.connectCta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: (languages as string[]).map((lang) => ({ params: { lang } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = params?.lang as Props["lang"];

  return {
    props: {
      lang: lang || (defaultLanguage as Props["lang"])
    }
  };
};
