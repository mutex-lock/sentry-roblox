/**
 * Type definitions for src/init.lua (Sentry SDK)
 */

import { Options } from "./Defaults";

interface SentrySDK {
	Init(options: Options, publicKey?: Secret): void;
}

/**
 * The main Sentry SDK object.
 */
declare const SentrySDK: SentrySDK;
export = SentrySDK;
