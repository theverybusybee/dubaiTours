"use client";

import styles from "./search-section.module.scss";
import SearchInput from "@/components/ui/inputs/search-input/search-input";
import RoutePath from "@/components/ui/route-path/route-path";
import magnifyingGlassBold from "@/images/logos/icons/magnifyingGlass.svg";
import clsx from "clsx";
import { useMemo, useRef, useState } from "react";

interface Props {
  data: any;
  sectionSize?: "full" | "fixed";
}

const SearchSection = ({ data, sectionSize = "full" }: Props) => {
  const bannerApiData = data?.Banner;

  const input = useRef<any>();

  const testData = [
    "apple",
    "apple2",
    "apple3",
    "banana split with apple split",
    "carrot",
    "date split split split apple",
    "eggplant apple",
    "fig",
    "grape",
    "split",
  ];

  const [searchState, setSearchState] = useState<any>(testData);
  const [inputState, setInputState] = useState<string>();

  const containerClassName = clsx(styles.container, {
    [styles?.[`container_size_${sectionSize}`]]: sectionSize,
  });

  // const setRequestedData = () => {
  //   var xhr = new XMLHttpRequest();
  //   // Отправка GET запроса к скрипту
  //   xhr.open("GET", "/api/search?q=app", true);
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       // Обработка полученного ответа
  //       //  var response = JSON.parse(xhr.responseText);
  //       console.log(xhr); // Вывод результатов в консоль
  //     }
  //   };
  //   xhr.send();
  // };

  // useEffect(() => {
  //   setRequestedData();
  // }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e?.target.value);
  };

  const testArr = useMemo(() => {
    return (
      searchState.length &&
      inputState &&
      searchState.filter((el: string) => el.includes(inputState))
    );
  }, [inputState]);

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
            refProp={input}
            onChange={onInputChange}
          />
          <div
            className={`${styles.searchDropDown} ${
              inputState && styles.searchDropDownActive
            }`}
          >
            <ul className={styles.searchDropDownList}>
              {testArr?.length &&
                testArr.map((el: string, index: number) => {
                  const arr = el.split(" ");
                  return (
                    <li className={styles.searchDropDownItem} key={index}>
                      {arr.map((word: string, index: number) => {
                        return (
                          <span
                            className={styles.searchDropDownItem}
                            key={index}
                          >
                            {!(inputState && word.includes(inputState)) ? (
                              <>{word} </>
                            ) : (
                              <>
                                {word.split("").map((letter, index: number) => {
                                  if (
                                    inputState &&
                                    letter === inputState[index]
                                  ) {
                                    return (
                                      <span
                                        className={styles.span_type_bold}
                                        key={index}
                                      >
                                        {word?.split("")?.length - 1 ===
                                        index ? (
                                          <>{letter} </>
                                        ) : (
                                          <>{letter}</>
                                        )}
                                      </span>
                                    );
                                  }
                                  return letter;
                                })}
                              </>
                            )}
                          </span>
                        );
                      })}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default SearchSection;
