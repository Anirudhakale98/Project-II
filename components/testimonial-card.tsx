import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-primary">
          <Quote className="h-6 w-6" />
        </div>
        <p className="flex-1 text-muted-foreground mb-4">"{quote}"</p>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </CardContent>
    </Card>
  )
}

