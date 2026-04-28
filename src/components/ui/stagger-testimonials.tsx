import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Swimming club testimonials data
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Aqua Collective изменил мою жизнь. От попыток проплыть 25 метров до первого заплыва на открытой воде — это сообщество верило в меня, когда я сам в себя не верил.",
    by: "Сергей Иванов, пловец на открытой воде",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyIvanov&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Я боялась присоединиться к группе, но Aqua Collective встретил меня с распростертыми объятиями. Теперь у меня друзья на всю жизнь и уверенность достигать любых целей в воде.",
    by: "Марина Петрова, мастер баттерфляя",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaPetrova&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Атмосфера на тренировках Aqua Collective заразительна. Быстрый ты или медленный — все болеют за тебя. Здесь не соревнование, здесь сообщество.",
    by: "Анна Козлова, любитель брасса",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaKozlova&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "После лет одиночных заплывов Aqua Collective стал для меня открытием. Групповые тренировки помогли выйти на личные рекорды, о которых я и мечтать не мог.",
    by: "Дмитрий Смирнов, спринтер 50м",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitrySmirnov&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Aqua Collective научил меня, что плавание — это не просто тренировка. Это медитация, дружба и приключение в одном флаконе. Этот клуб спас мое ментальное здоровье.",
    by: "Елена Новикова, осознанный пловец",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaNovikova&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "От боязни воды до первого километра в бассейне за 6 месяцев с поддержкой Aqua Collective. Они принимают тебя таким, какой ты есть. Настоящая магия.",
    by: "Алексей Морозов, история успеха",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyMorozov&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Рассветные заплывы с Aqua Collective — это особый опыт. Есть что-то мощное в том, чтобы рассекать воду вместе, пока мир просыпается вокруг нас.",
    by: "Айгуль Рахимова, рассветный патруль",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AigulRahimova&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Я вступила в Aqua Collective после переезда в новый город. Нашла не только команду пловцов, но и настоящую семью. Вода здесь — это образ жизни.",
    by: "Ольга Ким, строитель сообщества",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaKim&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Aqua Collective празднует каждую победу, даже самую маленькую. Мои первые 100 метров без остановки ощущались как олимпийское золото с этой командой рядом.",
    by: "Наталья Соколова, герой первых 100м",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaSokolova&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Тренировочные планы в Aqua Collective невероятные. Я прошел путь от любителя до участника соревнований по плаванию всего за полтора года.",
    by: "Михаил Волков, соревновательный пловец",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MikhailVolkov&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Что я люблю в Aqua Collective — это разнообразие. Пловцы всех возрастов, с разным опытом объединяются одной страстью к воде.",
    by: "София Родригес, чемпион разнообразия",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SofiaRodriguez&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Дисциплина в Aqua Collective не имеет равных. Когда знаешь, что твоя команда ждет тебя у бортика — приходишь на тренировку несмотря ни на что.",
    by: "Тимур Асланов, король постоянства",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TimurAslanov&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Группа открытой воды Aqua Collective открыла мне самые красивые места, о которых я и не знал. Плавание стало моим способом исследовать мир.",
    by: "Нина Павлова, исследователь открытой воды",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NinaPavlova&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Разговоры после тренировок в Aqua Collective ценны не меньше самих заплывов. Мы решаем мировые проблемы гребок за гребком.",
    by: "Роман Ким, философ плавания",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanKim&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Я никогда не думала, что стану пловцом, но дружелюбный подход Aqua Collective сделал это возможным. Теперь не представляю жизни без воды.",
    by: "Екатерина Орлова, позднее открытие",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaOrlova&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "Поддержка при травмах в Aqua Collective потрясающая. Когда я выбыл, они поддерживали мою мотивацию и помогли вернуться в воду сильнее.",
    by: "Даниил Пак, история возвращения",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DaniilPak&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Благотворительные заплывы Aqua Collective придают нашим метрам смысл. Мы плывем не только для себя — мы плывем, чтобы изменить мир к лучшему.",
    by: "Раиса Грин, чемпион благотворительности",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RaisaGrin&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Мастер-классы по технике в Aqua Collective преобразили мой кроль. Я стал быстрее и забыл о боли в плечах благодаря экспертному руководству.",
    by: "Кирилл Вонг, перфекционист техники",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KirillVong&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Онлайн-тренировки Aqua Collective во время закрытия бассейнов спасли мой прогресс. Даже тогда мы оставались связаны как сообщество.",
    by: "Александра Фостер, виртуальный воин",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexandraFoster&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Наставничество в Aqua Collective меняет жизни. Опытные пловцы берут новичков под крыло и щедро делятся своей мудростью.",
    by: "Карлос Мендес, благодарный ученик",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=CarlosMendez&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}