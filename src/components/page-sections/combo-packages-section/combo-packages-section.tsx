import styles from "./combo-packages-section.module.scss";
import Button from "@/components/ui/buttons/button/button";
import SectionTitle from "@/components/ui/section-title/section-title";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";

interface Props {
  data: any;
  hasButtons: boolean;
  titlePosition?: "left" | "center";
}

function ComboPackagesSection({ data, hasButtons, titlePosition }: Props) {
  const comboApiData = data?.Combo;

  return comboApiData ? (
    <section className={styles.main}>
      <div className={styles.contentContainer}>
        <SectionTitle content={comboApiData?.name} position={titlePosition} />
        <div className={styles.slider}>
          <SplideMultipleSlider
            cardArray={comboApiData?.product}
            hasButtons={hasButtons}
            cardExtraClass={styles.card}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button extraClass={styles.button} content={comboApiData?.button} />
        </div>
      </div>
    </section>
  ) : null;
}

export default ComboPackagesSection;
