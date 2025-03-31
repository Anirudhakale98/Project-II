import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  role: string
  image: string
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  )
}

