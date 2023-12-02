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

export type TCity = {
  url: string;
  photo: string;
  name: string;
  description: null;
};

export type THeader = {
  logo?: string;
  location: {
    city: string;
    icon?: string;
  };
  language: {
    list: {
      url: string;
      urlCode: string;
      icon: string;
      lang: string;
    }[];
    icon: {
      arrowIcon: string;
    };
  };
  currency: {
    exchange: {
      url: string;
      currency: string;
      code: string;
    }[];
    iconArrow: string;
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
    Contact: {
      textContact: string;
      textContactOr: string;
      wh: {
        text: string;
        icon: string;
      };
      tl: {
        text: string;
        icon: string;
      };
    };
  };
};

export type TProduct = {

}

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

export type TRecommend = {
  title: string;
  button: {
    name: string;
    url: string;
  };
  product: TCard[];
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

export type TPopular = {
  title: string;
  product: TCard[];
};

export type TCatalog = {
  title: string;
  page: string;
  product: TCard[];
};

export type TCombo = {
  name: string;
  button: string;
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

export type TGuide = {
  name: string;
  description: string;
  countries: {
    type: string;
    name: string;
    product: {
      city_id: string;
      name: string;
      desc: string;
      photo: string;
      url: string;
    }[];
  }[];
};
