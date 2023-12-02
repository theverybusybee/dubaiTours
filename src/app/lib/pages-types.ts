import { TBanner, TCatalog, TCategories, TCombo, TDescription, TDestination, TFooter, TGuide, THeader, TPopular, TRecommend, TStep, TStyles } from "./sections-types";

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