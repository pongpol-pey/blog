import { NextResponse } from "next/server";
import { getPosts } from "../../get-posts";

export const runtime = 'edge';
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await getPosts());
}
