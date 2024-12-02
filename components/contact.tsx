"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MessageSquare, Phone } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully!");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#252422] mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-[#403D39] mb-8">
              Have questions about our AI solutions? Our team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EB6C33]/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#EB6C33]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#252422]">Email</h3>
                  <p className="text-[#403D39]">contact@dunefox.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EB6C33]/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#EB6C33]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#252422]">Phone</h3>
                  <p className="text-[#403D39]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EB6C33]/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-[#EB6C33]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#252422]">Live Chat</h3>
                  <p className="text-[#403D39]">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#252422] mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="w-full"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#252422] mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="w-full"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#252422] mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                required
                className="w-full"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#252422] mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                required
                className="w-full min-h-[150px]"
                placeholder="Tell us more about your needs..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#EB6C33] hover:bg-[#EB6C33]/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
