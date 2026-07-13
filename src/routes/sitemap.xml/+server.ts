import type { RequestHandler } from './$types';
import { harvests } from '$lib/data/harvests';
const routes = [
	'',
	'/shop',
	'/harvests',
	'/how-it-works',
	'/about',
	'/faq',
	'/contact',
	'/privacy',
	'/terms'
];
export const prerender = true;
export const GET: RequestHandler = () => {
	const urls = [...routes, ...harvests.filter((h) => h.published).map((h) => `/harvests/${h.slug}`)]
		.map((path) => `<url><loc>https://dtwentyfarms.com${path}</loc></url>`)
		.join('');
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
};
