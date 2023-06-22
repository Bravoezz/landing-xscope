"use client";
import React, { ReactNode } from "react";

interface UnicValuesProps {
  children: ReactNode;
  value?: string;
  valueDetail?: string;
  cls:string;
}

const UnicValues = ({ children,value,valueDetail,cls }: UnicValuesProps) => {
  return <div className="flex flex-col items-center justify-between" >
    {children}
    <p className="mb-[8px] value">{value}</p>
    <p className={`${cls} typografy `}>{valueDetail}</p>
    </div>;
};

export default UnicValues;
