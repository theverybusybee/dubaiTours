"use client";

import styles from "./guide-section.module.scss";
import SplideMultipleSlider from "@/components/ui/splide/splide-multiple-slider/splide-multiple-slider";
import { useEffect, useMemo, useState } from "react";
import SectionTitle from "@/components/ui/section-title/section-title";
import { useMediaQuery } from "@mui/material";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import {
  TGuideCountries,
  TGuideProduct,
} from "@/app/lib/types/sections-types";

interface IBasicProps {
  titlePosition?: "left" | "center";
  name: string;
  description?: string;
  extraClass?: string;
  cardExtraClass?: string;
}

type ConditionalProps = {
  products?: TGuideProduct[];
  countries?: TGuideCountries[];
};

type combinedProps = IBasicProps & ConditionalProps;

function GuideSection({
  titlePosition,
  countries,
  products,
  name,
  description,
  extraClass,
  cardExtraClass
}: combinedProps) {
  const [buttonState, setButtonState] = useState<string>();
  const isMobile = useMediaQuery("(max-width:810px)");

  useEffect(() => {
    countries && setButtonState(countries[0]?.name);
  }, [countries, setButtonState]);

  const guideCardsData = useMemo(() => {
    return countries?.filter(
      (el: any) => el.name.toLowerCase() === buttonState?.toLowerCase()
    )[0];
  }, [countries, buttonState]);

  const cardsArrayData = useMemo(() => {
    return guideCardsData ? guideCardsData?.product : products;
  }, [guideCardsData]);

  return (
    <section className={`${styles.main} ${extraClass}`}>
      <div className={styles.container}>
        <SectionTitle content={name} position={titlePosition} />
        <p className={styles.text}>{description}</p>
        {countries && (
          <ul className={styles.tourContainer}>
            {countries?.map((el: any, index: number) => {
              return (
                <li key={index}>
                  <button
                    className={`${styles.tourText} ${
                      buttonState === el.name && styles.tourTextActive
                    }`}
                    onClick={() => {
                      setButtonState(el.name);
                    }}
                  >
                    {el.name}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <ul className={styles.cardsContainer}>
          {!isMobile ? (
            cardsArrayData?.map((el: any, index: number) => {
              return (
                <li className={styles.cardListItem} key={index}>
                  <CardWithImage
                    title={el.name}
                    push={el}
                    image={el.photo}
                    content={el.description}
                    imgType="cover"
                    cardExtraClass={styles.card}
                    label="none"
                    like="none"
                  />
                </li>
              );
            })
          ) : (
            <SplideMultipleSlider
              cardArray={guideCardsData ? guideCardsData?.product : products}
              like="none"
              label="none"
              cardImageType="cover"
              cardExtraClass={styles.card}
            />
          )}
        </ul>
      </div>
    </section>
  );
}

export default GuideSection;
