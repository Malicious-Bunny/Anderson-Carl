import { WHATSAPP_LINK } from '~/config';

interface BookButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function BookButton({ className, children, onClick }: BookButtonProps) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}
