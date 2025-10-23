---
template: project
title: BlockWall
slug: "/projects/blockwall"
customer: Myself
website: 'https://blockwall.app/'
# git: 'https://github.com/bloodbee/algoliaextended'
draft: false
date: "2025-10-22T19:00:00.000Z"
dateCreation: "2025-10-22T00:00:00.000Z"
category: "SaaS"
description: Advertise differently - rent a block with web3. Vibecoded in 2 weeks.
tags:
  - cryptocurrency
  - side project
  - solana
  - nuxt
  - web3
socialImage: "./media/banniere.png"
---

![Main logo website blockwall](/media/logo-bg-white.png "BlockWall's logo")

BlockWall is a micro-SaaS: renting visual blocks with Web3.

👉 https://blockwall.app

👉 X (Twitter): @BlockWallApp

This post introduces the project and dives into the way I built it: a vibecoding sprint with ChatGPT as a copilot, strict constraints, and fast iteration.

## I. Why Web3?

Web3 is becoming a bigger part of our lives. The technology takes time to be adopted, but its advantages are clear:
- **Speed & reach**. Instant, global payments with low friction. No card forms, no chargebacks, no platform lock-in.
- **Proof & portability**. Each rental is tied to a wallet; we store the on-chain signature hash in the database for auditability.
- **Composability**. Wallet identity and on-chain flows let me add rewards, airdrops, or resale later without re-architecting.

Also, **I'm a blockchain and cryptocurrency adoptant**!

## II. The Idea

Plenty of mosaic/ad-wall experiments exist.

The common issues: slow/centralized checkout, limited media (GIF/video is an afterthought), opaque pricing and weak analytics, little love for the dev/creator experience.

BlockWall leans on **simple UX** (50 blocks, varied sizes: square/portrait/landscape), **transparent pricing** (size × duration, + small premium for video storage) and a **modern stack** so I can ship fast and fix things quickly.

Short backstory: I had this idea 10 years ago while living in Bordeaux, France. Back then, a coworker told me it was a stupid idea. Was it inspired by “[The Million Dollar Homepage](https://en.wikipedia.org/wiki/The_Million_Dollar_Homepage)”? Maybe!

## III. Vibecoding

What is *Vibecoding*? It's a minimal planning, short feedback loops, constraints as fuel, and a copilot mindset with **LLM** (Large Language Model). Not cowboy coding — but deliberately optimizing for momentum.

The _rules_ I set for my copilot buddy:
- One-page MVP. No navigation rabbit holes.
- Strict timebox. Ship fast, polish later.
- Copilot-first. Use ChatGPT for scaffolding, API hints, and refactors.
- Constraints over features. If a choice slows me (SSR/Web3 bundling, for example), pick the path that keeps me moving.

My small _rituals_ in this project:
- Micro-sprints (60–90 min): each ends with something visible (layout, upload, rent flow).
- “Ask the compiler” quickly: if a build/config fights me for  more than 15 minutes, reduce scope or change approach.
- Write once, reuse: snippets become composables (e.g., useWallet, useRent).
- Make errors loud: good console logs, small toasts, and a “pending → done/failed” state always visible.

How ChatGPT was _useful_:
- Layout generation: went from a generic grid to a deterministic “masonry-like” layout with square/portrait/landscape blocks.
- RLS & SQL: drafted tables, views, and no-overlap constraints with proper exceptions (status='done').
- S3 flow: presigned PUTs, public reads, cache headers, lifecycle rules; a small downscale step client-side (except GIFs).
- Web3 hygiene: moved all Solana client code to .client.ts composables + dynamic imports only inside functions; server-side switched to pure JSON-RPC to avoid bundler drama.
- Prod snags: fixed Vercel ESM quirks (e.g., jayson alias), ditched public mainnet RPC for Helius, and cleaned Vite caches.

Thanks to vibecoding & LLMs, it took me *~1 week of coding* to get this project up. Without that approach, it would have taken **10× the time**!

## IV. Tech stack

#### Frontend

[Nuxt 4](https://nuxt.com/) and [Tailwind](https://tailwindcss.com/).

I'm in love with this combo. Nuxt is amazing and allows you to develop whatever you want, in a meaningful, simple way. Seriously give it a try!
Nuxt lets you build meaningfully and simply—seriously, give it a try. Tailwind beats Bootstrap for me, no contest.

#### Blockchain

I built the dApp on [Solana](https://solana.com/).

It’s robust, scalable, and handles far more requests than Ethereum. Fees are so low it feels criminal.

#### Server

I used the server that ships with Nuxt (Nitro).
There are JSON-RPC calls to the configured RPC (Helius) — no @solana/web3.js on the server.
Why [Helius](https://helius.dev)? Because the basic public RPC of Solana is so slow, the transaction takes forever or can be reverted.

#### Database

[Supabase](https://supabase.com/) is fantastic! You’re on Postgres—but it’s **Postgres on steroids**: Cron jobs, Views, Constraints, Auth, Storage, Vault, and more.

#### Others

Storage is on Amazon S3—but any major cloud would work.
Deploys are on Vercel, though other providers would do fine.

For better performances: downscale images (not GIFs), lazy images/video, aggressive caching for assets.

## V. What was hard (and how I fixed it)

Here is an extensive list of my differents fails and what i've done to fix them:
- RPC 403 in production (public Solana endpoint): switched to Helius with env-based RPC URLs.
- SSR/ESM bundling fights: made web3 strictly client-only; server uses fetch JSON-RPC.
- Mobile taps opening the wrong modal: stop propagation on rented blocks, sane z-index, “only fire select if available”.
- S3 ACL mismatch: no ACLs; rely on bucket policies + presigned PUT.
- Slow media: client downscale (except GIF), Cache-Control: public, max-age=31536000, immutable.

## Conclusion

BlockWall is tiny, but it hits a sweet spot: a fun canvas for creators/brands + serious plumbing underneath (payments, storage, RLS). The vibecoding approach let me ship in record time without sacrificing stability. And I really enjoyed creating it.

<a href="https://blockwall.app" target="_blank" class="call-to-action">Try it now</a>

![Main logo website blockwall](/media/banniere.png "BlockWall's logo")
