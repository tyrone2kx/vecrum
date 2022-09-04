

const Input = (props: any) => {
  const { Icon,my, bg, ...rest } = props;
  return (
    <div className={`${my || ""} ${bg} w-full`}>
      <div className="container w-full mx-auto">
        <div className="border w-full rounded-md p-2 flex items-center">
          {Icon && <Icon />}
          <input
            className={`${bg || "bg-pageBg"} placeholder:text-sm ml-2 w-full focus:outline-none outline-none`}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
