import { AppProps } from "./AppProps";

export interface IGenericCard extends AppProps {
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
