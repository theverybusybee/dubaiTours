import styles from "./catalogue-section.module.scss";
import { NextPage } from "next";
import SectionTitle from "@/components/ui/section-title/section-title";
import LazyLoadCards from "../../ui/lazy-load-cards/lazy-load-cards";

interface Props {
  data: any;
  title: string;
  titlePosition?: "center" | "left";
  extraClass?: string;
}

const CatalogueSection: NextPage<Props> = ({
  data,
  title,
  titlePosition,
  extraClass,
}) => {
  return data ? (
    <section className={`${styles.section} ${extraClass}`}>
      <SectionTitle content={title} position={titlePosition} />
      <LazyLoadCards
        allData={data}
      />
    </section>
  ) : null;
};

export default CatalogueSection;
