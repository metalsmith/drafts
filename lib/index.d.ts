import { Plugin } from 'metalsmith';
export default drafts;
export type Options = {
    /**
     * Consider files without `draft` key drafts. Defaults to `false`.
     */
    default?: boolean;
    /**
     * Include drafts in the build output. Defaults to `false`.
     */
    include?: boolean;
};
/**
 * Metalsmith plugin to hide drafts from the output.
 *
 * @example
 * metalsmith.use(drafts()) // same as { include: false }
 * metalsmith.use(drafts(true)) // same as { include: true }
 * metalsmith.use(drafts({ default: false, include: false })) // same as default
 */
declare function drafts(options?: Options | boolean): Plugin;
