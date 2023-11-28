import styles from "./tour-details-page.module.scss";
import { NextPage } from "next";
import Header from "@/components/header/header";
import {
  TourDescriptionSection,
  CardWithPriceSliderSection,
  FAQSection,
  ReviewsSection,
  ButtonsSection,
  PhotosGallerySection,
  TourShortDescriptionSection,
} from "@/components/page-sections/page-sections";
import HelpLinks from "@/components/ui/help-links/help-links";
import ReservationForm from "@/components/ui/forms/reservation-form/reservation-form";
import Footer from "@/components/footer/footer";
import SplideSinglePhotoSlider from "@/components/ui/splide/splide-single-photo-slider/splide-single-photo-slider";
import ReservationHandler from "@/components/modals/reservation-components/reservation-handler/reservation-handler";

interface Props {
  data: any;
  tourId: string;
}

const TourDetailsPage: NextPage<Props> = ({ data, tourId }) => {
  const tourDetailsData = data?.Product?.Detal;

  return (
    <div className={styles.page}>
      <ReservationHandler data={data} tourId={tourId} />

      <Header
        extraClass={styles.header}
        data={data}
        colorTheme="light"
        position="block"
        locationContainer={false}
      />
      {tourDetailsData?.Photo?.photoDetal?.length && (
        <SplideSinglePhotoSlider
          extraClass={styles.singlePhotoSlider}
          data={tourDetailsData.Photo.photoDetal}
        />
      )}

      <div className={styles.main}>
        <TourShortDescriptionSection
          extraClass={styles.tourShortDescription}
          data={data}
        />

        {tourDetailsData?.Photo?.photoDetal?.length && (
          <PhotosGallerySection
            extraClass={styles.photosGallery}
            data={tourDetailsData.Photo.photoDetal}
            buttonContent={tourDetailsData.Photo.buttonPhoto}
          />
        )}
        {tourDetailsData?.BlockReserve && (
          <ReservationForm
            data={tourDetailsData?.BlockReserve}
            extraClass={styles.reservationForm}
          />
        )}
        {tourDetailsData?.Contact && (
          <HelpLinks
            extraClass={styles.helpLinks}
            backgroundColor="grey"
            blockContent={tourDetailsData?.Contact?.textContact}
            orContent={tourDetailsData?.Contact?.textContactOr}
            whatsappData={tourDetailsData.Contact.wh}
            telegramData={tourDetailsData.Contact.tl}
          />
        )}

        <TourDescriptionSection
          extraClass={styles.tourDescription}
          data={data}
        />

        {data?.Product && (
          <FAQSection
            extraClass={styles.faq}
            sectionTitle={data.Product.Faq.titleFaq}
            titlePosition="left"
            data={data.Product.Faq.event}
          />
        )}
        {data?.Product?.Similar && (
          <CardWithPriceSliderSection
            extraClass={styles.cardWithPriceSlider}
            data={data?.Product.Similar}
            cardsApiData={data?.Product?.Similar}
            hasButtons={false}
            titlePosition="left"
          />
        )}

        {tourDetailsData?.Reviews && (
          <ReviewsSection
            extraClass={styles.reviews}
            sectionTitle={tourDetailsData.Reviews.starBlock.titleReviews}
            sectionTitlePosition="left"
            feedbackButtonContent={
              tourDetailsData.Reviews.starBlock.buttonReviews
            }
            popupData={tourDetailsData?.Reviews?.starBlock?.buttonReviewsWindow}
            ratingData={tourDetailsData.Reviews.starBlock}
            usersReviews={tourDetailsData.Reviews.reviewPeople}
            showAllButton={tourDetailsData.Reviews.reviewPeople.allButton}
          />
        )}
        {data?.Similar && (
          <CardWithPriceSliderSection
            extraClass={styles.cards}
            titlePosition="left"
            data={data}
            cardsApiData={data.Similar?.product}
          />
        )}

        {data?.Product?.Similar?.Tag && (
          <ButtonsSection
            extraClass={styles.buttons}
            sectionTitle={data?.Product?.Similar?.Tag.title}
            sectionTitlePosition="left"
            buttonsArr={data?.Product?.Similar?.Tag.nesting}
          />
        )}
      </div>

      <Footer data={data} />
    </div>
  );
};

export default TourDetailsPage;
