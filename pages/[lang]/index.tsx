import { GetStaticPaths, GetStaticProps } from "next";
import { ArrowRight, BriefcaseBusiness, Globe2, Layers3, Sparkles, TrendingUp, UsersRound } from "lucide-react";
import { defaultLanguage, languages } from "next-i18next-static-site";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

type Props = {
  lang: "zh-HK" | "en";
};

const copy = {
  "zh-HK": {
    title: "The Fashion Ventures | 時尚品牌增長與投資平台",
    description: "The Fashion Ventures 連結時尚創意、品牌營運與長期資本，協助新世代品牌由香港走向國際市場。",
    eyebrow: "Fashion. Capital. Venture Building.",
    headline: "為下一代時尚品牌建立增長平台",
    intro:
      "The Fashion Ventures 與創辦人、設計師及營運團隊同行，把品牌定位、商業模式、渠道拓展與資本策略整合成可執行的增長路線。",
    primaryCta: "開始對話",
    secondaryCta: "了解方向",
    pointTitle: "不只投資，更是一起建構品牌",
    pointBody:
      "時尚品牌的價值來自美學、供應鏈、社群、分銷與財務紀律的長期配合。我們相信早期品牌需要的不只是資金，而是能理解創意產業節奏的策略夥伴。",
    focusTitle: "我們關注",
    focusIntro: "聚焦具備清晰美學、文化洞察與跨市場潛力的品牌與創業團隊。",
    focus: [
      {
        title: "Brand Strategy",
        body: "定位、敘事、產品節奏與市場進入策略。"
      },
      {
        title: "Commercial Growth",
        body: "批發、零售、電商、社群與跨境渠道的增長設計。"
      },
      {
        title: "Capital Readiness",
        body: "財務模型、投資材料、夥伴引入與長期資本規劃。"
      }
    ],
    principlesTitle: "工作原則",
    principles: ["尊重創意核心", "重視商業紀律", "以香港連結亞洲與國際市場"],
    collaborateTitle: "正在建立第一批合作網絡",
    collaborateBody:
      "如果你正在建立時尚、生活方式、設計或零售相關品牌，或希望與新興品牌投資平台合作，歡迎與我們聯絡。",
    emailLabel: "聯絡電郵"
  },
  en: {
    title: "The Fashion Ventures | Fashion Brand Growth and Investment Platform",
    description:
      "The Fashion Ventures connects fashion creativity, brand operations, and patient capital to help next-generation brands grow from Hong Kong to global markets.",
    eyebrow: "Fashion. Capital. Venture Building.",
    headline: "A growth platform for the next generation of fashion brands",
    intro:
      "The Fashion Ventures works alongside founders, designers, and operators to turn brand positioning, business models, channel expansion, and capital strategy into a practical growth path.",
    primaryCta: "Start a Conversation",
    secondaryCta: "Explore Focus",
    pointTitle: "More than investment. Built with the brand.",
    pointBody:
      "Fashion brand value is shaped by aesthetics, supply chain, community, distribution, and financial discipline working together over time. We believe emerging brands need capital plus strategic partners who understand the rhythm of creative businesses.",
    focusTitle: "What We Focus On",
    focusIntro:
      "We focus on brands and founding teams with clear aesthetics, cultural insight, and cross-market potential.",
    focus: [
      {
        title: "Brand Strategy",
        body: "Positioning, narrative, product rhythm, and market entry strategy."
      },
      {
        title: "Commercial Growth",
        body: "Growth design across wholesale, retail, e-commerce, community, and cross-border channels."
      },
      {
        title: "Capital Readiness",
        body: "Financial models, investor materials, partner introductions, and long-term capital planning."
      }
    ],
    principlesTitle: "Operating Principles",
    principles: ["Protect the creative core", "Build with commercial discipline", "Use Hong Kong as a bridge to Asia and global markets"],
    collaborateTitle: "Building our first collaboration network",
    collaborateBody:
      "If you are building a fashion, lifestyle, design, or retail-related brand, or would like to partner with an emerging fashion investment platform, we would be glad to hear from you.",
    emailLabel: "Contact email"
  }
};

const metrics = [
  { label: "Market Lens", value: "HK + Asia" },
  { label: "Stage", value: "Emerging" },
  { label: "Model", value: "Capital + Build" }
];

const icons = [Sparkles, TrendingUp, BriefcaseBusiness];

export default function HomePage({ lang }: Props) {
  const content = copy[lang];

  return (
    <Layout lang={lang}>
      <Seo lang={lang} path={`/${lang}/`} title={content.title} description={content.description} />

      <section className="relative min-h-[92vh] overflow-hidden bg-neutral-950 pt-16 text-white">
        <img
          src="/tfv-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-72"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.88),rgba(10,10,10,.58)_43%,rgba(10,10,10,.18))]" />
        <div className="relative mx-auto grid min-h-[calc(92vh-4rem)] max-w-7xl items-center px-4 py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#d7b56d]">
              {content.eyebrow}
            </p>
            <h1 className="font-serif-brand text-5xl font-semibold leading-[1.05] tracking-normal md:text-7xl">
              {content.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              {content.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#collaborate"
                className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-[#d7b56d]"
              >
                {content.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#focus"
                className="inline-flex items-center justify-center border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {content.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="point-of-view" className="bg-[#fbfaf8] px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 border border-neutral-950/10 bg-white px-3 py-2 text-sm text-neutral-700">
              <Layers3 className="h-4 w-4 text-[#9f1d21]" />
              The Fashion Ventures
            </div>
            <h2 className="font-serif-brand max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              {content.pointTitle}
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-650">
              {content.pointBody}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => (
              <div key={metric.label} className="border border-neutral-950/10 bg-white p-5">
                <p className="text-sm text-neutral-500">{metric.label}</p>
                <p className="mt-2 font-serif-brand text-2xl font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="bg-neutral-950 px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="font-serif-brand text-4xl font-semibold md:text-5xl">{content.focusTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-white/66">{content.focusIntro}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.focus.map((item, index) => {
              const Icon = icons[index];
              return (
                <article key={item.title} className="border border-white/12 bg-white/[0.04] p-6">
                  <div className="grid h-11 w-11 place-items-center bg-[#9f1d21]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-serif-brand text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/64">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <div className="grid h-14 w-14 place-items-center bg-[#d7b56d] text-neutral-950">
              <Globe2 className="h-7 w-7" />
            </div>
            <h2 className="font-serif-brand mt-6 text-3xl font-semibold md:text-4xl">
              {content.principlesTitle}
            </h2>
          </div>
          <div className="grid gap-4">
            {content.principles.map((principle, index) => (
              <div key={principle} className="flex items-center gap-5 border-b border-neutral-950/10 pb-5">
                <span className="font-serif-brand text-3xl text-[#9f1d21]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-xl leading-7 text-neutral-800">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collaborate" className="bg-[#ece7df] px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 bg-white px-3 py-2 text-sm text-neutral-700">
              <UsersRound className="h-4 w-4 text-[#9f1d21]" />
              Network
            </div>
            <h2 className="font-serif-brand max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              {content.collaborateTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">{content.collaborateBody}</p>
          </div>
          <div className="border border-neutral-950/10 bg-white p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">{content.emailLabel}</p>
            <a
              href="mailto:hello@thefashionventures.com"
              className="mt-4 block break-words font-serif-brand text-2xl font-semibold text-neutral-950 transition hover:text-[#9f1d21] md:text-3xl"
            >
              hello@thefashionventures.com
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
