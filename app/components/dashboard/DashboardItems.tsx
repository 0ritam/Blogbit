"use client"
import { navLinks } from "@/app/dashboard/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardItems(){
    const pathname = usePathname();
    return(
        <>
            {navLinks.map((items) => (                    //mapping the items in the //the links in the format of map
                <Link href={items.name} key={items.name} className={cn(pathname == items.href ? 'bg-muted text-primary':'text-muted-foreground',"flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70 ")}>
                    <items.icon className="size-4"/>
                    {items.name}
                </Link>
            ))}
        </>
    )
}