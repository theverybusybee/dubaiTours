import { getReserveData } from "@/app/lib/reserve-data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response): Promise<any> => {
  try {
    const reservationData = getReserveData();
    return NextResponse.json(
      { message: "OK", res: reservationData },
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
