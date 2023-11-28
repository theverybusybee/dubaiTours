import styles from "./card-with-price-slider-section.module.scss";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";
import SectionTitle from "@/components/ui/section-title/section-title";

interface Props {
  data: any;
  cardsApiData: any;
  hasButtons?: boolean;
  titlePosition?: "center" | "left";
  extraClass?: string;
}

const CardWithPriceSliderSection = ({
  data,
  cardsApiData,
  hasButtons,
  titlePosition,
  extraClass,
}: Props) => {

  return cardsApiData ? (
    <section className={`${styles.section} ${extraClass}`}>
      {cardsApiData?.button?.name ? (
        <div className={styles.titleContainer}>
          <SectionTitle
            content={cardsApiData?.title}
            position={titlePosition}
          />
          <p className={`${styles.view} ${styles.viewTitleContainer}`}>
            {cardsApiData?.button?.name}
          </p>
        </div>
      ) : (
        <SectionTitle content={cardsApiData?.title} position={titlePosition} />
      )}

      <div className={styles.cardsContainer}>
        <p className={`${styles.view} ${styles.viewCardsContainer}`}>
          {cardsApiData?.button?.name}
        </p>
        <SplideMultipleSlider
          cardArray={cardsApiData?.product}
          cardExtraClass={styles.card}
          hasButtons={hasButtons}
        />
      </div>
    </section>
  ) : null;
};

export default CardWithPriceSliderSection;
