"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Phase = { n: string; title: string; desc: string };
type Voice = { icon: string; name: string; desc: string };

type Dict = {
  navPipeline: string;
  navVoices: string;
  navStack: string;
  navGame: string;

  heroBadge: string;
  heroTitle: string;
  heroTagline: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroStat1: string;
  heroStat1l: string;
  heroStat2: string;
  heroStat2l: string;
  heroStat3: string;
  heroStat3l: string;

  pipelineTitle: string;
  pipelineLead: string;
  phases: Phase[];

  voicesTitle: string;
  voicesLead: string;
  voices: Voice[];

  stackTitle: string;
  stackLead: string;
  stackItems: string[];
  localTitle: string;
  localItems: string[];

  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;

  footerNote: string;
  footerRights: string;
};

const STR: Record<Lang, Dict> = {
  pt: {
    navPipeline: "Pipeline",
    navVoices: "Vozes",
    navStack: "Tecnologia",
    navGame: "O jogo",

    heroBadge: "Ferramenta de produção · Astral Forge",
    heroTitle: "Dublador Astral Forge",
    heroTagline: "Cada carta ganha voz. E personalidade.",
    heroSub:
      "Pipeline local que dubla as 135 cartas de Astral Forge em PT-BR e EN. Uma IA de visão escolhe a voz e a emoção certas para cada carta; outra gera o áudio. Nada sai da sua máquina.",
    heroCtaPrimary: "Ver o pipeline",
    heroCtaSecondary: "Conhecer o jogo",
    heroStat1: "135",
    heroStat1l: "cartas",
    heroStat2: "2",
    heroStat2l: "idiomas",
    heroStat3: "100%",
    heroStat3l: "local",

    pipelineTitle: "Duas fases, uma performance",
    pipelineLead:
      "Da arte da carta ao arquivo de áudio com a emoção certa — sem locutor humano, sem nuvem.",
    phases: [
      {
        n: "01",
        title: "Diretor de elenco",
        desc: "Um modelo de visão (Qwen2.5-VL via llama.cpp) vê a arte, o nome, a facção e a fala da carta e decide o arquétipo de voz e a emoção. A decisão fica registrada num manifesto editável.",
      },
      {
        n: "02",
        title: "Dublagem",
        desc: "O Chatterbox multilíngue gera o áudio em PT e EN com a voz de referência escolhida e a emoção definida. Saída separada do jogo, pronta para integrar.",
      },
    ],

    voicesTitle: "Um elenco de arquétipos",
    voicesLead:
      "Vozes de referência cobrem o panteão de Astral Forge — heróis, monstros e narradores.",
    voices: [
      { icon: "⚔️", name: "Guerreiro / Herói", desc: "Voz grave e firme para campeões e cavaleiros." },
      { icon: "🐉", name: "Dragão / Besta", desc: "Timbre rouco e ameaçador para criaturas e construtos." },
      { icon: "🔮", name: "Feiticeira / Donzela", desc: "Voz etérea e melódica para conjuradoras e místicas." },
      { icon: "📜", name: "Narrador", desc: "Locução clara para eventos e falas da campanha (PT + EN)." },
    ],

    stackTitle: "Tecnologia",
    stackLead: "Modelos locais leves orquestrados em Python.",
    stackItems: [
      "Python 3.12 + PyTorch CUDA",
      "Qwen2.5-VL-3B (GGUF) via llama.cpp — o diretor de elenco",
      "Chatterbox multilíngue — síntese de voz com emoção",
      "Resume por estado: pare e continue quando quiser",
    ],
    localTitle: "Por que local",
    localItems: [
      "Sem API paga e sem custo por caractere",
      "Nenhum áudio ou dado do jogo vai pra nuvem",
      "Roda numa RTX 3050 4GB com offload",
      "Controle total da voz e da emoção por carta",
    ],

    ctaTitle: "Parte do universo Astral Forge",
    ctaLead:
      "Um TCG de invocações e cartas com arte própria. O Dublador dá voz a esse panteão — em dois idiomas.",
    ctaButton: "Ver Astral Forge",

    footerNote: "Dublador Astral Forge — ferramenta de produção de Astral Forge.",
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    navPipeline: "Pipeline",
    navVoices: "Voices",
    navStack: "Tech",
    navGame: "The game",

    heroBadge: "Production tool · Astral Forge",
    heroTitle: "Astral Forge Dubber",
    heroTagline: "Every card gets a voice. And a personality.",
    heroSub:
      "A local pipeline that voices the 135 Astral Forge cards in PT-BR and EN. A vision AI picks the right voice and emotion for each card; another generates the audio. Nothing leaves your machine.",
    heroCtaPrimary: "See the pipeline",
    heroCtaSecondary: "Discover the game",
    heroStat1: "135",
    heroStat1l: "cards",
    heroStat2: "2",
    heroStat2l: "languages",
    heroStat3: "100%",
    heroStat3l: "local",

    pipelineTitle: "Two phases, one performance",
    pipelineLead:
      "From card art to an audio file with the right emotion — no human voice actor, no cloud.",
    phases: [
      {
        n: "01",
        title: "Casting director",
        desc: "A vision model (Qwen2.5-VL via llama.cpp) looks at the card's art, name, faction and line and decides the voice archetype and emotion. The decision is saved to an editable manifest.",
      },
      {
        n: "02",
        title: "Dubbing",
        desc: "Multilingual Chatterbox renders the audio in PT and EN with the chosen reference voice and emotion. Output is kept separate from the game, ready to integrate.",
      },
    ],

    voicesTitle: "A cast of archetypes",
    voicesLead:
      "Reference voices cover the Astral Forge pantheon — heroes, monsters and narrators.",
    voices: [
      { icon: "⚔️", name: "Warrior / Hero", desc: "Deep, steady voice for champions and knights." },
      { icon: "🐉", name: "Dragon / Beast", desc: "Raspy, menacing timbre for creatures and constructs." },
      { icon: "🔮", name: "Sorceress / Maiden", desc: "Ethereal, melodic voice for casters and mystics." },
      { icon: "📜", name: "Narrator", desc: "Clear narration for events and campaign lines (PT + EN)." },
    ],

    stackTitle: "Tech",
    stackLead: "Lightweight local models orchestrated in Python.",
    stackItems: [
      "Python 3.12 + PyTorch CUDA",
      "Qwen2.5-VL-3B (GGUF) via llama.cpp — the casting director",
      "Multilingual Chatterbox — voice synthesis with emotion",
      "Stateful resume: stop and continue anytime",
    ],
    localTitle: "Why local",
    localItems: [
      "No paid API, no per-character cost",
      "No audio or game data sent to the cloud",
      "Runs on a 4GB RTX 3050 with offload",
      "Full control of voice and emotion per card",
    ],

    ctaTitle: "Part of the Astral Forge universe",
    ctaLead:
      "A summoning TCG with its own card art. The Dubber gives that pantheon a voice — in two languages.",
    ctaButton: "See Astral Forge",

    footerNote: "Astral Forge Dubber — a production tool for Astral Forge.",
    footerRights: "All rights reserved.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("lang")) as Lang | null;
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: STR[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-gold/40 bg-black/30 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "pt" ? "bg-gold text-void" : "text-mist/70 hover:text-white"
        }`}
      >
        🇧🇷 PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "en" ? "bg-gold text-void" : "text-mist/70 hover:text-white"
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
