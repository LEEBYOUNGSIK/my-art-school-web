export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">아트비전</h3>
            <p className="text-sm text-primary-foreground/80">입시미술 전문 교육기관</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">메뉴</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#courses" className="hover:text-primary-foreground transition-colors">
                  수강과정
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary-foreground transition-colors">
                  작품갤러리
                </a>
              </li>
              <li>
                <a href="#instructors" className="hover:text-primary-foreground transition-colors">
                  강사진
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  상담문의
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>전화: 02-1234-5678</li>
              <li>이메일: info@artvision.com</li>
              <li>주소: 서울특별시 강남구</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">운영시간</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>평일: 09:00 - 22:00</li>
              <li>토요일: 09:00 - 18:00</li>
              <li>일요일: 휴무</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 아트비전 입시미술학원. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
