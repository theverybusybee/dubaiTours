import { montserrat } from "@/app/fonts";
import ContactsPage from "@/components/pages/contacts-page/contacts-page";
import { getContacts } from "@/utils/fetches";

export default async function Page() {
  const data = await getContacts();
  return (
    <div className={`${montserrat.variable}`}>
      <ContactsPage data={data} />
    </div>
  );
}
