export interface IGenericCardProps {
  headline: {
    title: string;
    subtitle: string;
  };
  duration: string;
  location?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
}
