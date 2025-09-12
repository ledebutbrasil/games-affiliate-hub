import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  TrendingUp,
  TrendingDown,
  Users,
  MousePointer,
  UserCheck,
  DollarSign,
  ExternalLink,
  Calendar,
  BarChart3,
  Target,
  MessageCircle,
  Link as LinkIcon
} from "lucide-react";

const Estatisticas = () => {
  const funnelData = [
    {
      stage: "Cliques no Link",
      value: 12847,
      percentage: 100,
      color: "bg-emerald-500"
    },
    {
      stage: "Visitantes Bot Telegram", 
      value: 3156,
      percentage: 24.6,
      color: "bg-emerald-600"
    },
    {
      stage: "Interações com Expert",
      value: 1842,
      percentage: 58.4,
      color: "bg-emerald-700"
    },
    {
      stage: "Leads Qualificados",
      value: 987,
      percentage: 53.6,
      color: "bg-primary"
    },
    {
      stage: "Registros na Plataforma",
      value: 456,
      percentage: 46.2,
      color: "bg-emerald-800"
    },
    {
      stage: "FTDs (First Deposits)",
      value: 147,
      percentage: 32.2,
      color: "bg-emerald-900"
    }
  ];

  const expertStats = [
    {
      name: "Carlos Rodriguez - Baccarat",
      clicks: 8542,
      conversions: 89,
      revenue: "R$ 15.670",
      conversionRate: "1.04%",
      status: "Ativo"
    },
    {
      name: "Ana García - Blackjack",
      clicks: 4305,
      conversions: 58,
      revenue: "R$ 12.890",
      conversionRate: "1.35%", 
      status: "Ativo"
    }
  ];

  const utmPerformance = [
    {
      utm: "utm_source=facebook&utm_campaign=baccarat_jan",
      clicks: 5642,
      conversions: 67,
      revenue: "R$ 11.230",
      ctr: "2.3%",
      conversionRate: "1.19%"
    },
    {
      utm: "utm_source=google&utm_campaign=blackjack_ads",
      clicks: 3298,
      conversions: 42,
      revenue: "R$ 8.750",
      ctr: "1.8%",
      conversionRate: "1.27%"
    },
    {
      utm: "utm_source=tiktok&utm_campaign=viral_baccarat",
      clicks: 7205,
      conversions: 38,
      revenue: "R$ 7.580",
      ctr: "4.2%",
      conversionRate: "0.53%"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Estatísticas de Funil</h1>
          <p className="text-muted-foreground">
            Análise detalhada do seu funil de conversão e performance por expert
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Últimos 7 dias</SelectItem>
              <SelectItem value="30days">Últimos 30 dias</SelectItem>
              <SelectItem value="90days">Últimos 90 dias</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-primary hover:bg-gradient-primary/90" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver Smartico
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxa de Conversão Total</p>
                <p className="text-2xl font-bold text-primary">1.14%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">+0.3%</span>
                </div>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">CTR Bot Telegram</p>
                <p className="text-2xl font-bold text-card-foreground">24.6%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">+2.1%</span>
                </div>
              </div>
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Interação com Expert</p>
                <p className="text-2xl font-bold text-card-foreground">58.4%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="h-3 w-3 text-destructive" />
                  <span className="text-xs text-destructive">-1.2%</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Revenue Total</p>
                <p className="text-2xl font-bold text-card-foreground">R$ 28.560</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">+18%</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Funnel */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <BarChart3 className="h-5 w-5 text-primary" />
            Funil de Conversão Detalhado
          </CardTitle>
          <CardDescription>
            Análise do caminho completo do usuário desde o clique até o FTD
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {funnelData.map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-card-foreground">{stage.stage}</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {stage.value.toLocaleString()} usuários
                    </span>
                    <Badge variant="outline">
                      {stage.percentage.toFixed(1)}%
                    </Badge>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${stage.color} transition-all duration-500`}
                    style={{ width: `${stage.percentage}%` }}
                  ></div>
                </div>
                {index < funnelData.length - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="w-px h-4 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Expert Performance */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Users className="h-5 w-5 text-primary" />
            Performance por Expert
          </CardTitle>
          <CardDescription>
            Métricas detalhadas de cada expert que você está promovendo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expertStats.map((expert, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-medium text-card-foreground">{expert.name}</h4>
                    <Badge variant={expert.status === "Ativo" ? "default" : "secondary"}>
                      {expert.status}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver no Telegram
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-1">
                      <MousePointer className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-bold text-card-foreground">
                      {expert.clicks.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Cliques</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-1">
                      <UserCheck className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-bold text-card-foreground">
                      {expert.conversions}
                    </p>
                    <p className="text-xs text-muted-foreground">FTDs</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-1">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-bold text-card-foreground">
                      {expert.revenue}
                    </p>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-1">
                      <Target className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-bold text-primary">
                      {expert.conversionRate}
                    </p>
                    <p className="text-xs text-muted-foreground">Taxa Conv.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* UTM Performance */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <LinkIcon className="h-5 w-5 text-primary" />
            Performance por UTM
          </CardTitle>
          <CardDescription>
            Análise detalhada de performance por fonte de tráfego e campanha
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {utmPerformance.map((utm, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="mb-3">
                  <h4 className="font-medium text-card-foreground mb-1">
                    Campanha {index + 1}
                  </h4>
                  <code className="text-xs bg-muted/20 px-2 py-1 rounded text-muted-foreground">
                    {utm.utm}
                  </code>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-card-foreground">
                      {utm.clicks.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Cliques</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-card-foreground">
                      {utm.conversions}
                    </p>
                    <p className="text-xs text-muted-foreground">FTDs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-card-foreground">
                      {utm.revenue}
                    </p>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">
                      {utm.ctr}
                    </p>
                    <p className="text-xs text-muted-foreground">CTR</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">
                      {utm.conversionRate}
                    </p>
                    <p className="text-xs text-muted-foreground">Taxa Conv.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bot Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Métricas do Bot Telegram</CardTitle>
            <CardDescription>
              Performance específica do bot de cada expert
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-card-foreground">Taxa de Resposta</span>
                <span className="text-primary font-medium">89.3%</span>
              </div>
              <Progress value={89.3} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-card-foreground">Engajamento Médio</span>
                <span className="text-primary font-medium">73.6%</span>
              </div>
              <Progress value={73.6} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-card-foreground">Retenção 24h</span>
                <span className="text-primary font-medium">45.2%</span>
              </div>
              <Progress value={45.2} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Otimizações Sugeridas</CardTitle>
            <CardDescription>
              Recomendações baseadas nos seus dados
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <h4 className="text-sm font-medium text-primary mb-1">
                Melhorar CTR do TikTok
              </h4>
              <p className="text-xs text-muted-foreground">
                Apesar do alto CTR, a conversão é baixa. Teste novos criativos focados em qualificação de leads.
              </p>
            </div>
            <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <h4 className="text-sm font-medium text-warning mb-1">
                Interação com Expert
              </h4>
              <p className="text-xs text-muted-foreground">
                Taxa de interação caiu 1.2%. Considere otimizar as mensagens de boas-vindas do bot.
              </p>
            </div>
            <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
              <h4 className="text-sm font-medium text-success mb-1">
                Google Ads Performance
              </h4>
              <p className="text-xs text-muted-foreground">
                Melhor taxa de conversão. Considere aumentar o budget desta campanha.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Estatisticas;