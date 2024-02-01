import { TMain } from "./types/pages-types";
import greenHeart from "@/images/logos/steps/green-heart.png";
import greenSheet from "@/images/logos/steps/green-sheet.png";
import greenLocationClip from "@/images/logos/steps/green-location-clip.png";
import { globe, magnifyingGlassBold } from "@/images/logos/icons/icons";

const mainData: TMain = {
  Header: {
    location: {
      city: "Dubai",
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
            url: "/en/contacts",
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
            url: "/en/tour",
          },
          {
            name: "Transfer",
            url: "/en/transfer",
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
      icon: globe,
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
  Banner: {
    background:
      "https://images.unsplash.com/photo-1591609073408-f3d66d8fc11d?q=50&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dubai very love",
    search: {
      text: "Search destinations or activities",
      icon: magnifyingGlassBold,
    },
  },
  Categories: {
    nameCategories: "We Recommend",
    buttons: [
      {
        id: "1",
        name: "Theme Parks",
      },
      {
        id: "2",
        name: "Water Parks",
      },
      {
        id: "3",
        name: "Museums",
      },
      {
        id: "4",
        name: "Observation Decks",
      },
      {
        id: "5",
        name: "Shows",
      },
    ],
  },
  Recommend: {
    title: "We Recommend",
    button: "/en/tour/",
    product: [
      {
        id: "1",
        url: "/en/dubai/category/burjkhalifa",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1554203576-3b7d50b086ee?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1575538439014-1b8bc5fcaa1d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        starText: "4.5 (200)",
        name: "Burj Khalifa",
        description: "The world's tallest building. ",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "2",
        url: "/en/dubai/category/dubaimall",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1614521084980-811d04f6c6cb?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1609874071618-a20f3a69fc3f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        starText: "4.5 (200)",
        name: "Dubai Mall",
        description:
          "It is the largest mall in the world by total land area and the 26th-largest shopping mall in the world",
        price: "$100",
        oldPrice: "$150",
      },
      {
        id: "3",
        url: "/en/dubai/category/thepalmjumeirah",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1682410601904-24ec1d9858e6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1617455156345-083672e4e221?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1638255979733-4b61c48184ee?q=80&w=3015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        starText: "4.5 (200)",
        name: "The Palm Jumeirah",
        description:
          "The unique man-made island that resembles a palm tree with 16 leaves and a crescent moon around them",
        price: "$150",
        oldPrice: "$250",
      },
      {
        id: "4",
        url: "/en/dubai/category/burjkhalifa",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1554203576-3b7d50b086ee?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1575538439014-1b8bc5fcaa1d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        starText: "4.5 (200)",
        name: "Burj Khalifa",
        description: "The world's tallest building. ",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "5",
        url: "/en/dubai/category/dubaimall",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1614521084980-811d04f6c6cb?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1609874071618-a20f3a69fc3f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        starText: "4.5 (200)",
        name: "Dubai Mall",
        description:
          "It is the largest mall in the world by total land area and the 26th-largest shopping mall in the world",
        price: "$100",
        oldPrice: "$150",
      },
    ],
  },
  Destination: {
    name: "Destination",
    cities: [
      {
        url: "/en/tour/dubai",
        photo:
          "https://images.unsplash.com/photo-1609764465693-a2dc6c6f7dbd?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Dubai",
        description: null,
      },
      {
        url: "/en/tour/abu-dhabi",
        photo:
          "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Abu Dhabi",
        description: null,
      },
      {
        url: "/en/tour/sharjah",
        photo:
          "https://images.unsplash.com/photo-1582790315910-c8a7a5f7540d?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Sharjah",
        description: null,
      },
      {
        url: "/en/tour/dubai",
        photo:
          "https://images.unsplash.com/photo-1609764465693-a2dc6c6f7dbd?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Dubai",
        description: null,
      },
      {
        url: "/en/tour/abu-dhabi",
        photo:
          "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Abu Dhabi",
        description: null,
      },
      {
        url: "/en/tour/sharjah",
        photo:
          "https://images.unsplash.com/photo-1582790315910-c8a7a5f7540d?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Sharjah",
        description: null,
      },
    ],
  },
  Combo: {
    title: "Combo Packages",
    button: "Make your own combo package",
    product: [
      {
        type: "tour",
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
        type: "tour",
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
        type: "tour",
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
        type: "tour",
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
        type: "tour",
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
        type: "tour",
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
        type: "tour",
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
  },
  Step: {
    name: "3 steps to tour",
    step: [
      {
        icon: greenHeart,
        text: "Choose your favorite tour on the site",
        subtitle: "Click book and follow the instructions",
      },
      {
        icon: greenSheet,
        text: "Choose your favorite tour on the site",
        subtitle: "Click book and follow the instructions",
      },
      {
        icon: greenLocationClip,
        text: "Choose your favorite tour on the site",
        subtitle: "Click book and follow the instructions",
      },
    ],
  },
  Guide: {
    title: "Guide",
    description:
      "A useful and detailed guide to information about holidays in Dubai and the OAE",
    countries: [
      {
        type: "DUBAI",
        name: "DUBAI",
        product: [
          {
            city_id: "2",
            name: "Attractions Dubai",
            desc: "The most popular attractions of Dubai, UAE. Overview of the most interesting, visited and memorable places in the Arab Emirates.",
            photo:
              "https://images.unsplash.com/photo-1568836653164-21613beff4f2?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/en/guide/dubai/attractions",
          },
          {
            city_id: "2",
            name: "Theme Parks",
            desc: "Еntertainment in Dubai that must be visited!",
            photo:
              "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            city_id: "2",
            name: "Dubai neighborhood",
            desc: "Popular Dubai Districts",
            photo:
              "https://images.unsplash.com/photo-1603783032802-460a687c4eef?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/en/guide/dubai/neighborhood",
          },
          {
            city_id: "2",
            name: "Attractions of Abu-Dhabi",
            desc: "The most popular attractions in Abu Dhabi to visit.",
            photo:
              "https://images.unsplash.com/photo-1538509372302-dc95677545c3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/en/guide/abu-dhabi/attractions-abu-dabi",
          },
          {
            city_id: "2",
            name: "Art and Culture",
            desc: "The most interesting objects of art and culture. Dubai's Historical Heritage",
            photo:
              "https://images.unsplash.com/photo-1609764465693-a2dc6c6f7dbd?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/en/guide/dubai/arts-and-culture",
          },
          {
            city_id: "2",
            name: "Beaches in Dubai",
            desc: "test value_en",
            photo:
              "https://images.unsplash.com/photo-1619806840163-38e329be64bb?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/en/guide/dubai/beaches",
          },
        ],
      },
      {
        type: "UAE",
        name: "UAE",
        product: [
          {
            city_id: "2",
            name: "Attractions Dubai",
            desc: "The most popular attractions of Dubai, UAE. Overview of the most interesting, visited and memorable places in the Arab Emirates.",
            photo:
              "https://images.unsplash.com/photo-1568836653164-21613beff4f2?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            city_id: "2",
            name: "Attractions Dubai",
            desc: "The most popular attractions of Dubai, UAE. Overview of the most interesting, visited and memorable places in the Arab Emirates.",
            photo:
              "https://images.unsplash.com/photo-1575538439014-1b8bc5fcaa1d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            city_id: "2",
            name: "Theme Parks",
            desc: "Еntertainment in Dubai that must be visited!",
            photo:
              "https://images.unsplash.com/photo-1598963086364-4b985a95376a?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            city_id: "2",
            name: "Dubai neighborhood",
            desc: "Popular Dubai Districts",
            photo:
              "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/en/guide/dubai/neighborhood",
          },
          {
            city_id: "2",
            name: "Attractions of Abu-Dhabi",
            desc: "The most popular attractions in Abu Dhabi to visit.",
            photo:
              "https://images.unsplash.com/photo-1606831000741-7a612b8099e9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/en/guide/abu-dhabi/attractions-abu-dabi",
          },
          {
            city_id: "2",
            name: "Art and Culture",
            desc: "The most interesting objects of art and culture. Dubai's Historical Heritage",
            photo:
              "https://images.unsplash.com/photo-1528689878189-833ae433a478?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/en/guide/dubai/arts-and-culture",
          },
        ],
      },
    ],
  },
  Description: [
    {
      id: "1",
      photo:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHViYWl8ZW58MHx8MHx8fDA%3D",
      name: "Dubai - everything for rest in dubai and UAE",
      desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country.",
    },
    {
      id: "2",
      photo:
        "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHViYWl8ZW58MHx8MHx8fDA%3D",
      name: "Dubai - everything for rest in dubai and UAE",
      desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country.",
    },
    {
      id: "3",
      photo:
        "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8fDB8fHww",
      name: "Dubai - everything for rest in dubai and UAE",
      desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country.",
    },
    {
      id: "4",
      photo:
        "https://images.unsplash.com/photo-1462007895615-c8c073bebcd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGR1YmFpfGVufDB8fDB8fHww",
      name: "Dubai - everything for rest in dubai and UAE",
      desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country.",
    },
    {
      id: "5",
      photo:
        "https://images.unsplash.com/photo-1591609073408-f3d66d8fc11d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGR1YmFpfGVufDB8fDB8fHww",
      name: "Dubai - everything for rest in dubai and UAE",
      desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country.",
    },
  ],
  Footer: {
    desc: "Unforgettable experience in one click",
    city: "Dubai",
    menu: [
      {
        name: "Company",
        url: "site.com",
        nesting: [
          {
            name: "About company",
            url: "/company",
          },
          {
            name: "Blog",
            url: "/blog",
          },
          {
            name: "Contact",
            url: "/contact",
          },
          {
            name: "Faq",
            url: "/faq",
          },
          {
            name: "Privacy policy",
            url: "/policy",
          },
        ],
      },
      {
        name: "Client",
        url: "site.com",
        nesting: [
          {
            name: "Tour",
            url: "/tour",
          },
          {
            name: "Transfer",
            url: "/transfer",
          },
          {
            name: "How to make an order",
            url: "/faq",
          },
          {
            name: "How to return a ticket",
            url: "/faq",
          },
        ],
      },
      {
        name: "Excursions",
        url: "site.com/tour",
        nesting: [
          {
            name: "Dubai",
            url: "/tour/dubai",
          },
          {
            name: "Guide UAE",
            url: "/guide/uae",
          },
          {
            name: "New",
            url: "/tour/dubai",
          },
          {
            name: "Sight",
            url: "/guide/uae",
          },
          {
            name: "Acquaintance",
            url: "/tour/dubai",
          },
          {
            name: "Entertainment",
            url: "/guide/uae",
          },
          {
            name: "Museums",
            url: "/faq",
          },
          {
            name: "Water Parks",
            url: "/faq",
          },
          {
            name: "Theme Parks",
            url: "/faq",
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

export const getMainData = () => mainData;
