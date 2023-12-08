import { TCardWithPriceSliderSection } from "@/app/lib/types/sections-types";
import styles from "./combo-packages-section.module.scss";
import Button from "@/components/ui/buttons/button/button";
import SectionTitle from "@/components/ui/section-title/section-title";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";

interface Props {
  data: TCardWithPriceSliderSection;
  hasButtons: boolean;
  titlePosition?: "left" | "center";
}

function ComboPackagesSection({
  data,
  hasButtons,
  titlePosition,
}: Props) {
  return data ? (
    <section className={styles.main}>
      <div className={styles.contentContainer}>
        <SectionTitle content={data?.title} position={titlePosition} />
          <SplideMultipleSlider
            cardArray={data?.product}
            hasButtons={hasButtons}
            cardExtraClass={styles.card}
          />
        <div className={styles.buttonContainer}>
          {data?.button && (
            <Button extraClass={styles.button} content={data?.button} />
          )}
        </div>
      </div>
    </section>
  ) : null;
}

export default ComboPackagesSection;
