"use client";

import { useLang, LangToggle } from "./i18n";

export default function Nav() {
  const { t } = useLang();

  const links = [
    { href: "#pipeline", label: t.navPipeline },
    { href: "#voices", label: t.navVoices },
    { href: "#stack", label: t.navStack },
    { href: "#cta", label: t.navGame },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-void/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-mist">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-gold to-ether text-void shadow-sm">
            🎙️
          </span>
          <span className="text-lg tracking-tight">Dublador Astral Forge</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-mist/70 transition hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <LangToggle />
      </nav>
    </header>
  );
}
