import Link from "next/link";
import type { ReactNode } from "react";

/** Simple readable layout shared by the Privacy Policy and Support pages. */
export function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fbf8f0] text-zinc-800">
      <header className="border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-green-700">
            BlendBetter
          </Link>
          <nav className="flex gap-5 text-sm font-medium text-zinc-600">
            <Link href="/privacy" className="hover:text-green-700">Privacy</Link>
            <Link href="/support" className="hover:text-green-700">Support</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-sm text-zinc-500">{subtitle}</p>}
        <div className="mt-10 space-y-10 text-[15px] leading-7 sm:text-base">{children}</div>
      </main>

      <footer className="border-t border-zinc-200/70 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} BlendBetter
      </footer>
    </div>
  );
}

export function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      {children}
    </section>
  );
}

/** A platform-specific part of a page (e.g. "iPhone app"), with an anchor to link to. */
export function PlatformPart({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24 space-y-8 rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm sm:p-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-green-700">{label}</span>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

/** Pill links that jump to platform parts, e.g. "#ios" and "#web". */
export function JumpLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full border border-green-600/30 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-50"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

/** Collapsible question and answer. */
export function Faq({ question, children }: { question: string; children: ReactNode }) {
  return (
    <details className="group rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm open:shadow-md">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-zinc-900">
        {question}
        <span className="text-green-600 transition-transform group-open:rotate-45" aria-hidden>
          +
        </span>
      </summary>
      <div className="mt-3 text-zinc-700">{children}</div>
    </details>
  );
}

/** Small mailto link styled like the other links. */
export function EmailLink({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className="font-medium text-green-700 underline underline-offset-4">
      {email}
    </a>
  );
}

/** Internal link styled like the other links. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-medium text-green-700 underline underline-offset-4 hover:text-green-800">
      {children}
    </Link>
  );
}

export function Bullets({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6 marker:text-green-600">{children}</ul>;
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-zinc-700">
      {children}
    </div>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-green-700 underline underline-offset-4 hover:text-green-800"
    >
      {children}
    </a>
  );
}
