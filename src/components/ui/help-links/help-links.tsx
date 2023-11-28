import clsx from "clsx";
import styles from "./help-links.module.scss";
import Image from "next/image";

interface ILinksData {
  text: string;
  icon: string;
}

interface Props {
  blockContent: string;
  orContent: string;
  whatsappData: ILinksData;
  telegramData: ILinksData;
  backgroundColor?: "white" | "grey";
  extraClass?: string;
}

function HelpLinks({
  blockContent,
  orContent,
  whatsappData,
  telegramData,
  backgroundColor = "white",
  extraClass,
}: Props) {
  const containerClassName = clsx(
    styles.container,
    {
      [styles?.[`container_backgroundColor_${backgroundColor}`]]:
        backgroundColor,
    },
    extraClass
  );

  return (
    <div className={containerClassName}>
      <p className={styles.helpText}>{blockContent}</p>
      <div className={styles.contacts}>
        <a href="#" className={`${styles.linkContainer} ${styles.whatsapp}`}>
          <Image
            src={whatsappData?.icon}
            alt={whatsappData?.icon}
            width={18}
            height={18}
          />
          {whatsappData.text}
        </a>
        <p className={styles.or}>{orContent}</p>
        <a href="#" className={`${styles.linkContainer} ${styles.telegram}`}>
          <Image
            src={telegramData?.icon}
            alt={telegramData?.icon}
            width={18}
            height={18}
          />
          {telegramData?.text}
        </a>
      </div>
    </div>
  );
}

export default HelpLinks;
