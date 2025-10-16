import { NextResponse } from "next/server";

import { claimCode } from "@/lib/auth/memoryClient";

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const code = typeof body?.code === "string" ? body.code.trim() : "";

    if (!code) {
      return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    const result = await claimCode(code);

    if (result.ok) {
      return NextResponse.json({ ok: true, world: result.world, stories: result.stories });
    }

    return NextResponse.json({ error: "Code could not be claimed" }, { status: 400 });
  } catch (error) {
    console.error("Failed to process claim", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
