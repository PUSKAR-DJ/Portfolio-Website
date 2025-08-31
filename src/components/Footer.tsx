import { Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h3 className="text-xl mb-2">Puskar Saha</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Building digital experiences with code and creativity. 
              Always learning, always creating.
            </p>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex items-center justify-between w-full max-w-md">
            <p className="text-xs text-muted-foreground">
              © 2024 Puskar Saha. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="p-2 hover:bg-accent"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}