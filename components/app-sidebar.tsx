"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenu,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BookMarked, Hop, ArrowBigLeft } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarMenu className="mt-10 h-full">
        <SidebarHeader>
          <SidebarMenuButton asChild>
            <Link className="text-lg font-bold" href="/">
              <ArrowBigLeft /> Back to Home Page
            </Link>
          </SidebarMenuButton>
        </SidebarHeader>

        <SidebarGroup className="space-y-3">
          <SidebarGroupLabel className="text-xs">
            🍎🍌🍇🍓🍒Fruits
          </SidebarGroupLabel>
          <hr />
          <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
            <Link href="/dashboard">
              <Hop /> Let's Blend
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton
            asChild
            isActive={pathname === "/dashboard/collections"}
          >
            <Link href="/dashboard/collections">
              <BookMarked /> Your Collections
            </Link>
          </SidebarMenuButton>
        </SidebarGroup>

        <SidebarFooter className="mt-auto mb-10">
          <p>This app is created by Owen.</p>
        </SidebarFooter>
      </SidebarMenu>
    </Sidebar>
  );
}
