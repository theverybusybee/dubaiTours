"use client";

import { TBanner } from "@/app/lib/sections-types";
import styles from "./search-section.module.scss";
import SearchInput from "@/components/ui/inputs/search-input/search-input";
import RoutePath from "@/components/ui/route-path/route-path";
import { arrayWithAttractionsForSearchInput } from "@/constants/data-examples";
import magnifyingGlassBold from "@/images/logos/icons/magnifyingGlass.svg";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  bannerApiData: TBanner;
  sectionSize?: "full" | "fixed";
}

const SearchSection = ({ bannerApiData, sectionSize = "full" }: Props) => {

  const [searchState, setSearchState] = useState<string[]>([]);
  const [inputState, setInputState] = useState<string>("");

  const containerClassName = clsx(styles.container, {
    [styles?.[`container_size_${sectionSize}`]]: sectionSize,
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e?.target.value);
  };

  useEffect(() => {
    setSearchState(
      arrayWithAttractionsForSearchInput.filter((el) =>
        el.toLowerCase().includes(inputState.toLocaleLowerCase())
      )
    );
  }, [inputState.length]);

  return bannerApiData ? (
    <section
      className={containerClassName}
      style={{ backgroundImage: `url(${bannerApiData.background})` }}
    >
      <div className={styles.inputContainer}>
        <h1 className={styles.title}>{bannerApiData.title}</h1>

        {bannerApiData.bread && <RoutePath data={bannerApiData.bread} />}

        <div className={styles.searchContainer}>
          <SearchInput
            extraClass={styles.input}
            Icon={magnifyingGlassBold}
            description={bannerApiData.search.text}
            onChange={onInputChange}
          />
          <div
            className={`${styles.searchDropDown} ${
              inputState && styles.searchDropDownActive
            }`}
          >
            <ul className={styles.searchDropDownList}>
              {searchState?.length !== 0 ? (
                searchState.map((el: string, index: number) => {
                  return (
                    <li className={styles.searchDropDownItem} key={index}>
                      {el}
                    </li>
                  );
                })
              ) : (
                <li className={styles.searchDropDownItem}>{"Not Found"}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default SearchSection;
