// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            auth: {
                userId: string | null;
                sessionId: string | null;
                sessionClaims: Record<string, any> | null;
            };
        }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
