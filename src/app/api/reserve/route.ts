import { getReserveData } from "@/app/lib/reserve-data";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
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
