"use client";
import styles from "./main-page.module.scss";
import Header from "@/components/header/header";
import {
  LearnMoreSection,
  ComboPackagesSection,
  CardWithImageSliderSection,
  GuideSection,
  CardWithPriceSliderSection,
  StepsSection,
  SearchSection,
  ButtonsSliderSection,
} from "@/components/page-sections/page-sections";
import Footer from "@/components/footer/footer";
import { TMain } from "@/app/lib/types/pages-types";

interface Props {
  data: TMain;
}

function MainPage({ data }: Props) {
  return data ? (
    <>
      <Header headerApiData={data.Header} />
      <main className={styles.container}>
        <SearchSection bannerApiData={data.Banner} />
        <ButtonsSliderSection
          title="We are Recommend"
          titlePosition="left"
          extraClass={styles.buttonsSlider}
          data={data.Categories}
        />
        {/* <CardWithPriceSliderSection
          extraClass={styles.cardWithPriceSection}
          data={data.P}
        /> */}
        <CardWithImageSliderSection
          data={data?.Destination}
          extraClass={styles.destinationSection}
          hasButtons={false}
        />
        <ComboPackagesSection data={data.Combo} hasButtons={true} />
        <StepsSection data={data} />

        <GuideSection
          name={data.Guide.title}
          description={data.Guide.description}
          countries={data.Guide.countries}
        />
        <LearnMoreSection data={data} />
      </main>
      <Footer data={data} />
    </>
  ) : null;
}

export default MainPage;
