"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./lazy-load-cards.module.scss";
import { getTourData } from "@/utils/fetches";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import DotsLoader from "@/components/ui/loader/loader";
import { IGetTourDataArgs } from "@/utils/types";

interface Props {
  allData: any;
  params: IGetTourDataArgs;
}

interface ILazyLoadCard {
  combo_tours: number;
  description: string;
  hearticon: string;
  id: number;
  mark: { name: string }[];
  name: string;
  oldPrice: string;
  photo: { url: string }[];
  price: string;
  sorting: 1;
  staricon: string;
  startext: string;
  type: string;
  url: string;
}

function LazyLoadCards({ allData, params }: Props) {
  const observerTarget = useRef(null);
  const stylesApiData = allData?.Styles;
  const { marksColor } = stylesApiData;

  const [renderData, setRenderData] = useState<any>();

  const [isLoading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const [cardsData, setCardsData] = useState<ILazyLoadCard[] | []>([]);
  const [additionalCardsData, setAdditionalCardsData] = useState<
    ILazyLoadCard[] | []
  >([]);

  useEffect(() => {
    setRenderData(allData);
    setPageNumber(params.page);
  }, []);

  const increaseNumber = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    setCardsData(renderData?.Tour?.Catalog?.product);
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
    getTourData({ ...params, page: pageNumber })
      .then((res) => {
        setAdditionalCardsData(res?.Tour?.Catalog?.product);
      })
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [pageNumber]);

  useEffect(() => {
    additionalCardsData?.length &&
      setCardsData?.length &&
      setCardsData((cardsData as ILazyLoadCard[]).concat(additionalCardsData));
    setAdditionalCardsData([]);
    return;
  }, [
    [...additionalCardsData].length,
    // [...cardsData]
    [cardsData],
  ]);

  return (
    <>
      <ul className={styles.cardsContainer}>
        {cardsData?.length ? (
          renderData &&
          cardsData.map((el: any, index: number) => {
            return (
              <CardWithImage
                key={index}
                title={el.name}
                currentPrice={el.price}
                lastPrice={el.oldPrice}
                star={el.staricon}
                likeTransparent={el.hearticon}
                push={el}
                rating={el.startext}
                image={el?.photo}
                content={el.desc}
                label={el?.mark ? el?.mark[0].name : false}
                labelStyle={marksColor && marksColor}
              />
            );
          })
        ) : (
          <>Null</>
        )}
      </ul>
      <div ref={observerTarget}></div>
      {isLoading && <DotsLoader />}
    </>
  );
}

export default LazyLoadCards;
