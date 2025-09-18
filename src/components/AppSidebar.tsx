import { useState } from "react";
import { 
  BarChart3, 
  Store, 
  Users, 
  HeadphonesIcon, 
  TrendingUp, 
  Trophy, 
  User, 
  UserCheck,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Marketplace de Experts", url: "/marketplace", icon: Store },
  { title: "Solicitações", url: "/solicitacoes", icon: Users },
  { title: "Estatísticas de Funil", url: "/estatisticas", icon: TrendingUp },
  { title: "Achievements", url: "/achievements", icon: Trophy },
  { title: "Suporte", url: "/suporte", icon: HeadphonesIcon },
  { title: "Meus Dados", url: "/meus-dados", icon: User },
  { title: "Meu Gerente", url: "/meu-gerente", icon: UserCheck },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isExpanded = state === "expanded";

  return (
    <Sidebar className="border-sidebar-border bg-sidebar">
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">24</span>
          </div>
          {isExpanded && (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">24 Games</h2>
              <p className="text-sm text-sidebar-foreground/70">Área de Afiliados</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 mb-4">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mb-1">
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-emerald-500 text-black font-medium shadow-lg"
                            : "text-emerald-500 dark:text-white hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {isExpanded && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}