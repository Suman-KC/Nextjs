// lib/authGuard.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Reusable authentication + role guard
export async function authGuard(
  req: NextRequest,
  allowedRoles?: string[] // e.g., ["ADMIN"], ["TEACHER"], etc
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      ),
    };
  }

  // If API requires role checking
  if (allowedRoles && !allowedRoles.includes(session.user.role)) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Forbidden: Insufficient role" },
        { status: 403 }
      ),
    };
  }

  return { ok: true, session };
}
