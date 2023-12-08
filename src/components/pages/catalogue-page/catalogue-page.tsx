"use client";

import { NextPage } from "next";
import styles from "./catalogue-page.module.scss";
import Header from "@/components/header/header";
import {
  ButtonsSliderSection,
  CardWithPriceSliderSection,
  CatalogueSection,
  ComboPackagesSection,
  LearnMoreSection,
  SearchSection,
} from "@/components/page-sections/page-sections";
import Footer from "@/components/footer/footer";
import { TCatalogue } from "@/app/lib/types/pages-types";

interface Props {
  data: TCatalogue;
  extraClass?: string;
}

const CataloguePage: NextPage<Props> = ({ data: data, extraClass }) => {
  const { Categories } = data;

  return (
    <div className={`${styles.container} ${extraClass}`}>
      <Header headerApiData={data.Header} searchSectionSize="fixed" />
      <SearchSection bannerApiData={data.Banner} sectionSize="fixed" />
      <ButtonsSliderSection data={Categories} titlePosition="left" />
      <CardWithPriceSliderSection
        data={data.Popular}
        // cardsApiData={data?.Popular}
        hasButtons={false}
        titlePosition="left"
      />
      <CatalogueSection
        extraClass={styles.catalogue}
        data={data}
        title={data?.Catalog?.title}
        titlePosition="left"
      />
      <ComboPackagesSection
        data={data.Combo}
        hasButtons={false}
        titlePosition="left"
      />
      <LearnMoreSection data={data} />
      <Footer footerData={data.Footer} headerData={data.Header} />
    </div>
  );
};

export default CataloguePage;
