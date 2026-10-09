import { GetStaticPaths, GetStaticProps } from "next";
import { ArrowUpRight } from "lucide-react";
import { defaultLanguage, languages } from "next-i18next-static-site";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import SectionCTA from "../../components/SectionCTA";

type Props = {
  lang: "en";
};

const content = {
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
      { title: "", date: "", image: "/images/events/event-amalfi.jpg" },
      { title: "", date: "", image: "/images/events/event-winter.jpg" },
      { title: "", date: "", image: "/images/events/event-city.jpg" },
      { title: "", date: "", image: "/images/events/event-262A1263.jpg" },
      { title: "", date: "", image: "/images/events/event-262A1579.jpg" },
      { title: "", date: "", image: "/images/events/event-LEW_9589.jpg" },
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
  const carouselEvents: typeof copy.events = copy.events;

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

      {/* <section className="relative overflow-hidden bg-[#0b0b0b] pt-16 text-white">
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
      </section> */}

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto grid  max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-top ">
          <div className="relative z-10 pb-8 lg:pb-16">
            <h2 className="font-serif-brand max-w-5xl text-4xl leading-[1.04] tracking-normal md:text-6xl lg:text-7xl">
              {copy.heroTitle} {copy.heroLines[0]} {copy.heroLines[1]}
              {/* <span className="block">{copy.heroLines[0]}</span>
              <span className="block">{copy.heroLines[1]}</span> */}
            </h2>
          </div>
          <div className="relative min-h-[520px] lg:min-h-[680px]">
              <img
                src="/tfv-template/hero-detail.jpg"
                alt=""
                className="absolute bottom-0 right-[38%] h-[78%] w-[56%] object-cover"
              />
              <img
                src="/tfv-template/262A2308.jpg"
                alt=""
                className="absolute right-0 top-5 h-[80%] lg:h-[58%] w-[48%] object-cover object-[25%_25%]"
              />
              <img
                src="/tfv-template/tfv-logo-black.svg"
                alt="The Fashion Ventures"
                className="absolute bottom-[8%] left-0 lg:left-[-24%] w-[58%] max-w-[320px]"
              />
            </div>
          </div>
      </section>

      <section id="events" className="bg-[#f4f1eb] px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif-brand text-4xl tracking-normal md:text-6xl">
            {copy.eventsTitle}
          </h2>
          <Swiper
            className="events-carousel mt-10"
            modules={[Autoplay, Pagination]}
            
            loop
            slidesPerGroup={1}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true
            }}
            
            speed={850}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
          >
            {carouselEvents.map((event: typeof carouselEvents[0], index: number) => (
              <SwiperSlide key={`${event.title}-${index}`}>
                <article className="group relative min-h-[520px] overflow-hidden bg-neutral-950 text-white">
                  <img
                    src={event.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* <div className="hidden absolute inset-0 bg-gradient-to-t from-black/86 via-black/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 hidden">
                    <h3 className="font-serif-brand text-2xl leading-tight">{event.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{event.date}</p>
                    <span className="mt-6 inline-flex items-center gap-3 border border-white/70 px-4 py-3 text-xs font-semibold tracking-[0.18em]">
                      {copy.eventCta}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div> */}
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-neutral-950 px-4 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <blockquote className="font-serif-brand text-4xl leading-[1.05] tracking-normal md:text-6xl">
            {copy.manifesto}
          </blockquote>
          <div>
            <img
              src="/tfv-template/strategy-table.jpg"
              alt=""
              className="aspect-[1.42] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif-brand max-w-3xl text-xl md:text-2xl leading-tight tracking-normal font-semibold">
            {copy.capabilitiesTitle}
          </h2>
          <div className="mt-12 border-t border-neutral-950">
            {copy.capabilities.map((item: typeof copy.capabilities[0], index: number) => (
              <article
                key={item.title}
                className="grid gap-5 border-b border-neutral-950/22 py-8 md:grid-cols-[90px_1fr] md:items-start"
              >
                <p className="font-serif-brand text-3xl text-neutral-400">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-4xl md:text-6xl font-serif-brand leading-tight text-neutral-950">{item.title}</h3>
                  <p className="text-lg leading-8 text-neutral-600 max-w-xl">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="bg-[#101010] px-4 py-20 text-white md:py-28">
        <SectionCTA lang={lang} />
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
