export function Stats() {
  const stats = [
    { number: "98.5%", label: "주요 미대 합격률" },
    { number: "20년", label: "입시미술 교육 경력" },
    { number: "1:5", label: "강사 대 학생 비율" },
    { number: "500+", label: "누적 합격생 수" },
  ]

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
