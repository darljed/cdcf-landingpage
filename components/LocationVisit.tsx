"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

const LocationVisit = () => {
  const address = "Blk 13 Lot 22, Blackburn St. Lynville San Nicolas II, San Nicolas, San Pablo City, Laguna, 4000";
  const googleMapsUrl = `https://maps.app.goo.gl/SkbUjWx7UdCMUtjW9`;

  return (
    <section className="py-20 bg-muted/30" id="location">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-muted-foreground">
            We&apos;d love to meet you! Join us this Sunday.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Service Times Card */}
          <Card className="hover:shadow-card transition-all duration-300 border-0 bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Clock size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary">Service Times</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-lg font-medium">Sunday Worship</span>
                  <span className="text-lg text-muted-foreground">9:30 AM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-lg font-medium">Midweek Prayer</span>
                  <span className="text-lg text-muted-foreground">Wed 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-medium">Youth Service</span>
                  <span className="text-lg text-muted-foreground">Fri 7:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="hover:shadow-card transition-all duration-300 border-0 bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                  <MapPin size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary">Location</h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-foreground/80">
                  {address}
                </p>
                <Button
                  onClick={() => window.open(googleMapsUrl, "_blank")}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Directions
                </Button>
                <div className="pt-4 space-y-3">
                  <a href="mailto:eduard.matundan@gmail.com " className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={20} />
                    <span>eduard.matundan@gmail.com </span>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={20} />
                    <span>+63 908 715 3331</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gradient-card rounded-3xl p-10 max-w-3xl mx-auto shadow-soft border border-border/50">
            <p className="font-serif text-2xl md:text-3xl text-primary mb-6 font-semibold">
              &ldquo;All are welcome — come as you are!&rdquo;
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you&apos;re exploring faith for the first time or looking for a church home, 
              we&apos;re here for you with open hearts and open doors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationVisit;
