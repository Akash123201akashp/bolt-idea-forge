import { Heart, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <h3 className="font-bold text-lg text-foreground mb-2">Ai Ideo</h3>
          <p className="text-sm text-muted-foreground">Simple AI-powered idea processing</p>
        </div>
        <p className="text-xs text-muted-foreground">© 2024 Ai Ideo. All rights reserved.</p>
      </div>
    </footer>
  );
}