import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react';

const supportStories = [
  {
    title:
      'Personalize seu site',
    descricao: 'Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara.',
    icon: <PaintbrushVertical className="h-6 w-6 text-white" />,
    colorPrimary: 'bg-blue-400',
    colorSecondary: 'bg-blue-300',
  },
  {
    title:
      'Venda de qualquer loja',
    descricao: 'Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.',
    icon: <Store className="h-6 w-6 text-white" />,
    colorPrimary: 'bg-cyan-300',
    colorSecondary: 'bg-cyan-200',
  },
  {
    title:
      'Receba suporte amigável',
    descricao: 'Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.',
    icon: <HeartHandshake className="h-6 w-6 text-white" />,
    colorPrimary: 'bg-blue-400',
    colorSecondary: 'bg-blue-300',
  },
];

export const SupportSection = () => {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-12 relative">
        <h2 className="font-sans text-balance text-center text-heading-xl text-gray-100">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {supportStories.map((supportStorie) => (
            <div
              key={supportStorie.title}
              className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${supportStorie.colorPrimary}`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${supportStorie.colorSecondary} mb-4`}>
                {supportStorie.icon}
              </div>
              <strong className="text-heading-sm text-gray-100">
                {supportStorie.title}
              </strong>
              <p className="text-body-sm text-gray-200">
                {supportStorie.descricao}
              </p>
            </div>
          ))}  
        </div>
      </div>
    </section>
  );
};