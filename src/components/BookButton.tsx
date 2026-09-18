import { IconBrandWhatsapp } from '@tabler/icons-react';

import { whatsappLink } from '~/site';

interface BookButtonProps {
  whatsapp?: string;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  onClick?: () => void;
}

export default function BookButton({
  whatsapp,
  className = 'btn btn-primary',
  children = 'Message us on WhatsApp',
  showIcon = true,
  onClick,
}: BookButtonProps) {
  return (
    <a
      href={whatsappLink(whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {showIcon && <IconBrandWhatsapp size={18} stroke={2} />}
      {children}
    </a>
  );
}
