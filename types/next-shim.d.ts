declare module "next" {
  export type Metadata = Record<string, unknown>;
}

declare module "next/link" {
  import type { FC, ReactNode } from "react";

  type LinkProps = {
    href: string;
    children?: ReactNode;
    className?: string;
    target?: string;
    rel?: string;
    prefetch?: boolean;
    onClick?: (event: unknown) => void;
  };

  const Link: FC<LinkProps>;
  export default Link;
}

declare module "next/image" {
  import type { FC } from "react";

  type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    priority?: boolean;
    className?: string;
    style?: Record<string, unknown>;
  };

  const Image: FC<ImageProps>;
  export default Image;
}

declare module "next/navigation" {
  interface ReadonlyURLSearchParams {
    get(name: string): string | null;
    toString(): string;
  }

  interface AppRouter {
    push(href: string): void;
    replace(href: string): void;
    prefetch(href: string): Promise<void> | void;
    back(): void;
    forward(): void;
    refresh(): void;
  }

  export function useRouter(): AppRouter;
  export function useSearchParams(): ReadonlyURLSearchParams;
}

declare module "next/server" {
  export class NextResponse {
    static json(body: unknown, init?: ResponseInit): Response;
  }
}

declare module "next/font/google" {
  type FontOptions = {
    subsets?: string[];
    weight?: string | string[];
    style?: string | string[];
    display?: string;
    variable?: string;
  };

  type FontResult = {
    className: string;
    variable?: string;
  };

  export function Inter(options: FontOptions): FontResult;
  export function DM_Serif_Display(options: FontOptions): FontResult;
  export function Nunito_Sans(options: FontOptions): FontResult;
  export function Noto_Sans_SC(options: FontOptions): FontResult;
}
