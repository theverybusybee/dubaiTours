import { montserrat } from "@/app/fonts";
import CompanyPage from "@/components/pages/company-page/company-page";
import ContactsPage from "@/components/pages/contacts-page/contacts-page";
import FaqPage from "@/components/pages/faq-page/faq-page";
import PolicyPage from "@/components/pages/policy-page/policy-page";
import { getCompany, getContacts, getFaq, getPolicy } from "@/utils/fetches";

export default async function Page() {
  const data = await getCompany();

  return (
    <div className={`${montserrat.variable}`}>
      <CompanyPage data={data} />
    </div>
  );
}
