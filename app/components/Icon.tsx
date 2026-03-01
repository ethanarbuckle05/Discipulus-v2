"use client";

import React from "react";
import loadable, { LoadableComponent } from "@loadable/component";
import { IconBaseProps } from "react-icons/lib";

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps;
}

export function Icon({ nameIcon, propsIcon }: typesPropsIcon): React.ReactNode {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();
  const ElementIcon: LoadableComponent<IconBaseProps> = loadable(
    async () => await import(`react-icons/${lib}/index.js`),
    {
      resolveComponent: (el: JSX.Element) => el[nameIcon as keyof JSX.Element],
    }
  );

  const SafeIcon = ElementIcon as React.ComponentType<IconBaseProps>;
  return <SafeIcon {...propsIcon} />;
}
