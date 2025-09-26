import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight } from "lucide-react";

const exampleInput = "A mobile app where people can share photos of their daily meals and get nutrition advice from AI";

const exampleOutput = `# Product Specification: NutriShare

## Overview
A social nutrition app combining meal photo sharing with AI-powered dietary insights.

## Core Features
- Photo capture and meal logging
- AI nutrition analysis
- Social feed and community
- Personalized dietary recommendations

## User Stories
- As a user, I want to photograph my meals and get instant nutrition feedback
- As a user, I want to see what others are eating for inspiration
- As a user, I want to track my eating habits over time

## Technical Stack
- Frontend: React Native
- Backend: Node.js + Express
- AI: Computer Vision API for food recognition
- Database: MongoDB for user data and meal logs

## MVP Roadmap
1. Basic photo upload and AI analysis
2. Social features and user profiles  
3. Advanced tracking and insights`;

export function ExampleOutput() {
  const handleGetStarted = () => {
    const processorSection = document.getElementById('processor');
    if (processorSection) {
      processorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              See It In Action
            </h2>
            <p className="text-muted-foreground">
              Here's how a simple idea becomes a comprehensive plan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Example */}
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="w-5 h-5 text-primary" />
                  Your Input
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "{exampleInput}"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Output Example */}
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  AI Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50 max-h-64 overflow-y-auto">
                  <pre className="text-xs text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                    {exampleOutput}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleGetStarted}
              className="group"
            >
              Try It Yourself
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}