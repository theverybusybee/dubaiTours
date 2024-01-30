import { TTourDetailsData } from "./types/pages-types";
import {
  clockIcon,
  personIcon,
  mapIcon,
  greenOkLogo,
  yellowForbiddenLogo,
  redErrorLogo,
  globe,
} from "@/images/logos/icons/icons";

const tourDetails: TTourDetailsData = {
  Header: {
    location: {
      city: "OAE, Dubai",
    },
    language: {
      list: [
        {
          url: "/en/dubai/",
          urlCode: "en",
          icon: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png",
          lang: "English",
        },
        {
          url: "/ru/dubai/",
          urlCode: "ru",
          icon: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/russia-flag-icon.png",
          lang: "Russian",
        },
      ],
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
    },
    menu: [
      {
        name: "Catalogue",
        url: "/catalogue",
      },
      {
        name: "Tour details",
        url: "/catalogue/tour-details",
      },
      {
        name: "Company",
        url: "/en/company",

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
      name: "Wishlist",
      url: "/en/wishlist",
    },
    registration: "Sign up",
    mobile: {
      icon: {
        iconWorld: globe,
      },
      Contact: {
        textContact: "We will be happy to help you",
        textContactOr: "or",
        wh: {
          text: "WhatsApp",
        },
        tl: {
          text: "Telegram",
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
        name: "Catalogue",
      },
      {
        name: "Tour 1",
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
          icon: clockIcon,
          property: "Duration:",
          propertyText: "5 hours",
        },
        {
          icon: personIcon,
          property: "For whom:",
          propertyText: "Kids, Adult",
        },
        {
          icon: mapIcon,
          property: "How is it going:",
          propertyText: "Walking tour",
        },
      ],
      Description: {
        titleDescription: "Description",
        smallDescription:
          "The first Ferrari-branded theme park in the world, Ferrari World Abu Dhabi celebrates the passionate spirit of the legendary racing marque. Its iconic structure houses numerous high-adrenaline rides featuring the world's fastest rollercoaster.",
        bigDescription:
          "The first Ferrari-branded theme park in the world, Ferrari World Abu Dhabi celebrates the passionate spirit of the legendary racing marque. Its iconic structure houses numerous high-adrenaline rides featuring the world's fastest rollercoaster, family-friendly attractions",
      },
      Included: {
        titleGreen: "Included",
        titleBlack: "in the price",
        icon: greenOkLogo,
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
        icon: yellowForbiddenLogo,
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
        icon: redErrorLogo,
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
              photoPeople:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Alex",
              starReviews: "4.5",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread. It is difficult",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/b0/d8/49/b0d84930ecb0f53082562d7a7052bf37.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/ef/a1/c9/efa1c93d0d72a4b69cfd5b49e70ed2b7.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/19/1f/39/191f398af2e5099a9d879c5b4986ba79.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/bf/69/a1/bf69a179c95a20fa0e091124e7c6b0ec.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/44/84/0f/44840f647a1ef2ba405e5abd1e2a3918.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/43/5b/b0/435bb0ea93a8eb3696699113d4ffd1d0.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ],
            },
            {
              photoPeople:
                "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Lisa",
              starReviews: "5",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread. It is difficult why the representative\\'s actions speak Supporters of totalitarianism in science are only accessible and widespread. It is difficult why the representative\\'s actions speak",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/30/33/29/3033294758f09b3ef695163f26d42c50.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/ee/d7/0a/eed70af40418cfc4df42f5a1790328e3.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/f1/01/8a/f1018afb317315fce9c8b60d2d3fcea5.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=2927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ],
            },
            {
              photoPeople:
                "https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "John",
              starReviews: "3",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread.",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/8f/17/aa/8f17aa6f182ea2494b279b4be254973e.jpg",
                },

                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1533395427226-788cee25cc7b?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/e8/d6/5b/e8d65b09a457ddba98f93b0f2bf48a6b.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1634007626524-f47fa37810a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ],
            },
            {
              photoPeople:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Alex",
              starReviews: "4.5",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread. It is difficult",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/b0/d8/49/b0d84930ecb0f53082562d7a7052bf37.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/ef/a1/c9/efa1c93d0d72a4b69cfd5b49e70ed2b7.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/19/1f/39/191f398af2e5099a9d879c5b4986ba79.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/bf/69/a1/bf69a179c95a20fa0e091124e7c6b0ec.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/44/84/0f/44840f647a1ef2ba405e5abd1e2a3918.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/43/5b/b0/435bb0ea93a8eb3696699113d4ffd1d0.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ],
            },
            {
              photoPeople:
                "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Lisa",
              starReviews: "5",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread. It is difficult why the representative\\'s actions speak Supporters of totalitarianism in science are only accessible and widespread. It is difficult why the representative\\'s actions speak",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/30/33/29/3033294758f09b3ef695163f26d42c50.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/ee/d7/0a/eed70af40418cfc4df42f5a1790328e3.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/f1/01/8a/f1018afb317315fce9c8b60d2d3fcea5.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=2927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ],
            },
            {
              photoPeople:
                "https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "John",
              starReviews: "3",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread.",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/8f/17/aa/8f17aa6f182ea2494b279b4be254973e.jpg",
                },

                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1533395427226-788cee25cc7b?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/e8/d6/5b/e8d65b09a457ddba98f93b0f2bf48a6b.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1634007626524-f47fa37810a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ],
            },
            {
              photoPeople:
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Alex",
              starReviews: "4.5",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread. It is difficult",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/b0/d8/49/b0d84930ecb0f53082562d7a7052bf37.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/ef/a1/c9/efa1c93d0d72a4b69cfd5b49e70ed2b7.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/19/1f/39/191f398af2e5099a9d879c5b4986ba79.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/bf/69/a1/bf69a179c95a20fa0e091124e7c6b0ec.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/44/84/0f/44840f647a1ef2ba405e5abd1e2a3918.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/43/5b/b0/435bb0ea93a8eb3696699113d4ffd1d0.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ],
            },
            {
              photoPeople:
                "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Lisa",
              starReviews: "5",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread. It is difficult why the representative\\'s actions speak Supporters of totalitarianism in science are only accessible and widespread. It is difficult why the representative\\'s actions speak",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/30/33/29/3033294758f09b3ef695163f26d42c50.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/ee/d7/0a/eed70af40418cfc4df42f5a1790328e3.jpg",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/f1/01/8a/f1018afb317315fce9c8b60d2d3fcea5.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=2927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ],
            },
            {
              photoPeople:
                "https://images.unsplash.com/photo-1517265446290-91e599dc3b8a?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "John",
              starReviews: "3",
              description:
                "Supporters of totalitarianism in science are only accessible and widespread.",
              photoReview: [
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/8f/17/aa/8f17aa6f182ea2494b279b4be254973e.jpg",
                },

                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1533395427226-788cee25cc7b?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  photoReviewUrl:
                    "https://i.pinimg.com/564x/e8/d6/5b/e8d65b09a457ddba98f93b0f2bf48a6b.jpg",
                },
                {
                  photoReviewUrl:
                    "https://images.unsplash.com/photo-1634007626524-f47fa37810a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          des: "Tomorrow, 16 December - 10:00",
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
        },
        tl: {
          text: "Telegram",
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
          photo: [
            {
              url: "https://images.unsplash.com/photo-1578152882785-df9744e359e5?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "Popular",
            },
            {
              name: "Top",
            },
            {
              name: "Sale",
            },
          ],
          starText: "3.5 (2)",
          name: "Ferrari World Park Abu Dabi",
          description: "The first Ferrari-branded theme park in the world",
          price: "350 $",
          oldPrice: "500 $",
        },
        {
          id: "2",
          photo: [
            {
              url: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "Popular",
            },
            {
              name: "Top",
            },
            {
              name: "Sale",
            },
          ],
          starText: "3.5 (2)",
          name: "Ferrari World Park Abu Dabi",
          description: "The first Ferrari-branded theme park in the world",
          price: "350 $",
          oldPrice: "500 $",
        },
        {
          id: "3",
          photo: [
            {
              url: "https://images.unsplash.com/photo-1578152882785-df9744e359e5?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "Popular",
            },
            {
              name: "Top",
            },
            {
              name: "Sale",
            },
          ],
          starText: "3.5 (2)",
          name: "Ferrari World Park Abu Dabi",
          description: "The first Ferrari-branded theme park in the world",
          price: "350 $",
          oldPrice: "500 $",
        },
        {
          id: "4",
          photo: [
            {
              url: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "Popular",
            },
            {
              name: "Top",
            },
            {
              name: "Sale",
            },
          ],
          starText: "3.5 (2)",
          name: "Ferrari World Park Abu Dabi",
          description: "The first Ferrari-branded theme park in the world",
          price: "350 $",
          oldPrice: "500 $",
        },
        {
          id: "5",
          photo: [
            {
              url: "https://images.unsplash.com/photo-1578152882785-df9744e359e5?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "Popular",
            },
            {
              name: "Top",
            },
            {
              name: "Sale",
            },
          ],
          starText: "3.5 (2)",
          name: "Ferrari World Park Abu Dabi",
          description: "The first Ferrari-branded theme park in the world",
          price: "350 $",
          oldPrice: "500 $",
        },
        {
          id: "6",
          photo: [
            {
              url: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "Popular",
            },
            {
              name: "Top",
            },
            {
              name: "Sale",
            },
          ],
          starText: "3.5 (2)",
          name: "Ferrari World Park Abu Dabi",
          description: "The first Ferrari-branded theme park in the world",
          price: "350 $",
          oldPrice: "500 $",
        },
        {
          id: "7",
          photo: [
            {
              url: "https://images.unsplash.com/photo-1578152882785-df9744e359e5?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "Popular",
            },
            {
              name: "Top",
            },
            {
              name: "Sale",
            },
          ],
          starText: "3.5 (2)",
          name: "Ferrari World Park Abu Dabi",
          description: "The first Ferrari-branded theme park in the world",
          price: "350 $",
          oldPrice: "500 $",
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
    desc: "Unforgettable experience in one click",
    city: "ОАЭ, Дубай",
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

export const getToursDetails = () => tourDetails;
