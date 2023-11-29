"use client";

import styles from "./card-with-image.module.scss";
import ArrowRight from "@/images/logos/icons/arrow-right.svg";
import clsx from "clsx";
import { SyntheticEvent, useMemo, useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { getCookie, pushCookie, setCookie } from "@/utils/cookie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeartTransparent from "@/images/logos/icons/heartTransparent.svg";
import Heart from "@/images/logos/icons/heart-solid.svg";
import StarIcon from "@/images/logos/icons/star.svg";
import Image from "next/image";

interface IProps {
  cardExtraClass?: string;
  label?: string;
  like?: string;
  likeTransparent?: string;
  image: { url: string }[] | string;
  star?: string;
  rating?: string;
  title: string;
  content?: string;
  lastPrice?: string;
  currentPrice?: string;
  imgType?: "square" | "cover";
  labelStyle?: any;
  push?: any;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  path?: string;
}

function CardWithImage({
  cardExtraClass,
  label,
  like,
  image,
  star,
  rating,
  title,
  content,
  lastPrice,
  currentPrice,
  imgType = "square",
  labelStyle,
  path,
  push,
  onClick,
}: IProps) {
  const [token, setToken] = useState<any>(null);
  const cookieLiveTime = 1140;
  const arr: any = [];
  const [likeState, setLikeState] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setToken(getCookie("array"));
  }, []);

  const labelStyleFiltered = useMemo(() => {
    return labelStyle?.filter((el: any) => el.name === label)[0];
  }, [labelStyle]);

  const imageClassName = clsx(styles.image, {
    [styles?.[`image_type_${imgType}`]]: imgType,
  });

  const labelClassName = clsx(styles.label, {
    [styles?.[`label_backgroundColor_${labelStyleFiltered?.backgroundColor}`]]:
      labelStyleFiltered?.backgroundColor,

    [styles?.[`label_textColor_${labelStyleFiltered?.textColor}`]]:
      labelStyleFiltered?.textColor,
  });

  const clickArrow = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const setLike = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target);
    e.preventDefault();
    setLikeState(!likeState);
    // if (token === undefined) {
    //   setCookie("array", arr, { "max-age": cookieLiveTime });
    // }
    // pushCookie("array", push);
  };

  return (
    <Link className={styles.link} href={`/`}>
      <div
        className={`${styles.container} ${cardExtraClass}`}
        onClick={onClick}
        title={title}
      >
        {like !== "none" && label !== "none" && (
          <div className={styles.likeContainer}>
            {label ? <p className={labelClassName}>{label}</p> : <p></p>}
            <button className={styles.likeButton} onClick={setLike}>
              {likeState ? (
                <Heart
                  className="like"
                  alt="like icon"
                  width={30}
                  height={30}
                />
              ) : (
                <HeartTransparent
                  className="like"
                  alt="like icon"
                  width={30}
                  height={30}
                />
              )}
            </button>
          </div>
        )}

        <div className={styles.imageContainer}>
          {" "}
          {typeof image === "string" && (
            <Image
              className={imageClassName}
              src={image}
              alt="photo"
              width={368}
              height={288}
            />
          )}
          {Array.isArray(image) && image.length === 1 ? (
            <Image
              className={imageClassName}
              src={image[0].url}
              alt="photo"
              width={288}
              height={288}
            />
          ) : (
            <Splide
              hasTrack={false}
              options={{
                rewind: true,
                type: "slide",
                pagination: true,
                arrows: imgType === "square" && true,
              }}
              className={`splide__slide--nested ${styles.slider}`}
            >
              {imgType === "square" && (
                <div className={`splide__arrows ${styles.buttonsContainer}`}>
                  <button
                    onClick={clickArrow}
                    className={`splide__arrow splide__arrow--prev ${styles.button} ${styles.buttonLeft}`}
                  >
                    <div className={styles.arrowButton}>
                      <ArrowRight className={styles.arrowImg} />
                    </div>
                  </button>
                  <button
                    onClick={clickArrow}
                    className={`splide__arrow splide__arrow--next ${styles.button} ${styles.buttonRight}`}
                  >
                    <div className={styles.arrowButton}>
                      <ArrowRight className={styles.arrowImg} />
                    </div>
                  </button>
                </div>
              )}

              <SplideTrack>
                {Array.isArray(image) &&
                  image?.map((el: { url: string }, index: number) => {
                    return (
                      <SplideSlide key={index} className={styles.splideSlide}>
                        <Image
                          className={imageClassName}
                          src={el?.url}
                          alt="photo"
                          width={288}
                          height={288}
                        />
                      </SplideSlide>
                    );
                  })}
              </SplideTrack>

              <ul className={`${styles.pagination} splide__pagination`}></ul>
            </Splide>
          )}
        </div>

        <div className={styles.content}>
          {rating && (
            <div className={styles.rating}>
              <StarIcon alt="star icon" width={20} height={20} />
              <p className={styles.ratingContent}>{rating}</p>
            </div>
          )}
          <h3 className={styles.title}>{title}</h3>
          {content && <p className={styles.description}>{content}</p>}
          {lastPrice && currentPrice && (
            <div className={styles.priceContainer}>
              <p className={styles.lastPrice}>{lastPrice}</p>
              <p className={styles.secondPrice}>
                {currentPrice} <span className={styles.priceSpan}>price</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default CardWithImage;
