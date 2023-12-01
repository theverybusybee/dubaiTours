import { getMainData } from "@/app/lib/main-data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const main = getMainData();
    return NextResponse.json(
      { message: "OK", res: main },
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
