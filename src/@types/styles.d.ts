import "styled-components";
import type { CSSProp } from "styled-components";
import { defaultTheme } from "../components/styles/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
    // @ts-expect-error: Type merging is required for DefaultTheme
  interface DefaultTheme extends ThemeType {};
}

// This is fine - the T parameter is required for type merging
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    css?: CSSProp<ThemeType>;
  }
}
