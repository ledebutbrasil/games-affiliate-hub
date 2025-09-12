import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Search,
  Filter,
  Plus,
  ExternalLink,
  Trophy,
  Target,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameFilter, setGameFilter] = useState("all");
  const [selectedExpert, setSelectedExpert] = useState(null);
  const { toast } = useToast();

  const experts = [
    {
      id: 1,
      name: "Carlos Rodriguez",
      specialty: "Baccarat Expert",
      avatar: "/placeholder.svg",
      rating: 4.9,
      conversions: "18.5%",
      revenue: "R$ 45.230",
      followers: 2847,
      description: "Especialista em estratégias avançadas de Baccarat com foco em padrões de cartas e gestão de banca.",
      strategies: ["Pattern Recognition", "Gestão de Banca", "Análise Estatística"],
      status: "Disponível",
      languages: ["Português", "Espanhol"],
      experience: "5+ anos"
    },
    {
      id: 2,
      name: "Maria Santos",
      specialty: "Roleta Expert",
      avatar: "/placeholder.svg",
      rating: 4.8,
      conversions: "22.3%",
      revenue: "R$ 38.150",
      followers: 1923,
      description: "Expert em sistemas de apostas progressivas e técnicas de observação de tendências na roleta.",
      strategies: ["Sistema Martingale", "Análise de Tendências", "Apostas Progressivas"],
      status: "Ocupado",
      languages: ["Português", "Inglês"],
      experience: "3+ anos"
    },
    {
      id: 3,
      name: "Pedro Silva",
      specialty: "Dragon Tiger Expert",
      avatar: "/placeholder.svg",
      rating: 4.7,
      conversions: "15.8%",
      revenue: "R$ 29.890",
      followers: 1456,
      description: "Foco em estratégias de Dragon Tiger com ênfase em gestão de risco e maximização de lucros.",
      strategies: ["Gestão de Risco", "Análise de Padrões", "Timing de Apostas"],
      status: "Disponível",
      languages: ["Português"],
      experience: "4+ anos"
    },
    {
      id: 4,
      name: "Ana García",
      specialty: "Blackjack Expert",
      avatar: "/placeholder.svg",
      rating: 4.9,
      conversions: "24.1%",
      revenue: "R$ 52.760",
      followers: 3241,
      description: "Campeã em torneios de Blackjack com técnicas avançadas de contagem de cartas e estratégia básica.",
      strategies: ["Contagem de Cartas", "Estratégia Básica", "Gestão de Bankroll"],
      status: "Disponível",
      languages: ["Espanhol", "Português"],
      experience: "7+ anos"
    }
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expert.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGame = gameFilter === "all" || expert.specialty.toLowerCase().includes(gameFilter.toLowerCase());
    return matchesSearch && matchesGame;
  });

  const handleAffiliation = (expertId: number) => {
    toast({
      title: "Solicitação Enviada",
      description: "Sua solicitação de afiliação foi enviada com sucesso. Aguarde aprovação.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Marketplace de Experts</h1>
          <p className="text-muted-foreground">
            Encontre e se afilie aos melhores experts em jogos de casino
          </p>
        </div>
        <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Solicitar Expert Personalizado
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar experts por nome ou especialidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={gameFilter} onValueChange={setGameFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por jogo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Jogos</SelectItem>
                <SelectItem value="baccarat">Baccarat</SelectItem>
                <SelectItem value="roleta">Roleta</SelectItem>
                <SelectItem value="dragon">Dragon Tiger</SelectItem>
                <SelectItem value="blackjack">Blackjack</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Expert Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperts.map((expert) => (
          <Card key={expert.id} className="bg-card border-border hover:shadow-emerald transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={expert.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {expert.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-lg text-card-foreground">{expert.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {expert.specialty}
              </CardDescription>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{expert.rating}</span>
                </div>
                <Badge variant={expert.status === "Disponível" ? "default" : "secondary"}>
                  {expert.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                {expert.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-bold text-card-foreground">{expert.conversions}</p>
                  <p className="text-xs text-muted-foreground">Conversão</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-bold text-card-foreground">{expert.revenue}</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-bold text-card-foreground">{expert.followers}</p>
                  <p className="text-xs text-muted-foreground">Seguidores</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-card-foreground">Estratégias:</p>
                <div className="flex flex-wrap gap-1">
                  {expert.strategies.slice(0, 2).map((strategy, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {strategy}
                    </Badge>
                  ))}
                  {expert.strategies.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{expert.strategies.length - 2}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      Ver Detalhes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={expert.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {expert.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-bold">{expert.name}</h3>
                          <p className="text-primary">{expert.specialty}</p>
                        </div>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Experiência</p>
                          <p className="text-sm text-muted-foreground">{expert.experience}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Idiomas</p>
                          <p className="text-sm text-muted-foreground">{expert.languages.join(", ")}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Todas as Estratégias</p>
                        <div className="flex flex-wrap gap-2">
                          {expert.strategies.map((strategy, index) => (
                            <Badge key={index} variant="outline">
                              {strategy}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Descrição Detalhada</p>
                        <p className="text-sm text-muted-foreground">{expert.description}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-gradient-primary hover:bg-gradient-primary/90"
                          onClick={() => handleAffiliation(expert.id)}
                          disabled={expert.status === "Ocupado"}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Afiliar-se
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Preview Telegram
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-primary hover:bg-gradient-primary/90"
                  onClick={() => handleAffiliation(expert.id)}
                  disabled={expert.status === "Ocupado"}
                >
                  Afiliar-se
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredExperts.length === 0 && (
        <Card className="bg-card border-border">
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-card-foreground mb-2">
              Nenhum expert encontrado
            </h3>
            <p className="text-muted-foreground mb-4">
              Tente ajustar seus filtros ou solicite um expert personalizado
            </p>
            <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Solicitar Expert Personalizado
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Marketplace;