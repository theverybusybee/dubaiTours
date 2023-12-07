export interface IReservationFreeDate {
  nameDay: string;
  DataDay: string;
}

export interface IReservationCalendarDate {
  nameDate: string;
  status: "work" | "off";
}

export interface IReservationTimeDate {
  timeFree: string;
}

export interface IReservationOptionsDate {
  title: string;
  price: string;
  currency: string;
  desc: string;
}

export interface IReservationReceiptPrice {
  NewPrice: string;
  OldPrice: string;
}

export interface IReservationReceiptSelectOrder {
  name: string;
}

export interface IReservationReceiptCalculations {
  name: string;
  price: string;
  currency: string;
}

export interface IReservationModalDataDate {
  title: string;
  arrowBack?: string;
  freeDate: IReservationFreeDate[];
  calendarButton: string;
  buttonNext?: string;
}

export interface IReservationModalDataCalendar {
  arrowBack?: string;
  title: string;
  calendar: IReservationCalendarDate[];
}

export interface IReservationModalDataTime {
  arrowBack?: string;
  title: string;
  time: IReservationTimeDate[];
  buttonNext?: string;
}

export interface IReservationModalDataOptions {
  arrowBack?: string;
  title: string;
  peopleBig: string;
  peopleSmall: string;
  more: IReservationOptionsDate[];
  buttonNext?: string;
}

export interface IReservationModalDataReceipt {
  arrowBack?: string;
  title: string;
  Price: IReservationReceiptPrice;
  SelectOrder: IReservationReceiptSelectOrder[];
  calculator: IReservationReceiptCalculations[];
  ButtonReserve: string;
  ButtonBack?: string;
}

export interface IReservationData {
  ReserveOne: IReservationFreeDate;
  ReserveTwo: IReservationCalendarDate;
  ReserveThree: IReservationTimeDate;
  ReserveFour: IReservationOptionsDate;
  ReserveFive: IReservationReceiptPrice;
}

export interface IReservationModalData {
  ReserveOne: IReservationModalDataDate | null;
  ReserveTwo: IReservationModalDataCalendar | null;
  ReserveThree: IReservationModalDataTime | null;
  ReserveFour: IReservationModalDataOptions | null;
  ReserveFive: IReservationModalDataReceipt | null;
}

export interface IReservationFormState {
  arrivalDate: string;
  returnDate: string;
  returnTime: string;
  people: {
    adults: string;
    kids: string;
  };
  options: {
    Food: boolean;
    Transfer: boolean;
  };
}

export interface IReservationModalContent {
  returnDatePopup: boolean;
  calendarPopup: boolean;
  timePopup: boolean;
  peoplePopup: boolean;
  receiptPopup: boolean;
}

export interface ICurrentOpenedModalData {
  [key: string]: boolean;
}

export type ReservationModalDateAlias =
  | IReservationModalDataDate
  | IReservationModalDataCalendar
  | IReservationModalDataTime
  | IReservationModalDataOptions
  | IReservationModalDataReceipt;
