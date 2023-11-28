"use client";
import React, { useState, useEffect } from "react";
import styles from "./guideDetal-page.module.scss";
import Header from "@/components/header/header";
import Image from "next/image";
import CardWhite from "@/components/ui/cards/card-white/card-white";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Footer from "@/components/footer/footer";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

function GuideDetal({ data }: any) {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    window.screen.width <= 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return data ? (
    <>
      <div className={styles.page}>
        <Header data={data} />
        <p className={styles.bread}>
          <Link className={styles.linkBread} href={"/"}>
            {data.Bread[0].name}
          </Link>{" "}
          {`>`}{" "}
          <Link
            className={styles.linkBread}
            href={`/guide/`}
          >
            {data.Bread[1].name}
          </Link>{" "}
          {`>`}{" "}
          <Link
            className={styles.linkBread}
            href={`/guide/${pathname.split("/")[2]}`}
          >
            {data.Bread[2].name}
          </Link>{" "}
          {`>`}{" "}
          <Link
            className={styles.linkBread}
            href={`/guide/${pathname.split("/")[2]}/${pathname.split("/")[3]}`}
          >
            {data.Bread[3].name}
          </Link>
        </p>
        <h3 className={styles.title}>{data.Blog.name}</h3>
        <p className={styles.date}>{data.Blog.date}</p>
        <div className={styles.imageContainer}>
          {" "}
          <img className={styles.image} src={data.Blog.photo} />
        </div>
        <div className={styles.linkYakorContainer}>
          <p className={styles.stateName}>{data.Blog.State.name}</p>
          <div
            className={styles.linkContainer}
            dangerouslySetInnerHTML={{ __html: data.Blog.State.nameYakor }}
          />
        </div>
        {data.Blog.State.stateTitle.map((el: any, index: any) => {
          return (
            <div key={index}>
              <div
                className={styles.heads}
                dangerouslySetInnerHTML={{ __html: el.Head1 }}
              />
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: el.Description1 }}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.places}>
        <h4 className={styles.placesTitle}>{data.recomendBlog.name}</h4>
        {!isMobile ? (
          <ul className={styles.cardContainer}>
            {data
              ? data.recomendBlog.blogProduct.map((el: any, index: number) => {
                  return (
                    <CardWhite
                      key={index}
                      image={el.photo}
                      title={el.name}
                      content={el.desc}
                    />
                  );
                })
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
                ? data.recomendBlog.blogProduct.map(
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
    </>
  ) : null;
}

export default GuideDetal;
