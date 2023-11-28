import styles from "./page.module.scss";
import { getCatalogueData } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";
import CheckoutSection from "@/components/page-sections/checkout-section/checkout-section";
import CataloguePage from "@/components/pages/catalogue-page/catalogue-page";
import likeIcon from '@/images/logos/icons/heartTransparent.svg'

const catalogueData = {
  Header: {
    seo: {
      title: "ClickToGuide - Dubai wery love",
      description: "Описание о дубае и все такое",
    },
    logo: "http://38.180.11.127/upload/logo/logow.svg",
    location: {
      icon: "http://38.180.11.127/upload/icon/menu/white/location.svg",
      city: "OAE, Dubai",
    },
    language: {
      list: {
        en: {
          url: "/en/dubai/",
          urlCode: "en",
          icon: "http://38.180.11.127/upload/icon/flag/eng.svg",
          lang: "English",
        },
        ru: {
          url: "/ru/dubai/",
          urlCode: "ru",
          icon: "http://38.180.11.127/upload/icon/flag/rus.svg",
          lang: "Russian",
        },
      },
      icon: {
        arrowicon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
      },
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
      iconArrow: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
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
        arrowicon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
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
        arrowicon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
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
  Banner: {
    background:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "All in Dubai",
    bread: [
      {
        name: "Main",
      },
      {
        name: "All in Dubai",
      },
    ],
    search: {
      text: "Dubai Tours",
      icon: "http://38.180.11.127/upload/menu/white/search2.svg",
    },
  },
  Categories: {
    nameCategories: "We are Recommend",
    buttons: [
      {
        sorting: "200",
        name: "Tickets",
        icon: "http://38.180.11.127/upload/icon/categori/tickets.svg",
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
        sorting: "100",
        name: "Tour",
        icon: "http://38.180.11.127/upload/icon/categori/tour.svg",
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
        sorting: "500",
        name: "Tickets",
        icon: "http://38.180.11.127/upload/icon/categori/tickets.svg",
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
        sorting: "100",
        name: "Tour",
        icon: "http://38.180.11.127/upload/icon/categori/tour.svg",
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
        sorting: "200",
        id: "1",
        url: "/en/dubai/category/burjkhalifa",
        photo: [
          {
            url: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Burj Khalifa",
        description: "The world's tallest building. ",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "3",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
    ],
  },
  Catalog: {
    title: "All in Dubai",
    page: "1",
    product: [
      {
        sorting: "200",
        id: "1",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/001.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/002.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "3",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/003.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "4",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/004.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "5",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/005.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "6",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/006.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "1",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/001.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/002.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "3",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/003.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "4",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/004.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "5",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/005.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "6",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/006.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "1",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/001.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/002.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "3",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/003.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "4",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/004.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "5",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/005.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "6",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/006.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "1",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/001.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/002.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "3",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/003.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "4",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/004.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "5",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/005.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "6",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/006.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "1",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/001.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/002.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "3",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/003.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "4",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/004.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "5",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/005.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "6",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/006.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "1",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/001.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "2",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/002.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Sale 20%",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "3",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/003.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "4",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/004.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        mark: [
          {
            name: "Top",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "5",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/005.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "200",
        id: "6",
        url: "/en/dubai/category/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/catalog/006.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo3.jpg",
          },
          {
            url: "http://38.180.11.127/upload/photo/photo1.jpg",
          },
        ],
        hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari Park Abu Dhabi",
        description: "The largest in the world, area 200,000 m²",
        price: "$250",
        oldPrice: "$350",
      },
    ],
  },
  Combo: {
    name: "Combo Packages in Dubai",
    button: "Make your own combo package",
    product: [
      {
        sorting: "200",
        id: "1",
        url: "/en/dubai/cateory/ferraripark",
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
        hearticon: "http://38.180.11.127/upload/icon/categori/heart.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari World Abu Dhabi",
        description:
          "The largest indoor theme park in the world, located in Abu Dhabi",
        price: "$250",
        oldPrice: "$350",
      },
      {
        sorting: "100",
        id: "2",
        url: "/en/dubai/cateory/ferraripark",
        photo: [
          {
            url: "http://38.180.11.127/upload/photo/photo2.jpg",
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
        hearticon: "http://38.180.11.127/upload/icon/categori/heart.svg",
        staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
        startext: "4.5 (200)",
        name: "Ferrari World Abu Dhabi",
        description:
          "The largest indoor theme park in the world, located in Abu Dhabi",
        price: "$250",
        oldPrice: "$350",
      },
    ],
  },
  Description: [
    {
      sorting: "200",
      photo: "http://38.180.11.127/upload/photo/photo3.jpg",
      name: "Dubai - everything for rest in duba and UAE",
      desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country",
    },
    {
      sorting: "300",
      photo: "http://38.180.11.127/upload/photo/photo2.jpg",
      name: "Dubai - everything for rest in duba and UAE",
      desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country",
    },
    {
      sorting: "200",
      photo: "http://38.180.11.127/upload/photo/photo1.jpg",
      name: "Dubai - everything for rest in duba and UAE",
      desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country",
    },
  ],
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
    headerColor: [
      {
        colorHeader: "white",
      },
    ],
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
export default async function Catalogue() {
  // const data = await getCatalogueData();
  const data = catalogueData;

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <CataloguePage data={data} />
      {/* <CheckoutSection /> */}
    </div>
  );
}
