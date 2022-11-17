export interface FileItem {
	file: File;
	state: "edit" | "upload" | "complete";
	uploaded: boolean;
	invalid?: boolean;
	invalidTitle?: string;
	invalidText?: string;
}
