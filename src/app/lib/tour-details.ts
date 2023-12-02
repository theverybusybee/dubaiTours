import { TTourDetails } from "./pages-types";

const tourDetails: TTourDetails = {
  Header: {
    logo: "http://38.180.11.127/upload/logo/logow.svg",
    location: {
      icon: "http://38.180.11.127/upload/icon/menu/white/location.svg",
      city: "OAE, Dubai",
    },
    language: {
      list: [
        {
          url: "/en/dubai/",
          urlCode: "en",
          icon: "http://38.180.11.127/upload/icon/flag/eng.svg",
          lang: "English",
        },
        {
          url: "/ru/dubai/",
          urlCode: "ru",
          icon: "http://38.180.11.127/upload/icon/flag/rus.svg",
          lang: "Russian",
        },
      ],
      icon: {
        arrowIcon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
      },
    },
    currency: {
      exchange: [
        {
          url: "/en/",
          currency: "$ USD",
          code: "usd",
        },
        {
          url: "/en/",
          currency: "₽ RUB",
          code: "rub",
        },
        {
          url: "/en/",
          currency: "د.إ AED",
          code: "aed",
        },
      ],
      iconArrow:
        "http://admin.clicktoguide.com/upload/icon/menu/white/arroww.svg",
    },
    menu: [
      {
        name: "Tour",
        url: "/en/dubai/tour",
      },
      {
        name: "Transfer",
        url: "/en/dubai/transfer",
      },
      {
        name: "Company",
        url: "/en/company",
        arrowIcon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
        nesting: [
          {
            name: "About company",
            url: "/en/company",
          },
          {
            name: "Blog",
            url: "/en/blog",
          },
          {
            name: "Сontacts",
            url: "/en/dubai/contacts",
          },
          {
            name: "Partners",
            url: "/en/partners",
          },
          {
            name: "Requisites",
            url: "/en/requisites",
          },
          {
            name: "Privacy policy",
            url: "/en/privacypolicy",
          },
        ],
      },
      {
        name: "Client",
        url: "/en/FAQ",
        arrowIcon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
        nesting: [
          {
            name: "Tours",
            url: "/en/dubai/tour",
          },
          {
            name: "Transfer",
            url: "/en/dubai/transfer",
          },
          {
            name: "Checkout",
            url: "/en/checkout",
          },
          {
            name: "FAQ",
            url: "/en/faq",
          },
        ],
      },
    ],
    wishlist: {
      icon: "http://38.180.11.127/upload/icon/menu/white/heart.svg",
      name: "Wishlist",
      url: "/en/wishlist",
    },
    registration: "Sign up",
    mobile: {
      icon: {
        iconWorld: "http://38.180.11.127/upload/icon/menu/black/mir.svg",
      },
      Contact: {
        textContact: "We will be happy to help you",
        textContactOr: "or",
        wh: {
          text: "WhatsApp",
          icon: "http://38.180.11.127/upload/icon/menu/contact/whatsapp.svg",
        },
        tl: {
          text: "Telegram",
          icon: "http://38.180.11.127/upload/icon/menu/contact/telegram.svg",
        },
      },
    },
  },
  Product: {
    Bread: [
      {
        name: "Main",
      },
      {
        name: "All in Dubai",
      },
      {
        name: "Ferrari Park Abu Dabi",
      },
    ],
    Details: {
      HeadDetails: {
        name: "Ferrari Park Abu Dhabi",
        review: "Отзывы: 240",
        star: "4.5",
        id: "ID: 9",
        wishlist: {
          name: "Add wishlist",
        },
      },
      Photo: {
        photoDetails: [
          {
            url: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1615747476205-991a14cd2358?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1588408687414-434a389defac?q=80&w=3100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        buttonPhoto: "All photo (+25)",
      },
      Advantages: [
        {
          icon: "http://38.180.11.127/upload/icon/tour/whatch.svg",
          property: "Duration:",
          propertyText: "5 hours",
        },
        {
          icon: "http://38.180.11.127/upload/icon/tour/people_ok.svg",
          property: "For whom:",
          propertyText: "Kids, Adult",
        },
        {
          icon: "http://38.180.11.127/upload/icon/tour/map.svg",
          property: "How is it going:",
          propertyText: "Walking tour",
        },
      ],
      Description: {
        titleDescription: "Description",
        smallDescription:
          "The first Ferrari-branded theme park in the world, Ferrari World Abu Dhabi celebrates the passionate spirit of the legendary racing marque. Its iconic structure houses numerous high-adrenaline rides featuring the world’s fastest rollercoaster.",
        bigDescription:
          "The first Ferrari-branded theme park in the world, Ferrari World Abu Dhabi celebrates the passionate spirit of the legendary racing marque. Its iconic structure houses numerous high-adrenaline rides featuring the world’s fastest rollercoaster, family-friendly attractions",
      },
      Included: {
        titleGreen: "Included",
        titleBlack: "in the price",
        icon: "http://38.180.11.127/upload/icon/tour/ok.svg",
        text: [
          {
            text: "Transport service throughout the route.",
          },
          {
            text: "Accompanying a guide along the entire route of the excursion.",
          },
          {
            text: "Transport insurance",
          },
        ],
      },
      NotInclude: {
        titleBlack: "The price does",
        titleOrange: "not include",
        icon: "http://38.180.11.127/upload/icon/tour/no.svg",
        text: [
          {
            text: "Ascent by cable car: 400 adults 250 children",
          },
          {
            text: "Transfer from the Ai-Petri plateau to the",
          },
          {
            text: "Uchan-Su waterfall",
          },
          {
            text: "Nutrition",
          },
          {
            text: "Souvenirs",
          },
        ],
      },
      Warnings: {
        titleRed: "Important Warnings",
        icon: "http://38.180.11.127/upload/icon/tour/error.svg",
        text: [
          {
            text: "Be sure to have sports shoes, a hat, a windbreaker jacket, a supply of drinking water.",
          },
          {
            text: "Climbing (descent) along a mountain serpentine by car, as well as in a cable car trailer, is contraindicated for people with blood pressure disorders.",
          },
          {
            text: "You must arrive for boarding 5 minutes before the scheduled departure time on your tour voucher. In the absence of transport, do not leave the landing site. The tour ticket or voucher contains a telephone number for communication with the dispatch service. Call this number or wait for the representative of the tour company to appear.",
          },
        ],
      },
      Map: [
        {
          id: 1,
          name: "Gathering place",
          address: "Dubai, President Street 15",
          description: "Tour guides in red T-shirts will be waiting for you",
          position: {
            lat: 41.881832,
            lng: -87.623177,
          },
        },
        {
          id: 2,
          address: "Dubai, President Street 15",
          description: "Tour guides in red T-shirts will be waiting for you",
          name: "Gathering place",
          position: {
            lat: 39.739235,
            lng: -104.99025,
          },
        },
        {
          id: 3,
          address: "Dubai, President Street 15",
          description: "Tour guides in red T-shirts will be waiting for you",
          name: "Gathering place",
          position: {
            lat: 34.052235,
            lng: -118.243683,
          },
        },
        {
          id: 4,
          address: "Dubai, President Street 15",
          description: "Tour guides in red T-shirts will be waiting for you",
          name: "Gathering place",
          position: {
            lat: 40.712776,
            lng: -74.005974,
          },
        },
      ],
      Reviews: {
        starBlock: {
          titleReviews: "Reviews",
          buttonReviews: "feedback",
          buttonReviewsWindow: {
            feedback: {
              name: "Leave feedback",
              des: "Leave a review in more detail about your late tour",
              starFeedback: [
                {
                  name: "Transport",
                },
                {
                  name: "Price/Quality",
                },
                {
                  name: "Service",
                },
                {
                  name: "Organization",
                },
              ],
              inputName: "You name",
              inputDes: "Text",
              inputPhoto: "Photo",
              buttonPhoto: "Upload",
              buttonNext: "Send",
            },
            feedbackThank: {
              name: "Thanks for the feedback",
              des: "Your review is being reviewed and will be published soon.",
              buttonClose: "Close a window",
            },
          },
          starReviews: "4.5",
          starPoints: [
            {
              titleStar: "Transport",
              titlePoints: "4.1",
            },
            {
              titleStar: "Price/Quality",
              titlePoints: "4.8",
            },
            {
              titleStar: "Service",
              titlePoints: "4.8",
            },
            {
              titleStar: "Organization",
              titlePoints: "4.3",
            },
          ],
        },
        reviewPeople: {
          reviewsPeopleTitle: [
            {
              photoPeople: "http://38.180.11.127/upload/photo/tour/people.jpg",
              name: "Alex",
              starReviews: "4.5",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread. It is difficult why the representative\\'s actions speak",
              photoReview: [
                {
                  photoReviewUrl:
                    "http://38.180.11.127/upload/photo/tour/rev1.jpg",
                },
                {
                  photoReviewUrl:
                    "http://38.180.11.127/upload/photo/tour/rev2.jpg",
                },
                {
                  photoReviewUrl:
                    "http://38.180.11.127/upload/photo/tour/rev1.jpg",
                },
                {
                  photoReviewUrl:
                    "http://38.180.11.127/upload/photo/tour/rev2.jpg",
                },
                {
                  photoReviewUrl:
                    "http://38.180.11.127/upload/photo/tour/rev1.jpg",
                },
                {
                  photoReviewUrl:
                    "http://38.180.11.127/upload/photo/tour/rev2.jpg",
                },
                {
                  photoReviewUrl:
                    "http://38.180.11.127/upload/photo/tour/rev1.jpg",
                },
              ],
            },
          ],
          allButton: "Show all",
        },
      },
      BlockReserve: {
        priceReserve: {
          oldPrice: "$350",
          price: "$250",
          priceTitle: "price",
        },
        DateTime: {
          title: "Date and Time",
          des: "Tomorrow, 16 June - 10:00",
        },
        People: {
          title: "People",
          des: "1 (one)",
        },
        Transfer: {
          price: "$450",
          title: "Transfer",
          des: "If you need a transfer, we will include it in the order",
        },
        Button: "Reserve",
      },
      Contact: {
        textContact: "We will be happy to help you",
        textContactOr: "or",
        wh: {
          text: "WhatsApp",
          icon: "http://38.180.11.127/upload/icon/menu/contact/whatsapp.svg",
        },
        tl: {
          text: "Telegram",
          icon: "http://38.180.11.127/upload/icon/menu/contact/telegram.svg",
        },
      },
    },
    Faq: {
      titleFaq: "FAQ",
      event: [
        {
          titleEvent: "How to make an order",
          descriptionEvent:
            "Our blind acceptance of terms of use and privacy notices is at the heart of what Shoshana Zuboff called surveillance capitalism(new window). You give your “consent”, though you’ve barely read or understood what for. Companies can then abuse your data at will — with significant consequences for you and society.",
        },
        {
          titleEvent: "How to return a ticket",
          descriptionEvent:
            "Our blind acceptance of terms of use and privacy notices is at the heart of what Shoshana Zuboff called surveillance capitalism(new window). You give your “consent”, though you’ve barely read or understood what for. Companies can then abuse your data at will — with significant consequences for you and society.",
        },
        {
          titleEvent: "Checkout",
          descriptionEvent:
            "Our blind acceptance of terms of use and privacy notices is at the heart of what Shoshana Zuboff called surveillance capitalism(new window). You give your “consent”, though you’ve barely read or understood what for. Companies can then abuse your data at will — with significant consequences for you and society.",
        },
      ],
    },
    Similar: {
      title: "Similar experiences",
      product: [
        {
          id: "1",
          url: "/en/dubai/category/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/photo1.jpg",
            },
            {
              url: "http://38.180.11.127/upload/photo/photo3.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          starText: "4.5 (200)",
          name: "Ferrari Park Abu Dhabi",
          description: "The largest in the world, area 200,000 m²",
          price: "$250",
          oldPrice: "$350",
        },
        {
          id: "1",
          url: "/en/dubai/category/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/photo1.jpg",
            },
            {
              url: "http://38.180.11.127/upload/photo/photo3.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          starText: "4.5 (200)",
          name: "Ferrari Park Abu Dhabi",
          description: "The largest in the world, area 200,000 m²",
          price: "$250",
          oldPrice: "$350",
        },
      ],
      Tag: {
        title: "Dubai: popular attractions",
        nesting: [
          {
            name: "Dubai Islands",
            url: "/en/dubai/guide/",
          },
          {
            name: "Garden of Wonders in Dubai",
            url: "/en/dubai/guide/",
          },
          {
            name: "Burj-Khalifa",
            url: "/en/dubai/guide/",
          },
          {
            name: "Garden of Wonders in Dubai",
            url: "/en/dubai/guide/",
          },
        ],
      },
    },
  },
  Footer: {
    logo: "http://38.180.11.127/upload/logo/logow.svg",
    desc: "Unforgettable experience in one click",
    city: "ОАЭ, Дубай",
    developerIcon: {
      logo: "http://38.180.11.127/upload/logo/logo_dev.svg",
      url: "site.com",
    },
    menu: [
      {
        name: "Company",
        url: "site.com",
        nesting: [
          {
            name: "About company",
            url: "site.com",
          },
          {
            name: "Blog",
            url: "site.com/",
          },
          {
            name: "Contacts",
            url: "site.com",
          },
          {
            name: "Partners",
            url: "site.com",
          },
          {
            name: "Requisites",
            url: "site.com",
          },
          {
            name: "Privacy policy",
            url: "site.com",
          },
        ],
      },
      {
        name: "Client",
        url: "site.com",
        nesting: [
          {
            name: "Tours",
            url: "site.com",
          },
          {
            name: "Transfer",
            url: "site.com",
          },
          {
            name: "Checkout",
            url: "site.com",
          },
          {
            name: "FAQ",
            url: "site.com",
          },
        ],
      },
      {
        name: "Excursions Dubai",
        url: "site.com/tour",
        nesting: [
          {
            name: "New",
            url: "site.com",
          },
          {
            name: "Sight",
            url: "site.com",
          },
          {
            name: "Acquaintance",
            url: "site.com",
          },
          {
            name: "Entertainment",
            url: "site.com",
          },
          {
            name: "Shopping",
            url: "site.com",
          },
          {
            name: "Route",
            url: "site.com",
          },
          {
            name: "Musems",
            url: "site.com",
          },
          {
            name: "Water Parks",
            url: "site.com",
          },
          {
            name: "Theme Parks",
            url: "site.com",
          },
          {
            name: "Musems",
            url: "site.com",
          },
          {
            name: "Water Parks",
            url: "site.com",
          },
          {
            name: "Theme Parks",
            url: "site.com",
          },
        ],
      },
    ],
  },
  Styles: {
    headerColor: [
      {
        colorHeader: "white",
      },
    ],
    marksColor: [
      {
        name: "New",
        textColor: "black",
        backgroundColor: "blackwhite",
      },
      {
        name: "product",
        textColor: "white",
        backgroundColor: "black",
      },
    ],
  },
};

export const getGallery = () => tourDetails;
