"use client";
import Footer from "@/components/footer/footer";
import styles from "./guideCatalog-page.module.scss";
import React, { useState, useEffect } from "react";
import { FAQSection } from "@/components/page-sections/page-sections";
import GuideSection from "@/components/page-sections/guide-section/guide-section";
import CardWhite from "@/components/ui/cards/card-white/card-white";
import { getGuidCity } from "@/utils/fetches";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/redux/redux-hooks";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import Link from "next/link";

function GuideCity() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData]: any = useState(null);
  const dispatch = useAppDispatch();
  console.log(pathname.split("/")[2]);
  function getCity(city: any) {
    return function (dispatch: any) {
      getGuidCity(city)
        .then((res: any) => {
          if (res) {
            setData(res);
          } else {
            null;
          }
        })
        .catch(() => console.log("error"));
    };
  }
  useEffect(() => {
    window.screen.width <= 600 ? setIsMobile(true) : setIsMobile(false);
    dispatch(getCity(pathname.split("/").pop()));
  }, []);

  return data ? (
    <div>
      <h1 className={styles.title}>{data.GuideAll.headTitle.title}</h1>
      <p className={styles.bread}>
        <Link className={styles.link} href={"/"}>
          {data.GuideAll.headTitle.bread[0].name}
        </Link>{" "}
        {`>`}{" "}
        <Link className={styles.link} href={`/guide/`}>
          {data.GuideAll.headTitle.bread[1].name}
        </Link>
      </p>
      <ul className={styles.cardContainer}>
        {data
          ? data.GuideAll.Guide.product.map((el: any, index: number) => {
              return (
                <CardWithImage
                  cardExtraClass={styles.cardSize}
                  like="none"
                  key={index}
                  image={el.photo}
                  title={el.name}
                  content={el.desc}
                />
              );
            })
          : null}
      </ul>
      <FAQSection
        extraClass={styles.center}
        data={data?.GuideAll.Faq.event}
        sectionTitle={data.GuideAll.Faq.titleFaq}
        titlePosition={"center"}
      />
      <div className={styles.places}>
        <h4 className={styles.placesTitle}>{data.GuideAll.GuideDetal.name}</h4>
        {!isMobile ? (
          <ul className={styles.cardContainer}>
            {data
              ? data.GuideAll.GuideDetal.countries.product.productGuide.map(
                  (el: any, index: number) => {
                    return (
                      <CardWhite
                        key={index}
                        image={el.photo}
                        title={el.name}
                        content={el.desc}
                      />
                    );
                  }
                )
              : null}
          </ul>
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
                ? data.GuideAll.GuideDetal.countries.product.productGuide.map(
                    (el: any, index: number) => {
                      return (
                        <SplideSlide key={index} className={styles.splideSlide}>
                          <CardWhite
                            key={index}
                            image={el.photo}
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
      <Footer data={data} />
    </div>
  ) : null;
}

export default GuideCity;
