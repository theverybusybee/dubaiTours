import {
  TBanner,
  TBread,
  TCatalog,
  TCategories,
  TCombo,
  TContact,
  TDescription,
  TDestination,
  TFooter,
  TGuide,
  THeader,
  TPopular,
  TRecommend,
  TStep,
  TStyles,
  TTourAdvantages,
  TTourDescription,
  TTourFAQ,
  TTourHeadDetails,
  TTourIncluded,
  TTourMap,
  TTourNotIncluded,
  TTourPhoto,
  TTourReserve,
  TTourReviews,
  TTourSimilar,
  TTourWarnings,
} from "./sections-types";

export type TCatalogue = {
  Header: THeader;
  Banner: TBanner;
  Categories: TCategories;
  Popular: TPopular;
  Catalog: TCatalog;
  Combo: TCombo;
  Description: TDescription[];
  Footer: TFooter;
  Styles: TStyles;
};

export type TGallery = {
  Catalog: TCatalog;
};

export type TMain = {
  Header: THeader;
  Banner: TBanner;
  Categories: TCategories;
  Recommend: TRecommend;
  Destination: TDestination;
  Combo: TCombo;
  Step: TStep;
  Guide: TGuide;
  Description: TDescription[];
  Footer: TFooter;
  Styles: TStyles;
};

export type TTourDetails = {
  Header: THeader;
  Product: {
    Bread: TBread[];
    Details: {
      HeadDetails: TTourHeadDetails;
      Photo: TTourPhoto;
      Advantages: TTourAdvantages[];
      Description: TTourDescription;
      Included: TTourIncluded;
      NotInclude: TTourNotIncluded;
      Warnings: TTourWarnings;
      Map: TTourMap[];
      Reviews: TTourReviews;
      BlockReserve: TTourReserve;
      Contact: TContact;
    };
    Faq: TTourFAQ;
    Similar: TTourSimilar;
  };
  Footer: TFooter;
  Styles: TStyles;
};
