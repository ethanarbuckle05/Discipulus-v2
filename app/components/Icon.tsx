"use client";

import React from "react";
import type { IconBaseProps } from "react-icons/lib";
import { AiOutlineDeploymentUnit, AiOutlineSearch } from "react-icons/ai";
import { RxRocket } from "react-icons/rx";

const iconMap: Record<string, React.ComponentType<IconBaseProps>> = {
  AiOutlineDeploymentUnit,
  AiOutlineSearch,
  RxRocket,
};

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps;
}

export function Icon({ nameIcon, propsIcon }: typesPropsIcon): React.ReactNode {
  const IconComponent = iconMap[nameIcon];
  if (!IconComponent) return null;
  return <IconComponent {...propsIcon} />;
}
