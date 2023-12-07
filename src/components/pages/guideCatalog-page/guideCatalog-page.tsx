"use client";
import Footer from "@/components/footer/footer";
import { useEffect, useMemo, useState } from "react";
import Header from "@/components/header/header";
import styles from "./guideCatalog-page.module.scss";
import React from "react";
import { CardWithImageSliderSection } from "@/components/page-sections/page-sections";
import GuideCity from "@/components/page-sections/guideCity-section/guideCity";
import CardWhite from "@/components/ui/cards/card-white/card-white";
import Link from "next/link";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import { TGuideData } from "@/app/lib/pages-types";
import RoutePath from "@/components/ui/route-path/route-path";

type TProps = {
  data: TGuideData;
};

function GuideCatalog({ data }: TProps) {
  const [isMobile, setIsMobile] = useState(false);
  let guideApiData = data.GuideAll.GuideDetails;
  const [buttonState, setButtonState] = useState<string>();
  useEffect(() => {
    window.screen.width <= 800 ? setIsMobile(true) : setIsMobile(false);
  }, [buttonState]);
  useEffect(() => {
    setButtonState(guideApiData?.countries?.name);
  }, [guideApiData]);
  function targetCity(el: any) {
    setButtonState(el.name);
  }

  const guideCardsData = useMemo(() => {
    return (
      buttonState &&
      data.GuideAll.GuideDetails.countries.name.toLowerCase() ===
        buttonState?.toLowerCase() &&
      data.GuideAll.GuideDetails.countries.name.toLowerCase()
    );
  }, [guideApiData, buttonState]);

  return guideCardsData ? (
    <>
      <Header headerApiData={data.Header} colorTheme="dark"/>
      <h1 className={styles.title}>{data.GuideAll.headTitle.title}</h1>
      <p className={styles.bread}>
        <RoutePath data={data.GuideAll.headTitle.bread}></RoutePath>
      </p>
      <div>
        <div className={styles.sliderFirst}>
          <CardWithImageSliderSection data={data.GuideAll} hasButtons={false} />
        </div>
        <section className={styles.main}>
          <div className={styles.container}>
            <div className={styles.containerMain}>
              {isMobile ? (
                <Splide
                  id={"slider"}
                  hasTrack={false}
                  options={{
                    rewind: true,
                    gap: "30px",
                    type: "slide",
                    autoWidth: true,
                    pagination: false,
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                  className={styles.slider}
                >
                  <SplideTrack className={styles.splideTrack}>
                    {/* {data.GuideAll.GuideDetails.countries.map( */}
                    {/* (el: any, index: number) => { */}
                    {/* return ( */}
                    <SplideSlide
                      // key={index}
                      className={styles.splideSlide}
                    >
                      <div>
                        <button
                          className={`${styles.tourText} ${
                            buttonState ===
                              data.GuideAll.GuideDetails.countries.name &&
                            styles.tourTextActive
                          }`}
                          onClick={() => {
                            setButtonState(
                              data.GuideAll.GuideDetails.countries.name
                            );
                          }}
                        >
                          {data.GuideAll.GuideDetails.countries.name}
                        </button>
                      </div>
                    </SplideSlide>
                    {/* ); */}
                    {/* } */}
                    {/* )} */}
                  </SplideTrack>
                </Splide>
              ) : (
                <div className={styles.tourContainers}>
                  {/* {data.GuideAll.GuideDetails.countries.map(
                    (el: any, index: number) => {
                      return ( */}
                  <div>
                    <button
                      className={`${styles.tourText} ${
                        buttonState ===
                          data.GuideAll.GuideDetails.countries.name &&
                        styles.tourTextActive
                      }`}
                      onClick={() => {
                        targetCity(data.GuideAll.GuideDetails.countries);
                      }}
                    >
                      {data.GuideAll.GuideDetails.countries.name}
                    </button>
                  </div>
                  {/* );
                    }
                  )} */}
                </div>
              )}
              <ul className={styles.tourContainer}>
                {data.GuideAll.GuideDetails.countries.product.map(
                  (el: any, index: number) => {
                    return <GuideCity key={index} cityArray={el} />;
                  }
                )}
              </ul>
            </div>
          </div>
        </section>
        <div className={styles.places}>
          <h4 className={styles.placesTitle}>
            {data.GuideAll.GuideDetails.countries.Guide.title}
          </h4>
          {!isMobile ? (
            <div className={styles.cardsContainer}>
              {data
                ? data.GuideAll.GuideDetails.countries.Guide.product.map(
                    (el: any, index: number) => {
                      return (
                        <CardWithImage
                          key={index}
                          like="none"
                          cardExtraClass={styles.card}
                          image={el.photo}
                          title={el.name}
                          content={el.desc}
                        />
                      );
                    }
                  )
                : null}
            </div>
          ) : (
            <Splide
              id={"slider"}
              hasTrack={false}
              options={{
                rewind: true,
                gap: "30px",
                type: "slide",
                autoWidth: true,
                pagination: false,
                arrows: false,
              }}
              aria-label="My Favorite Images"
              className={styles.slider}
            >
              <SplideTrack className={styles.splideTrack}>
                {data
                  ? data.GuideAll.GuideDetails.countries.Guide.product.map(
                      (el: any, index: number) => {
                        return (
                          <SplideSlide
                            key={index}
                            className={styles.splideSlide}
                          >
                            <CardWithImage
                              image={el.photo}
                              cardExtraClass={styles.cardExtraClass}
                              like="none"
                              title={el.name}
                              content={el.desc}
                            />
                          </SplideSlide>
                        );
                      }
                    )
                  : null}
              </SplideTrack>
            </Splide>
          )}
        </div>
      </div>
      <Footer data={data} />
    </>
  ) : null;
}

export default GuideCatalog;
