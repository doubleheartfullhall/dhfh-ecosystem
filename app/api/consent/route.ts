import { NextResponse } from "next/server";

import { recordConsent } from "@/lib/auth/memoryClient";

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const { type, version, granted } = body ?? {};

    if (typeof type !== "string" || typeof version !== "string" || typeof granted !== "boolean") {
      return NextResponse.json({ error: "Invalid consent payload" }, { status: 400 });
    }

    recordConsent({ type, version, granted });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to record consent", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
