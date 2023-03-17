import { AppProps } from "./AppProps";

export interface IGenericCardProps extends AppProps {
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
