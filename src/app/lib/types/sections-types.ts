export type TCard = {
  id: string;
  type?: string;
  url: string;
  photo: { url: string }[];
  mark?: {
    name: string;
  }[];
  starText: string;
  name: string;
  description: string;
  price: string;
  oldPrice: string;
};

export type TCardWithPriceSliderSection = {
  title: string;
  button?: string;
  product: TCard[];
};

export type TCity = {
  url: string;
  photo: string;
  name: string;
  description: string | null;
};

export type THeader = {
  location: {
    city: string;
  };
  language: {
    list: {
      url: string;
      urlCode: string;
      icon: string;
      lang: string;
    }[];
  };
  currency: {
    exchange: {
      url: string;
      currency: string;
      code: string;
    }[];
  };
  menu: {
    name: string;
    url: string;
    arrowIcon?: string;
    nesting?: {
      name: string;
      url: string;
    }[];
  }[];
  wishlist: {
    icon: string;
    name: string;
    url: string;
  };
  registration: string;
  mobile: {
    icon: {
      iconWorld: string;
    };
    Contact: TContact;
  };
};

export type TBread = {
  name: string;
};

export type TTourHeadDetails = {
  name: string;
  review: string;
  star: string;
  id: string;
  wishlist: {
    name: string;
  };
};

export type TTourPhoto = {
  photoDetails: {
    url: string;
  }[];

  buttonPhoto: string;
};

export type TTourAdvantages = {
  icon: string;
  property: string;
  propertyText: string;
};

export type TTourDescription = {
  titleDescription: string;
  smallDescription: string;
  bigDescription: string;
};

export type TTourIncluded = {
  titleGreen: string;
  titleBlack: string;
  icon: string;
  text: {
    text: string;
  }[];
};

export type TTourNotIncluded = {
  titleBlack: string;
  titleOrange: string;
  icon: string;
  text: {
    text: string;
  }[];
};

export type TTourWarnings = {
  titleRed: string;
  icon: string;
  text: {
    text: string;
  }[];
};

export type TTourMap = {
  id: number;
  name: string;
  address: string;
  description: string;
  position: {
    lat: number;
    lng: number;
  };
};

export type TTourReviews = {
  starBlock: {
    titleReviews: string;
    buttonReviews: string;
    buttonReviewsWindow: {
      feedback: {
        name: string;
        des: string;
        starFeedback: {
          name: string;
        }[];

        inputName: string;
        inputDes: string;
        inputPhoto: string;
        buttonPhoto: string;
        buttonNext: string;
      };
      feedbackThank: {
        name: string;
        des: string;
        buttonClose: string;
      };
    };
    starReviews: string;
    starPoints: {
      titleStar: string;
      titlePoints: string;
    }[];
  };
  reviewPeople: {
    reviewsPeopleTitle: {
      photoPeople: string;
      name: string;
      starReviews: string;
      description: string;
      photoReview: {
        photoReviewUrl: string;
      }[];
    }[];
    allButton: string;
  };
};

export type TTourReserve = {
  priceReserve: {
    oldPrice: string;
    price: string;
    priceTitle: string;
  };
  DateTime: {
    title: string;
    des: string;
  };
  People: {
    title: string;
    des: string;
  };
  Transfer: {
    price: string;
    title: string;
    des: string;
  };
  Button: string;
};

export type TContact = {
  textContact: string;
  textContactOr: string;
  wh: {
    text: string;
  };
  tl: {
    text: string;
  };
};

export type TTourFAQ = {
  titleFaq: string;
  event: {
    titleEvent: string;
    descriptionEvent: string;
  }[];
};

export type TTourSimilar = {
  title: string;
  product: {
    id: string;
    url: string;
    photo: {
      url: string;
    }[];

    mark: {
      name: string;
    }[];
    starText: string;
    name: string;
    description: string;
    price: string;
    oldPrice: string;
  }[];
  Tag: {
    title: string;
    nesting: {
      name: string;
      url: string;
    }[];
  };
};

export type TBanner = {
  background: string;
  title: string;
  bread?: {
    name: string;
  }[];
  search: {
    text: string;
    icon: string;
  };
};

export type TCategories = {
  nameCategories: string;
  buttons: {
    id: string;
    name: string;
    icon?: string;
    url?: string;
    nesting?: {
      name: string;
      url: string;
    }[];
  }[];
};

export type TStep = {
  name: string;
  step: {
    icon: string;
    text: string;
    subtitle: string;
  }[];
};

export type TCatalog = {
  title: string;
  page: string;
  product: TCard[];
};

export type TDescription = {
  id: string;
  photo: string;
  name: string;
  desc: string;
};

export type TDestination = {
  name: string;
  cities: TCity[];
};

export type TFooter = {
  logo: string;
  desc: string;
  city: string;
  developerIcon: {
    logo: string;
    url: string;
  };
  menu: {
    name: string;
    url: string;
    nesting: {
      name: string;
      url: string;
    }[];
  }[];
};

export type TStyles = {
  headerColor?: [
    {
      colorHeader: string;
    }
  ];
  marksColor: {
    name: string;
    textColor: string;
    backgroundColor: string;
  }[];
};

export type TGuideCountries = {
  type: string;
  name: string;
  product: TGuideProduct[];
};

export type TGuideProduct = {
  city_id: string;
  name: string;
  desc: string;
  photo: string;
  url: string;
};

export type TGuide = {
  title: string;
  description: string;
  countries: TGuideCountries[];
};

export type TTourDetails = {
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

export type TToursProduct = {
  Bread: TBread[];
  Details: TTourDetails;
  Faq: TTourFAQ;
  Similar: TTourSimilar;
};
export type TGuideDetailsProduct = {
  name: string;
  desc: string;
  productGuide: {
    name: string;
    desc: string;
    photo: string;
    url: string;
  }[];
};
