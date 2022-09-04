import React, { Children, useEffect, useMemo, useState } from "react";

const ChildComponent = ({ element, active, setActive, setContent, index }) => {
  const { title, children } = element.props;
  const hasTitle = title ? true : false;
  const isActive = useMemo(() => active === title, [active, title]);
  useEffect(() => {
    if (isActive) {
      setContent(children);
    }
  }, [isActive]);

  useEffect(() => {
    if (!active && hasTitle && index === 0) {
      setActive(title);
      setContent(children);
    }
  }, []);

  return hasTitle ? (
    <div
      className={`p-2 px-3 cursor-pointer border-r last:border-r-0 text-sm hover:bg-pageBg whitespace-nowrap ${
        isActive && "bg-pageBg"
      } items-center`}
      title={title}
      onClick={() => {
        setActive(title);
        setContent(children);
      }}
    >
      <p className="text-sm text-secText">{title}</p>
    </div>
  ) : (
    <></>
  );
};

const Parent = ({ children, setContent, setActive, active }) => {
  const arrayChildren = Children.toArray(children);

  return (
    <div className="rounded-lg scrollbar-hide border flex bg-white my-6 w-auto md:w-fit md:max-w-full overflow-x-auto">
      {Children.map(arrayChildren, (child, index) => (
        <ChildComponent
          active={active}
          index={index}
          setActive={setActive}
          setContent={setContent}
          element={child}
          key={index}
        />
      ))}
    </div>
  );
};


interface IProps {
  children: any;
  defaultActive?: string;
}

const Tab = ({ children, defaultActive }: IProps) => {
  const [active, setActive] = useState(defaultActive || "");
  const [content, setContent] = useState("");
  return (
    children && (
      <>
        <Parent active={active} setActive={setActive} setContent={setContent}>
          {children}
        </Parent>
        <div className="view">{content}</div>
      </>
    )
  );
};

export default Tab;
