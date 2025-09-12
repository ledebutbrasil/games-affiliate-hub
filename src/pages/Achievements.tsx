import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Target,
  DollarSign,
  TrendingUp,
  Calendar,
  Star,
  Crown,
  Award,
  Medal,
  Zap,
  Users,
  Flame
} from "lucide-react";

const Achievements = () => {
  const totalRevenue = 89750;
  const currentLevel = "Afiliado Premium";
  const nextLevel = "Afiliado Elite";
  const progressToNext = 74;

  const achievements = [
    {
      id: 1,
      title: "Primeiro FTD",
      description: "Gere seu primeiro First Time Depositor",
      icon: Target,
      earned: true,
      earnedDate: "2023-08-15",
      reward: "R$ 50 de bônus"
    },
    {
      id: 2,
      title: "100 FTDs",
      description: "Alcance 100 FTDs em sua carreira",
      icon: Trophy,
      earned: true,
      earnedDate: "2023-12-20",
      reward: "Acesso a experts premium"
    },
    {
      id: 3,
      title: "R$ 10K Revenue",
      description: "Gere R$ 10.000 em comissões acumuladas",
      icon: DollarSign,
      earned: true,
      earnedDate: "2024-01-05",
      reward: "Taxa de comissão aumentada"
    },
    {
      id: 4,
      title: "Streak de 30 dias",
      description: "Gere FTDs por 30 dias consecutivos",
      icon: Flame,
      earned: true,
      earnedDate: "2024-01-10",
      reward: "Badge especial"
    },
    {
      id: 5,
      title: "R$ 50K Revenue",
      description: "Alcance R$ 50.000 em comissões totais",
      icon: Crown,
      earned: true,
      earnedDate: "2024-01-18",
      reward: "Gerente dedicado"
    },
    {
      id: 6,
      title: "Top Performer",
      description: "Entre no top 10 de afiliados do mês",
      icon: Award,
      earned: true,
      earnedDate: "2024-01-20",
      reward: "R$ 500 de bônus"
    },
    {
      id: 7,
      title: "R$ 100K Revenue",
      description: "Gere R$ 100.000 em comissões acumuladas",
      icon: Star,
      earned: false,
      progress: 89.75,
      reward: "Acesso a expert exclusivo"
    },
    {
      id: 8,
      title: "500 FTDs",
      description: "Alcance 500 FTDs em sua carreira",
      icon: Medal,
      earned: false,
      progress: 58.8,
      reward: "Comissão vitalícia aumentada"
    },
    {
      id: 9,
      title: "Multi Expert",
      description: "Promova 3 experts simultaneamente",
      icon: Users,
      earned: false,
      progress: 66.7,
      reward: "Dashboard avançado"
    },
    {
      id: 10,
      title: "Speed Racer",
      description: "Gere 50 FTDs em 7 dias",
      icon: Zap,
      earned: false,
      progress: 0,
      reward: "Título especial"
    }
  ];

  const monthlyMilestones = [
    { month: "Agosto 2023", revenue: 2450, ftds: 12, milestone: "Primeiro Mês" },
    { month: "Setembro 2023", revenue: 4850, ftds: 23, milestone: "R$ 5K" },
    { month: "Outubro 2023", revenue: 7820, ftds: 34, milestone: "50 FTDs" },
    { month: "Novembro 2023", revenue: 12450, ftds: 56, milestone: "R$ 10K" },
    { month: "Dezembro 2023", revenue: 18670, ftds: 78, milestone: "100 FTDs" },
    { month: "Janeiro 2024", revenue: 28560, ftds: 147, milestone: "R$ 25K" }
  ];

  const levelRequirements = [
    { level: "Afiliado Iniciante", minRevenue: 0, benefits: ["Acesso básico", "Suporte padrão"] },
    { level: "Afiliado Bronze", minRevenue: 5000, benefits: ["Materiais premium", "Suporte prioritário"] },
    { level: "Afiliado Prata", minRevenue: 15000, benefits: ["Experts exclusivos", "Dashboard avançado"] },
    { level: "Afiliado Ouro", minRevenue: 50000, benefits: ["Gerente dedicado", "Comissão aumentada"] },
    { level: "Afiliado Premium", minRevenue: 75000, benefits: ["Acesso VIP", "Eventos exclusivos"] },
    { level: "Afiliado Elite", minRevenue: 100000, benefits: ["Comissão máxima", "Consultoria 1:1"] },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Achievements de Faturamento</h1>
          <p className="text-muted-foreground">
            Acompanhe seu progresso e conquiste recompensas especiais
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="default" className="text-lg px-4 py-2">
            <Crown className="h-4 w-4 mr-2" />
            {currentLevel}
          </Badge>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-primary text-primary-foreground border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-primary-foreground/80 text-sm">Revenue Total</p>
                <p className="text-3xl font-bold">
                  R$ {totalRevenue.toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-10 w-10 text-primary-foreground/80" />
            </div>
            <div className="text-sm text-primary-foreground/80">
              Próximo nível em R$ {(100000 - totalRevenue).toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-muted-foreground text-sm">Progresso para {nextLevel}</p>
                <p className="text-2xl font-bold text-card-foreground">{progressToNext}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <Progress value={progressToNext} className="h-2" />
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-muted-foreground text-sm">Achievements Conquistados</p>
                <p className="text-2xl font-bold text-card-foreground">
                  {achievements.filter(a => a.earned).length}/{achievements.length}
                </p>
              </div>
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <Progress 
              value={(achievements.filter(a => a.earned).length / achievements.length) * 100} 
              className="h-2" 
            />
          </CardContent>
        </Card>
      </div>

      {/* Achievements Grid */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Trophy className="h-5 w-5 text-primary" />
            Suas Conquistas
          </CardTitle>
          <CardDescription>
            Desbloqueie recompensas especiais conforme atinge novos marcos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`border rounded-lg p-4 transition-all duration-300 ${
                  achievement.earned
                    ? "border-primary bg-primary/5 shadow-emerald"
                    : "border-border bg-muted/20"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${
                    achievement.earned ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    <achievement.icon className="h-5 w-5" />
                  </div>
                  {achievement.earned && (
                    <Badge variant="default" className="text-xs">
                      Conquistado
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-medium text-card-foreground mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                
                {achievement.earned ? (
                  <div className="text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {new Date(achievement.earnedDate).toLocaleDateString('pt-BR')}
                  </div>
                ) : achievement.progress !== undefined ? (
                  <div className="space-y-2">
                    <Progress value={achievement.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {achievement.progress.toFixed(1)}% completo
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">Não iniciado</p>
                )}
                
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs font-medium text-primary">
                    Recompensa: {achievement.reward}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Timeline */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Calendar className="h-5 w-5 text-primary" />
            Linha do Tempo de Faturamento
          </CardTitle>
          <CardDescription>
            Evolução do seu faturamento e marcos conquistados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyMilestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-card-foreground">{milestone.month}</h4>
                      <p className="text-sm text-muted-foreground">
                        {milestone.ftds} FTDs • {milestone.milestone}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">
                        R$ {milestone.revenue.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">Revenue acumulado</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Level System */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Crown className="h-5 w-5 text-primary" />
            Sistema de Níveis
          </CardTitle>
          <CardDescription>
            Entenda os benefícios de cada nível de afiliado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {levelRequirements.map((level, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 ${
                  level.level === currentLevel
                    ? "border-primary bg-primary/5"
                    : totalRevenue >= level.minRevenue
                    ? "border-border bg-muted/20"
                    : "border-border/50 bg-muted/10 opacity-60"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-card-foreground flex items-center gap-2">
                      {level.level}
                      {level.level === currentLevel && (
                        <Badge variant="default" className="text-xs">Atual</Badge>
                      )}
                      {totalRevenue >= level.minRevenue && level.level !== currentLevel && (
                        <Badge variant="outline" className="text-xs">Desbloqueado</Badge>
                      )}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Revenue mínimo: R$ {level.minRevenue.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-card-foreground">Benefícios:</p>
                  <ul className="text-sm text-muted-foreground">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Achievements;