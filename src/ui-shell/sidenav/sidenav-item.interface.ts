import { HeaderItemInterface } from "../header";

export interface SideNavItemInterface extends HeaderItemInterface {
	isSubMenu?: boolean;
	active?: boolean;
}
