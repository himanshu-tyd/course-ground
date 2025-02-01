const Button = ({
  disabled,
  type,
  lable,
  icon,
  containerClass,
  handleClick,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={`font-clash w-auto flex px-6 py-2 sm:px-6 sm:py-4 items-center justify-center gap-3 duration-300 ease-in-out hover:scale-105 active:scale-100 ${containerClass} `}
    >
      <p>{lable}</p>
      {icon && <p className="hidden sm:block">{icon}</p>}
    </button>
  );
};

export default Button;
