"use client";

import { NextPage } from "next";
import styles from "./menu-dropdown.module.scss";
import ArrowDown from "@/images/logos/icons/arrow-down.svg";
import { useState } from "react";
import clsx from "clsx";

interface Props {
  data: any;
}

const MenuDropdown: NextPage<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setIsOpenState = () => {
    setIsOpen(!isOpen);
  };

  const arrowClassName = clsx(styles.arrowDown, {
    [styles?.[`arrowUp`]]: isOpen,
  });

  return (
    <li className={styles.container}>
      <div onClick={setIsOpenState} className={styles.titleContainer}>
        <p className={styles.title}>{data?.name}</p>
        {data.nesting != null ? (
          <ArrowDown className={arrowClassName} width={16} height={16} />
        ) : (
          <></>
        )}
      </div>
      {isOpen && data.nesting?.length && (
        <div className={styles.dropContainer}>
          {data.nesting.map(
            (el: { name: string; url: string }, index: number) => {
              return (
                <a className={styles.dropContent} href={el.url} key={index}>
                  {el.name}
                </a>
              );
            }
          )}
        </div>
      )}
    </li>
  );
};

export default MenuDropdown;
