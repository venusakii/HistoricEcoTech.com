"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Get in <span className="heritage-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to preserve your heritage property with sustainable technology? We would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form - Glass control panel on parchment */}
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=600')] bg-cover bg-center opacity-5 rounded-2xl" />
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-verdigris/20 flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8 text-verdigris" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">We will be in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="Eleanor"
                            className="bg-background/50 border-border focus:border-brass"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Finch"
                            className="bg-background/50 border-border focus:border-brass"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="eleanor@thornwoodmanor.co.uk"
                          className="bg-background/50 border-border focus:border-brass"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Input
                          id="propertyType"
                          placeholder="e.g., Georgian Manor, Victorian Townhouse"
                          className="bg-background/50 border-border focus:border-brass"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your property and what you're looking to achieve..."
                          rows={5}
                          className="bg-background/50 border-border focus:border-brass resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-verdigris hover:bg-verdigris/90 text-ivory group"
                      >
                        Send Message
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brass/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-brass" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:hello@historicecotech.com"
                          className="text-muted-foreground hover:text-verdigris transition-colors"
                        >
                          hello@historicecotech.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brass/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-brass" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a
                          href="tel:+18046086448"
                          className="text-muted-foreground hover:text-verdigris transition-colors"
                        >
                          +1 (804) 608-6448
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brass/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-brass" />
                      </div>
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-muted-foreground">
                          2444 Biddie Lane
                          <br />
                          Doddridge, AR 71834
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="bg-slate rounded-2xl p-8">
                  <h3 className="font-serif text-xl font-semibold text-ivory mb-3">Book a Free Consultation</h3>
                  <p className="text-ivory/70 text-sm mb-6">
                    Our heritage specialists can visit your property for an initial assessment and discuss sustainable
                    solutions tailored to your needs.
                  </p>
                  <Button
                    variant="outline"
                    className="border-teal-glow text-teal-glow hover:bg-teal-glow hover:text-slate bg-transparent"
                  >
                    Schedule a Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
