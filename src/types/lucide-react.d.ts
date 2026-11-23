declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
    className?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LucideProps> & React.RefAttributes<SVGSVGElement>
  >;

  export const ArrowRight: LucideIcon;
  export const PhoneCall: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const MapPin: LucideIcon;
  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const Clock: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Sparkles: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Award: LucideIcon;
  export const Users: LucideIcon;
  export const Compass: LucideIcon;
  export const Building: LucideIcon;
  export const Target: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Laptop: LucideIcon;
  export const Building2: LucideIcon;
  export const Info: LucideIcon;
  export const Calendar: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Send: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ExternalLink: LucideIcon;

  const icons: { [key: string]: LucideIcon };
  export default icons;
}

