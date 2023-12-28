"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface EpisodesMenuProps { 
  title: string;
  episodes: any;
}

export function EpisodesMenu({title, episodes}: EpisodesMenuProps) {
  const path = usePathname();

  return (
    // ${isLoading ? "pointer-events-none opacity-50" : ""}
    <ScrollArea className={`w-96 h-screen whitespace-nowrap rounded-md border `}>
      <div className="p-4">
        <div className="flex items-center justify-between pb-4">
          <h4 className="font-medium leading-none">{title}</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center">
        {episodes.map((episode: any) => (
          <>
            <Link href={`${path}/ep=${episode.number}`} key={episode.id} className="flex items-center justify-center py-2 hover:bg-secondary border-b">
              <div>{episode.number}</div>
            </Link>
          </>
        ))}
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  )
}