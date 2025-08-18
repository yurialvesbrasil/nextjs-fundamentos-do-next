import { useCallback, useMemo } from 'react';
import { Link } from 'lucide-react';
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from './social-providers';
import { useClipboard } from '../use-clipboard';

//Aqui cria um tipo com as propriedades de outro mais um
type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) => {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

  //Mantem memória dos parâmetros de entrada
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }), // só cria o title se ele vir nas propriedades
      ...(text && { text }), // só cria o text se ele vir nas propriedades
    }),
    [url, title, text] // Se um desses mudar recalcula.
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];
        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=600, height=600, location=yes, status=yes'
        );

        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [shareConfig, handleCopy, url]
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: 'clipboard',
        name: isCopied ? 'Link copiado!' : 'Copiar link',
        icon: <Link className="h-4 w-4" />,
        action: () => share('clipboard'),
      },
    ],
    [isCopied, share]
  );

  return { shareButtons };
};