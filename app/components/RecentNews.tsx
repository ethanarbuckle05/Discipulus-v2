import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Image from "next/image"
export default function RecentNews() {
  const articles = [
    {
      title: "Silicon Valley's 'Gundo' Bros Are Building A Y Combinator For Military Tech",
      source: "Forbes",
      date: "February 10, 2025",
      url: "https://www.forbes.com/sites/davidjeans/2025/02/10/silicon-valley-gundo-bros-ycombinator/",
      logo: "/news/forbes.png"
    },
    {
      title: "Discipulus Ventures mentors young founders to revive a Norman Rockwell vision of America",
      source: "TechCrunch",
      date: "March 26, 2024",
      url: "https://techcrunch.com/2024/03/26/discipluus-ventures-mentors-founders-norman-rockwell-america/",
      logo: "/news/techcrunch.png"
    },
    {
      title: "Military Culture in Tech?",
      source: "LA Business Journal",
      date: "June 23, 2025",
      url: "https://labusinessjournal.com/featured/military-culture-in-tech/",
      logo: "/news/labj.png"
    }
  ]

  const cardClass = "flex-1 min-w-0 max-w-full";

  const renderArticleCard = (article: { title: string; source: string; date: string; url: string; logo: string }, index: number) => (
    <Card
      key={index}
      className={`group hover:shadow-[0_0_15px_rgba(156,156,156,0.2)] transition-shadow bg-zinc-900 border-zinc-800 ${cardClass}`}
    >
          <CardHeader className="space-y-4">
            <div className="h-8">
              <Image
                src={article.logo}
                alt={`${article.source} logo`}
                width={300}
                height={100}
            className={`object-contain w-auto brightness-0 invert ${
              article.source === "LA Business Journal" ? "h-4" : "h-6"
            }`}
              />
            </div>
            <a 
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-semibold text-white hover:underline"
            >
              {article.title}
            </a>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-400">{article.source} • {article.date}</p>
          </CardContent>
        </Card>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Top row: Forbes and TechCrunch */}
      <div className="flex flex-col md:flex-row gap-6">
        {articles.slice(0, 2).map((article, index) => renderArticleCard(article, index))}
      </div>
      {/* Bottom row: LA Business Journal, perfectly centered and same width as above */}
      <div className="flex justify-center gap-6">
        <div className="flex-1 min-w-0 max-w-full md:max-w-[50%]">
          {renderArticleCard(articles[2], 2)}
        </div>
      </div>
    </div>
  );
}