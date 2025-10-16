"use client";

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  claimCode as claimDemoCode,
  exportAuthState,
  getConsents,
  getMembership,
  getUnlockedStories,
  getUnlockedWorlds,
  getUser as getDemoUser,
  hydrateAuthState,
  recordConsent as recordDemoConsent,
  registerUnlock as registerDemoUnlock,
  setUnder18 as setDemoUnder18,
  signIn as demoSignIn,
  signOut as demoSignOut,
  type ClaimCodeResult,
  type ConsentRecord,
  type DemoUser,
  type Membership,
} from "@/lib/auth/memoryClient";

const STORAGE_KEY = "dhfh-auth-state";

type StoredState = {
  user: DemoUser | null;
  consents: ConsentRecord[];
  worlds: string[];
  stories: string[];
};

type AppContextValue = {
  user: DemoUser | null;
  membership: Membership;
  unlockedWorlds: string[];
  unlockedStories: string[];
  signIn: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  claimCode: (code: string) => Promise<ClaimCodeResult>;
  recordConsent: (consent: ConsentRecord) => void;
  setUnder18: (value: boolean) => void;
  registerUnlock: (payload: { world: string; stories: string[] }) => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function useAppContext(): AppContextValue {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
}

export function AppProvider({ children }: PropsWithChildren): JSX.Element {
  const [user, setUser] = useState<DemoUser | null>(() => getDemoUser());
  const [consents, setConsents] = useState<ConsentRecord[]>(() => getConsents());
  const [unlockedWorlds, setUnlockedWorlds] = useState<string[]>(() => getUnlockedWorlds());
  const [unlockedStories, setUnlockedStories] = useState<string[]>(() => getUnlockedStories());
  const [hydrated, setHydrated] = useState(false);

  const membership = useMemo(() => getMembership(), []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let active = true;

    const hydrate = () => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);

        if (raw) {
          const parsed = JSON.parse(raw) as Partial<StoredState>;

          hydrateAuthState({
            user: parsed.user ?? null,
            consents: parsed.consents ?? [],
            worlds: parsed.worlds ?? [],
            stories: parsed.stories ?? [],
          });

          if (active) {
            setUser(getDemoUser());
            setConsents(getConsents());
            setUnlockedWorlds(getUnlockedWorlds());
            setUnlockedStories(getUnlockedStories());
          }
        }
      } catch (error) {
        console.warn("Failed to hydrate auth state", error);
      } finally {
        if (active) {
          setHydrated(true);
        }
      }
    };

    hydrate();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") {
      return;
    }

    if (!user && consents.length === 0 && unlockedWorlds.length === 0 && unlockedStories.length === 0) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }

    const serialisable = exportAuthState();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(serialisable));
  }, [user, consents, unlockedWorlds, unlockedStories, hydrated]);

  const handleSignIn = useCallback(async (email: string) => {
    const nextUser = await demoSignIn(email);
    setUser(nextUser);
  }, []);

  const handleSignOut = useCallback(async () => {
    await demoSignOut();
    setUser(getDemoUser());
    setConsents(getConsents());
    setUnlockedWorlds(getUnlockedWorlds());
    setUnlockedStories(getUnlockedStories());

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleClaimCode = useCallback(async (code: string) => {
    const result = await claimDemoCode(code);
    if (result.ok) {
      setUnlockedWorlds(getUnlockedWorlds());
      setUnlockedStories(getUnlockedStories());
    }
    return result;
  }, []);

  const handleRecordConsent = useCallback((consent: ConsentRecord) => {
    recordDemoConsent(consent);
    setConsents(getConsents());
  }, []);

  const handleSetUnder18 = useCallback((value: boolean) => {
    setDemoUnder18(value);
    setUser(getDemoUser());
  }, []);

  const handleRegisterUnlock = useCallback((payload: { world: string; stories: string[] }) => {
    registerDemoUnlock(payload.world, payload.stories);
    setUnlockedWorlds(getUnlockedWorlds());
    setUnlockedStories(getUnlockedStories());
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      user,
      membership,
      unlockedWorlds,
      unlockedStories,
      signIn: handleSignIn,
      signOut: handleSignOut,
      claimCode: handleClaimCode,
      recordConsent: handleRecordConsent,
      setUnder18: handleSetUnder18,
      registerUnlock: handleRegisterUnlock,
    }),
    [
      user,
      membership,
      unlockedWorlds,
      unlockedStories,
      handleSignIn,
      handleSignOut,
      handleClaimCode,
      handleRecordConsent,
      handleSetUnder18,
      handleRegisterUnlock,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
