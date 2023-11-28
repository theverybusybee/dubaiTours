"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import styles from "./profile-page.module.scss";
import Header from "@/components/header/header";
import ProfileCard from "@/components/ui/cards/profile-card/profile-card";
import Footer from "@/components/footer/footer";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import ProfilePlaceCard from "@/components/ui/cards/profile-placeCard/profilePlaceCard";
import { useAppSelector, useAppDispatch } from "../../../redux/redux-hooks";
import { getCookie } from "@/utils/cookie";
import { getProfile } from "@/utils/fetches";
import { SET_USER, USER_LOGIN } from "@/redux/actions/profile";

function ProfilePage() {
  const [modalType, setModalType] = useState("History of orders");
  const [token, setToken] = useState(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.profile.userData);

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

  useEffect(() => {
    setToken(getCookie("token"));
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(setProfile(token));
    } else {
      router.push('/login')
    }
  }, [token, userData]);
  return userData ? (
    <>
    <Header data={userData} />
      <main className={styles.container}>
        <h2 className={styles.title}>Personal Area</h2>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => setModalType("History of orders")}
            className={
              modalType == "History of orders"
                ? styles.Button
                : styles.ButtonDisable
            }
          >
            <p
              className={
                modalType == "History of orders"
                  ? styles.submitButtonText
                  : styles.submitButtonTextDisable
              }
            >
              {userData.Button[0].name}
            </p>
          </button>
          <button
            onClick={() => setModalType("Profile")}
            className={
              modalType == "Profile" ? styles.Button : styles.ButtonDisable
            }
          >
            <p
              className={
                modalType == "Profile"
                  ? styles.submitButtonText
                  : styles.submitButtonTextDisable
              }
            >
              {userData.Button[1].name}
            </p>
          </button>
        </div>
        <div className={styles.contentTable}>
          <ul className={styles.table}>
            {modalType == "History of orders" ? (
              <>
                {userData?.HistoryOrder.map((el: any, index:any) => (
                  <ProfilePlaceCard
                  key={index}
                    title={el.nameOrder}
                    status={el?.Status.StatusOrder}
                    date={el.SelectOrder[1]?.description}
                    peoples={el.SelectOrder[2]?.People}
                    lastPrice={el.Price.priceOld}
                    mainPrice={el.Price.priceNew}
                  />
                ))}
              </>
            ) : (
              <ProfileCard data={userData} />
            )}
          </ul>
        </div>
      </main>
      {/* <Footer data={userData} /> */}
    </>
  ) : null;
}

export default ProfilePage;
