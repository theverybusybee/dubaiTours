"use client";

import styles from "./search-section.module.scss";
import SearchInput from "@/components/ui/inputs/search-input/search-input";
import RoutePath from "@/components/ui/route-path/route-path";
import { arrayWithAttractionsForSearchInput } from "@/constants/data-examples";
import magnifyingGlassBold from "@/images/logos/icons/magnifyingGlass.svg";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  data: any;
  sectionSize?: "full" | "fixed";
}

const SearchSection = ({ data, sectionSize = "full" }: Props) => {
  const bannerApiData = data?.Banner;

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
      style={{ backgroundImage: `url(${data?.Banner.background})` }}
    >
      <div className={styles.inputContainer}>
        <h1 className={styles.title}>{bannerApiData.title}</h1>

        {data?.Banner.bread && <RoutePath data={data?.Banner.bread} />}

        <div className={styles.searchContainer}>
          <SearchInput
            extraClass={styles.input}
            Icon={magnifyingGlassBold}
            description={bannerApiData.search.text}
            // refProp={input}
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
