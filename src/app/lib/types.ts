export type TCard = {
  id: string;
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

export type TCatalogue = {
  Header: {
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
  Banner: {
    background: string;
    title: string;
    bread: {
      name: string;
    }[];
    search: {
      text: string;
      icon: string;
    };
  };
  Categories: {
    nameCategories: string;
    buttons: {
      name: string;
      icon?: string;
      nesting: {
        name: string;
        url: string;
      }[];
    }[];
  };
  Popular: {
    title: string;
    product: TCard[];
  };
  Catalog: {
    title: string;
    page: string;
    product: TCard[];
  };
  Combo: {
    name: string;
    button: string;
    product: TCard[];
  };
  Description: {
    id: number;
    photo: string;
    name: string;
    desc: string;
  }[];
  Footer: {
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
  Styles: {
    marksColor: {
      name: string;
      textColor: string;
      backgroundColor: string;
    }[];
  };
};

export type TGallery = {
  Catalog: {
    title: string;
    page: string;
    product: TCard[];
  };
};