const Card = (props) => {
  return (
    <div className="card" {...props}>
      {props.children}
    </div>
  );
};

export const Row = (props) => {
  return <div {...props}>{props.children}</div>;
};

export default Card;
