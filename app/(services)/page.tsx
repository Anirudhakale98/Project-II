import Link from "next/link"
import { ArrowRight, BarChart3, Cloud, Database, Globe, Lock, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive cloud dashboard solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="analytics" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>
            <TabsContent value="analytics" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-6 w-6" />
                    Real-Time Data Analytics
                  </CardTitle>
                  <CardDescription>
                    Transform your raw data into actionable insights with our powerful analytics tools
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Features</h3>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Real-time data processing</li>
                        <li>Advanced filtering and segmentation</li>
                        <li>Predictive analytics</li>
                        <li>Anomaly detection</li>
                        <li>Custom metrics and KPIs</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Benefits</h3>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Make data-driven decisions faster</li>
                        <li>Identify trends and patterns</li>
                        <li>Optimize business processes</li>
                        <li>Increase operational efficiency</li>
                        <li>Improve forecasting accuracy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="Analytics Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dashboards" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-6 w-6" />
                    Customizable Cloud Dashboards
                  </CardTitle>
                  <CardDescription>
                    Build personalized dashboards that display the metrics that matter most to your business
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Features</h3>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Drag-and-drop interface</li>
                        <li>Customizable widgets and charts</li>
                        <li>Role-based access control</li>
                        <li>Shareable dashboards</li>
                        <li>Mobile-responsive design</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Benefits</h3>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Visualize complex data easily</li>
                        <li>Tailor views for different departments</li>
                        <li>Access insights from anywhere</li>
                        <li>Collaborate with team members</li>
                        <li>Reduce time spent on reporting</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="Customizable Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="infrastructure" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="mr-2 h-6 w-6" />
                    Secure and Scalable Infrastructure
                  </CardTitle>
                  <CardDescription>
                    Enterprise-grade security and scalability to support your growing business needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Features</h3>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>End-to-end encryption</li>
                        <li>Automatic backups</li>
                        <li>Disaster recovery</li>
                        <li>Compliance certifications</li>
                        <li>Horizontal scaling</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Benefits</h3>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Protect sensitive data</li>
                        <li>Meet regulatory requirements</li>
                        <li>Ensure business continuity</li>
                        <li>Handle growing data volumes</li>
                        <li>Maintain high performance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="Secure Infrastructure"
                      className="w-full h-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="integrations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-6 w-6" />
                    Integration with Popular Apps
                  </CardTitle>
                  <CardDescription>Connect your dashboard with the tools and services you already use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Features</h3>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Pre-built connectors</li>
                        <li>API access</li>
                        <li>Webhook support</li>
                        <li>Custom integration development</li>
                        <li>Data transformation tools</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Benefits</h3>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Centralize data from multiple sources</li>
                        <li>Automate data workflows</li>
                        <li>Eliminate manual data entry</li>
                        <li>Create a unified view of your business</li>
                        <li>Extend platform functionality</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="Integration Ecosystem"
                      className="w-full h-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Industries We Serve</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our cloud dashboard solutions are tailored to meet the unique needs of various industries
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track financial KPIs, monitor market trends, and analyze investment performance in real-time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Lock className="mr-2 h-5 w-5" />
                  Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Securely monitor patient data, optimize resource allocation, and improve operational efficiency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  E-commerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track sales performance, customer behavior, inventory levels, and marketing campaign effectiveness.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Cloud className="mr-2 h-5 w-5" />
                  Manufacturing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor production metrics, supply chain performance, equipment efficiency, and quality control.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track user engagement, system performance, development metrics, and service reliability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor student performance, resource utilization, enrollment trends, and institutional metrics.
                </p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our team to learn more about how our cloud dashboard solutions can help your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

