const message = (label) => alert(`Essa label é ${label}`);

const Button = (props) => {
  return (
    <>
      <button
        onClick={() => {
          message(props.label);
        }}
      >
        {props.label}
      </button>
    </>
  );
};

export default Button;

// onClick={() => {
//    message(props.label);
//}}
