import { montserrat } from "@/app/fonts";
import ContactsPage from "@/components/pages/contacts-page/contacts-page";
import PolicyPage from "@/components/pages/policy-page/policy-page";
import { getContacts, getPolicy } from "@/utils/fetches";

export default async function Page() {
  const data = await getPolicy();

  return (
    <div className={`${montserrat.variable}`}>
      <PolicyPage data={data} />
    </div>
  );
}
