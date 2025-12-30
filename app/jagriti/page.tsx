import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Users, ArrowRight, Award, Target, Heart, Lightbulb, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function JagritiPage() {
  return (
    <div className="min-h-screen bg-white/90 backdrop-blur-sm">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-blue-50 to-orange-50 py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">Jagriti Festival</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
              Jagriti
              <span className="text-orange-600"> Festival</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Jagriti is the annual flagship festival of the Social Service Council, IIT (BHU) Varanasi. 
              It is a celebration of social awareness, cultural diversity, and community engagement that brings 
              together students, faculty, and the community to address pressing social issues through innovative 
              programs and activities.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6">
              <a href="https://jagritissc.in/" target="_blank" rel="noopener noreferrer">
                Know More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Jagriti */}
      <section className="py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">About Jagriti</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Jagriti, meaning "awakening" in Hindi, represents our commitment to awakening social consciousness 
                  and inspiring positive change. The festival serves as a platform for dialogue, learning, and action, 
                  bringing together diverse perspectives on social issues that matter to our community and beyond.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Through a series of workshops, cultural performances, competitions, and awareness campaigns, Jagriti 
                  aims to educate, engage, and empower participants to become active agents of social change. The festival 
                  celebrates the spirit of volunteerism and community service that lies at the heart of the Social Service Council.
                </p>
                <Button asChild className="bg-navy-600 hover:bg-navy-700">
                  <Link href="/contact">
                    Get Involved
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-xl bg-white p-4 shadow-2xl ring-1 ring-gray-900/10">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Jagriti Festival"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-100 mb-4">
                    <Target className="h-8 w-8 text-navy-600" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To create a platform that awakens social consciousness and inspires individuals to take action 
                    towards building a more equitable and compassionate society.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                    <Heart className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To organize an annual festival that promotes social awareness, cultural exchange, and community 
                    engagement through innovative programs, workshops, and activities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                    <Lightbulb className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Combining education with entertainment, awareness with action, and dialogue with demonstration 
                    to create meaningful impact and lasting change.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Highlights */}
      <section className="bg-gray-50 py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">Festival Highlights</h2>
            <p className="text-lg text-gray-600">
              Discover the diverse activities and programs that make Jagriti a unique celebration of social awareness.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <BookOpen className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-navy-900">Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Interactive sessions on social issues, leadership, and community development led by experts and practitioners.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 mb-4">
                  <Sparkles className="h-7 w-7 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-navy-900">Cultural Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Performances, competitions, and cultural showcases that celebrate diversity and promote social awareness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Users className="h-7 w-7 text-green-600" />
                </div>
                <CardTitle className="text-lg text-navy-900">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Direct interaction with communities through awareness campaigns, health camps, and service activities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 mb-4">
                  <Award className="h-7 w-7 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-navy-900">Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Engaging competitions that challenge participants to think creatively about social issues and solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Participation */}
      <section className="bg-navy-900 text-white py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Jagriti Impact</h2>
            <p className="text-lg text-gray-300">
              Celebrating the reach and impact of our annual festival.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-gray-300">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Events & Activities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">20+</div>
              <div className="text-gray-300">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">10+</div>
              <div className="text-gray-300">Years of Celebration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">Be Part of Jagriti</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in celebrating social awareness and making a difference. Whether you want to participate, 
              volunteer, or sponsor, there's a place for you in Jagriti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6">
                <a href="https://jagritissc.in/" target="_blank" rel="noopener noreferrer">
                  Know More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-navy-600 text-navy-600 hover:bg-navy-50 text-lg px-8 py-6"
              >
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

