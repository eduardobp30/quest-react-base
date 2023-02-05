const message = (label) => alert(`A label desse botão é ${label}.`);

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
