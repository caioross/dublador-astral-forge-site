"use client";

import { useLang } from "./i18n";

const GAME_URL = "https://github.com/caioross";

export function Hero() {
  const { t } = useLang();
  const stats = [
    { v: t.heroStat1, l: t.heroStat1l },
    { v: t.heroStat2, l: t.heroStat2l },
    { v: t.heroStat3, l: t.heroStat3l },
  ];
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:py-32">
        <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          {t.heroBadge}
        </span>
        <h1 className="mt-6 bg-gradient-to-r from-gold via-mist to-ether bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-7xl">
          {t.heroTitle}
        </h1>
        <p className="mt-4 font-mono text-lg text-gold sm:text-xl">{t.heroTagline}</p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/75 sm:text-lg">
          {t.heroSub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pipeline"
            className="animate-pulseGlow rounded-full bg-gold px-7 py-3 font-semibold text-void transition hover:bg-goldDim"
          >
            {t.heroCtaPrimary}
          </a>
          <a
            href={GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-mist/30 px-7 py-3 font-semibold text-mist transition hover:border-gold hover:text-gold"
          >
            {t.heroCtaSecondary}
          </a>
        </div>
        <div className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-gold/20 bg-cosmos/60 p-5">
              <div className="text-3xl font-black text-gold">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-mist/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pipeline() {
  const { t } = useLang();
  return (
    <section id="pipeline" className="border-t border-gold/10 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold text-mist sm:text-4xl">
          {t.pipelineTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-mist/70">{t.pipelineLead}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.phases.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-gold/20 bg-cosmos/60 p-7 transition hover:border-gold/60"
            >
              <span className="font-mono text-5xl font-black text-gold/30">{p.n}</span>
              <h3 className="mt-3 text-xl font-bold text-mist">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-mist/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Voices() {
  const { t } = useLang();
  return (
    <section id="voices" className="border-t border-gold/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-mist sm:text-4xl">
          {t.voicesTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-mist/70">{t.voicesLead}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.voices.map((v) => (
            <div
              key={v.name}
              className="rounded-2xl border border-ether/20 bg-cosmos/40 p-6 text-center transition hover:border-ether/60"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ether/15 text-3xl">
                {v.icon}
              </div>
              <h3 className="mt-4 font-bold text-mist">{v.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="border-t border-gold/10 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-mist sm:text-4xl">{t.stackTitle}</h2>
          <p className="mt-3 text-mist/70">{t.stackLead}</p>
          <ul className="mt-6 space-y-3">
            {t.stackItems.map((s) => (
              <li key={s} className="flex items-start gap-3 text-mist/85">
                <span className="mt-1 text-gold">▹</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-gold/20 bg-cosmos/60 p-6">
          <h3 className="text-lg font-bold text-mist">{t.localTitle}</h3>
          <ul className="mt-4 space-y-3">
            {t.localItems.map((q) => (
              <li key={q} className="flex items-start gap-3 text-mist/85">
                <span className="mt-0.5 text-ether">✦</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const { t } = useLang();
  return (
    <section id="cta" className="border-t border-gold/10 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-mist sm:text-4xl">{t.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-mist/75">{t.ctaLead}</p>
        <a
          href={GAME_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-gold to-ether px-8 py-3 font-semibold text-void transition hover:opacity-90"
        >
          {t.ctaButton}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-gold/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-mist/50">
        <p>{t.footerNote}</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Caio · {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
