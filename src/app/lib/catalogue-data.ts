import { TCatalogue } from "./types/pages-types";
import { globe } from "@/images/logos/icons/icons";
import { magnifyingGlassBold } from "@/images/logos/icons/icons";

const catalogue: TCatalogue = {
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
          url: "/en/dubai/",
          currency: "$ USD",
          code: "usd",
        },
        {
          url: "/en/dubai/",
          currency: "₽ RUB",
          code: "rub",
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
            name: "Contacts",
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
  Banner: {
    background:
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=50&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "All in Dubai",
    bread: [
      {
        name: "Main page",
      },
      {
        name: "Catalogue",
      },
    ],
    search: {
      text: "Dubai Tours",
      icon: magnifyingGlassBold,
    },
  },
  Categories: {
    nameCategories: "We are Recommend",
    buttons: [
      {
        id: "1",
        name: "Tickets",
        nesting: [
          {
            name: "Theme Parks in Dubai1",
            url: "/en/dubai/catalog/Theme Parks in Dubai",
          },
          {
            name: "View all Tickets in Dubai2",
            url: "/en/dubai/catalog/View all Tickets in Dubai",
          },
          {
            name: "Museums in Dubai3",
            url: "/en/dubai/catalog/Museums in Dubai",
          },
          {
            name: "Landmarks in Dubai4",
            url: "/en/dubai/catalog/Landmarks in Dubai",
          },
        ],
      },
      {
        id: "2",
        name: "Tour",
        nesting: [
          {
            name: "Theme Parks in Dubai",
            url: "/en/dubai/catalog/Theme Parks in Dubai",
          },
          {
            name: "View all Tickets in Dubai",
            url: "/en/dubai/catalog/View all Tickets in Dubai",
          },
          {
            name: "Museums in Dubai",
            url: "/en/dubai/catalog/Museums in Dubai",
          },
          {
            name: "Landmarks in Dubai",
            url: "/en/dubai/catalog/Landmarks in Dubai",
          },
        ],
      },
      {
        id: "3",
        name: "Landmarks",
        nesting: [
          {
            name: "Theme Parks in Dubai",
            url: "/en/dubai/catalog/Theme Parks in Dubai",
          },
          {
            name: "View all Tickets in Dubai",
            url: "/en/dubai/catalog/View all Tickets in Dubai",
          },
          {
            name: "Museums in Dubai",
            url: "/en/dubai/catalog/Museums in Dubai",
          },
          {
            name: "Landmarks in Dubai",
            url: "/en/dubai/catalog/Landmarks in Dubai",
          },
        ],
      },
      {
        id: "4",
        name: "Destinations",
        nesting: [
          {
            name: "Theme Parks in Dubai",
            url: "/en/dubai/catalog/Theme Parks in Dubai",
          },
          {
            name: "View all Tickets in Dubai",
            url: "/en/dubai/catalog/View all Tickets in Dubai",
          },
          {
            name: "Museums in Dubai",
            url: "/en/dubai/catalog/Museums in Dubai",
          },
          {
            name: "Landmarks in Dubai",
            url: "/en/dubai/catalog/Landmarks in Dubai",
          },
        ],
      },
    ],
  },
  Popular: {
    title: "Popular",
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
      {
        id: "6",
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
    ],
  },
  Catalog: {
    title: "All in Dubai",
    page: "1",
    product: [
      {
        id: "1",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1543579596-2c11997c7706?q=80&w=2242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1533395427226-788cee25cc7b?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        starText: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1494675595046-ae42af7dc2ce?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1624682791740-654f27e5d9f6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1606036858743-c106b6ffbff6?q=80&w=3038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        starText: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "3",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1605311364334-723fff035793?q=80&w=2981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],

        starText: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "4",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1581004089744-afec0123376c?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1587898818553-2f4ee6fdf1a5?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],

        starText: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "5",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1667592441284-b590021411e3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1683899407868-4232ce9b2684?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1692970536179-67e47017c7dc?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],

        starText: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "6",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1543579596-2c11997c7706?q=80&w=2242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1533395427226-788cee25cc7b?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],

        starText: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "7",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1494675595046-ae42af7dc2ce?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1624682791740-654f27e5d9f6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1606036858743-c106b6ffbff6?q=80&w=3038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],

        starText: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        id: "8",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1605311364334-723fff035793?q=80&w=2981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],

        starText: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
    ],
  },
  Combo: {
    title: "Combo Packages in Dubai",
    button: "Make your own combo package",
    product: [
      {
        id: "1",
        url: "/en/dubai/cateory/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1686918269961-507270a5a238?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        name: "Combo 1",
        description: "Description of the offer",
        price: "$350",
        oldPrice: "$450",
      },
      {
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1682879654264-5f2a52e1ea0f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        starText: "4.8 (100)",
        name: "Combo 2",
        description: "Description of the offer",
        price: "$550",
        oldPrice: "$650",
      },
      {
        id: "1",
        url: "/en/dubai/cateory/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1686918269961-507270a5a238?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        name: "Combo 1",
        description: "Description of the offer",
        price: "$350",
        oldPrice: "$450",
      },
      {
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1682879654264-5f2a52e1ea0f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        starText: "4.8 (100)",
        name: "Combo 2",
        description: "Description of the offer",
        price: "$550",
        oldPrice: "$650",
      },
      {
        id: "1",
        url: "/en/dubai/cateory/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1686918269961-507270a5a238?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        name: "Combo 1",
        description: "Description of the offer",
        price: "$350",
        oldPrice: "$450",
      },
      {
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1682879654264-5f2a52e1ea0f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

        starText: "4.8 (100)",
        name: "Combo 2",
        description: "Description of the offer",
        price: "$550",
        oldPrice: "$650",
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
            name: "Сontacts",
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
    marksColor: [
      {
        name: "Top",
        textColor: "black",
        backgroundColor: "white",
      },
      {
        name: "Sale 20%",
        textColor: "white",
        backgroundColor: "red",
      },
      {
        name: "New",
        textColor: "white",
        backgroundColor: "green",
      },
      {
        name: "Popular",
        textColor: "black",
        backgroundColor: "white",
      },
    ],
  },
};

export const getCatalogue = () => catalogue;
