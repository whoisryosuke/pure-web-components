export interface ListItem {
  name: string;
  url?: string;
  selected?: boolean;
}

export interface DropdownItem {
  dropdown?: ListItem[];
}

export type PureMenuItem = ListItem & DropdownItem;
