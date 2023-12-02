"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./lazy-load-cards.module.scss";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import DotsLoader from "@/components/ui/loader/loader";
import { getTourData } from "@/utils/fetches";
import { TCard } from "@/app/lib/sections-types";

interface Props {
  allData: any;
}

function LazyLoadCards({ allData }: Props) {
  const observerTarget = useRef(null);
  const stylesApiData = allData?.Styles;
  const { marksColor } = stylesApiData;

  const [isLoading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const [cardsData, setCardsData] = useState<TCard[] | []>([]);
  const [additionalCardsData, setAdditionalCardsData] = useState<TCard[] | []>(
    []
  );

  const increaseNumber = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    getTourData().then((res) => setCardsData(res.res.Catalog.product));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          increaseNumber();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget.current]);

  useEffect(() => {
    if (pageNumber === 1 || pageNumber < 1) return;

    setLoading(true);
    getTourData()
      .then((res) => {
        setAdditionalCardsData(res?.res.Catalog?.product);
      })
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [pageNumber]);

  useEffect(() => {
    additionalCardsData?.length !== 0 &&
      setCardsData?.length !== 0 &&
      setCardsData((cardsData as TCard[]).concat(additionalCardsData));
    setAdditionalCardsData([]);
    return;
  }, [
    [...additionalCardsData]?.length,
    // [...cardsData]
  ]);

  return (
    <>
      <ul className={styles.cardsContainer}>
        {cardsData?.length !== 0 ? (
          cardsData?.length !== 0 &&
          cardsData?.map((el: any, index: number) => {
            return (
              <CardWithImage
                key={index}
                title={el.name}
                currentPrice={el.price}
                lastPrice={el.oldPrice}
                star={el.staricon}
                likeTransparent={el.hearticon}
                push={el}
                rating={el.starText}
                image={el?.photo}
                content={el.desc}
                label={el?.mark ? el?.mark[0].name : false}
                labelStyle={marksColor && marksColor}
              />
            );
          })
        ) : (
          <></>
        )}
      </ul>
      <div ref={observerTarget}></div>
      {isLoading && <DotsLoader />}
    </>
  );
}

export default LazyLoadCards;
