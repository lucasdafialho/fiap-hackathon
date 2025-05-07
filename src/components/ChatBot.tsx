
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, MessageCircle, Bot } from 'lucide-react';

type Message = {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Olá! Sou o assistente virtual da HP. Como posso ajudar você hoje?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Show the chatbot after a slight delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      
      const normalizedInput = inputValue.toLowerCase();
      if (normalizedInput.includes('preço') || normalizedInput.includes('valor') || normalizedInput.includes('custo')) {
        botResponse = 'Temos várias opções de produtos com diferentes preços. Posso ajudar a encontrar algo específico dentro do seu orçamento.';
      } else if (normalizedInput.includes('notebook') || normalizedInput.includes('laptop')) {
        botResponse = 'Os notebooks HP são conhecidos por sua durabilidade e desempenho. Temos desde modelos básicos até opções avançadas para jogos ou trabalhos profissionais. Qual tipo de uso você pretende fazer?';
      } else if (normalizedInput.includes('impressora')) {
        botResponse = 'Nossa linha de impressoras inclui opções jato de tinta e laser, para uso doméstico ou empresarial. Você procura algum recurso específico?';
      } else if (normalizedInput.includes('garantia')) {
        botResponse = 'Os produtos HP possuem garantia padrão de 12 meses. Oferecemos também extensões de garantia que podem ser adquiridas separadamente.';
      } else if (normalizedInput.includes('loja') || normalizedInput.includes('comprar')) {
        botResponse = 'Você pode comprar produtos HP em nossa loja online ou em revendedores autorizados. Quer que eu te mostre algumas opções?';
      } else if (normalizedInput.includes('olá') || normalizedInput.includes('oi') || normalizedInput.includes('bom dia') || normalizedInput.includes('boa tarde')) {
        botResponse = 'Olá! Como posso ajudar você hoje com os produtos e serviços HP?';
      } else if (normalizedInput.includes('obrigado') || normalizedInput.includes('obrigada')) {
        botResponse = 'Disponha! Estou aqui para ajudar. Tem mais alguma pergunta sobre nossos produtos ou serviços?';
      } else {
        botResponse = 'Agradeço sua mensagem. Para melhor atendê-lo, poderia fornecer mais detalhes sobre o que está procurando nos produtos HP?';
      }

      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${
          isOpen ? 'hidden' : 'flex'
        } bg-hp-blue hover:bg-hp-dark-blue text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce-in`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col bg-white rounded-lg shadow-xl border border-gray-200 w-full sm:w-80 md:w-96 h-[500px] max-h-[80vh] transition-all duration-300 animate-fade-in`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between bg-hp-blue text-white p-4 rounded-t-lg">
          <div className="flex items-center">
            <Bot size={20} className="mr-2" />
            <h3 className="font-semibold">Assistente Virtual HP</h3>
          </div>
          <button
            onClick={toggleChat}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-hp-blue text-white'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="text-sm">{message.text}</div>
                <div
                  className={`text-xs mt-1 text-right ${
                    message.sender === 'user' ? 'text-gray-200' : 'text-gray-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border border-gray-200 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white rounded-b-lg">
          <div className="flex">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 focus-visible:ring-hp-blue"
            />
            <Button
              type="submit"
              className="ml-2 bg-hp-blue hover:bg-hp-dark-blue"
              disabled={!inputValue.trim()}
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
