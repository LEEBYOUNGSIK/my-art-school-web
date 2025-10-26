export function Gallery() {
  const artworks = [
    { image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=500&h=500&fit=crop", title: "소묘 작품" },
    { image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&h=500&fit=crop", title: "유화 작품" },
    { image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=500&h=500&fit=crop", title: "수채화 작품" },
    { image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=500&h=500&fit=crop", title: "인체 드로잉" },
    { image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=500&h=500&fit=crop", title: "추상화 작품" },
    { image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=500&fit=crop", title: "조소 작품" },
  ]

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">학생 작품 갤러리</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            우리 학원 학생들의 우수한 작품들을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {artworks.map((artwork, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-primary-foreground font-medium">{artwork.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
