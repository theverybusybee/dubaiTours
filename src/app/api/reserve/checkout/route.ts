import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextApiResponse) => {
  try {
    const calc = req.nextUrl.searchParams.get("calc");
    return NextResponse.json({ message: "OK", res: calc }, { status: 200 });
  } catch (err) {
    return (
      NextResponse.json({ message: "Error", err }),
      {
        status: 500,
      }
    );
  }
};
