import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

type LayoutProps = {
  lang: "zh-HK" | "en";
  children: ReactNode;
};

export default function Layout({ lang, children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisibility, setNavVisibility] = useState(0);
  const router = useRouter();
  const isZh = lang === "zh-HK";

  const nav = [
    { label: isZh ? "活動" : "Events", href: "#events" },
    { label: isZh ? "能力" : "Capabilities", href: "#capabilities" },
    { label: isZh ? "合作" : "Connect", href: "#connect" }
  ];

  const getCurrentPathForLang = (targetLang: "zh-HK" | "en") => {
    const pathWithoutLang = router.asPath.replace(/^\/(zh-HK|en)\b/, "");
    return `/${targetLang}${pathWithoutLang || "/"}`;
  };

  useEffect(() => {
    const updateNavVisibility = () => {
      const fadeStart = 90;
      const fadeDistance = 220;
      const progress = Math.min(Math.max((window.scrollY - fadeStart) / fadeDistance, 0), 1);
      setNavVisibility(progress);
    };

    updateNavVisibility();
    window.addEventListener("scroll", updateNavVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateNavVisibility);
  }, []);

  const headerVisibility = mobileMenuOpen ? 1 : navVisibility;

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-neutral-950">
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-neutral-950/82 px-4 text-white backdrop-blur-xl transition duration-300"
        style={{
          opacity: headerVisibility,
          pointerEvents: headerVisibility > 0.08 ? "auto" : "none",
          transform: `translateY(${(1 - headerVisibility) * -16}px)`
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <Link href={`/${lang}/`} className="flex items-center" aria-label="The Fashion Ventures home">
            <img src="/images/Logo-TFV.svg" alt="The Fashion Ventures" className="h-9 w-auto" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/78 transition hover:text-white">
                {item.label}
              </a>
            ))}
            <Link
              href={getCurrentPathForLang(isZh ? "en" : "zh-HK")}
              className="border border-white/25 px-3 py-2 text-sm text-white transition hover:bg-white hover:text-neutral-950"
            >
              {isZh ? "English" : "繁體中文"}
            </Link>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/20 text-white lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="mx-auto max-w-7xl border-t border-white/10 py-4 lg:hidden">
            <div className="grid gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-3 text-white/86"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href={getCurrentPathForLang(isZh ? "en" : "zh-HK")}
                className="px-2 py-3 text-white/86"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isZh ? "English" : "繁體中文"}
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-neutral-950 px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif-brand text-xl">The Fashion Ventures</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
              {isZh
                ? "Strategy. Marketing. Digital. Retail. Logistics. 以內部團隊把品牌帶到市場。"
                : "Strategy. Marketing. Digital. Retail. Logistics. Built in-house to bring brands to market."}
            </p>
          </div>
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} The Fashion Ventures. {isZh ? "版權所有。" : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
