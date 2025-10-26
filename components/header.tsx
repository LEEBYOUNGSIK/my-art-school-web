"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground">아트비전</div>
            <span className="text-sm text-muted-foreground">입시미술학원</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              수강과정
            </a>
            <a href="#gallery" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              작품갤러리
            </a>
            <a href="#instructors" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              강사진
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              상담문의
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">수강신청</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a href="#courses" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              수강과정
            </a>
            <a href="#gallery" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              작품갤러리
            </a>
            <a href="#instructors" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              강사진
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              상담문의
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">수강신청</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
