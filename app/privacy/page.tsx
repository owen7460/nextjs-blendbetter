import type { Metadata } from "next";
import {
  Bullets,
  Callout,
  EmailLink,
  ExternalLink,
  JumpLinks,
  LegalPage,
  PlatformPart,
  Section,
  TextLink,
} from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | BlendBetter",
  description: "How the BlendBetter iPhone app and website handle your information.",
};

/**
 * One policy for every platform: shared sections first, then a part per platform.
 * Platform parts have anchors (#ios, #web) so each product can link straight to its part.
 * To add a platform, add a PlatformPart and a JumpLinks entry.
 */
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" subtitle={<>Effective date: {site.privacyEffectiveDate}</>}>
      <p>
        BlendBetter (&quot;we&quot;, &quot;us&quot;) suggests drink recipes from the fruits you pick, in
        our iPhone app and on our website, blendbetterai.com. This policy explains what information
        BlendBetter uses, where it goes, and the choices you have.
      </p>

      <Callout>
        <strong>In short:</strong> BlendBetter has no accounts, no ads and no tracking. To write a recipe,
        the details of that recipe are sent to our server and a third-party AI provider. In the iPhone app,
        this only happens after you agree, and your history, collections and settings stay on your iPhone.
      </Callout>

      <JumpLinks
        links={[
          { href: "#ios", label: "iPhone app" },
          { href: "#web", label: "Website" },
        ]}
      />

      {/* ---------- Shared ---------- */}

      <Section title="How recipes are generated" id="ai-provider">
        <p>
          When you generate a recipe, your request goes to our server at blendbetterai.com. The server
          forwards only the request text to our AI provider and returns the recipe to you. Our server does
          not store the content of your requests. Like most websites, our hosting provider may keep standard
          request logs, such as IP address and time of request, for security and reliability.
        </p>
        <p>
          To prevent abuse, our server also uses your IP address to limit how many recipes can be generated
          in a short time. The IP address is never stored as is: it is kept only in a one-way hashed form,
          together with the times of your recent requests, in the server&apos;s memory. It is deleted within
          about 24 hours, is not linked to the content of your requests, and is not shared with DeepSeek.
        </p>
        <p>
          Our AI provider is <strong>DeepSeek</strong>, a third-party AI service. DeepSeek receives the
          request text described in the platform sections below through its developer platform (API), and
          processes it under DeepSeek&apos;s Open Platform terms. DeepSeek&apos;s{" "}
          <ExternalLink href={site.deepSeekPrivacyUrl}>privacy policy</ExternalLink> states that it
          collects, processes and stores personal data in the People&apos;s Republic of China. How long
          DeepSeek keeps request data, and whether it uses it to improve its models, is decided by
          DeepSeek, not by us.
        </p>
        <p>
          Requests never include your name, email, contacts, location or photos, because BlendBetter does
          not collect these. If we change AI providers, we will update this policy.
        </p>
      </Section>

      {/* ---------- iPhone app ---------- */}

      <PlatformPart id="ios" label="Platform" title="iPhone app">
        <Section title="Information stored only on your iPhone">
          <p>The following is saved on your iPhone and is not sent to us:</p>
          <Bullets>
            <li><strong>Recipe history:</strong> your 20 most recent recipes.</li>
            <li><strong>Collections:</strong> recipes you save with the heart button.</li>
            <li><strong>Allergies and dietary preferences:</strong> the settings on the Allergies tab.</li>
            <li>
              <strong>Your AI data sharing choice:</strong> whether you agreed to send recipe information
              to the AI provider.
            </li>
          </Bullets>
          <p>
            This information is removed when you delete the app. It may be included in your device&apos;s
            iCloud or computer backups, which are handled by Apple.
          </p>
        </Section>

        <Section title="Information sent to generate a recipe">
          <p>
            Before your first recipe, the app asks for your permission. Nothing is sent until you agree.
            After that, each time you tap Generate, the app sends a text request that contains:
          </p>
          <Bullets>
            <li>the fruits you selected and the drink type (for example, Smoothie);</li>
            <li>your allergies, if you have set any;</li>
            <li>your dietary preferences, if you have turned any on (for example, Vegan or No alcohol).</li>
          </Bullets>
          <p>
            Allergies and dietary preferences may be considered health-related information. We send them
            only so the recipe can avoid those ingredients.
          </p>
        </Section>

        <Section title="Camera">
          <p>
            If you allow camera access, you can take a photo of a fruit so the app can recognize it.
            Recognition runs on your iPhone using Apple&apos;s built-in Vision framework. Photos are not
            saved, not uploaded and not sent to us or to the AI provider. Only the name of the recognized
            fruit (for example, &quot;Mango&quot;) is added to your selection. You can turn camera access off
            anytime in iOS Settings.
          </p>
        </Section>

        <Section title="Your choices in the app">
          <Bullets>
            <li>
              <strong>Turn off AI data sharing:</strong> on the Allergies tab, switch off &quot;Share with
              AI to generate&quot;. Nothing is sent while it is off, and recipes can&apos;t be generated.
            </li>
            <li>
              <strong>Change what is sent:</strong> edit your allergies and dietary preferences on the
              Allergies tab at any time.
            </li>
            <li>
              <strong>Delete your data:</strong> clear your history or remove collections in the app, or
              delete the app to remove everything.
            </li>
          </Bullets>
        </Section>
      </PlatformPart>

      {/* ---------- Website ---------- */}

      <PlatformPart id="web" label="Platform" title="Website">
        <Section title="Information sent to generate a recipe">
          <p>
            When you click Generate on blendbetterai.com, the drink type and the fruits you selected are
            sent to our server and to DeepSeek, for example &quot;Please generate a smoothie recipe using
            Mango, Kiwi.&quot; The website does not ask for allergies or other personal information.
          </p>
        </Section>

        <Section title="Cookies and browser storage">
          <Bullets>
            <li>One small cookie remembers whether the sidebar is open or closed.</li>
            <li>
              Your browser&apos;s session storage remembers that you have already seen the intro animation.
              It is cleared when you close the tab.
            </li>
          </Bullets>
          <p>The website does not use analytics or advertising cookies, and it does not save your recipes.</p>
        </Section>

        <Section title="Your choices on the website">
          <p>
            You can clear cookies and site data at any time in your browser settings. Recipes you generate
            on the website are not saved, so there is nothing else to delete.
          </p>
        </Section>
      </PlatformPart>

      {/* ---------- Shared ---------- */}

      <Section title="What we don't do">
        <Bullets>
          <li>We don&apos;t require an account or ask for your name or email.</li>
          <li>We don&apos;t show ads.</li>
          <li>We don&apos;t track you across other apps or websites.</li>
          <li>We don&apos;t use analytics or advertising tools.</li>
          <li>We don&apos;t sell your information.</li>
        </Bullets>
      </Section>

      <Section title="Data held by DeepSeek">
        <p>
          Because we don&apos;t store your requests, we can&apos;t look them up or delete them from DeepSeek.
          If you have questions about data sent to DeepSeek, contact us at{" "}
          <EmailLink email={site.contactEmail} /> and we&apos;ll help where we can.
        </p>
      </Section>

      <Section title="Not medical advice">
        <p>
          Recipes are generated by AI and can contain mistakes, including ingredients you asked to avoid.
          Always check ingredient labels, especially if you have a serious allergy.
        </p>
      </Section>

      <Section title="Children">
        <p>
          BlendBetter is not directed to children under 13, and some recipes, such as cocktails, are meant
          for adults of legal drinking age.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If we change this policy, we will update the effective date above. Significant changes will also
          be noted in the app or on this page.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about privacy? Email us at <EmailLink email={site.contactEmail} />.
        </p>
        <p className="text-zinc-500">
          {site.developer}, {site.location}
        </p>
        <p>
          Need help? Visit our <TextLink href="/support">Support page</TextLink>.
        </p>
      </Section>
    </LegalPage>
  );
}
