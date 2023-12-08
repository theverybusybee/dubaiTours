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
import { TTourDetailsData } from "@/app/lib/types/pages-types";

interface Props {
  data: TTourDetailsData;
  tourId: string;
}

const TourDetailsPage: NextPage<Props> = ({ data, tourId }) => {
  const tourDetailsData = data?.Product?.Details;

  return (
    <div className={styles.page}>
      <ReservationHandler data={data} tourId={tourId} />

      <Header
        extraClass={styles.header}
        headerApiData={data.Header}
        colorTheme="light"
        position="block"
        locationContainer={false}
      />
      {tourDetailsData?.Photo?.photoDetails?.length && (
        <SplideSinglePhotoSlider
          extraClass={styles.singlePhotoSlider}
          data={tourDetailsData.Photo.photoDetails}
        />
      )}

      <div className={styles.main}>
        <TourShortDescriptionSection
          extraClass={styles.tourShortDescription}
          data={data.Product}
        />

        {tourDetailsData?.Photo?.photoDetails?.length && (
          <PhotosGallerySection
            extraClass={styles.photosGallery}
            data={tourDetailsData.Photo.photoDetails}
            buttonContent={tourDetailsData.Photo.buttonPhoto}
          />
        )}
        {tourDetailsData?.BlockReserve && (
          <ReservationForm
            data={data.Product.Details.BlockReserve}
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
          data={data.Product.Details}
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
        {/* {data.Product.Similar && (
          <CardWithPriceSliderSection
            extraClass={styles.cards}
            titlePosition="left"
            data={data}
            cardsApiData={data.Product.Similar.product}
          />
        )} */}

        {data?.Product?.Similar?.Tag && (
          <ButtonsSection
            extraClass={styles.buttons}
            sectionTitle={data?.Product?.Similar?.Tag.title}
            sectionTitlePosition="left"
            buttonsArr={data?.Product?.Similar?.Tag.nesting}
          />
        )}
      </div>

      <Footer footerData={data.Footer} headerData={data.Header} />
    </div>
  );
};

export default TourDetailsPage;
