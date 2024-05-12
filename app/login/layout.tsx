import StarsCanvas from "@/components/main/StarsBackground";
import "./../globals.css";

export const metadata = {
  title: "Login page",
  description: "Tanvir login page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          
      <body className=" bg-[#111] overflow-y-scroll overflow-x-hidden">{children}</body>
    </html>
  );
}
