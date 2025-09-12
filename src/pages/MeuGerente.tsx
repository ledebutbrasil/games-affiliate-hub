import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  UserCheck,
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  Star,
  Award,
  Users,
  TrendingUp
} from "lucide-react";

const MeuGerente = () => {
  const manager = {
    name: "Ricardo Santos",
    position: "Gerente Senior de Afiliados",
    email: "ricardo.santos@24games.com",
    phone: "+55 11 98765-4321",
    whatsapp: "+55 11 98765-4321",
    languages: ["Português", "Espanhol", "Inglês"],
    experience: "5+ anos",
    specialties: ["High Rollers", "Revenue Optimization", "Expert Management"],
    workingHours: "Segunda a Sexta: 9h às 18h",
    timezone: "GMT-3 (São Paulo)",
    joinDate: "2023-08-20",
    rating: 4.9,
    managedAffiliates: 47,
    averageResponse: "< 2 horas"
  };

  const recentInteractions = [
    {
      date: "2024-01-20",
      type: "Aprovação de Financiamento",
      description: "Financiamento de R$ 5.000 aprovado para campanha Facebook",
      status: "Concluído"
    },
    {
      date: "2024-01-18",
      type: "Solicitação de Expert",
      description: "Expert Carlos Rodriguez aprovado para afiliação",
      status: "Concluído"
    },
    {
      date: "2024-01-15",
      type: "Consultoria Performance",
      description: "Reunião sobre otimização de campanhas TikTok",
      status: "Concluído"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Meu Gerente</h1>
        <p className="text-muted-foreground">
          Seu gerente dedicado para suporte e acompanhamento
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Manager Profile */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <UserCheck className="h-5 w-5 text-primary" />
                Informações do Gerente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-6 mb-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    RS
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-card-foreground">{manager.name}</h3>
                  <p className="text-primary font-medium">{manager.position}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{manager.rating}</span>
                    </div>
                    <Badge variant="default">
                      <Users className="h-3 w-3 mr-1" />
                      {manager.managedAffiliates} afiliados
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Contato</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{manager.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{manager.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{manager.whatsapp}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Idiomas</h4>
                    <div className="flex flex-wrap gap-2">
                      {manager.languages.map((lang, index) => (
                        <Badge key={index} variant="outline">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Especialidades</h4>
                    <div className="space-y-1">
                      {manager.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Horário de Trabalho</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{manager.workingHours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{manager.timezone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Interactions */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Interações Recentes</CardTitle>
              <CardDescription>
                Histórico das suas últimas interações com seu gerente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInteractions.map((interaction, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-card-foreground">{interaction.type}</h4>
                      <Badge variant="default">{interaction.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {interaction.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(interaction.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-primary hover:bg-gradient-primary/90">
                <MessageCircle className="h-4 w-4 mr-2" />
                Iniciar Conversa
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Enviar Email
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Ligar Agora
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Reunião
              </Button>
            </CardContent>
          </Card>

          {/* Manager Stats */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tempo de Resposta</span>
                <span className="font-medium text-primary">{manager.averageResponse}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Experiência</span>
                <span className="font-medium text-card-foreground">{manager.experience}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Afiliados Gerenciados</span>
                <span className="font-medium text-card-foreground">{manager.managedAffiliates}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Seu Gerente Desde</span>
                <span className="font-medium text-card-foreground">
                  {new Date(manager.joinDate).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MeuGerente;