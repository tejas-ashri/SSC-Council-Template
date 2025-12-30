"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Footer from "@/components/footer"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function GalleryPage() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  // Sample images - replace with actual gallery images
  const galleryImages = [
    {
      src: "/placeholder.jpg",
      alt: "SSC Event 1",
      title: "Community Outreach Program",
    },
    {
      src: "/placeholder.jpg",
      alt: "SSC Event 2",
      title: "Health Awareness Camp",
    },
    {
      src: "/placeholder.jpg",
      alt: "SSC Event 3",
      title: "Jagriti Festival Celebration",
    },
    {
      src: "/placeholder.jpg",
      alt: "SSC Event 4",
      title: "Workshop Session",
    },
    {
      src: "/placeholder.jpg",
      alt: "SSC Event 5",
      title: "Cultural Performance",
    },
    {
      src: "/placeholder.jpg",
      alt: "SSC Event 6",
      title: "Volunteer Activity",
    },
    {
      src: "/placeholder.jpg",
      alt: "SSC Event 7",
      title: "Awareness Campaign",
    },
    {
      src: "/placeholder.jpg",
      alt: "SSC Event 8",
      title: "Community Engagement",
    },
  ]

  return (
    <div className="min-h-screen bg-white/90 backdrop-blur-sm">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-blue-50 to-orange-50 py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">Gallery</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
              Our
              <span className="text-orange-600"> Gallery</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore moments from our events, programs, and community initiatives. These images capture the spirit 
              of service, collaboration, and positive change that defines the Social Service Council.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                        <CardContent className="flex aspect-square items-center justify-center p-0 relative group">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                              <h3 className="font-semibold text-lg">{image.title}</h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Additional Gallery Grid */}
      <section className="bg-gray-50 py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">More Moments</h2>
            <p className="text-lg text-gray-600">
              A collection of memorable moments from our various initiatives and events.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden group">
                <CardContent className="p-0 aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

