import { getToursDetails } from "@/app/lib/tour-details";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const tourDetails = getToursDetails();
    return NextResponse.json(
      { message: "OK", res: tourDetails },
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
