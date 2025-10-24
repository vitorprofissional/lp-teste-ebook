import React, { useState } from 'react';
import { CTAButton } from './components/CTAButton';
import { Section } from './components/Section';
import { CheckIcon, LightbulbIcon, PencilIcon, RocketIcon, ChevronDownIcon, CheckCircleIcon, XCircleIcon } from './components/icons';

const CHECKOUT_URL = "https://pay.hotmart.com/R102582056M?checkoutMode=10";

const Hero = () => (
  <Section className="text-center pt-20 pb-10 md:pt-32 md:pb-16">
    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 tracking-tight">
      Tire o seu produto digital da cabeça e tenha seu primeiro infoproduto pronto <span className="text-[#00C4CC]">ainda hoje.</span>
    </h1>
    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-['Inter']">
      Chega de travar nas ideias. Em poucos cliques, você vai transformar seu conhecimento em um ebook completo — com conteúdo gerado por IA, design profissional no Canva e pronto para vender ou entregar como isca digital.
    </p>
    <CTAButton href={CHECKOUT_URL}>
      Quero criar meu ebook agora
    </CTAButton>
    <div className="mt-12 md:mt-16 w-full max-w-5xl mx-auto">
      <img 
        src="https://storage.googleapis.com/aai-web-samples/apps/preview/1971167b-1d70-449e-8c38-51f89335a9d9.png" 
        alt="Mockup do Ebook Express exibido em um laptop, tablet e celular" 
        className="w-full h-auto"
      />
    </div>
  </Section>
);

const Why = () => (
  <Section>
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pare de adiar seu infoproduto — ele pode estar pronto em <span className="text-[#2BD0E6]">poucas horas.</span></h2>
      <p className="text-gray-300 text-lg mb-8 font-['Inter'] leading-relaxed">
        Quantas ideias incríveis você já teve e nunca tirou do papel? A maioria das pessoas nunca lança nada porque acha que precisa de um grande curso, um designer caro ou semanas de dedicação. O Ebook Express nasceu pra mudar isso.
      </p>
      <p className="text-white text-lg font-medium mb-12 bg-[#2A2F40] p-6 rounded-lg border border-[#2A2F40] shadow-lg">
        Com apenas 3 cliques, você sai da confusão pro resultado: um ebook pronto, bonito e vendável — feito com IA, com sua identidade e sem precisar escrever do zero.
      </p>
      <a href="#how-it-works" className="text-lg text-[#00C4CC] hover:text-[#2BD0E6] font-semibold transition-colors">
        Chegou a hora de parar de planejar e começar a vender. &rarr;
      </a>
    </div>
  </Section>
);

