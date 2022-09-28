import { ITheme } from "../../models/theme/i-theme";
import { Result } from "ts-results";

export interface IThemeLoader {
    start(): Promise<Result<ITheme, Error>>;
};
