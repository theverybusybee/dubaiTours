import styles from "./card-with-price-slider-section.module.scss";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";
import SectionTitle from "@/components/ui/section-title/section-title";
import { TCardWithPriceSliderSection } from "@/app/lib/types/sections-types";

interface Props {
  data: TCardWithPriceSliderSection;
  hasButtons?: boolean;
  titlePosition?: "center" | "left";
  extraClass?: string;
}

const CardWithPriceSliderSection = ({
  data,
  hasButtons,
  titlePosition,
  extraClass,
}: Props) => {
  return data ? (
    <section className={`${styles.section} ${extraClass}`}>
      {data.title ? (
        <div className={styles.titleContainer}>
          <SectionTitle content={data?.title} position={titlePosition} />
          <p className={`${styles.view} ${styles.viewTitleContainer}`}>
            {data?.button}
          </p>
        </div>
      ) : (
        <SectionTitle content={data?.title} position={titlePosition} />
      )}

      <div className={styles.cardsContainer}>
        <p className={`${styles.view} ${styles.viewCardsContainer}`}>
          {data?.button}
        </p>
        <SplideMultipleSlider
          cardArray={data?.product}
          cardExtraClass={styles.card}
          hasButtons={hasButtons}
        />
      </div>
    </section>
  ) : null;
};

export default CardWithPriceSliderSection;
