import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Users,
  TrendingUp,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  DollarSign,
  Target,
  Send,
  Plus,
  Eye
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Solicitacoes = () => {
  const [expertForm, setExpertForm] = useState({
    gameType: "",
    strategy: "",
    experience: "",
    languages: "",
    description: ""
  });
  const [fundingForm, setFundingForm] = useState({
    amount: "",
    purpose: "",
    campaign: "",
    expectedROI: "",
    description: ""
  });
  const { toast } = useToast();

  const expertRequests = [
    {
      id: 1,
      type: "Expert Personalizado",
      game: "Crash Games",
      status: "Pendente",
      date: "2024-01-15",
      description: "Expert especializado em estratégias de timing para crash games",
      response: null
    },
    {
      id: 2,
      type: "Expert Personalizado", 
      game: "Mines",
      status: "Aprovado",
      date: "2024-01-10",
      description: "Expert focado em padrões de mines com gestão de risco conservadora",
      response: "Expert encontrado: Ricardo Mines com 4+ anos de experiência"
    },
    {
      id: 3,
      type: "Expert Personalizado",
      game: "Aviator",
      status: "Rejeitado",
      date: "2024-01-08", 
      description: "Expert para aviator com foco em multiplicadores altos",
      response: "Não conseguimos encontrar expert com esse perfil específico"
    }
  ];

  const fundingRequests = [
    {
      id: 1,
      type: "Financiamento de Tráfego",
      amount: "R$ 5.000",
      status: "Aprovado",
      date: "2024-01-12",
      campaign: "Facebook Ads - Baccarat",
      roi: "250%",
      response: "Financiamento aprovado. Valores transferidos."
    },
    {
      id: 2,
      type: "Financiamento de Tráfego",
      amount: "R$ 3.500",
      status: "Pendente",
      date: "2024-01-14",
      campaign: "Google Ads - Roleta",
      roi: "200%",
      response: null
    },
    {
      id: 3,
      type: "Financiamento de Tráfego", 
      amount: "R$ 8.000",
      status: "Em Análise",
      date: "2024-01-16",
      campaign: "TikTok Ads - Dragon Tiger",
      roi: "300%",
      response: "Análise em andamento pela equipe financeira"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aprovado": return "default";
      case "Pendente": return "secondary";
      case "Em Análise": return "outline";
      case "Rejeitado": return "destructive";
      default: return "secondary";
    }
  };

  const handleExpertSubmit = () => {
    toast({
      title: "Solicitação Enviada",
      description: "Sua solicitação de expert personalizado foi enviada com sucesso.",
    });
    setExpertForm({
      gameType: "",
      strategy: "",
      experience: "",
      languages: "",
      description: ""
    });
  };

  const handleFundingSubmit = () => {
    toast({
      title: "Solicitação Enviada", 
      description: "Sua solicitação de financiamento foi enviada para análise.",
    });
    setFundingForm({
      amount: "",
      purpose: "",
      campaign: "",
      expectedROI: "",
      description: ""
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Solicitações</h1>
          <p className="text-muted-foreground">
            Gerencie suas solicitações de experts e financiamento de tráfego
          </p>
        </div>
      </div>

      <Tabs defaultValue="requests" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="requests">Minhas Solicitações</TabsTrigger>
          <TabsTrigger value="new">Nova Solicitação</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">
                      {expertRequests.length + fundingRequests.length}
                    </p>
                    <p className="text-xs text-muted-foreground">Total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-warning" />
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">3</p>
                    <p className="text-xs text-muted-foreground">Pendentes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">2</p>
                    <p className="text-xs text-muted-foreground">Aprovadas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">1</p>
                    <p className="text-xs text-muted-foreground">Rejeitadas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expert Requests */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Users className="h-5 w-5 text-primary" />
                Solicitações de Experts
              </CardTitle>
              <CardDescription>
                Acompanhe o status das suas solicitações de experts personalizados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expertRequests.map((request) => (
                  <div key={request.id} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-card-foreground">{request.game}</h4>
                        <p className="text-sm text-muted-foreground">{request.description}</p>
                      </div>
                      <Badge variant={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>Solicitado em {new Date(request.date).toLocaleDateString('pt-BR')}</span>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver Detalhes
                      </Button>
                    </div>
                    {request.response && (
                      <div className="mt-3 p-3 bg-muted/20 rounded-md">
                        <p className="text-sm text-card-foreground">
                          <span className="font-medium">Resposta: </span>
                          {request.response}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Funding Requests */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <TrendingUp className="h-5 w-5 text-primary" />
                Solicitações de Financiamento
              </CardTitle>
              <CardDescription>
                Acompanhe o status das suas solicitações de financiamento de tráfego
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fundingRequests.map((request) => (
                  <div key={request.id} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-card-foreground">{request.campaign}</h4>
                        <p className="text-sm text-muted-foreground">
                          Valor: {request.amount} • ROI Esperado: {request.roi}
                        </p>
                      </div>
                      <Badge variant={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>Solicitado em {new Date(request.date).toLocaleDateString('pt-BR')}</span>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver Detalhes
                      </Button>
                    </div>
                    {request.response && (
                      <div className="mt-3 p-3 bg-muted/20 rounded-md">
                        <p className="text-sm text-card-foreground">
                          <span className="font-medium">Resposta: </span>
                          {request.response}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Expert Request Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  Solicitar Expert Personalizado
                </CardTitle>
                <CardDescription>
                  Solicite um expert com perfil específico para suas necessidades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="gameType">Tipo de Jogo</Label>
                  <Select 
                    value={expertForm.gameType} 
                    onValueChange={(value) => setExpertForm({...expertForm, gameType: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de jogo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baccarat">Baccarat</SelectItem>
                      <SelectItem value="roleta">Roleta</SelectItem>
                      <SelectItem value="blackjack">Blackjack</SelectItem>
                      <SelectItem value="dragon-tiger">Dragon Tiger</SelectItem>
                      <SelectItem value="crash">Crash Games</SelectItem>
                      <SelectItem value="mines">Mines</SelectItem>
                      <SelectItem value="aviator">Aviator</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="strategy">Estratégia Preferida</Label>
                  <Input
                    id="strategy"
                    placeholder="Ex: Gestão conservadora, High Risk/High Reward..."
                    value={expertForm.strategy}
                    onChange={(e) => setExpertForm({...expertForm, strategy: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experiência Mínima</Label>
                  <Select 
                    value={expertForm.experience} 
                    onValueChange={(value) => setExpertForm({...expertForm, experience: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a experiência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 anos</SelectItem>
                      <SelectItem value="3-4">3-4 anos</SelectItem>
                      <SelectItem value="5+">5+ anos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="languages">Idiomas</Label>
                  <Input
                    id="languages"
                    placeholder="Ex: Português, Espanhol, Inglês..."
                    value={expertForm.languages}
                    onChange={(e) => setExpertForm({...expertForm, languages: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição Detalhada</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o perfil ideal do expert que você precisa..."
                    value={expertForm.description}
                    onChange={(e) => setExpertForm({...expertForm, description: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:bg-gradient-primary/90"
                  onClick={handleExpertSubmit}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Solicitação
                </Button>
              </CardContent>
            </Card>

            {/* Funding Request Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Solicitar Financiamento de Tráfego
                </CardTitle>
                <CardDescription>
                  Solicite financiamento para expandir suas campanhas de tráfego
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Valor Solicitado</Label>
                  <Input
                    id="amount"
                    placeholder="Ex: R$ 5.000"
                    value={fundingForm.amount}
                    onChange={(e) => setFundingForm({...fundingForm, amount: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Finalidade</Label>
                  <Select 
                    value={fundingForm.purpose} 
                    onValueChange={(value) => setFundingForm({...fundingForm, purpose: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a finalidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="facebook-ads">Facebook Ads</SelectItem>
                      <SelectItem value="google-ads">Google Ads</SelectItem>
                      <SelectItem value="tiktok-ads">TikTok Ads</SelectItem>
                      <SelectItem value="instagram-ads">Instagram Ads</SelectItem>
                      <SelectItem value="influencers">Marketing de Influência</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaign">Nome da Campanha</Label>
                  <Input
                    id="campaign"
                    placeholder="Ex: Campanha Baccarat Q1 2024"
                    value={fundingForm.campaign}
                    onChange={(e) => setFundingForm({...fundingForm, campaign: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectedROI">ROI Esperado (%)</Label>
                  <Input
                    id="expectedROI"
                    placeholder="Ex: 250%"
                    value={fundingForm.expectedROI}
                    onChange={(e) => setFundingForm({...fundingForm, expectedROI: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fundingDescription">Justificativa</Label>
                  <Textarea
                    id="fundingDescription"
                    placeholder="Explique por que precisa do financiamento e como planeja usar..."
                    value={fundingForm.description}
                    onChange={(e) => setFundingForm({...fundingForm, description: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:bg-gradient-primary/90"
                  onClick={handleFundingSubmit}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Solicitação
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Solicitacoes;