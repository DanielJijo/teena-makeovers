import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Sparkles, Palette, Camera, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import DockNavigation from "./components/DockNavigation"
import MouseTracker from "./components/mouse-tracker"
import SectionAnimator from "./components/SectionAnimator"
import ButterflyEffect from "./components/ButterflyEffect"

export default function TeenaMakeovers() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <h1 className="text-2xl font-bold text-yellow-400">
              Teena Makeovers
            </h1>
          </div>
          <nav className="hidden md:hidden items-center space-x-8">
            <Link href="#home" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="#services" className="hover:text-yellow-400 transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="hover:text-yellow-400 transition-colors">
              Gallery
            </Link>
            <Link href="#about" className="hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Book Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <SectionAnimator>
        <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Transform Your
                  Beauty Story
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Discover your most radiant self with our expert makeover services. From bridal transformations to
                  special occasions, we create looks that captivate and inspire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-4">
                    Book Your Makeover
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4"
                    asChild
                  >
                    <Link href="https://www.instagram.com/teena_makeovers__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Instagram className="h-5 w-5" />
                      Follow on Instagram
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-3xl blur-3xl"></div>
                <Image
                  src="/hero-image.jpg"
                  alt="Professional Makeover"
                  width={500}
                  height={600}
                  className="relative z-10 rounded-3xl shadow-2xl group-hover:scale-105 group-hover:shadow-glow group-hover:-translate-y-2 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionAnimator>
      <ButterflyEffect />

      {/* Services Section */}
      <SectionAnimator delay={100}>
        <section id="services" className="py-20 bg-gray-900/50 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Our Signature Services</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Expert makeover services tailored to enhance your natural beauty and boost your confidence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="h-12 w-12 text-yellow-400" />,
                  title: "Bridal Makeover",
                  description:
                    "Complete bridal transformation including makeup, hair styling, and pre-wedding consultation",
                  price: "Starting from ₹5,000",
                },
                {
                  icon: <Palette className="h-12 w-12 text-yellow-400" />,
                  title: "Party Makeover",
                  description: "Glamorous looks for special occasions, parties, and celebrations",
                  price: "Starting from ₹15,000",
                },
                {
                  icon: <Camera className="h-12 w-12 text-yellow-400" />,
                  title: "Photoshoot Ready",
                  description: "Professional makeup and styling for photoshoots and portfolio sessions",
                  price: "Starting from ₹4,000",
                },
                {
                  icon: <Users className="h-12 w-12 text-yellow-400" />,
                  title: "Group Bookings",
                  description: "Special packages for bridesmaids, family functions, and group events",
                  price: "Starting from ₹15,000",
                },
                {
                  icon: <Star className="h-12 w-12 text-yellow-400" />,
                  title: "Hair Do",
                  description: "Professional hair styling for any occasion",
                  price: "Starting from ₹2,500",
                },
                {
                  icon: <Sparkles className="h-12 w-12 text-yellow-400" />,
                  title: "Makeover Consultation",
                  description: "Personal consultation to find your perfect style and color palette",
                  price: "Starting from ₹2,000",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-black/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">{service.title}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <div className="text-yellow-400 font-semibold text-lg mb-4">{service.price}</div>
                    <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Book Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimator>

      {/* Gallery Section */}
      <SectionAnimator delay={200}>
        <section id="gallery" className="py-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Transformation Gallery</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Witness the magic of our makeovers through these stunning before and after transformations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  src: "/gallery-bridal-1.jpg",
                  title: "Bridal Transformation",
                  description: "Complete bridal makeover with traditional styling"
                },
                {
                  src: "/gallery-bridal-2.jpg",
                  title: "Bridal Look",
                  description: "Elegant bridal styling and makeup"
                },
                {
                  src: "/gallery-party-1.jpg",
                  title: "Party Makeover",
                  description: "Glamorous party look transformation"
                },
                {
                  src: "/gallery-party-2.jpg",
                  title: "Nail do",
                  description: "Stunning nail art and styling"
                },
                {
                  src: "/gallery-photoshoot-1.jpg",
                  title: "Hair do",
                  description: "Professional hair styling transformation"
                },
                {
                  src: "/gallery-photoshoot-2.jpg",
                  title: "Model shoot",
                  description: "Magazine-style photoshoot makeover"
                }
              ].map((item, i) => (
                <Card
                  key={i}
                  className="bg-black/50 border-gray-800 overflow-hidden group hover:border-yellow-400/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 relative z-0 hover:z-10"
                >
                  <div className="relative">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={400}
                      height={400}
                      className={`w-full object-cover aspect-square group-hover:scale-105 group-hover:blur transition-transform duration-300 ${item.src === '/gallery-photoshoot-2.jpg' ? 'object-top' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimator>

      {/* About Section */}
      <SectionAnimator delay={300}>
        <section id="about" className="py-20 bg-gray-900/50 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <Image
                  src="/teena-profile.jpg"
                  alt="Teena - Professional Makeup Artist"
                  width={700}
                  height={700}
                  className="rounded-3xl shadow-2xl group-hover:scale-105 group-hover:shadow-glow group-hover:-translate-y-2 transition-all duration-300"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-2xl">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-bold">Meet Teena</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  With over 5 years of experience in the beauty industry, Teena has transformed hundreds of clients,
                  helping them discover their most confident and radiant selves.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Specializing in bridal makeovers, party looks, and photoshoot styling, Teena combines technical
                  expertise with an artistic eye to create looks that are both timeless and contemporary. Her passion for
                  beauty and dedication to client satisfaction has made her one of the most sought-after makeup artists in
                  the region.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-black/50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-400">500+</div>
                    <div className="text-sm text-gray-300">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-400">200+</div>
                    <div className="text-sm text-gray-300">Bridal Makeovers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionAnimator>

      {/* Testimonials Section */}
      <SectionAnimator delay={400}>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">What Our Clients Say</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Read the experiences of our satisfied clients who trusted us with their special moments
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  role: "Bride",
                  content:
                    "Teena made my wedding day absolutely perfect! Her attention to detail and artistic vision exceeded all my expectations. I felt like a princess!",
                  rating: 5,
                },
                {
                  name: "Anita Patel",
                  role: "Party Client",
                  content:
                    "Amazing transformation for my anniversary party. Teena understood exactly what I wanted and delivered beyond my dreams. Highly recommended!",
                  rating: 5,
                },
                {
                  name: "Kavya Reddy",
                  role: "Photoshoot Client",
                  content:
                    "Professional, talented, and so easy to work with. The makeup looked flawless in photos and lasted the entire shoot. Will definitely book again!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-black/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimator>

      {/* Contact Section */}
      <SectionAnimator delay={500}>
        <section id="contact" className="py-20 bg-gray-900/50 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to transform your look? Contact us to book your appointment or discuss your makeover needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold mb-4">Contact Details</h4>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="h-6 w-6 text-yellow-400" />
                  <span>+91 97872 82323</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="h-6 w-6 text-yellow-400" />
                  <span>hello@teenamakeovers.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                  <span>Sowripalayam <br /> Coimbatore, Tamil Nadu</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 mt-8">Follow Us</h4>
                <div className="flex space-x-6">
                  <Link href="https://www.instagram.com/teena_makeovers__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="text-gray-300 hover:text-yellow-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-8 w-8" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4 bg-black/50 p-8 rounded-xl border border-gray-800">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                    <Input placeholder="Last Name" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                  </div>
                  <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                  <Input type="tel" placeholder="Phone" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                  <Input placeholder="Service Interested In" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                  <Textarea placeholder="Message" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-32" />
                  <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </SectionAnimator>

      {/* Footer */}
      <footer className="py-12 bg-black/50 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-yellow-400" />
                <h4 className="text-xl font-bold">Teena Makeovers</h4>
              </div>
              <p className="text-gray-300">
                Transforming beauty, one makeover at a time. Your confidence is our masterpiece.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <nav className="space-y-2">
                <Link href="#services" className="block text-gray-300 hover:text-yellow-400">
                  Bridal Makeover
                </Link>
                <Link href="#services" className="block text-gray-300 hover:text-yellow-400">
                  Party Makeover
                </Link>
                <Link href="#services" className="block text-gray-300 hover:text-yellow-400">
                  Photoshoot Ready
                </Link>
                <Link href="#services" className="block text-gray-300 hover:text-yellow-400">
                  Group Bookings
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="space-y-2">
                <Link href="#about" className="block text-gray-300 hover:text-yellow-400">
                  About Us
                </Link>
                <Link href="#gallery" className="block text-gray-300 hover:text-yellow-400">
                  Portfolio
                </Link>
                <Link href="#contact" className="block text-gray-300 hover:text-yellow-400">
                  Contact
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-yellow-400">
                  Booking Policy
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/teena_makeovers__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="text-gray-300 hover:text-yellow-400">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2024 Teena Makeovers. All rights reserved. Crafted with ❤️ for beauty enthusiasts.
          </div>
        </div>
      </footer>

      <DockNavigation />
    </div>
  )
}
