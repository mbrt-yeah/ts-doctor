import { IFile } from "../../models/file-system/file/i-file";

interface IThemeTemplateLookupResult {
    key: string,
    template?: IFile<string>,
};

export { IThemeTemplateLookupResult };
