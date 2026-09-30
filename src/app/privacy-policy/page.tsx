import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Accendia Consulting Ltd collects, uses, shares and protects personal information, and the rights you have under UK data protection law.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
