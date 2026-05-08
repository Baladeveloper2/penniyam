"use client";

import { AuthProviderWrapper } from "./AuthContext";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthProviderWrapper>{children}</AuthProviderWrapper>;
}
