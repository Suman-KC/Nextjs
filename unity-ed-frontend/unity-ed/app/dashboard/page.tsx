"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardRedirectPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.replace("/login");
      return;
    }

    const role = (session as any)?.user?.role;

    if (role === "ADMIN") {
      router.replace("/dashboard/admin");
    } else if (role === "TEACHER") {
      router.replace("/dashboard/teacher");
    } else {
      router.replace("/");
    }
  }, [status, session, router]);

  return null;
}
