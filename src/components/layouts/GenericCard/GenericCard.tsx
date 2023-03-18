import { IGenericCard } from "../../../interfaces/IGenericCard";
import Card from "../Card/Card";
import "./GenericCard.scss";

const GenericCard = ({
  headline,
  duration,
  location,
  description,
  link,
  className
}: IGenericCard): JSX.Element => {
  const { title, subtitle } = headline;
  return (
    <Card className={className ? className : ''}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{duration}</p>
      {location && <p>{location}</p>}
      {description && <p>{description}</p>}
      {link && <a href={link.url} target="_blank" rel='noreferrer'>{link.text}</a>}
    </Card>
  );
};

export default GenericCard;