'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Sparkles, Palette, Camera, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import emailjs from '@emailjs/browser'

export default function TeenaMakeovers() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white hover:text-yellow-400 transition-colors duration-300">
              Home
            </a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-white hover:text-yellow-400 transition-colors duration-300">
              Services
            </a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-white hover:text-yellow-400 transition-colors duration-300">
              Gallery
            </a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-yellow-400 transition-colors duration-300">
              About
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white hover:text-yellow-400 transition-colors duration-300">
              Contact
            </a>
          </nav>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Book Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block text-yellow-400">
                  Beauty Story
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transforming beauty, one makeover at a time. Your confidence is our masterpiece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-4">
                  Book Your Makeover
                </Button>
                <a 
                  href="https://www.instagram.com/teena_makeovers__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-yellow-400 text-white hover:bg-yellow-400 hover:text-black text-lg px-8 py-4 flex items-center gap-2"
                  >
                    <Instagram className="h-5 w-5 text-yellow-400 group-hover:text-black" />
                    <span>Follow on Instagram</span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-3xl blur-3xl"></div>
              <Image
                src="/hero-image.jpg"
                alt="Professional Makeover - Woman in Blue and White Saree"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl object-cover transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-yellow-400/20"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">Our Signature Services</h3>
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
                  <div className="text-white font-semibold text-lg mb-4">{service.price}</div>
                  <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
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
                src: '/gallery-bridal-1.jpg',
                title: 'Bridal Transformation',
                description: 'Complete bridal makeover with traditional styling',
                position: 'center'
              },
              {
                src: '/gallery-bridal-2.jpg',
                title: 'Bridal Elegance',
                description: 'Sophisticated bridal look with modern touches',
                position: 'center'
              },
              {
                src: '/gallery-party-1.jpg',
                title: 'Party Glam',
                description: 'Glamorous party makeup transformation',
                position: 'center'
              },
              {
                src: '/gallery-party-2.jpg',
                title: 'Nails Do',
                description: 'Stunning nail art and styling',
                position: 'center'
              },
              {
                src: '/gallery-photoshoot-1.jpg',
                title: 'Hair Do',
                description: 'Professional hair styling and treatment',
                position: 'center'
              },
              {
                src: '/gallery-photoshoot-2.jpg',
                title: 'Model Look',
                description: 'High-fashion photography makeup',
                position: 'top',
              }
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-black/50 border-gray-800 overflow-hidden group hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={900}
                    height={750}
                    className={`w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300 ${item.position === 'top' ? 'object-top' : `object-[center_${item.position}]`}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <Image
                src="/teena-profile.jpg"
                alt="Teena - Professional Makeup Artist in Blue and White Saree"
                width={600}
                height={800}
                className="rounded-3xl shadow-2xl object-cover h-[600px] w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 rounded-3xl transition-colors duration-500 ease-in-out group-hover:bg-yellow-400/10"></div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-2xl transition-all duration-500 ease-in-out group-hover:scale-110">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-white">Meet Teena</h3>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">What Our Clients Say</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real stories from our satisfied clients who trusted us with their special moments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                content:
                  "Teena did my bridal makeup and I couldn't have been happier! She understood exactly what I wanted and made me feel like a princess.",
                name: "Jincy Prince",
                role: "Bride",
              },
              {
                rating: 4,
                content:
                  "Professional, punctual, and perfect! The makeup lasted all day through the photoshoot. Highly recommend!",
                name: "Mercy Stephen",
                role: "Model",
              },
              {
                rating: 5,
                content:
                  "Amazing experience! Teena and her team did makeup for my entire family for a wedding. Everyone looked stunning!",
                name: "Janet Theresa",
                role: "Client",
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your look? Contact us to book your appointment or discuss your makeover needs
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-300">+91 97872 82323</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">hello@teenamakeovers.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-300">
                    Sowripalayam
                    <br />
                    Coimbatore, Tamil Nadu
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/teena_makeovers__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black w-10 h-10 flex items-center justify-center"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black w-10 h-10 flex items-center justify-center"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black w-10 h-10 flex items-center justify-center"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <Card className="bg-black/50 border-gray-800">
              <CardContent className="p-8">
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  
                  try {
                    // Initialize EmailJS with your public key
                    emailjs.init("YOUR_PUBLIC_KEY");
                    
                    const templateParams = {
                      from_name: form.firstName.value + " " + form.lastName.value,
                      from_email: form.email.value,
                      phone: form.phone.value,
                      service: form.service.value,
                      message: form.message.value,
                      to_email: "danieljijopp@gmail.com"
                    };

                    await emailjs.send(
                      "YOUR_SERVICE_ID",
                      "YOUR_TEMPLATE_ID",
                      templateParams
                    );

                    alert("Message sent successfully!");
                    form.reset();
                  } catch (error) {
                    console.error("Error sending email:", error);
                    alert("Failed to send message. Please try again.");
                  }
                }} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input 
                        name="firstName"
                        required
                        className="bg-gray-800 border-gray-700 text-white" 
                        placeholder="Your first name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input 
                        name="lastName"
                        required
                        className="bg-gray-800 border-gray-700 text-white" 
                        placeholder="Your last name" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input 
                      name="phone"
                      required
                      className="bg-gray-800 border-gray-700 text-white" 
                      placeholder="+91 97872 82323" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interested In</label>
                    <Input
                      name="service"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Bridal, Party, Photoshoot, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      rows={4}
                      placeholder="Tell us about your makeover needs..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-yellow-400" />
                <h4 className="text-xl font-bold text-yellow-400">
                  Teena Makeovers
                </h4>
              </div>
              <p className="text-gray-300">
                Transforming beauty, one makeover at a time. Your confidence is our masterpiece.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Services</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Bridal Makeover
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Party Makeover
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Photoshoot Ready
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Group Bookings
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Quick Links</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#about" className="hover:text-yellow-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-yellow-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-yellow-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Booking Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://www.instagram.com/teena_makeovers__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-transparent border-2 border-gray-400 text-white hover:border-yellow-400 hover:text-yellow-400 w-10 h-10 flex items-center justify-center"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-transparent border-2 border-gray-400 text-white hover:border-yellow-400 hover:text-yellow-400 w-10 h-10 flex items-center justify-center"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-transparent border-2 border-gray-400 text-white hover:border-yellow-400 hover:text-yellow-400 w-10 h-10 flex items-center justify-center"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Teena Makeovers. All rights reserved. Crafted with ❤️ for beauty enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
