import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const baseURL = process.env.BASE_URL ?? 'http://127.0.0.1:4173';
const root = 'artifacts/screenshots';
await Promise.all(
	['desktop', 'tablet', 'mobile', 'states'].map((folder) =>
		mkdir(`${root}/${folder}`, { recursive: true })
	)
);

const browser = await chromium.launch();
const capture = async (path, viewport, output, setup, fullPage = true) => {
	const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
	await page.goto(`${baseURL}${path}`, { waitUntil: 'networkidle' });
	if (setup) await setup(page);
	await page.screenshot({ path: `${root}/${output}`, fullPage });
	await page.close();
};

await capture('/', { width: 1440, height: 1000 }, 'desktop/home-1440.png');
await capture('/shop', { width: 1440, height: 1000 }, 'desktop/shop-1440.png');
await capture(
	'/harvests/august-table-harvest',
	{ width: 1440, height: 1000 },
	'desktop/harvest-1440.png'
);
await capture('/', { width: 1024, height: 900 }, 'desktop/home-1024.png');
await capture('/shop', { width: 1024, height: 900 }, 'desktop/shop-1024.png');
await capture('/', { width: 768, height: 1024 }, 'tablet/home-768.png');
await capture('/shop', { width: 768, height: 1024 }, 'tablet/shop-768.png');
await capture('/', { width: 375, height: 812 }, 'mobile/home-375.png');
await capture('/shop', { width: 375, height: 812 }, 'mobile/shop-375.png');
await capture('/', { width: 320, height: 700 }, 'mobile/home-320.png');
await capture(
	'/harvests/august-table-harvest',
	{ width: 320, height: 700 },
	'mobile/harvest-320.png'
);
await capture(
	'/',
	{ width: 375, height: 812 },
	'states/mobile-navigation-open.png',
	async (page) => page.getByRole('button', { name: 'Menu' }).click(),
	false
);
await capture(
	'/faq',
	{ width: 1024, height: 900 },
	'states/faq-expanded.png',
	async (page) => page.getByText('Can I arrange courier pickup?', { exact: true }).click(),
	false
);
await capture(
	'/contact',
	{ width: 768, height: 1024 },
	'states/contact-validation.png',
	async (page) => page.getByRole('button', { name: 'Review message' }).click(),
	false
);
await capture(
	'/shop',
	{ width: 1024, height: 900 },
	'states/checkout-unavailable.png',
	async (page) =>
		page.getByRole('button', { name: 'Checkout coming soon' }).first().scrollIntoViewIfNeeded(),
	false
);

await browser.close();
console.log(`Captured review screenshots from ${baseURL}`);
