import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award } from "lucide-react"

export function Courses() {
  const courses = [
    {
      title: "기초 입시반",
      description: "미술 입시를 처음 시작하는 학생들을 위한 기초 과정",
      duration: "6개월",
      students: "최대 10명",
      level: "초급",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=400&fit=crop",
    },
    {
      title: "정규 입시반",
      description: "체계적인 커리큘럼으로 실기 실력을 완성하는 정규 과정",
      duration: "12개월",
      students: "최대 8명",
      level: "중급",
      image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=500&h=400&fit=crop",
    },
    {
      title: "특별 입시반",
      description: "서울대, 홍익대 등 상위권 미대 집중 대비 과정",
      duration: "12개월",
      students: "최대 5명",
      level: "상급",
      image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=500&h=400&fit=crop",
    },
  ]

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">수강 과정</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            학생 개개인의 수준과 목표에 맞춘 맞춤형 커리큘럼을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>{course.level}</span>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">자세히 보기</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
