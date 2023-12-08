"use client";

import styles from "./footer.module.scss";
import { useState } from "react";
import LocationClip from "@/images/logos/icons/location-clip.svg";
import GlobeLogo from "@/images/logos/icons/globe.svg";
import HeartWithNotification from "@/images/logos/icons/heart-with-notification.svg";
import BurgerMenuIcon from "@/images/logos/icons/burger-menu.svg";
import BurgerMenu from "../modals/burger-menu/burger-menu";
import MenuDropdown from "../ui/dropdown/menu-dropdown/menu-dropdown";
import HelpLinks from "../ui/help-links/help-links";
import { useMediaQuery } from "@mui/material";
import Logo from "@/images/logos/footer-logo.svg";
import { TFooter, THeader } from "@/app/lib/types/sections-types";

interface Props {
  footerData: TFooter;
  headerData: THeader;
  extraClass?: string;
}

function Footer({ footerData, headerData, extraClass }: Props) {
  const isMobile = useMediaQuery("(max-width:660px)");
  const [isOpen, setIsOpen] = useState(false);

  return footerData ? (
    <footer className={`${styles.footer} ${extraClass}`}>
      {!isMobile ? (
        <div className={styles.infoSection}>
          <div className={styles.firstContainer}>
            <Logo
              className={styles.logoImg}
              alt="mainLogo"
              width={126}
              height={64}
            />
            <div className={styles.locationContainer}>
              <LocationClip width={17} height={19} />
              <p className={styles.location}>{footerData.city}</p>
            </div>
          </div>
          <p className={styles.impressions}>{footerData.desc}</p>
          <div className={styles.linksSection}>
            <div className={styles.linksContainer}>
              <h4 className={styles.titleColumn}>
                {footerData?.menu[0].name}
              </h4>
              <ul className={styles.companyContainer}>
                {footerData?.menu[0].nesting
                  ? footerData?.menu[0].nesting.map(
                      (el: any, index: number) => {
                        return (
                          <li key={index}>
                            <p className={styles.textColumn}>{el.name}</p>
                          </li>
                        );
                      }
                    )
                  : null}
              </ul>
            </div>
            <div className={styles.linksContainer}>
              <h4 className={styles.titleColumn}>
                {footerData?.menu[1].name}
              </h4>
              <ul className={styles.companyContainer}>
                {footerData?.menu[1].nesting
                  ? footerData?.menu[1].nesting.map(
                      (el: any, index: number) => {
                        return (
                          <li key={index}>
                            <p className={styles.textColumn}>{el.name}</p>
                          </li>
                        );
                      }
                    )
                  : null}
              </ul>
            </div>

            <div className={styles.linksContainer}>
              <h4 className={styles.titleColumn}>
                {footerData?.menu[2].name}
              </h4>
              <ul className={styles.companyContainer}>
                {footerData?.menu[2].nesting
                  ? footerData?.menu[2].nesting
                      .slice(0, 6)
                      .map((el: any, index: number) => {
                        return (
                          <li key={index}>
                            <p className={styles.textColumn}>{el.name}</p>
                          </li>
                        );
                      })
                  : null}
              </ul>
            </div>

            <div className={styles.linksContainer}>
              <ul className={styles.companyContainer}>
                {footerData?.menu[2].nesting
                  ? footerData?.menu[2].nesting
                      .slice(7)
                      ?.map((el: any, index: number) => {
                        return (
                          <li key={index}>
                            <p className={styles.textColumn}>{el.name}</p>
                          </li>
                        );
                      })
                  : null}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.mobileFooter}>
          <div className={styles.mobileLogoContainer}>
            <Logo
              className={styles.logoImg}
              alt="mainLogo"
              width={126}
              height={64}
            />
            <p className={styles.impressions}>{footerData.desc}</p>
          </div>
          <div className={styles.mobileButtonsContainer}>
            <div className={styles.locationContainer}>
              <LocationClip width={17} height={19} />
              <p className={styles.location}>{footerData.city}</p>
            </div>
            <div className={styles.mobileIconsContainer}>
              <GlobeLogo className={styles.mobileIcon} width={38} height={38} />
              <HeartWithNotification className={styles.mobileIcon} />
              <BurgerMenuIcon
                className={styles.mobileIcon}
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
          <div className={styles.mobileMenu}>
            {footerData.menu.map((el: any, index: number) => {
              return <MenuDropdown key={index} data={el} />;
            })}
            {headerData?.mobile?.Contact && (
              <HelpLinks
                blockContent={headerData?.mobile?.Contact?.textContact}
                orContent={headerData?.mobile?.Contact?.textContactOr}
                whatsappData={headerData?.mobile?.Contact?.wh}
                telegramData={headerData?.mobile?.Contact?.tl}
              />
            )}
          </div>
        </div>
      )}
      {isOpen && (
        <BurgerMenu
          apiData={headerData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </footer>
  ) : null;
}

export default Footer;
