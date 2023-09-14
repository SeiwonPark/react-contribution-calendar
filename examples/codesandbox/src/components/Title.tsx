interface TitleProps {
  tag: string | number;
  start: string;
  end: string;
}

export const Title = ({ tag, start, end }: TitleProps) => {
  return (
    <div className="title-container">
      <h3>Example {tag}.</h3>
      <span className="date">{`${start} ~ ${end}`}</span>
    </div>
  );
};
