/**
 * Type definitions for src/Defaults.lua (Sentry SDK)
 */

export interface Options {
	DSN: string;
	debug?: boolean;
	DefaultIntegrations?: boolean;
	Integrations?: Array<ModuleScript>;
	Release?: string;
	Environment?: string;
	SendClientEvents?: boolean;
	SendStudioEvents?: boolean;
	SampleRate?: number;
	MaxBreadcrumbs?: number;
	AttachStacktrace?: boolean;
	SendDefaultPII?: boolean;
	ServerName?: string;
	InAppInclude?: Array<string>;
	InAppExclude?: Array<string>;
	WithLocals?: boolean;
	BeforeSend?: Callback;
	BeforeBreadcrumb?: Callback;
	Transport?: unknown;
	ShutdownTimeout?: number;
}

export type ValidJSONValues = string | number | boolean;
export type Level = "fatal" | "error" | "warning" | "info" | "debug";

export interface Event {
	event_id?: string;
	timestamp?: string | number;
	platform?: "other";
	level?: Level;
	logger?: string;
	transaction?: string;
	server_name?: string;
	release?: string;
	dist?: string;
	tags?: { [key: string]: string };
	environment?: string;
	modules?: { [key: string]: string };
	extra?: { [key: string]: string };
	fingerprint?: string[];
	contexts?: { [key: string]: { [key: string]: unknown } };
	sdk?: {
		name: string;
		version: string;
		integrations?: string[];
		packages?: Array<{
			name: string;
			version: string;
		}>;
	};
	exception?: Array<{
		type?: string;
		value?: string;
		module?: string;
		thread_id?: string;
		mechanism?: {
			data?: { [key: string]: unknown };
			description?: string;
			handled?: boolean;
			help_link?: string;
			synthetic?: boolean;
			type?: string;
		};
		stacktrace?: {
			frames: unknown[];
			registers?: { [key: string]: string };
		};
	}>;
	user?: {
		id: number;
		username: string;
		geo: {
			city?: string;
			country_code: string;
			region?: string;
		};
	};
	message?: {
		message: string;
		formatted?: string;
		params?: string[];
	};
	errors?: Array<{
		type: string;
		path?: string;
		details?: string;
	}>;
}
