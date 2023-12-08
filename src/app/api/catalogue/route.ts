import { getCatalogue } from "@/app/lib/catalogue-data";
import { NextResponse } from "next/server";

export const GET = async (req: Request): Promise<any> => {
  try {
    const catalogue = getCatalogue();
    return NextResponse.json(
      { message: "OK", res: catalogue },
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
