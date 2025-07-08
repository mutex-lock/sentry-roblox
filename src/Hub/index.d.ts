/**
 * Type definitions for src/Hub/init.lua (Sentry SDK)
 */

import { Event, Level } from "../Defaults";
import Client from "./Client";
import Scope from "./Scope";

/**
 * The hub consists of a stack of clients and scopes.
 *
 * The SDK maintains two variables: The main hub (a global variable) and the current
 * hub (a variable local to the current thread or execution context, also sometimes
 * known as async local or context local).
 */
declare class Hub {
	/**
	 * Creates a new Hub instance.
	 */
	constructor(client?: Client, scope?: Scope);
	CaptureEvent(event: Event, hint?: unknown): void;
	CaptureMessage(message: string, level?: Level): void;
	CaptureException(errorMessage?: string): void | ((...args: unknown[]) => void);
	PushScope(): [Hub, () => void];
	ConfigureScope(callback: (scope: Scope) => void): Hub;
	GetClient(): Client;
	BindClient(client?: Client): void;
	UnbindClient(): void;
	StartSession(): void;
	EndSession(): void;
	Clone(): Hub;
	GetCurrentHub(): Hub;
}

export = Hub;
