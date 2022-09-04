import React from 'react'

interface IProps {
    Icon: any,
    extraComponent?: any,
    title: string,
    active?: boolean
}

const MenuItem = (props: IProps) => {
    const { extraComponent, Icon, title, active } = props;
  return (
    <div className={`p-2 mb-1 flex items-center justify-between rounded-md w-full cursor-pointer hover:bg-pageBg ${active && "bg-pageBg"}`}>
      <div className="flex items-center">
        <div className="w-7">
          <Icon />
        </div>
        <p className="ml-2 text-blackText capitalize text-base base:text-sm">{title}</p>
      </div>

      <div>
        {extraComponent}
      </div>
    </div>
  )
}

export default MenuItem