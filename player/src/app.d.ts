// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
        interface Locals {
            supabase: any,
            safeGetSession: () => Promise<{ session: any, user: any }>,
        }
	}
}

export {};
