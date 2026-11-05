import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, LegalPage, Section, TextLink } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support | BlendBetter",
  description: "Get help with the BlendBetter iPhone app and website.",
};

/** To add a platform, add an entry here and a page under app/support/<id>. */
const platforms = [
  {
    href: "/support/ios",
    emoji: "📱",
    title: "iPhone app",
    description: "Generating recipes, allergies, camera, history and collections.",
  },
  {
    href: "/support/web",
    emoji: "💻",
    title: "Website",
    description: "Using BlendBetter in your browser at blendbetterai.com.",
  },
];

export default function SupportPage() {
  return (
    <LegalPage title="Support" subtitle="We're here to help.">
      <Section title="Choose your platform">
        <div className="grid gap-4 sm:grid-cols-2">
          {platforms.map((platform) => (
            <Link
              key={platform.href}
              href={platform.href}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-green-600/40 hover:shadow-md"
            >
              <div className="text-3xl" aria-hidden>
                {platform.emoji}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 group-hover:text-green-700">
                {platform.title} →
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{platform.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Contact us">
        <p>
          Need help or have feedback? Email us at <EmailLink email={site.contactEmail} /> and we&apos;ll get
          back to you as soon as we can. Please tell us whether you&apos;re using the iPhone app or the
          website.
        </p>
        <p>
          For how we handle your information, see our <TextLink href="/privacy">Privacy Policy</TextLink>.
        </p>
      </Section>
    </LegalPage>
  );
}
