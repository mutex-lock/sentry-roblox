/**
 * Type definitions for src/Hub/Client.lua (Sentry SDK)
 */

import { Event } from "../Defaults";
import Scope from "./Scope";

declare type Hint = { [key: string]: unknown };

/**
 * A Client is the part of the SDK that is responsible for event creation. To give
 * an example, the Client should convert an exception to a Sentry event.
 *
 * The Client should be stateless, it gets the Scope injected and delegates the
 * work of sending the event to the Transport.
 */
declare class Client {
	/**
	 * Creates a new Client instance.
	 */
	constructor();

	/**
	 * Captures the event by merging it with other data with defaults from the client.
	 *
	 * In addition, if a scope is passed to this system, the data from the scope
	 * passes it to the internal transport.
	 */
	CaptureEvent(event: Event, hint: Hint, scope: Scope): void;

	/**
	 * Flushes out the queue for up to timeout seconds. If the client can guarantee
	 * delivery of events only up to the current point in time this is preferred. This
	 * might block for timeout seconds.
	 *
	 * The client is disabled after this method is called.
	 */
	Close(timeout?: number): void;

	/**
	 * Same as close difference is that the client is NOT disposed after invocation.
	 */
	Flush(timeout?: number): void;
}

export = Client;
