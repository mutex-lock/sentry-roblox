<div align="center">
	<a href="https://sentry.io/?utm_source=github&utm_medium=logo" target="_blank">
		<img src="https://sentry-brand.storage.googleapis.com/sentry-wordmark-dark-280x84.png" alt="Sentry" width="280" height="84">
	</a>
	<p><a href="https://devsparkle.me/sentry-roblox/">View Docs</a></p>
</div>

*Sentry is a developer-first error tracking and performance monitoring platform that helps developers see what actually matters, solve quicker, and learn continuously about their applications;* and **roblox-sentry** helps you get your game up and running in no time!

- Capture console errors and warnings from the get-go!
- Add context that helps you find the root problem.
- Catch client errors that may go unreported.
- Track player sessions
<!--moonwave-hide-before-this-line-->
# Getting Started

## Install for roblox-ts:

```sh
pnpm add @rbxts/sentry # Using your preferred package manager
```

```ts
// sentry.server.ts
import SentrySDK from "@rbxts/sentry";

SentrySDK.Init({ DSN: "<DSN FROM YOUR SENTRY PROJECT>", });
```

## Install for Luau:

There are two supported ways to install Sentry for Luau projects:

### Static Install

Head over to the [releases tab](http://github.com/devSparkle/sentry-roblox/releases)
and [download the prepared `.rbxm`](https://github.com/devSparkle/sentry-roblox/releases/latest/download/SentrySDK.rbxm) file. Insert this file into your game and drag
it wherever you'd like to keep your ModuleScripts. It must be parented somewhere
that replicates to clients, such as `ReplicatedStorage`, if you intend to
monitor client errors too.

### Wally Install

This repository is available from wally! Just add it to your `wally.toml` file.

```toml
[dependencies]
Sentry = "devsparkle/sentry-roblox@^1.0.0"
```

This install has the benefit of easily updating whenever we release bugfixes,
security patches and even new features, just by using `wally update`!

### Usage

To complete the installation, add a server-sided script in your game, and paste the following contents:

```lua
local SentrySDK = require(game:GetService("ReplicatedStorage").SentrySDK)

SentrySDK:Init({
	DSN = "<DSN FROM YOUR SENTRY PROJECT>"
})
```
