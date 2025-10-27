"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"


export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">상담 문의</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            입시 상담 및 수강 문의는 언제든지 환영합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>연락처 정보</CardTitle>
                <CardDescription>방문 전 미리 연락 주시면 더욱 자세한 상담이 가능합니다</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">전화번호</p>
                    <p className="text-muted-foreground">02-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">이메일</p>
                    <p className="text-muted-foreground">info@artvision.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">주소</p>
                    <p className="text-muted-foreground">서울특별시 강남구 테헤란로 123</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>운영 시간</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">평일</span>
                  <span className="font-medium text-foreground">09:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">토요일</span>
                  <span className="font-medium text-foreground">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">일요일</span>
                  <span className="font-medium text-foreground">휴무</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>상담 신청</CardTitle>
              <CardDescription>정보를 남겨주시면 빠른 시일 내에 연락드리겠습니다</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="이름"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="연락처"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="이메일"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="문의 내용"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  상담 신청하기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
