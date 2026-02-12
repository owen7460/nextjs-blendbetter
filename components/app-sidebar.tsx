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

        <SidebarFooter className="mt-auto mb-8 ml-4">
          <p className="text-sm">This app is created by Owen.</p>
          <span className="text-sm">Version 1.0.0 Beta</span>
          <p className="text-sm">
            To know more about me
            <p className="mt-4">
              <a
                href="https://owen-ca.com"
                target="_blank"
                className="text-sm underline text-white bg-black px-2 py-1 rounded-md"
              >
                https://owen-ca.com
              </a>
            </p>
          </p>
        </SidebarFooter>
      </SidebarMenu>
    </Sidebar>
  );
}
