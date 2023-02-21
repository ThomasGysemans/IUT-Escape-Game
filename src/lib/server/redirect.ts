/**
 * Returns the right HTTP response to start a redirection.
 * The default redirection feature of SvelteKit doesn't work properly.
 * @param location The destination.
 * @param status The HTTP status code, which is 302 by default.
 * @returns The right HTTP response.
 */
export default function (location: string, status: number = 302) {
  return new Response(null, { status, headers: { Location: location } });
}