import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Edit,
  Save,
  Crown,
  Shield,
  Wallet,
  Link as LinkIcon,
  ExternalLink,
  Eye,
  EyeOff
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MeusDados = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showWalletAddress, setShowWalletAddress] = useState(false);
  const { toast } = useToast();

  const [userData, setUserData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "+55 11 99999-9999",
    country: "Brasil",
    city: "São Paulo",
    language: "Português",
    walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    pixKey: "joao.silva@email.com",
    bankAccount: "Banco do Brasil - Ag: 1234 - CC: 12345-6"
  });

  const accountInfo = {
    affiliateId: "24G-AF-001234",
    joinDate: "2023-08-15",
    level: "Afiliado Premium",
    status: "Ativo",
    totalRevenue: "R$ 89.750",
    totalFTDs: 294,
    activeExperts: 2,
    averageConversion: "1.14%"
  };

  const affiliatedExperts = [
    {
      name: "Carlos Rodriguez",
      specialty: "Baccarat Expert",
      joinDate: "2023-08-20",
      status: "Ativo",
      revenue: "R$ 52.330",
      ftds: 167
    },
    {
      name: "Ana García", 
      specialty: "Blackjack Expert",
      joinDate: "2023-12-10",
      status: "Ativo",
      revenue: "R$ 37.420",
      ftds: 127
    }
  ];

  const handleSave = () => {
    toast({
      title: "Dados Atualizados",
      description: "Suas informações foram atualizadas com sucesso.",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meus Dados</h1>
          <p className="text-muted-foreground">
            Gerencie suas informações pessoais e de conta
          </p>
        </div>
        <div className="flex items-center gap-3">
          {!isEditing ? (
            <Button 
              onClick={() => setIsEditing(true)}
              className="bg-gradient-primary hover:bg-gradient-primary/90"
            >
              <Edit className="h-4 w-4 mr-2" />
              Editar Dados
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button onClick={handleSave} className="bg-gradient-primary hover:bg-gradient-primary/90">
                <Save className="h-4 w-4 mr-2" />
                Salvar
              </Button>
            </div>
          )}
        </div>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="experts">Experts</TabsTrigger>
          <TabsTrigger value="payment">Pagamento</TabsTrigger>
        </TabsList>

        {/* Personal Data Tab */}
        <TabsContent value="personal" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <User className="h-5 w-5 text-primary" />
                Informações Pessoais
              </CardTitle>
              <CardDescription>
                Mantenha seus dados atualizados para uma melhor experiência
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    JS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium text-card-foreground">{userData.name}</h3>
                  <p className="text-muted-foreground">{accountInfo.level}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Alterar Foto
                  </Button>
                </div>
              </div>

              {/* Personal Information Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    value={userData.name}
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={userData.phone}
                    onChange={(e) => setUserData({...userData, phone: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">País</Label>
                  <Select 
                    value={userData.country} 
                    onValueChange={(value) => setUserData({...userData, country: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Brasil">Brasil</SelectItem>
                      <SelectItem value="Argentina">Argentina</SelectItem>
                      <SelectItem value="México">México</SelectItem>
                      <SelectItem value="Chile">Chile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    value={userData.city}
                    onChange={(e) => setUserData({...userData, city: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Idioma Preferido</Label>
                  <Select 
                    value={userData.language} 
                    onValueChange={(value) => setUserData({...userData, language: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Português">Português</SelectItem>
                      <SelectItem value="Espanhol">Espanhol</SelectItem>
                      <SelectItem value="Inglês">Inglês</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Account Information */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  Informações da Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">ID do Afiliado</span>
                  <span className="font-mono text-sm text-card-foreground">
                    {accountInfo.affiliateId}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Data de Cadastro</span>
                  <span className="text-sm text-card-foreground">
                    {new Date(accountInfo.joinDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Nível da Conta</span>
                  <Badge variant="default" className="flex items-center gap-1">
                    <Crown className="h-3 w-3" />
                    {accountInfo.level}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge variant="default">{accountInfo.status}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Resumo de Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Revenue Total</span>
                  <span className="font-bold text-primary">{accountInfo.totalRevenue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total de FTDs</span>
                  <span className="font-bold text-card-foreground">{accountInfo.totalFTDs}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Experts Ativos</span>
                  <span className="font-bold text-card-foreground">{accountInfo.activeExperts}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Conversão Média</span>
                  <span className="font-bold text-primary">{accountInfo.averageConversion}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Experts Tab */}
        <TabsContent value="experts" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Users className="h-5 w-5 text-primary" />
                Experts Afiliados
              </CardTitle>
              <CardDescription>
                Experts que você está promovendo atualmente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {affiliatedExperts.map((expert, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-card-foreground">{expert.name}</h4>
                        <p className="text-sm text-primary">{expert.specialty}</p>
                        <p className="text-xs text-muted-foreground">
                          Afiliado desde {new Date(expert.joinDate).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Badge variant={expert.status === "Ativo" ? "default" : "secondary"}>
                        {expert.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">{expert.revenue}</p>
                        <p className="text-xs text-muted-foreground">Revenue Gerado</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-card-foreground">{expert.ftds}</p>
                        <p className="text-xs text-muted-foreground">FTDs</p>
                      </div>
                      <div className="text-center">
                        <Button variant="outline" size="sm">
                          <LinkIcon className="h-4 w-4 mr-2" />
                          Link Telegram
                        </Button>
                      </div>
                      <div className="text-center">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Materiais
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Tab */}
        <TabsContent value="payment" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Wallet className="h-5 w-5 text-primary" />
                Informações de Pagamento
              </CardTitle>
              <CardDescription>
                Configure suas preferências de recebimento de comissões
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Crypto Wallet */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-card-foreground">Carteira Crypto</h3>
                <div className="space-y-2">
                  <Label htmlFor="walletAddress">Endereço da Carteira (Bitcoin)</Label>
                  <div className="flex gap-2">
                    <Input
                      id="walletAddress"
                      type={showWalletAddress ? "text" : "password"}
                      value={userData.walletAddress}
                      onChange={(e) => setUserData({...userData, walletAddress: e.target.value})}
                      disabled={!isEditing}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setShowWalletAddress(!showWalletAddress)}
                    >
                      {showWalletAddress ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              {/* PIX */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-card-foreground">PIX</h3>
                <div className="space-y-2">
                  <Label htmlFor="pixKey">Chave PIX</Label>
                  <Input
                    id="pixKey"
                    value={userData.pixKey}
                    onChange={(e) => setUserData({...userData, pixKey: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {/* Bank Account */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-card-foreground">Conta Bancária</h3>
                <div className="space-y-2">
                  <Label htmlFor="bankAccount">Dados Bancários</Label>
                  <Input
                    id="bankAccount"
                    value={userData.bankAccount}
                    onChange={(e) => setUserData({...userData, bankAccount: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {/* Payment Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-card-foreground">Preferências de Pagamento</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-muted/20 border-border p-4">
                    <div className="text-center">
                      <Wallet className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium text-card-foreground">Crypto</h4>
                      <p className="text-xs text-muted-foreground">Bitcoin/USDT</p>
                      <Badge variant="default" className="mt-2">Preferido</Badge>
                    </div>
                  </Card>
                  <Card className="bg-muted/20 border-border p-4">
                    <div className="text-center">
                      <DollarSign className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <h4 className="font-medium text-card-foreground">PIX</h4>
                      <p className="text-xs text-muted-foreground">Instantâneo</p>
                      <Badge variant="outline" className="mt-2">Disponível</Badge>
                    </div>
                  </Card>
                  <Card className="bg-muted/20 border-border p-4">
                    <div className="text-center">
                      <Phone className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <h4 className="font-medium text-card-foreground">Transferência</h4>
                      <p className="text-xs text-muted-foreground">1-2 dias úteis</p>
                      <Badge variant="outline" className="mt-2">Disponível</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MeusDados;