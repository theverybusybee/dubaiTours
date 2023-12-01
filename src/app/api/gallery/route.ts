import { getGallery } from "@/app/lib/gallery-data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const gallery = getGallery();
    return NextResponse.json({ message: "OK", res: gallery }, { status: 200 });
  } catch (err) {
    return (
      NextResponse.json({ message: "Error", err }),
      {
        status: 500,
      }
    );
  }
};
