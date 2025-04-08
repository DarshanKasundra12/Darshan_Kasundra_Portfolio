import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Ghibli Logo"
            width={40}
            height={40}
            className="rounded-full"
            style={{ backgroundColor: "transparent" }}
          />
          <h1 className="text-2xl font-bold">Darshan Kasundra</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* <nav className="hidden md:flex gap-6">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#certificates" className="hover:text-primary transition-colors">Certificates</Link>
          </nav> */}
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hello, I'm <span className="text-primary">Darshan Kaundra</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated IT student Chandu Bhai S Patel Institute of Technology
              with hands-on experience in MERN. Interned BITSINFOTECH, enhancing
              skills in website development.
            </p>
            <div className="flex gap-4">
              <a
                href="/Darshan_Kasundra-Resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
              <a
                href="https://github.com/DarshanKasundra12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/logo.png"
              alt="Ghibli-inspired profile"
              width={400}
              height={400}
              className="rounded-full border-4 border-primary/20"
              priority
            />
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>MERN Stack Developer</CardTitle>
                <CardDescription>Bits Infotech • May-2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Built and optimized full-stack web applications using the MERN
                  stack. Designed responsive UIs with React and resolved
                  software bugs to ensure smooth functionality.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Express</Badge>
              </CardFooter>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle>UI/UX Designer</CardTitle>
                <CardDescription>Totoro Designs • 2018 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Created user-centered designs for web and mobile applications. Collaborated with development teams to
                  implement designs.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Badge>Figma</Badge>
                <Badge>UI/UX</Badge>
                <Badge>Prototyping</Badge>
              </CardFooter>
            </Card> */}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Ghibli Fan Site */}
            <Card>
              <CardHeader>
                <CardTitle>PG Scout</CardTitle>
                <CardDescription>
                  Your smart companion for finding the perfect place to stay
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Ghibli Fan Site"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground">
                  Built PG Scout, a full-stack platform using MERN and Firebase
                  Cloud to list, sell, and connect with PG owners. Integrated
                  responsive UI with features like property posting, contact
                  system, and price estimation for seamless user experience.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/DarshanKasundra12/PG-Scout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href="https://github.com/DarshanKasundra12/PG-Scout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* E-Commerce Platform */}
            <Card>
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>
                  Online store for anime merchandise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="E-Commerce Platform"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground">
                  Full-stack e-commerce solution with payment processing and
                  inventory management.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/DarshanKasundra12/E-Commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href="https://anime-store-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Weather App */}
            <Card>
              <CardHeader>
                <CardTitle>Weather App</CardTitle>
                <CardDescription>Real-time weather information</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Weather App"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground">
                  Weather application with beautiful Ghibli-inspired UI that
                  changes based on weather conditions.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/yourusername/ghibli-weather-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href="https://ghibli-weather.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Certificates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
          <Card>
              <CardHeader>
                <CardTitle>Responsive Web Design</CardTitle>
                <CardDescription>FreeCodeCamp • February 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/FreeCodeCamp-WebDesign.png?height=200&width=300"
                  alt="Web Design Certificate"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
              </CardContent>
              <CardFooter>
                <a
                  href="https://www.freecodecamp.org/certification/DarshanKasundra/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                  </Button>
                </a>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Ethical Hacking </CardTitle>
                <CardDescription>NPTEL • October 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/NPTEL-EH.png?height=200&width=300"
                  alt="Ethical Hacking"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
              </CardContent>
              <CardFooter>
                <a
                  href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S45730049603986208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operating System </CardTitle>
                <CardDescription>NPTEL • October 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/NPTEL-OS.png?height=200&width=300"
                  alt="Operating System Fundamentals"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
              </CardContent>
              <CardFooter>
                <a
                  href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS108S55730028203986208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>JavaScript</CardTitle>
                <CardDescription>Udemy • July 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/JavaScript.png?height=200&width=300"
                  alt="JavaScript Certificate"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
              </CardContent>
              <CardFooter>
                <a
                  href="https://www.udemy.com/certificate/UC-de952f15-db7d-4900-b81d-9aa31dbfed29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>Google • February 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/UIUX-Google.png?height=200&width=300"
                  alt="UI/UX Certificate"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
              </CardContent>
              <CardFooter>
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/JZP2NZY39ZAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>JAVA</CardTitle>
                <CardDescription>HackerRank • October 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/HackerRank-JAVA.png?height=200&width=300"
                  alt="JAVA Certificate"
                  width={300}
                  height={200}
                  className="rounded-md mb-4 w-full object-cover"
                />
              </CardContent>
              <CardFooter>
                <a
                  href="https://www.hackerrank.com/certificates/iframe/69dcb3409a72"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Resume</h2>
          <div className="flex flex-col items-center">
            <Tabs defaultValue="preview" className="w-full max-w-3xl">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="download">Download</TabsTrigger>
              </TabsList>

              {/* Resume Preview */}
              <TabsContent
                value="preview"
                className="border rounded-lg p-4 mt-4"
              >
                <div className="w-full h-[800px]">
                  <iframe
                    src="/Darshan_Kasundra-Resume.pdf"
                    className="w-full h-full rounded-lg border"
                    title="Resume Preview"
                  ></iframe>
                </div>
              </TabsContent>

              {/* Resume Download */}
              <TabsContent
                value="download"
                className="border rounded-lg p-8 mt-4 text-center"
              >
                <h3 className="text-xl font-medium mb-4">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a copy of my resume in your preferred format
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/Darshan_Kasundra-Resume.pdf" download>
                    <Button>
                      <Download className="mr-2 h-4 w-4" /> PDF Format
                    </Button>
                  </a>
                  {/* Add Word version later if needed */}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/logo.png"
            alt="Ghibli Logo"
            width={60}
            height={60}
            className="mx-auto mb-4 rounded-full"
            style={{ backgroundColor: "transparent" }}
          />
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Darshan Kasundra. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="https://github.com/DarshanKasundra12" className="text-muted-foreground hover:text-primary">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/darshan-kasundra-4961a32b4/" className="text-muted-foreground hover:text-primary">
              LinkedIn
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=darshankasundra0@gmail.com
" className="text-muted-foreground hover:text-primary">
            darshankasundra0@gmail.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
