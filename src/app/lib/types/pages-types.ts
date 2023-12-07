import {
  TBanner,
  TCardWithPriceSliderSection,
  TCatalog,
  TCategories,
  TDescription,
  TDestination,
  TFooter,
  TGuide,
  THeader,
  TStep,
  TStyles,
  TToursProduct,
} from "./sections-types";

export type TCatalogue = {
  Header: THeader;
  Banner: TBanner;
  Categories: TCategories;
  Popular: TCardWithPriceSliderSection;
  Catalog: TCatalog;
  Combo: TCardWithPriceSliderSection;
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
  Recommend: TCardWithPriceSliderSection;
  Destination: TDestination;
  Combo: TCardWithPriceSliderSection;
  Step: TStep;
  Guide: TGuide;
  Description: TDescription[];
  Footer: TFooter;
  Styles: TStyles;
};

export type TTourDetailsData = {
  Header: THeader;
  Product: TToursProduct;
  Footer: TFooter;
  Styles: TStyles;
};
