"use client";
import React, { ReactNode, FC } from "react";

interface CardProps {
  children: ReactNode;
  icon: ReactNode;
  title: string;
}

const CardBox: FC<CardProps> = ({ children, icon, title }) => {
  return (
    <div className="p-4 bg-white rounded-2xl">
      <div className="flex items-center gap-2 w-max bg-gray-200 rounded-full px-4 py-1 mb-4 text-neutral-700 capitalize">
        {icon}
        <h1 className="font-semibold">{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CardBox;
