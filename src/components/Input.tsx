const Input = (props: any) => {
  const { Icon, my, bg, type, ...rest } = props;
  return (
    <div className={`${my || ""} ${bg} w-full`}>
      <div className="container w-full mx-auto">
        <div className="border w-full rounded-md p-2 flex items-center">
          {Icon && <Icon />}
          <input
            type={type || "text"}
            className={`${
              bg || "bg-pageBg"
            } text-blackText placeholder:text-sm ml-2 w-full border-none focus:ring-0 p-0 focus:outline-none focus:border-none outline-none`}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
