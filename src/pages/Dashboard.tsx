import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Eye,
  ExternalLink,
  Calendar,
  Target,
  Store
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "FTDs (First Time Depositors)",
      value: "147",
      change: "+12%",
      trend: "up",
      icon: Users,
      description: "Este mês"
    },
    {
      title: "Comissões (REV)",
      value: "R$ 23.450",
      change: "+18%",
      trend: "up", 
      icon: DollarSign,
      description: "Revenue Share"
    },
    {
      title: "Deposit Amount",
      value: "R$ 156.750",
      change: "+8%",
      trend: "up",
      icon: TrendingUp,
      description: "Total depositado"
    },
    {
      title: "Net P&L",
      value: "R$ 89.320",
      change: "-3%",
      trend: "down",
      icon: Target,
      description: "Lucro líquido"
    }
  ];

  const recentActivity = [
    {
      expert: "Carlos Rodriguez - Baccarat Expert",
      action: "Novo FTD registrado",
      value: "R$ 850",
      time: "2 min atrás"
    },
    {
      expert: "Maria Santos - Roleta Expert", 
      action: "Comissão gerada",
      value: "R$ 340",
      time: "15 min atrás"
    },
    {
      expert: "Pedro Silva - Dragon Tiger Expert",
      action: "Lead convertido",
      value: "R$ 1.250",
      time: "1 hora atrás"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard de Performance</h1>
          <p className="text-muted-foreground">
            Acompanhe suas métricas e performance em tempo real
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Último 30 dias
          </Button>
          <Button className="bg-gradient-primary hover:bg-gradient-primary/90" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver Smartico
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card border-border hover:shadow-emerald transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {stat.value}
              </div>
              <div className="flex items-center space-x-1 text-xs">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-primary" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={stat.trend === "up" ? "text-primary" : "text-destructive"}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">vs. mês anterior</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Performance Mensal</CardTitle>
            <CardDescription>Evolução das suas comissões nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Gráfico de performance carregado via Smartico
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Funnel */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Funil de Conversão</CardTitle>
            <CardDescription>Taxa de conversão por etapa do funil</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-card-foreground">Cliques → Leads</span>
                <span className="text-primary font-medium">24.5%</span>
              </div>
              <Progress value={24.5} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-card-foreground">Leads → Registros</span>
                <span className="text-primary font-medium">18.3%</span>
              </div>
              <Progress value={18.3} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-card-foreground">Registros → FTDs</span>
                <span className="text-primary font-medium">12.8%</span>
              </div>
              <Progress value={12.8} className="h-2" />
            </div>
            <div className="pt-2 border-t border-border">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-card-foreground">Conversão Total</span>
                <span className="text-primary">5.7%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Atividade Recente</CardTitle>
          <CardDescription>
            Últimas atividades dos seus experts e comissões geradas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      {activity.expert}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">
                    {activity.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Ações Rápidas</CardTitle>
          <CardDescription>
            Acesse rapidamente as principais funcionalidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Store className="h-6 w-6 text-primary" />
              <span className="text-sm">Marketplace</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-sm">Solicitar Expert</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-sm">Financiamento</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Eye className="h-6 w-6 text-primary" />
              <span className="text-sm">Estatísticas</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;