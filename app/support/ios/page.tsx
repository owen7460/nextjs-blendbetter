import type { Metadata } from "next";
import { EmailLink, Faq, LegalPage, Section, TextLink } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "iPhone App Support | BlendBetter",
  description: "Help with the BlendBetter iPhone app.",
};

export default function IOSSupportPage() {
  return (
    <LegalPage title="iPhone App Support" subtitle={<TextLink href="/support">← All support</TextLink>}>
      <Section title="Contact us">
        <p>
          Email us at <EmailLink email={site.contactEmail} />. If you&apos;re reporting a problem, please
          include your iPhone model and iOS version.
        </p>
      </Section>

      <Section title="Frequently asked questions">
        <div className="space-y-3">
          <Faq question="How does BlendBetter work?">
            Pick a drink type, choose 1 to 3 fruits (or tap Surprise me), then tap Generate. BlendBetter
            writes a recipe using AI. Recipes are saved to History automatically, and you can keep favorites
            in Collections with the heart button.
          </Faq>
          <Faq question="Can I trust the recipe with my allergies?">
            Add your allergies on the Allergies tab and the app asks the AI to avoid them. AI can still make
            mistakes, so always check ingredient labels, especially if you have a serious allergy.
          </Faq>
          <Faq question="Why does the app ask for permission before generating?">
            To write a recipe, your fruits, drink type, allergies and dietary preferences are sent to our
            server and a third-party AI provider. We ask first so you know what is shared. See the{" "}
            <TextLink href="/privacy#ios">Privacy Policy</TextLink> for details.
          </Faq>
          <Faq question="I turned off AI data sharing. How do I turn it back on?">
            Go to the Allergies tab and switch on &quot;Share with AI to generate&quot;, or tap Generate and
            choose Agree &amp; Generate.
          </Faq>
          <Faq question="The camera shows a message instead of the preview.">
            BlendBetter needs camera access to recognize fruit. Open iOS Settings, find BlendBetter and turn
            on Camera. You can always pick fruits on the Blend tab instead.
          </Faq>
          <Faq question="The camera recognized the wrong fruit.">
            Remove it from &quot;Your blend&quot; at the bottom of the Blend tab by tapping the ×, then pick
            the right fruit or search for it under More fruits.
          </Faq>
          <Faq question="A recipe won't generate.">
            Check your internet connection and tap Try Again. If a selected fruit is on your allergy list,
            remove it first. If the problem continues, please email us.
          </Faq>
          <Faq question='It says "Too many requests".'>
            To keep BlendBetter available for everyone, there&apos;s a limit on how many recipes can be
            generated in a short time. Wait a minute and try again.
          </Faq>
          <Faq question="How do I delete my data?">
            Your history, collections and settings are stored only on your iPhone. Clear your history in the
            app, or delete the app to remove everything. See the{" "}
            <TextLink href="/privacy#ios">Privacy Policy</TextLink> for information shared with the AI
            provider.
          </Faq>
        </div>
      </Section>
    </LegalPage>
  );
}
