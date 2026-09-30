import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsOfBusiness } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of business",
  description:
    "The standard basis on which Accendia Consulting Ltd is engaged — scope, responsibilities, intellectual property, fees, liability and governing law.",
};

export default function TermsOfBusinessPage() {
  return <LegalPage doc={termsOfBusiness} />;
}
