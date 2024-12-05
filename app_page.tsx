'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Truck, Package, BarChart, Clock, Star, Mail, Lock, User, Map, HelpCircle, LogOut, ArrowLeft } from 'lucide-react'

export default function LogisticsSolution() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setCurrentPage('dashboard')
    }, 2000)
  }

  const handleLogout = () => {
    setCurrentPage('landing')
  }

  const handleSupportSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setFormSubmitted(true)
  }

  if (currentPage === 'landing') {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <div className="flex items-center justify-center">
            <Truck className="h-6 w-6" />
            <span className="sr-only">KBK Logistics</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Button variant="ghost" className="text-sm font-medium">Services</Button>
            <Button variant="ghost" className="text-sm font-medium">About</Button>
            <Button variant="ghost" className="text-sm font-medium">Contact</Button>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Streamline Your Business Logistics
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                    Efficient, reliable, and cost-effective logistics solutions tailored for your business needs.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button className="bg-white text-black hover:bg-gray-200" onClick={() => setCurrentPage('login')}>Get Started</Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More</span>
                    <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">?</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <Card>
                  <CardHeader>
                    <Package className="h-10 w-10 mb-4" />
                    <CardTitle>Efficient Shipping</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our advanced logistics network ensures your packages reach their destination quickly and safely.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <BarChart className="h-10 w-10 mb-4" />
                    <CardTitle>Real-time Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Track your shipments in real-time with our state-of-the-art tracking system.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Clock className="h-10 w-10 mb-4" />
                    <CardTitle>On-Time Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We pride ourselves on our punctuality. Your packages will arrive when promised.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What Our Clients Say</h2>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                    </div>
                    <p className="mt-4">"KBK Logistics has transformed our supply chain. Their efficient service and real-time tracking have significantly improved our operations."</p>
                    <p className="mt-2 font-semibold">- John Doe, CEO of TechCorp</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                    </div>
                    <p className="mt-4">"We've been using KBK Logistics for over a year now, and their service has been nothing short of excellent. Highly recommended!"</p>
                    <p className="mt-2 font-semibold">- Jane Smith, Logistics Manager at MegaCorp</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2024 KBK Logistics. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Button variant="link" className="text-xs">Terms of Service</Button>
            <Button variant="link" className="text-xs">Privacy</Button>
          </nav>
        </footer>
      </div>
    )
  }

  if (currentPage === 'login') {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <div className="flex items-center justify-center">
            <Truck className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">KBK Logistics</span>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Enter your email to sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="m@example.com" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" required type="password" />
                      </div>
                      <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Signing in...
                          </>
                        ) : (
                          <>
                            <Mail className="mr-2 h-4 w-4" /> Sign In with Email
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                <TabsContent value="register">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="new-email">Email</Label>
                        <Input id="new-email" placeholder="m@example.com" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Password</Label>
                        <Input id="new-password" required type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" required type="password" />
                      </div>
                      <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Creating account...
                          </>
                        ) : (
                          <>
                            <User className="mr-2 h-4 w-4" /> Create Account
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
              <div className="mt-4 text-center text-sm">
                <Button variant="link" className="text-muted-foreground">
                  Forgot password?
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-center text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Button variant="link" className="text-xs">
                  Terms of Service
                </Button>{" "}
                and{" "}
                <Button variant="link" className="text-xs">
                  Privacy Policy
                </Button>
                .
              </p>
            </CardFooter>
          </Card>
        </main>
      </div>
    )
  }

  if (currentPage === 'dashboard') {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
          <div className="flex items-center justify-center">
            <Truck className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">KBK Logistics</span>
          </div>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <Button variant="ghost" className="text-sm font-medium" onClick={() => 

 setActiveTab('dashboard')}>
              Dashboard
            </Button>
            <Button variant="ghost" className="text-sm font-medium" onClick={() => setActiveTab('book')}>
              Book Shipment
            </Button>
            <Button variant="ghost" className="text-sm font-medium" onClick={() => setActiveTab('track')}>
              Track
            </Button>
            <Button variant="ghost" className="text-sm font-medium" onClick={() => setActiveTab('history')}>
              History
            </Button>
            <Button variant="ghost" className="text-sm font-medium" onClick={() => setActiveTab('support')}>
              Support
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
          </nav>
        </header>
        <main className="flex-1 py-6 px-4 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsContent value="dashboard" className="space-y-4">
              <h2 className="text-2xl font-bold">Welcome, User!</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Shipments</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">In Transit</CardTitle>
                    <Truck className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">2 arriving today</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Delivered</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">21</div>
                    <p className="text-xs text-muted-foreground">+5 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                    <p className="text-xs text-muted-foreground">1 open ticket</p>
                  </CardContent>
                </Card>
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-4">Recent Shipments</h3>
              <Card>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 'SH001', status: 'In Transit', destination: 'New York, NY', date: '2023-06-15' },
                      { id: 'SH002', status: 'Delivered', destination: 'Los Angeles, CA', date: '2023-06-12' },
                      { id: 'SH003', status: 'Processing', destination: 'Chicago, IL', date: '2023-06-18' },
                    ].map((shipment) => (
                      <div key={shipment.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{shipment.id}</p>
                          <p className="text-sm text-muted-foreground">{shipment.destination}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{shipment.status}</p>
                          <p className="text-sm text-muted-foreground">{shipment.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="book">
              <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                  <div className="flex items-center">
                    <Button variant="ghost" size="icon" onClick={() => setActiveTab('dashboard')} className="mr-2">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <div>
                      <CardTitle>Book a Shipment</CardTitle>
                      <CardDescription>Fill in the details to schedule a new shipment.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="pickup">Pickup Address</Label>
                        <Input id="pickup" placeholder="Enter pickup address" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="destination">Destination Address</Label>
                        <Input id="destination" placeholder="Enter destination address" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="date">Pickup Date</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="type">Shipment Type</Label>
                        <Select>
                          <SelectTrigger id="type">
                            <SelectValue placeholder="Select shipment type" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="express">Express</SelectItem>
                            <SelectItem value="overnight">Overnight</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="weight">Package Weight (kg)</Label>
                        <Input id="weight" type="number" placeholder="Enter package weight" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="notes">Special Instructions</Label>
                        <Textarea id="notes" placeholder="Enter any special instructions or notes" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab('dashboard')}>Cancel</Button>
                  <Button>Book Shipment</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="track">
              <div className="space-y-6">
                <Card className="w-full max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Track Your Shipment</CardTitle>
                    <CardDescription>Enter your tracking number to see real-time updates.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="flex space-x-2">
                      <div className="flex-1">
                        <Label htmlFor="tracking-number" className="sr-only">
                          Tracking Number
                        </Label>
                        <Input id="tracking-number" placeholder="Enter tracking number" />
                      </div>
                      <Button type="submit">Track</Button>
                    </form>
                  </CardContent>
                </Card>
                <Card className="w-full max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Shipment Status</CardTitle>
                    <CardDescription>Tracking Number: SH001</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Current Location:</span>
                        <span>Chicago, IL</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Estimated Delivery:</span>
                        <span>June 18, 2023</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Status:</span>
                        <span className="text-green-600 font-medium">In Transit</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Shipment Progress</h4>
                      <div className="space-y-2">
                        {[
                          { date: "June 15, 2023", time: "10:00 AM", event: "Package picked up", location: "New York, NY" },
                          { date: "June 16, 2023", time: "2:00 PM", event: "Package arrived at sort facility", location: "Philadelphia, PA" },
                          { date: "June 17, 2023", time: "9:00 AM", event: "Package departed", location: "Philadelphia, PA" },
                          { date: "June 17, 2023", time: "8:00 PM", event: "Package arrived at destination", location: "Chicago, IL" },
                        ].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mr-2" />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{step.event}</p>
                              <p className="text-xs text-muted-foreground">{`${step.date} ${step.time} - ${step.location}`}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Shipment Location</CardTitle>
                    <CardDescription>Current location of your package</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-64 bg-muted rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Map Placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View details of your past deliveries</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { id: "SH001", date: "2023-06-15", destination: "New York, NY", status: "Delivered", total: "$250.00" },
                        { id: "SH002", date: "2023-06-12", destination: "Los Angeles, CA", status: "In Transit", total: "$180.00" },
                        { id: "SH003", date: "2023-06-10", destination: "Chicago, IL", status: "Delivered", total: "$200.00" },
                        { id: "SH004", date: "2023-06-08", destination: "Houston, TX", status: "Delivered", total: "$150.00" },
                        { id: "SH005", date: "2023-06-05", destination: "Phoenix, AZ", status: "Delivered", total: "$220.00" },
                      ].map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.destination}</TableCell>
                          <TableCell>{order.status}</TableCell>
                          <TableCell>{order.total}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="support">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Find quick answers to common questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How do I track my shipment?</AccordionTrigger>
                        <AccordionContent>
                          You can track your shipment by entering your tracking number on our tracking page. The tracking number is provided in your shipping confirmation email.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What shipping options are available?</AccordionTrigger>
                        <AccordionContent>
                          We offer standard, express, and overnight shipping options. The availability of these options may vary depending on your location and the destination of your shipment.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>How do I change my shipping address?</AccordionTrigger>
                        <AccordionContent>
                          To change your shipping address, please contact our customer support team as soon as possible. We'll do our best to update the address if the shipment hasn't been dispatched yet.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>What should I do if my package is damaged?</AccordionTrigger>
                        <AccordionContent>
                          If your package arrives damaged, please take photos of the damage and contact our customer support team immediately. We'll guide you through the process of filing a claim and finding a resolution.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Support</CardTitle>
                    <CardDescription>Get in touch with our customer support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSupportSubmit}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" placeholder="Your email" required type="email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select>
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectItem value="shipping">Shipping Inquiry</SelectItem>
                              <SelectItem value="returns">Returns</SelectItem>
                              <SelectItem value="billing">Billing Issue</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Your message" required />
                        </div>
                        <Button type="submit">Submit</Button>
                      </div>
                    </form>
                    {formSubmitted && (
                      <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                        Thank you for your message. Our support team will get back to you shortly.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    )
  }
}