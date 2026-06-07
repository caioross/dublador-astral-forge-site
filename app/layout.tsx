import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "../components/i18n";

const GA_ID = "G-PLACEHOLDER2";

export const metadata: Metadata = {
  title: "Dublador Astral Forge",
  description:
    "Pipeline local que dá voz e personalidade às 135 cartas de Astral Forge em PT-BR e EN. Qwen2.5-VL escolhe a voz e a emoção; Chatterbox gera o áudio. Sem nuvem.",
  keywords: [
    "Astral Forge",
    "dublagem",
    "TTS",
    "Chatterbox",
    "Qwen2.5-VL",
    "llama.cpp",
    "voz local",
    "PT-BR",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="stars antialiased">
        {GA_ID.indexOf("PLACEHOLDER") === -1 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
