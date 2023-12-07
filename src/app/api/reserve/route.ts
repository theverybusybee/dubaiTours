import { getReservationDataByTourId } from "@/utils/fetches";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const getReserveData = getReservationDataByTourId('1');
    console.log(req)
    return NextResponse.json(
      { message: "OK", res: getReserveData },
      { status: 200 }
    );
  } catch (err) {
    return (
      NextResponse.json({ message: "Error", err }),
      {
        status: 500,
      }
    );
  }
};
