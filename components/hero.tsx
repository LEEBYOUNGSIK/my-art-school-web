import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              2025학년도 합격률 98.5%
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              당신의 예술적 꿈을
              <br />
              현실로 만듭니다
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              20년 전통의 입시미술 전문 교육기관으로, 서울대, 홍익대 등 주요 미대 합격생을 배출하고 있습니다. 체계적인
              커리큘럼과 1:1 맞춤 지도로 여러분의 합격을 책임집니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                무료 상담 신청
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                포트폴리오 보기
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop" alt="Art students working" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
