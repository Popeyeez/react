export const Button = ({ onClick, children, variant }) => {
  let classes = "h-[44px] rounded-lg";

  if (variant === "primary") {
    classes += " text-white bg-black w-full";
  } else if (variant === "secondary") {
    classes += " bg-white text-black w-[128px] border";
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
