import FormInput from "@/components/ui/inputs/form-input/form-input";
import styles from "./contacts-form.module.scss";

function ContactsForm() {
  return (
    <div className={styles.container}>
      <p className={styles.formTitle}>Contacts</p>
      <div className={styles.form}>
        <FormInput name="name" title="Name*" value="Alex" />
        <FormInput name="email" title="Email*" value="mail@mail.com" />
        <FormInput name="surname" title="Surname*" value="Holo" />
        <FormInput name="phone" title="Phone*" value="+7 000 000-00-00" />
      </div>
    </div>
  );
}

export default ContactsForm;
