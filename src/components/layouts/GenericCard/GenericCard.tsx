import { IGenericCardProps } from "../../../interfaces/GenericCardProps";
import Card from "../Card/Card";
import "./GenericCard.scss";

const GenericCard = ({
  headline,
  duration,
  location,
  description,
  link,
  className
}: IGenericCardProps): JSX.Element => {
  const { title, subtitle } = headline;
  return (
    <Card className={className ? className : ''}>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{duration}</p>
      {location && <p>{location}</p>}
      {description && <p>{description}</p>}
      {link && <a href={link.url} target="_blank" rel='noreferrer'>{link.text}</a>}
    </Card>
  );
};

export default GenericCard;