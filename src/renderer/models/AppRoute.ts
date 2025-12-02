import { ComponentType } from "react";

export default interface AppRoute {
  id: string;
  name: string;
  path: string;
  element: ComponentType;
  icon?: ComponentType;
  hideFromNav?: boolean;
}
