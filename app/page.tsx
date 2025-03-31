

import Link from "next/link"
import { ArrowRight, BarChart3, Cloud, Lock, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientLogos from "@/components/client-logos"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Real-Time Insights with Our Cloud Dashboards
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Powerful, customizable, and secure cloud dashboards for your business analytics needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/demo">View Live Demo</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Dashboard Preview"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="w-full py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-xl font-medium text-muted-foreground mb-8">
            Trusted by innovative companies worldwide
          </h2>
          <ClientLogos />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Your Business
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our cloud dashboard platform provides everything you need to visualize, analyze, and act on your data.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10" />}
              title="Real-Time Analytics"
              description="Monitor your metrics in real-time with automatic updates and instant insights."
            />
            <FeatureCard
              icon={<Settings className="h-10 w-10" />}
              title="Customizable Dashboards"
              description="Create personalized views with drag-and-drop widgets and custom visualizations."
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10" />}
              title="Enterprise Security"
              description="Bank-level encryption and compliance with industry security standards."
            />
            <FeatureCard
              icon={<Cloud className="h-10 w-10" />}
              title="Cloud Infrastructure"
              description="Scalable and reliable cloud hosting with 99.9% uptime guarantee."
            />
            <FeatureCard
              icon={<ArrowRight className="h-10 w-10" />}
              title="API Integrations"
              description="Connect with your favorite tools and services through our extensive API."
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10" />}
              title="Advanced Reporting"
              description="Generate comprehensive reports and export data in multiple formats."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our customers have to say about our cloud dashboard
                solution.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <TestimonialCard
              quote="The real-time analytics have transformed how we make decisions. We can now respond to market changes instantly."
              author="Sarah Johnson"
              company="TechCorp Inc."
            />
            <TestimonialCard
              quote="The customizable dashboards allow each department to focus on metrics that matter to them. Game changer!"
              author="Michael Chen"
              company="Global Solutions"
            />
            <TestimonialCard
              quote="Security was our main concern, and this platform exceeded our expectations with its robust protection measures."
              author="Emma Rodriguez"
              company="FinSecure Ltd."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Data Experience?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of businesses that have already upgraded their analytics capabilities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

