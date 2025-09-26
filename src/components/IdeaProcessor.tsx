import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Copy, Download, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function IdeaProcessor() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({
        title: "Please enter your idea",
        description: "You need to provide some input for the AI to process.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock AI output
      const mockOutput = `# Product Specification: ${input.slice(0, 30)}...

## Overview
Based on your idea, here's a structured product specification:

## Core Features
- User authentication and profiles
- Main functionality implementation
- Dashboard and analytics
- Mobile-responsive design

## User Stories
- As a user, I want to easily sign up and create my profile
- As a user, I want to access the main features intuitively
- As a user, I want to track my progress and see analytics

## Technical Requirements
- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: JWT

## Implementation Roadmap
1. **Phase 1**: Core MVP features
2. **Phase 2**: Enhanced functionality
3. **Phase 3**: Advanced features and scaling

## Success Metrics
- User engagement rate
- Feature adoption
- Performance benchmarks`;

      setOutput(mockOutput);
      toast({
        title: "Plan generated successfully!",
        description: "Your structured product specification is ready.",
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied to clipboard",
      description: "The structured plan has been copied to your clipboard.",
    });
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-spec.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: "Your product specification is being downloaded.",
    });
  };

  return (
    <section id="processor" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Input Section */}
          <Card className="mb-8 border-border/50 bg-card/80 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="w-6 h-6 text-primary" />
                Share Your Idea
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Write your app idea here... Be as detailed or as messy as you want! For example: 'I want to build an app where people can share photos of their pets and rate them, maybe with some social features and a way to find pet-friendly places nearby...'"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[200px] text-base leading-relaxed resize-none border-border/50 focus:border-primary/50 bg-background/50"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {input.length} characters
                </span>
                <Button 
                  onClick={handleGenerate} 
                  disabled={isLoading || !input.trim()}
                  variant="hero"
                  size="lg"
                  className="min-w-[140px]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Plan"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          {(output || isLoading) && (
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-card animate-scale-in">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">Structured Product Plan</CardTitle>
                  {output && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handleCopy}>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleDownload}>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center py-12 text-center">
                    <div className="space-y-4">
                      <Loader2 className="w-8 h-8 mx-auto animate-spin text-primary" />
                      <p className="text-lg font-medium text-foreground">Generating your plan...</p>
                      <p className="text-muted-foreground">Our AI is analyzing your idea and creating a structured specification</p>
                    </div>
                  </div>
                ) : (
                  <div className="prose prose-sm max-w-none bg-background/50 rounded-lg p-6 border border-border/50">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
                      {output}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}