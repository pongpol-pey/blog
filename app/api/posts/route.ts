import { NextResponse } from "next/server";
import { getPosts } from "../../get-posts";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function GET() {
  return NextResponse.json(await getPosts());
}
