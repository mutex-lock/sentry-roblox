/**
 * Type definitions for src/Hub/Scope.lua (Sentry SDK)
 */

import { Event, Level, ValidJSONValues } from "../Defaults";

declare type Hint = { [key: string]: unknown };
declare type Breadcrumb = unknown;

/**
 * A scope holds data that should implicitly be sent with Sentry events.
 * It can hold context data, extra parameters, level overrides, fingerprints etc.
 */
declare class Scope {
	/**
	 * Creates a new Scope instance.
	 */
	constructor();

	/**
	 * The reason for this callback-based API is efficiency. If the SDK is disabled, it
	 * should not invoke the callback, thus avoiding unnecessary work.
	 */
	ConfigureScope(callback: (scope: Scope) => void): void;

	/**
	 * Adds information of the given player to each event sent.
	 * Only one user may be associated with a Scope at any given time. Calling this method will override the current user.
	 * When no player is provided, any existing player information is removed.
	 *
	 * The `UserId`, `Name` and country-code of the player is sent.
	 */
	SetUser(player: Player | number): void;

	SetExtra(key: string, value: ValidJSONValues): void;
	SetExtras(dictionary: { [key: string]: ValidJSONValues }): void;
	SetTag(key: string, value: ValidJSONValues): void;
	SetTags(dictionary: { [key: string]: ValidJSONValues }): void;
	SetContext(key: string, value: ValidJSONValues): void;
	SetLevel(level: Level): void;
	SetTranSaction(transactionName: string): void;
	SetFingerprint(fingerprint: string[]): void;
	AddEventProcessor(processor: (event: Event, hint: Hint) => Event): void;
	Clear(): void;
	Clone(): Scope;
	AddBreadcrumb(breadcrumb: Breadcrumb): void;
	ClearBreadcrumbs(): void;
	ApplyToEvent(event: Event, hint: Hint): Event;
}

export = Scope;
