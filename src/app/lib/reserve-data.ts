import { IReservationData } from "./types/reservation-types";

export const reserveData: IReservationData = {
  Reserve: {
    ReserveOne: {
      title: "Return date",
      freeDate: [
        {
          nameDay: "Today",
          DataDay: "15 June",
        },
        {
          nameDay: "Tomorrow",
          DataDay: "16 June",
        },
        {
          nameDay: "Day after tomorrow",
          DataDay: "17 June",
        },
        {
          nameDay: "Saturday",
          DataDay: "18 June",
        },
        {
          nameDay: "Sunday",
          DataDay: "19 June",
        },
      ],
      calendarButton: "Choose another date",
      buttonNext: "Next",
    },
    ReserveTwo: {
      arrowBack: "Back",
      title: "Return date",
      calendar: [
        {
          nameDate: "Mo",
          status: "work",
        },
        {
          nameDate: "Tu",
          status: "work",
        },
        {
          nameDate: "We",
          status: "work",
        },
        {
          nameDate: "Th",
          status: "work",
        },
        {
          nameDate: "Fr",
          status: "work",
        },
        {
          nameDate: "Sa",
          status: "off",
        },
        {
          nameDate: "Su",
          status: "off",
        },
      ],
    },
    ReserveThree: {
      arrowBack: "Back",
      title: "Time",
      time: [
        {
          timeFree: "10:00",
        },
        {
          timeFree: "11:00",
        },
        {
          timeFree: "12:00",
        },
        {
          timeFree: "13:00",
        },
        {
          timeFree: "14:00",
        },
      ],
      buttonNext: "Next",
    },
    ReserveFour: {
      arrowBack: "Back",
      title: "People",
      peopleBig: "Adults",
      peopleSmall: "Kids",
      more: [
        {
          title: "Food",
          price: "220",
          currency: "$",
          desc: "During the tour, you will be served delicious food and do not have to take food with you.",
        },
        {
          title: "Transfer",
          price: "210",
          currency: "$",
          desc: "If you need a transfer, we will include it in the order",
        },
      ],
      buttonNext: "Next",
    },
    ReserveFive: {
      arrowBack: "Back",
      title: "Price",
      Price: {
        NewPrice: "$250 price",
        OldPrice: "$350",
      },
      SelectOrder: [
        {
          name: "Date and Time",
        },
        {
          name: "People",
        },
      ],
      calculator: [
        {
          name: "Tour",
          price: "150",
          currency: "$",
        },
        {
          name: "Food",
          price: "150",
          currency: "$",
        },
        {
          name: "Transfer",
          price: "50",
          currency: "$",
        },
        {
          name: "Sale",
          price: "100",
          currency: "$",
        },
      ],
      ButtonReserve: "Reserve",
      ButtonBack: "Back to tour",
    },
  },
};

export const getReserveData = () => reserveData;
