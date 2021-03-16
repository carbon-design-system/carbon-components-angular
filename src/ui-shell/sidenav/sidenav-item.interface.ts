import { HeaderItemInterface } from "../header/header.module";

export interface SideNavItemInterface extends HeaderItemInterface {
	isSubMenu?: boolean;
	active?: boolean;
}
