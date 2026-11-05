import type { Metadata } from "next";
import { EmailLink, Faq, LegalPage, Section, TextLink } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Support | BlendBetter",
  description: "Help with using BlendBetter in your browser.",
};

export default function WebSupportPage() {
  return (
    <LegalPage title="Website Support" subtitle={<TextLink href="/support">← All support</TextLink>}>
      <Section title="Contact us">
        <p>
          Email us at <EmailLink email={site.contactEmail} />. If you&apos;re reporting a problem, please
          include the browser and device you&apos;re using.
        </p>
      </Section>

      <Section title="Frequently asked questions">
        <div className="space-y-3">
          <Faq question="How do I use BlendBetter on the website?">
            Click Get Started on the home page, choose a drink type from the sidebar, click the fruits you
            have, then click Generate.
          </Faq>
          <Faq question="What's the difference between the website and the iPhone app?">
            The website generates recipes from the fruits you pick. The iPhone app also lets you set
            allergies and dietary preferences, recognize fruit with the camera, choose from more fruits, and
            keep your history and favorite recipes.
          </Faq>
          <Faq question="A recipe won't generate.">
            Check your internet connection and refresh the page. If you&apos;ve generated many recipes in a
            short time, wait a minute and try again. If the problem continues, please email us.
          </Faq>
          <Faq question="Are my recipes saved?">
            No. The website doesn&apos;t save recipes, and they disappear when you leave or refresh the page.
            See the <TextLink href="/privacy#web">Privacy Policy</TextLink> for how the website handles your
            information.
          </Faq>
        </div>
      </Section>
    </LegalPage>
  );
}
