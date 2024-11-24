// global.d.ts
export {};

declare global {
  interface AppUser {
    id: number;
    user_metadata: {
      avatar_url?: string;
      full_name?: string;
      email?: string;
      xp?: string;
    };
  }
}
