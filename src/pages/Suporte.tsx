import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  HeadphonesIcon,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  Search,
  Send,
  CheckCircle,
  AlertCircle,
  FileText,
  Download,
  ExternalLink
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Suporte = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [supportForm, setSupportForm] = useState({
    category: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const faqCategories = [
    {
      category: "Afiliação e Experts",
      items: [
        {
          question: "Como me afiliar a um expert do marketplace?",
          answer: "Para se afiliar a um expert, acesse o Marketplace de Experts, escolha o expert desejado e clique em 'Afiliar-se'. Sua solicitação será analisada e você receberá uma resposta em até 24 horas."
        },
        {
          question: "Posso promover múltiplos experts simultaneamente?",
          answer: "Sim, você pode promover múltiplos experts ao mesmo tempo. Cada expert terá seu próprio link de Telegram e materiais específicos. Suas estatísticas serão separadas por expert no dashboard."
        },
        {
          question: "Como funciona o processo de aprovação para experts personalizados?",
          answer: "Após solicitar um expert personalizado, nossa equipe analisa seu pedido e busca experts que atendam aos critérios especificados. O processo leva de 3 a 7 dias úteis."
        }
      ]
    },
    {
      category: "Comissões e Pagamentos",
      items: [
        {
          question: "Quando recebo minhas comissões?",
          answer: "As comissões são processadas mensalmente, até o dia 15 do mês seguinte. Os pagamentos são feitos via PIX ou transferência bancária, conforme sua preferência."
        },
        {
          question: "Como é calculada minha comissão?",
          answer: "Sua comissão é calculada com base no Revenue Share dos FTDs que você gerou. A porcentagem varia conforme seu nível de afiliado, podendo chegar até 45% para afiliados Elite."
        },
        {
          question: "Existe um valor mínimo para saque?",
          answer: "O valor mínimo para saque é de R$ 100. Valores abaixo deste limite ficam acumulados para o próximo período de pagamento."
        }
      ]
    },
    {
      category: "Financiamento de Tráfego",
      items: [
        {
          question: "Quais são os critérios para solicitar financiamento?",
          answer: "Para solicitar financiamento, você deve ter pelo menos 3 meses de histórico como afiliado, ter gerado pelo menos R$ 5.000 em comissões e apresentar um plano de campanha detalhado."
        },
        {
          question: "Qual o valor máximo de financiamento disponível?",
          answer: "O valor máximo varia conforme seu histórico e performance. Afiliados Premium podem solicitar até R$ 20.000, enquanto afiliados Elite podem solicitar até R$ 50.000."
        },
        {
          question: "Como é feito o pagamento do financiamento?",
          answer: "O financiamento é descontado automaticamente das suas comissões futuras, com condições flexíveis e sem juros para afiliados qualificados."
        }
      ]
    },
    {
      category: "Materiais e Ferramentas",
      items: [
        {
          question: "Com que frequência os materiais criativos são atualizados?",
          answer: "Os materiais criativos são atualizados semanalmente. Você recebe notificações por email sempre que novos materiais estão disponíveis."
        },
        {
          question: "Posso criar meus próprios materiais promocionais?",
          answer: "Sim, mas todos os materiais devem ser aprovados pela nossa equipe de compliance antes do uso. Envie seus criativos através do suporte para análise."
        },
        {
          question: "Como acesso o drive de materiais criativos?",
          answer: "Após se afiliar a um expert, você recebe automaticamente acesso ao drive de materiais específico. O link fica disponível na sua área de membros."
        }
      ]
    }
  ];

  const supportChannels = [
    {
      name: "Chat ao Vivo",
      description: "Suporte instantâneo para questões urgentes",
      availability: "Seg-Sex: 9h às 18h",
      icon: MessageCircle,
      status: "online"
    },
    {
      name: "Email",
      description: "Para questões detalhadas e documentação",
      availability: "Resposta em até 4 horas",
      icon: Mail,
      status: "available"
    },
    {
      name: "WhatsApp",
      description: "Suporte rápido via WhatsApp",
      availability: "Seg-Sex: 9h às 18h",
      icon: Phone,
      status: "online"
    }
  ];

  const resources = [
    {
      title: "Guia do Afiliado Iniciante",
      description: "Manual completo para começar como afiliado",
      type: "PDF",
      size: "2.5 MB"
    },
    {
      title: "Estratégias de Marketing Digital",
      description: "Técnicas avançadas para aumentar conversões",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Kit de Materiais Visuais",
      description: "Banners, imagens e templates prontos",
      type: "ZIP",
      size: "15.2 MB"
    }
  ];

  const filteredFAQ = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const handleSupportSubmit = () => {
    toast({
      title: "Mensagem Enviada",
      description: "Seu ticket de suporte foi criado. Você receberá uma resposta em breve.",
    });
    setSupportForm({ category: "", subject: "", message: "" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Central de Suporte</h1>
          <p className="text-muted-foreground">
            Encontre respostas rápidas ou entre em contato conosco
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-primary">
            <Clock className="h-3 w-3 mr-1" />
            Tempo médio: 2h
          </Badge>
        </div>
      </div>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {supportChannels.map((channel, index) => (
          <Card key={index} className="bg-card border-border hover:shadow-emerald transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  channel.status === "online" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}>
                  <channel.icon className="h-6 w-6" />
                </div>
                <Badge variant={channel.status === "online" ? "default" : "secondary"}>
                  {channel.status === "online" ? "Online" : "Disponível"}
                </Badge>
              </div>
              <h3 className="font-medium text-card-foreground mb-2">{channel.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
              <p className="text-xs text-muted-foreground mb-4">{channel.availability}</p>
              <Button 
                className="w-full bg-gradient-primary hover:bg-gradient-primary/90"
                size="sm"
              >
                Iniciar Conversa
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search FAQ */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar nas perguntas frequentes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <HelpCircle className="h-5 w-5 text-primary" />
                Perguntas Frequentes
              </CardTitle>
              <CardDescription>
                Encontre respostas para as dúvidas mais comuns
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredFAQ.length > 0 ? (
                <div className="space-y-6">
                  {filteredFAQ.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h3 className="font-medium text-card-foreground mb-3 text-lg">
                        {category.category}
                      </h3>
                      <Accordion type="single" collapsible className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <AccordionItem 
                            key={itemIndex} 
                            value={`${categoryIndex}-${itemIndex}`}
                            className="border border-border rounded-lg px-4"
                          >
                            <AccordionTrigger className="text-left text-card-foreground hover:text-primary">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-card-foreground mb-2">
                    Nenhum resultado encontrado
                  </h3>
                  <p className="text-muted-foreground">
                    Tente usar termos diferentes ou entre em contato conosco
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Send className="h-5 w-5 text-primary" />
                Enviar Mensagem
              </CardTitle>
              <CardDescription>
                Não encontrou a resposta? Fale conosco
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Select 
                  value={supportForm.category} 
                  onValueChange={(value) => setSupportForm({...supportForm, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Problema Técnico</SelectItem>
                    <SelectItem value="commission">Questão de Comissão</SelectItem>
                    <SelectItem value="expert">Solicitação de Expert</SelectItem>
                    <SelectItem value="funding">Financiamento</SelectItem>
                    <SelectItem value="general">Geral</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  placeholder="Descreva brevemente sua questão"
                  value={supportForm.subject}
                  onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Descreva sua questão em detalhes..."
                  value={supportForm.message}
                  onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                  rows={6}
                />
              </div>

              <Button 
                className="w-full bg-gradient-primary hover:bg-gradient-primary/90"
                onClick={handleSupportSubmit}
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <FileText className="h-5 w-5 text-primary" />
                Recursos Úteis
              </CardTitle>
              <CardDescription>
                Downloads e materiais de apoio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-card-foreground">
                      {resource.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {resource.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {resource.type} • {resource.size}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Status */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <AlertCircle className="h-5 w-5 text-primary" />
                Status do Sistema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-card-foreground">Plataforma Principal</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-xs text-success">Operacional</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-card-foreground">Integração Smartico</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-xs text-success">Operacional</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-card-foreground">Pagamentos</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-xs text-success">Operacional</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver Status Completo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Suporte;