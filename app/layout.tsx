import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darshan Kasundra | Full-Stack Developer Portfolio",
  description:
    "Explore Darshan Kasundra’s portfolio showcasing MERN stack projects, UI/UX designs, and certifications.",
  keywords: [
    "Darshan Kasundra",
    "Portfolio",
    "MERN Developer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Firebase",
    "PG Scout",
  ],
  metadataBase: new URL("https://darshankasundra.vercel.app"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Darshan Kasundra | Full-Stack Developer",
    description: "Explore MERN stack projects, designs, and skills in Darshan's portfolio.",
    url: "https://darshankasundra.vercel.app",
    siteName: "Darshan's Portfolio",
    images: [
      {
        url: "/og-image.png", // Replace with your OG image path
        width: 1200,
        height: 630,
        alt: "Darshan Kasundra Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshan Kasundra | Full-Stack Developer",
    description: "Explore MERN stack projects, UI/UX and more.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
