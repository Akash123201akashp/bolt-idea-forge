import { Zap, Target, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Get structured plans in seconds"
  },
  {
    icon: Target,
    title: "Smart Analysis",
    description: "AI identifies key requirements"
  },
  {
    icon: FileCheck,
    title: "Ready to Use",
    description: "Download and implement immediately"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why Choose Ai Ideo
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-card transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}