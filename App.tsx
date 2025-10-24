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
                    <h2 className="text-3xl md:text-4xl font