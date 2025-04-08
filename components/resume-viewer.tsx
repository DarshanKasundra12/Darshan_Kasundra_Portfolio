"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ResumeViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(1)
  const totalPages = 2

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const zoomIn = () => {
    if (zoom < 2) {
      setZoom(zoom + 0.1)
    }
  }

  const zoomOut = () => {
    if (zoom > 0.5) {
      setZoom(zoom - 0.1)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={zoomOut} disabled={zoom <= 0.5}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm">{Math.round(zoom * 100)}%</span>
          <Button variant="outline" size="icon" onClick={zoomIn} disabled={zoom >= 2}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        className="border rounded-md overflow-hidden bg-white dark:bg-zinc-900 w-full"
        style={{
          height: "600px",
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
          transition: "transform 0.2s ease",
        }}
      >
        {currentPage === 1 ? (
          <div className="p-8 h-full">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-2xl font-bold">Your Name</h2>
              <p className="text-muted-foreground">Frontend Developer & UI/UX Designer</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Senior Frontend Developer</h4>
                      <p className="text-sm text-muted-foreground">Ghibli Tech Solutions • 2020 - Present</p>
                      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li>Led development of interactive web applications</li>
                        <li>Implemented responsive designs</li>
                        <li>Optimized performance for high-traffic sites</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">UI/UX Designer</h4>
                      <p className="text-sm text-muted-foreground">Totoro Designs • 2018 - 2020</p>
                      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li>Created user-centered designs</li>
                        <li>Collaborated with development teams</li>
                        <li>Conducted user research and testing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Education</h3>
                  <div>
                    <h4 className="font-medium">Bachelor of Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University of Technology • 2014 - 2018</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact</h3>
                  <div className="text-sm space-y-1">
                    <p>email@example.com</p>
                    <p>(123) 456-7890</p>
                    <p>City, Country</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-muted px-2 py-1 rounded-md text-xs">React</span>
                    <span className="bg-muted px-2 py-1 rounded-md text-xs">Next.js</span>
                    <span className="bg-muted px-2 py-1 rounded-md text-xs">TypeScript</span>
                    <span className="bg-muted px-2 py-1 rounded-md text-xs">Tailwind CSS</span>
                    <span className="bg-muted px-2 py-1 rounded-md text-xs">UI/UX Design</span>
                    <span className="bg-muted px-2 py-1 rounded-md text-xs">Figma</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Languages</h3>
                  <div className="text-sm space-y-1">
                    <p>English (Native)</p>
                    <p>Japanese (Intermediate)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 h-full">
            <h2 className="text-2xl font-bold mb-6">Projects & Certificates</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Projects</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Ghibli Fan Site</h4>
                    <p className="text-sm text-muted-foreground">A tribute to Studio Ghibli films</p>
                    <p className="text-sm mt-1">
                      Built with Next.js and Tailwind CSS, featuring a collection of Ghibli films and characters.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">E-Commerce Platform</h4>
                    <p className="text-sm text-muted-foreground">Online store for anime merchandise</p>
                    <p className="text-sm mt-1">
                      Full-stack e-commerce solution with payment processing and inventory management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Weather App</h4>
                    <p className="text-sm text-muted-foreground">Real-time weather information</p>
                    <p className="text-sm mt-1">
                      Weather application with beautiful Ghibli-inspired UI that changes based on weather conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Certificates</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Frontend Web Development</h4>
                    <p className="text-sm text-muted-foreground">Udemy • 2022</p>
                  </div>
                  <div>
                    <h4 className="font-medium">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground">Google • 2021</p>
                  </div>
                  <div>
                    <h4 className="font-medium">React Advanced</h4>
                    <p className="text-sm text-muted-foreground">Meta • 2023</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">References</h3>
                <p className="text-sm">Available upon request</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
