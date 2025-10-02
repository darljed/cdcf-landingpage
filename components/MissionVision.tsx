import { Heart, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Heart size={32} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To advance the Gospel of Jesus and His Kingdom into the nations through spiritual 
                generations of laborers living among the lost, making disciples who make disciples.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                  <Eye size={32} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-secondary">Our Vision</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We envision transformed communities living and proclaiming God&apos;s Kingdom from one 
                generation to the next, with disciples multiplying across nations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