const HowItWorks = () => {
    const steps = [
        {
            icon: <LightbulbIcon />,
            title: "Clique 1 — Ideia em Produto",
            description: "Defina sua ideia, público e formato. O agente de IA organiza o conteúdo e estrutura o ebook pra você começar sem travar."
        },
        {
            icon: <PencilIcon />,
            title: "Clique 2 — Design em Minutos",
            description: "Escolha um dos 3 templates prontos no Canva. Personalize cores, imagens e identidade visual."
        },
        {
            icon: <RocketIcon />,
            title: "Clique 3 — Pronto pra Vender",
            description: "Crie a capa, exporte o PDF e gere o link pra divulgar. Seu ebook está no ar — bonito e 100% autoral."
        }
    ];

    return (
        <Section id="how-it-works">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Crie seu ebook completo com o método <span className="text-[#00C4CC]">3 Cliques.</span></h2>
                <p className="text-gray-300 text-lg font-['Inter']">Você não precisa de curso, designer ou semanas de escrita. O Ebook Express foi feito pra quem quer ver o primeiro produto digital pronto ainda hoje. Basta seguir 3 passos simples e deixar a IA fazer o trabalho pesado.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="bg-[#2A2F40]/50 border border-[#2A2F40] p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="mx-auto mb-4 bg-[#0A0F1C] h-16 w-16 rounded-full flex items-center justify-center text-[#00C4CC]">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat']">{step.title}</h3>
                        <p className="text-gray-300 font-['Inter']">{step.description}</p>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12">
                <CTAButton href={CHECKOUT_URL}>
                    Quero testar o método 3 Cliques agora
                </CTAButton>
            </div>
        </Section>
    );
}

const WhatYouGet = () => {
    const deliverables = [
        "Agente de IA exclusivo",
        "3 templates editáveis no Canva",
        "Guia prático de execução rápida",
        "Modelos de capa prontos",
        "Checklist de publicação"
    ];

    return (
        <Section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tudo o que você precisa para <span className="text-[#00C4CC]">lançar em 1 dia.</span></h2>
                    <p className="text-gray-300 text-lg mb-8 font-['Inter']">O Ebook Express não é só um template, é um sistema completo para destravar seu conhecimento e transformá-lo em um produto digital de verdade. Você recebe acesso imediato a:</p>
                    <ul className="space-y-4">
                        {deliverables.map((item, index) => (
                            <li key={index} className="flex items-center text-lg text-white font-medium">
                                <CheckIcon />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative h-96 bg-[#2A2F40]/50 rounded-lg p-4 flex items-center justify-center">
                    <p className="text-gray-400 italic">[Placeholder para imagem do produto]</p>
                </div>
            </div>
        </Section>
    );
};

const Author = () => (
  <Section className="bg-[#0A0F1C]">
    <div className="bg-[#2A2F40]/50 border border-[#2A2F40] rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center text-center md:text-left gap-8">
      <img 
        src="https://storage.googleapis.com/aai-web-samples/apps/preview/e8e3c155-22e4-42cf-9c17-a169b567c293.png" 
        alt="Foto do autor do curso" 
        className="w-48 h-64 object-cover rounded-lg shadow-md mx-auto md:mx-0 flex-shrink-0"
      />
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Quem vai te guiar nessa jornada?</h3>
        <p className="text-gray-300 text-lg font-['Inter'] mb-4 leading-relaxed">
          Meu nome é [Seu Nome], e nos últimos anos, ajudei centenas de pessoas a tirarem suas ideias do papel. Eu sei como é travar no início, por isso criei o Ebook Express: um atalho testado e aprovado para você ter seu primeiro produto digital no ar, sem complicação e sem gastar rios de dinheiro.
        </p>
        <a href="#pricing" className="text-[#00C4CC] font-semibold hover:underline">Vamos criar juntos?</a>
      </div>
    </div>
  </Section>
);

const Pricing = () => (
    <Section id="pricing">
        <div className="max-w-xl mx-auto text-center bg-[#2A2F40]/50 border border-[#2A2F40] p-10 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Acesso imediato por um preço <span className="text-[#00C4CC]">ridiculamente baixo.</span></h2>
            <p className="text-gray-300 text-lg mb-6 font-['Inter']">Tudo o que você precisa para criar e vender seu primeiro ebook. Sem mensalidades, sem pegadinhas.</p>
            <div className="my-8">
                <span className="text-2xl text-gray-400 line-through mr-4">R$197</span>
                <span className="text-6xl font-bold text-white">R$29</span>
                <p className="text-gray-400 mt-2">Pagamento único. Acesso vitalício.</p>
            </div>
            <CTAButton href={CHECKOUT_URL} className="w-full text-xl">
                Garantir meu acesso agora!
            </CTAButton>
            <p className="text-sm text-gray-500 mt-6">Compra 100% segura. Garantia de 7 dias.</p>
        </div>
    </Section>
);


const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 py-6">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <ChevronDownIcon isOpen={isOpen} />
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
                <p className="text-gray-300 font-['Inter']">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { question: "Preciso saber de design?", answer: "Não! Os templates do Canva são 100% editáveis e super intuitivos. Você só precisa arrastar, soltar e trocar as cores. O guia mostra o passo a passo." },
        { question: "A IA vai escrever tudo por mim?", answer: "A IA vai te ajudar a estruturar o conteúdo, gerar ideias e escrever os rascunhos. Você entra com seu conhecimento e toque pessoal para deixar o material com a sua cara." },
        { question: "Em quanto tempo consigo terminar?", answer: "Se você seguir o método, consegue ter o ebook pronto em poucas horas. Depende do seu ritmo, mas o processo foi feito pra ser rápido." },
        { question: "Vou ter acesso vitalício?", answer: "Sim! Pagamento único, acesso para sempre a todo o material e futuras atualizações." }
    ];

    return (
        <Section>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Dúvidas Frequentes</h2>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </Section>
    );
};

const FinalCTA = () => (
    <Section className="bg-[#2A2F40]/30">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seu primeiro produto digital está a <span className="text-[#00C4CC]">3 cliques</span> de distância.</h2>
            <p className="text-gray-300 text-lg mb-8 font-['Inter']">Chega de esperar o momento perfeito. A hora é agora. Clique no botão abaixo e comece a transformar seu conhecimento em renda ainda hoje.</p>
            <CTAButton href={CHECKOUT_URL} className="text-xl">
                Sim, quero criar meu ebook agora!
            </CTAButton>
        </div>
    </Section>
);

const Footer = () => (
    <footer className="text-center py-8 px-6">
        <p className="text-gray-500 font-['Inter']">&copy; {new Date().getFullYear()} Ebook Express. Todos os direitos reservados.</p>
    </footer>
);


const App = () => {
  return (
    <div className="bg-[#0A0F1C] text-white">
      <Hero />
      <Why />
      <HowItWorks />
      <WhatYouGet />
      <Author />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
