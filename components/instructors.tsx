import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Instructors() {
  const instructors = [
    {
      name: "김예진",
      title: "원장 / 서양화 전공",
      education: "서울대학교 미술대학 서양화과 졸업",
      experience: "20년 입시미술 지도 경력",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces",
    },
    {
      name: "이준호",
      title: "부원장 / 동양화 전공",
      education: "홍익대학교 미술대학 동양화과 졸업",
      experience: "15년 입시미술 지도 경력",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces",
    },
    {
      name: "박서연",
      title: "수석강사 / 디자인 전공",
      education: "이화여자대학교 조형예술대학 졸업",
      experience: "12년 입시미술 지도 경력",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces",
    },
  ]

  return (
    <section id="instructors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">전문 강사진</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            최고의 실력과 경험을 갖춘 강사진이 여러분의 합격을 이끕니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{instructor.name}</CardTitle>
                <CardDescription>{instructor.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>{instructor.education}</p>
                <p className="font-medium text-foreground">{instructor.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
