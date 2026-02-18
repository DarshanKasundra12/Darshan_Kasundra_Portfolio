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
    "Darshan Kasundra",
"Darshan Kasundra Portfolio",
"Darshan Kasundra Web Developer",
"Darshan Kasundra MERN Developer",
"Darshan Kasundra Full Stack Developer",
"Darshan Kasundra Freelancer",
"Darshan Kasundra Ahmedabad",
"Darshan Kasundra Gujarat",
"Darshan Kasundra Charusat",
"Darshan Kasundra Projects",

"Portfolio",
"Developer Portfolio",
"Web Developer Portfolio",
"Full Stack Portfolio",
"MERN Stack Portfolio",
"React Portfolio Website",
"Next.js Portfolio",
"Student Developer Portfolio",
"Modern Portfolio Website",
"Creative Portfolio Developer",

"Web Developer",
"Full Stack Developer",
"MERN Stack Developer",
"Frontend Developer",
"Backend Developer",
"Software Developer",
"JavaScript Developer",
"React.js Developer",
"Next.js Developer",
"Node.js Developer",
"Express.js Developer",
"MongoDB Developer",
"Firebase Developer",
"PHP Developer",
"MySQL Developer",
"HTML Developer",
"CSS Developer",
"Bootstrap Developer",
"Tailwind CSS Developer",
"REST API Developer",

"Freelance Web Developer",
"Freelance MERN Developer",
"Freelance React Developer",
"Freelance Full Stack Developer",
"Freelancer India",
"Remote Web Developer",
"Student Freelancer Developer",
"Part Time Web Developer",
"Startup Website Developer",
"Small Business Website Developer",

"Ahmedabad Web Developer",
"Vastral Web Developer",
"Nadiad Web Developer",
"Gujarat Web Developer",
"Freelancer in Ahmedabad",
"Freelancer in Nadiad",
"Local Web Developer Gujarat",
"Best Web Developer Ahmedabad",
"Hire Web Developer Ahmedabad",
"Website Developer Near Me",

"MERN Developer India",
"MERN Developer Gujarat",
"MERN Developer Ahmedabad",
"MERN Stack Freelancer",
"Hire MERN Developer",
"MERN Stack Projects",
"MERN Stack Ecommerce",
"MERN Stack Web App",
"MERN Stack Student",
"MERN Stack Fresher",

"React Node Developer",
"Full Stack JavaScript Developer",
"MongoDB Web Developer",
"Express Node Developer",
"Next.js Full Stack Developer",
"Frontend React Developer",
"Backend Node Developer",
"API Developer Node.js",
"Dynamic Website Developer",
"Static Website Developer",

"Ecommerce Website Developer",
"Portfolio Website Developer",
"Blog Website Developer",
"Booking System Developer",
"Admin Dashboard Developer",
"College Project Developer",
"Final Year Project Web Developer",
"Custom Web Application",
"Business Website Developer",
"Landing Page Developer",

"Responsive Website Developer",
"Mobile Friendly Website",
"SEO Friendly Website",
"Fast Loading Website",
"Modern UI Developer",
"Clean Code Developer",
"Professional Web Developer",
"Best Portfolio Developer",
"Creative Web Designer Developer",
"UI UX Friendly Website",

"HTML CSS JavaScript",
"React Node MongoDB",
"Next.js Firebase",
"PHP MySQL Website",
"Bootstrap Tailwind UI",
"JSON API Developer",
"Firebase Hosting",
"Vercel Deployment",
"Netlify Deployment",
"GitHub Projects Developer",

"PG Scout",
"PG Scout Project",
"PG Finder Website",
"Student Housing Website",
"Rental PG Web App",
"Location Based Web App",
"Map Integration Website",
"Search Filter Web App",
"User Login System",
"Admin Panel Website",

"Charusat Student Developer",
"Engineering Student Developer",
"Computer Science Student India",
"Young Web Developer India",
"Indian Programmer Student",
"Coding Portfolio India",
"Tech Student Gujarat",
"Developer From Ahmedabad",
"Programmer From Gujarat",
"Freelance Student Developer",

"Best MERN Developer in Ahmedabad",
"Hire Web Developer in Vastral",
"Freelance Developer in Nadiad",
"Cheap Website Developer Gujarat",
"Portfolio Web Developer India",
"Student Full Stack Developer India",
"React Developer Near Me",
"Local Freelancer Web Developer",
"Website Developer for Startup",
"Full Stack Developer Gujarat",

"Top Web Developer Ahmedabad",
"Best Freelancer Gujarat",
"Hire React Developer Ahmedabad",
"MERN Portfolio Developer India",
"Frontend Developer Ahmedabad",
"Backend Developer Gujarat",
"Node.js Developer India",
"MongoDB Developer India",
"Next.js Developer India",
"JavaScript Developer India",

"Personal Portfolio Website",
"Developer Resume Website",
"Online Portfolio India",
"GitHub Portfolio Developer",
"Project Showcase Website",
"Professional Portfolio India",
"Software Engineer Portfolio",
"Interactive Portfolio Website",
"Animated Portfolio Website",
"Minimal Portfolio Design",

"BGMI Player Darshan",
"Volleyball Player Darshan",
"Football Player Darshan",
"Gaming Developer India",
"Student Gamer Developer",
"Sports Lover Developer",
"Goa Trip Portfolio",
"Developer Lifestyle India",
"Coding Journey Darshan",
"Tech Content Creator India"
  ],
  metadataBase: new URL("https://darshankasundra12.vercel.app"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Darshan Kasundra | Full-Stack Developer",
    description: "Explore MERN stack projects, designs, and skills in Darshan's portfolio.",
    url: "https://darshankasundra12.vercel.app",
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
