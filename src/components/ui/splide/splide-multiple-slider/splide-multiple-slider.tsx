"use client";

import styles from "./splide-multiple-slider.module.scss";
import ArrowRight from "@/images/logos/icons/arrow-right.svg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import CardWithImage from "../../cards/card-with-image/card-with-image";
import { SyntheticEvent } from "react";
import Link from "next/link";

interface Props {
  cardArray?: any;
  hasButtons?: boolean;
  cardExtraClass?: string;
  extraClass?: string;
  like?: string;
  label?: string;
  cardImageType?: "square" | "cover";
  onCardClick?: (() => void) | ((e: SyntheticEvent) => void);
  link?: string;
  path?: string;
  isCardWhite?: boolean;
}

const SplideMultipleSlider = ({
  cardArray,
  hasButtons = true,
  cardExtraClass,
  extraClass,
  label,
  like,
  path,
  link,
  cardImageType = "square",
  onCardClick,
}: Props) => {
  return (
    <>
      <div className={`${styles.container} ${extraClass}`}>
        <Splide
          id={"nested-slider-slider"}
          hasTrack={false}
          options={{
            rewind: true,
            gap: "30px",
            type: "slide",
            autoWidth: true,
            pagination: false,
            arrows: !!hasButtons,
          }}
          aria-label="My Favorite Images"
          className={styles.slider}
        >
          {!!hasButtons && (
            <div className={`splide__arrows ${styles.buttons}`}>
              <button
                className={`splide__arrow splide__arrow--prev ${styles.button} ${styles.buttonLeft}`}
              >
                <div className={styles.arrowButton}>
                  <ArrowRight className={styles.arrowImg} />
                </div>
              </button>

              {
                <button
                  className={`splide__arrow splide__arrow--next ${styles.button} ${styles.buttonRight}`}
                >
                  <div className={styles.arrowButton}>
                    <ArrowRight className={styles.arrowImg} />
                  </div>
                </button>
              }
            </div>
          )}
          <SplideTrack className={styles.splideTrack}>
            {cardArray?.length &&
              cardArray?.map((el: any, index: number) => {
                return (
                  <SplideSlide key={index}>
                    {link ? (
                      <Link className={styles.link} href={`${link}${el.name}`}>
                        <CardWithImage
                          onClick={onCardClick}
                          cardExtraClass={cardExtraClass}
                          title={el?.name && el?.name}
                          image={el?.photo}
                          label={el?.mark ? el?.mark[0]?.name : label}
                          likeTransparent={el?.hearticon}
                          like={like}
                          push={el}
                          path={path}
                          star={el?.staricon && el?.staricon}
                          rating={el?.starText && el.starText}
                          content={el?.description ? el.description : el?.desc}
                          lastPrice={el?.oldPrice && el.oldPrice}
                          currentPrice={el?.price && el.price}
                          imgType={cardImageType}
                        />
                      </Link>
                    ) : (
                      <CardWithImage
                        onClick={onCardClick}
                        cardExtraClass={cardExtraClass}
                        title={el?.name && el?.name}
                        image={el?.photo}
                        path={path}
                        label={el?.mark ? el?.mark[0]?.name : label}
                        likeTransparent={el?.hearticon}
                        like={like}
                        push={el}
                        star={el?.staricon && el?.staricon}
                        rating={el?.starText && el.starText}
                        content={el?.description ? el.description : el?.desc}
                        lastPrice={el?.oldPrice && el.oldPrice}
                        currentPrice={el?.price && el.price}
                        imgType={cardImageType}
                      />
                    )}
                  </SplideSlide>
                );
              })}
          </SplideTrack>
        </Splide>
      </div>
    </>
  );
};

export default SplideMultipleSlider;
