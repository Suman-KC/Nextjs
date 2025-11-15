
import SessionProviderWrapper from "../providers/SessionProviderWrapper";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <SessionProviderWrapper>
        {/* ✅ Wrap your entire app in AuthProvider */}
         {children} 
    </SessionProviderWrapper>
  );
}
