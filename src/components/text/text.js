import "./text.css";

const Text = (props) => {
  return (
    <p className="text" style={{ color: props.color }}>
      {props.text}
    </p>
  );
};

export default Text;
