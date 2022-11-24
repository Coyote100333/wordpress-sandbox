
/**
 * This tiny utility function is used to safely add query arguments to a URL.
 * It's needed because addQueryArgs from @wordpress/url removes the duplicate
 * attributes from the URL, e.g. /page?plugin=hello-dolly&plugin=gutenberg becomes
 * /page?plugin=hello-dolly&step=2 once `addQueryArgs(url, { step: 2 })` finishes.
 */
export default function safeAddQueryArgs(url, args) {
    const urlObj = new URL(url);
    for (const key in args) {
        urlObj.searchParams.delete(key);
    }
    for (const key in args) {
        if (Array.isArray(args[key])) {
            for(const value of args[key]) {
                urlObj.searchParams.append(key, value);
            }
        } else {
            urlObj.searchParams.append(key, args[key]);
        }
    }
    return urlObj.toString();
}
