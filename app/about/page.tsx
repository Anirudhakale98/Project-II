import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're on a mission to transform how businesses visualize and interact with their data.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Team working together"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
              <p className="text-muted-foreground md:text-lg">
                To create a world where every business, regardless of size, has access to powerful data visualization
                tools that drive growth and innovation.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-muted-foreground md:text-lg">
                We're dedicated to developing intuitive, secure, and scalable cloud dashboard solutions that transform
                complex data into actionable insights, empowering businesses to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
            </div>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground md:text-lg">
            <p>
              Founded in 2018, our company began with a simple observation: businesses were drowning in data but
              starving for insights. Our founders, experienced data scientists and software engineers, set out to solve
              this problem.
            </p>
            <p>
              What started as a small project to help local businesses visualize their data has grown into a
              comprehensive cloud dashboard platform serving clients worldwide. Our journey has been driven by a passion
              for making data accessible and actionable.
            </p>
            <p>
              Today, we're proud to serve thousands of businesses across various industries, helping them harness the
              power of their data through intuitive and powerful dashboard solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The passionate individuals behind our cloud dashboard solutions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember name="Alex Johnson" role="CEO & Co-Founder" image="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Sarah Chen" role="CTO & Co-Founder" image="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Michael Rodriguez" role="Head of Product" image="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Emily Patel" role="Lead Designer" image="/placeholder.svg?height=300&width=300" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What sets our cloud dashboard solution apart from the competition
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Security First</h3>
                  <p className="text-muted-foreground">
                    Enterprise-grade security with end-to-end encryption, compliance certifications, and regular
                    security audits to protect your sensitive data.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Exceptional Support</h3>
                  <p className="text-muted-foreground">
                    Dedicated customer success team available 24/7 to help you get the most out of your dashboard
                    solution.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Continuous Innovation</h3>
                  <p className="text-muted-foreground">
                    Regular updates and new features based on customer feedback and industry trends to keep your
                    dashboard solution cutting-edge.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Growing Community</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how our cloud dashboard solution can transform your business today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

