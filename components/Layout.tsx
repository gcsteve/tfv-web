import { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

type LayoutProps = {
  lang: "zh-HK" | "en";
  children: ReactNode;
};

export default function Layout({ lang, children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isZh = lang === "zh-HK";

  const nav = [
    { label: isZh ? "理念" : "Point of View", href: "#point-of-view" },
    { label: isZh ? "方向" : "Focus", href: "#focus" },
    { label: isZh ? "合作" : "Collaborate", href: "#collaborate" }
  ];

  const getCurrentPathForLang = (targetLang: "zh-HK" | "en") => {
    const pathWithoutLang = router.asPath.replace(/^\/(zh-HK|en)\b/, "");
    return `/${targetLang}${pathWithoutLang || "/"}`;
  };

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-neutral-950">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-neutral-950/82 px-4 text-white backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <Link href={`/${lang}/`} className="flex items-center gap-3" aria-label="The Fashion Ventures home">
            <span className="grid h-9 w-9 place-items-center border border-white/30 bg-white text-sm font-semibold text-neutral-950">
              TFV
            </span>
            <span className="font-serif-brand text-lg tracking-normal">The Fashion Ventures</span>
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
                ? "連結時尚創意、品牌營運與長期資本，與新世代品牌一起建立可持續增長。"
                : "Connecting fashion creativity, brand operations, and patient capital for the next generation of growth brands."}
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
