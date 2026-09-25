import { IconMessageCircle } from '@tabler/icons-react';

import { CHAT_URL } from '~/site';

interface BookButtonProps {
  /** @deprecated Retained so existing `whatsapp={contact.whatsapp}` call sites keep compiling. */
  whatsapp?: string;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  onClick?: () => void;
}

export default function BookButton({
  className = 'btn btn-primary',
  children = 'Chat with us',
  showIcon = true,
  onClick,
}: BookButtonProps) {
  return (
    <a href={CHAT_URL} className={className} onClick={onClick}>
      {showIcon && <IconMessageCircle size={18} stroke={2} />}
      {children}
    </a>
  );
}
