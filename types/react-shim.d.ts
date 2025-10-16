declare module "react" {
  export type ReactText = string | number;
  export type ReactChild = ReactElement | ReactText;
  export type ReactNode = ReactChild | ReactNode[] | boolean | null | undefined;

  export interface ReactElement<P = any> {
    type: any;
    props: P;
    key: string | number | null;
  }

  export type PropsWithChildren<P = {}> = P & { children?: ReactNode };

  export interface FC<P = {}> {
    (props: PropsWithChildren<P>): ReactElement | null;
  }

  export interface Context<T> {
    Provider: FC<{ value: T }>;
    Consumer: FC<{ children: (value: T) => ReactNode }>;
  }

  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S);

  export function createContext<T>(defaultValue: T): Context<T>;
  export function useContext<T>(context: Context<T>): T;
  export function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void;
  export function useMemo<T>(factory: () => T, deps: unknown[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: unknown[]): T;
  export function useRef<T>(initialValue: T): { current: T };

  const React: {
    createElement: (...args: any[]) => ReactElement;
  };

  export default React;
}

declare module "react/jsx-runtime" {
  export const jsx: (...args: any[]) => any;
  export const jsxs: (...args: any[]) => any;
  export const Fragment: any;
}

declare module "react/jsx-dev-runtime" {
  export const jsxDEV: (...args: any[]) => any;
  export const Fragment: any;
}

declare global {
  namespace JSX {
    type Element = import("react").ReactElement;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
