import "server-only";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const sanityConfig =
  projectId && dataset && apiVersion
    ? {
        apiVersion,
        dataset,
        projectId,
        perspective: "published" as const,
        useCdn: true,
      }
    : null;

export const isSanityConfigured = Boolean(sanityConfig);

// Keeping this optional lets the application build and run until a contributor
// supplies local Sanity settings.
export const sanityClient = sanityConfig ? createClient(sanityConfig) : null;

export const sanityProject = sanityConfig
  ? { dataset: sanityConfig.dataset, projectId: sanityConfig.projectId }
  : null;

// A personal editorial site benefits from static delivery while still picking
// up published changes without a manual deployment.
export const contentRevalidateSeconds = 60;
