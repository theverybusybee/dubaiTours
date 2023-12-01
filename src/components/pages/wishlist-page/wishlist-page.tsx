"use client";
import CardWithImage from "@/components/ui/cards/card-with-image/card-with-image";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/redux-hooks";
import styles from "./wishlist-page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getCookie } from "@/utils/cookie";
import { getProfile } from "@/utils/fetches";
import { SET_USER, USER_LOGIN } from "@/redux/actions/profile";

interface Props {
  data: any;
}

const WishlistPage: NextPage<Props> = ({ data: data }) => {
  const [filterType, setFilterType] = useState("All");
  const [renderArray, setRenderArr] = useState([]);
  const dispatch = useAppDispatch();
  const profileArr = useAppSelector(
    (state) => state.profile.userData?.HistoryOrder
  );
  function setProfile(pay: string) {
    return function (dispatch: any) {
      getProfile(pay)
        .then((res) => {
          if (res) {
            dispatch({
              type: SET_USER,
              payload: res,
            });
            dispatch({ type: USER_LOGIN });
          } else {
            null;
          }
        })
        .catch(() => console.log("error"));
    };
  }
  const stylesApiData = data?.Styles;
  const { marksColor } = stylesApiData;
  const renderArr = getCookie("array");
  const token = getCookie("token");
  useEffect(() => {
    if (token !== undefined) {
      dispatch(setProfile(token));
      setRenderArr(profileArr);
    } else {
      setRenderArr(renderArr);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Header data={data} searchSectionSize="fixed" />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Wish</h1>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setFilterType("All")}
            className={
              filterType === "All" ? styles.button : styles.buttonDisable
            }
          >
            <p
              className={
                filterType === "All"
                  ? styles.buttonText
                  : styles.buttonTextDisable
              }
            >
              All
            </p>
          </button>
          <button
            onClick={() => setFilterType("Tour")}
            className={
              filterType === "Tour" ? styles.button : styles.buttonDisable
            }
          >
            <p
              className={
                filterType === "Tour"
                  ? styles.buttonText
                  : styles.buttonTextDisable
              }
            >
              Tour
            </p>
          </button>
          <button
            onClick={() => setFilterType("Transfer")}
            className={
              filterType === "Transfer" ? styles.button : styles.buttonDisable
            }
          >
            <p
              className={
                filterType === "Transfer"
                  ? styles.buttonText
                  : styles.buttonTextDisable
              }
            >
              Transfer
            </p>
          </button>
        </div>
        <div className={styles.cardContainer}>
          {renderArr
            ? renderArr.map((el: any, index: number) => {
                return (
                  <div className={styles.card}>
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
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
};

export default WishlistPage;
