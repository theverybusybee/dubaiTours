"use client";
import styles from "./main-page.module.scss";
import Header from "@/components/header/header";
import {
  LearnMoreSection,
  ComboPackagesSection,
  CardWithImageSliderSection,
  GuideSection,
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
          cardExtraClass={styles.card}
        />
        <LearnMoreSection data={data} />
      </main>
      <Footer footerData={data.Footer} headerData={data.Header} />
    </>
  ) : null;
}

export default MainPage;
