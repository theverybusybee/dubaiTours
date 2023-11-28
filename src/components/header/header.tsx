"use client";

import styles from "./header.module.scss";
import { useState } from "react";
import Image from "next/image";
import DropDown from "../ui/dropdown/dropdown";
import GlobeLogo from "../../images/logos/icons/globe.svg";
import DarkGlobe from "@/images/logos/icons/globe-black.svg";
import HeartWithNotification from "../../images/logos/icons/heart-with-notification.svg";
import DarkHeartWithNotification from "../../images/logos/icons/heart-with-notification-dark.svg";
import MagnifyingGlassThin from "../../images/logos/icons/headLoop.svg";
import MagnifyingGlassThinDark from "../../images/logos/icons/magnifying-glass-dark.svg";
import BurgerMenuIcon from "../../images/logos/icons/burger-menu.svg";
import BurgerMenuIconDark from "../../images/logos/icons/burger-menu-dark.svg";
import Logo from "@/images/logos/main-logo.svg";
import LocationClip from "@/images/logos/icons/location-clip.svg";

import MultipleDropDown from "../ui/dropdown/multiple-dropdown/multiple-dropdown";
import BurgerMenu from "../modals/burger-menu/burger-menu";
import clsx from "clsx";
import Link from "next/link";
import { getCookie } from "@/utils/cookie";
import CityModal from "@/components/modals/city-modal/CityModal";
import { useMediaQuery } from "@mui/material";

interface Props {
  data: any;
  searchSectionSize?: "full" | "fixed";
  colorTheme?: "light" | "dark";
  position?: "block" | "absolute";
  extraClass?: string;
  locationContainer?: boolean;
}

function Header({
  data,
  searchSectionSize = "full",
  colorTheme = "dark",
  position = "absolute",
  locationContainer = true,
  extraClass,
}: Props) {
  const isMobile = useMediaQuery("(max-width:1040px)");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setLoginModal] = useState(false);
  const [isOpenLoc, setOpenLoc] = useState(false);
  const headerApiData = data?.Header;
  const token = getCookie("token");

  const headerClassName = clsx(
    styles.transparentContainer,
    {
      [styles?.[`header_colorTheme_${colorTheme}`]]: colorTheme,
      [styles?.[`header_position_${position}`]]: position,
    },
    extraClass
  );

  const locationContainerClass = clsx(styles.locationContainer, {
    [styles?.[`locationContainer_hidden`]]: !locationContainer,
  });

  return (
    <header className={headerClassName}>
      {isOpen && (
        <BurgerMenu
          apiData={headerApiData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <div className={styles.container}>
        <div className={styles.mainContentContainer}>
          <Link className={styles.link} href={"/"}>
            <Logo
              className={styles.mainLogo}
              width={253}
              height={106}
              priority
              alt="logo"
            />
          </Link>

          {!isMobile ? (
            <>
              <div className={styles.contentContainer}>
                <div className={styles.locationInfo}>
                  <div
                    className={locationContainerClass}
                    onClick={() => {
                      setOpenLoc(true);
                    }}
                  >
                    <LocationClip
                      className={styles.locationIcon}
                      alt="location clip"
                      width={30}
                      height={30}
                      priority
                    />
                    <p className={styles.locationContent}>
                      {headerApiData.location.city}
                    </p>
                  </div>
                  <MultipleDropDown
                    arrWithLanguages={headerApiData.language.list}
                    arrWithCurrency={headerApiData.currency.exchange}
                    arrow={true}
                    color={colorTheme === "light" ? "darkBlue" : "white"}
                  />
                </div>
                <ul className={styles.menuContainer}>
                  <Link className={styles.link} href={"/en/tour"}>
                    <li className={styles.menuItem}>
                      {headerApiData.menu[0].name}
                    </li>
                  </Link>

                  <Link href={"/en/tour"}>
                    <li className={styles.menuItem}>
                      {headerApiData.menu[0].name}
                    </li>
                  </Link>

                  <li className={styles.menuItem}>
                    {headerApiData.menu[1].name}
                  </li>
                  <li className={styles.menuItem}>
                    <DropDown
                      title={headerApiData.menu[2].name}
                      arr={headerApiData.menu[2].nesting}
                      color={colorTheme === "light" ? "darkBlue" : "white"}
                    ></DropDown>
                  </li>
                  <li className={styles.menuItem}>
                    <DropDown
                      title={headerApiData.menu[3].name}
                      arr={headerApiData.menu[3].nesting}
                      color={colorTheme === "light" ? "darkBlue" : "white"}
                    />
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className={styles.mobileContainer}>
                {colorTheme === "dark" && (
                  <>
                    <GlobeLogo
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <HeartWithNotification
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <MagnifyingGlassThin
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <BurgerMenuIcon
                      onClick={() => setIsOpen(true)}
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                  </>
                )}
                {colorTheme === "light" && (
                  <>
                    <DarkGlobe
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <DarkHeartWithNotification
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <MagnifyingGlassThinDark
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                    <BurgerMenuIconDark
                      onClick={() => setIsOpen(true)}
                      className={styles.mobileIcon}
                      width={38}
                      height={38}
                    />
                  </>
                )}
              </div>
              {searchSectionSize === "full" ||
                (locationContainer && (
                  <div className={styles.locationContainer}>
                    <LocationClip
                      className={styles.locationIcon}
                      alt="location clip"
                      width={30}
                      height={30}
                      priority
                    />

                    <p className={styles.locationContent}>
                      {headerApiData.location.city}
                    </p>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
