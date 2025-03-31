export default function ClientLogos() {
  // Array of placeholder company names
  const companies = ["TechCorp", "GlobalFin", "MediHealth", "EduSystems", "RetailPro"]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {companies.map((company, index) => (
        <div key={index} className="flex items-center justify-center">
          <div className="h-8 w-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground font-medium">
            {company}
          </div>
        </div>
      ))}
    </div>
  )
}

