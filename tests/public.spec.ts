import { expect, test } from '@playwright/test';
test('homepage loads branded experience', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: /Small-Batch Microgreens/ })).toBeVisible();
	await expect(
		page.getByText('Limited harvests, grown to order', { exact: false }).first()
	).toBeVisible();
});
test('mobile navigation works', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 800 });
	await page.goto('/');
	await page.getByRole('button', { name: 'Menu' }).click();
	await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Contact' }).last()).toBeVisible();
});
test('shop shows active context and disabled checkout', async ({ page }) => {
	await page.goto('/shop');
	await expect(page.getByText('August Table Harvest')).toBeVisible();
	const buttons = page.getByRole('button', { name: 'Checkout coming soon' });
	await expect(buttons.first()).toBeDisabled();
});
test('harvest detail works and sold/unavailable state prevents checkout', async ({ page }) => {
	await page.goto('/harvests/august-table-harvest');
	await expect(page.getByRole('heading', { name: 'August Table Harvest' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Checkout coming soon' }).first()).toBeDisabled();
});
test('FAQ accordion works', async ({ page }) => {
	await page.goto('/faq');
	const summary = page.getByText('Can I arrange courier pickup?', { exact: true });
	await summary.click();
	await expect(page.getByText(/Courier arrangements and charges/)).toBeVisible();
});
test('contact validates required fields', async ({ page }) => {
	await page.goto('/contact');
	await page.getByRole('button', { name: 'Review message' }).click();
	await expect(page.getByText('Enter your name.')).toBeVisible();
	await expect(page.getByText('Enter a valid email address.')).toBeVisible();
});
test('public pages do not expose a street address', async ({ page }) => {
	for (const path of ['/', '/shop', '/harvests', '/how-it-works', '/about', '/faq', '/contact']) {
		await page.goto(path);
		const text = await page.locator('body').innerText();
		expect(text).not.toMatch(
			/\b\d{2,6}\s+[A-Za-z]+\s+(Street|St\.?|Road|Rd\.?|Lane|Ln\.?|Drive|Dr\.?|Avenue|Ave\.?)\b/i
		);
	}
});

test('key public pages do not overflow at target widths', async ({ page }) => {
	for (const width of [320, 375, 768, 1024, 1440]) {
		await page.setViewportSize({ width, height: 900 });
		for (const path of ['/', '/shop', '/harvests/august-table-harvest', '/contact']) {
			await page.goto(path);
			const overflow = await page.evaluate(
				() => document.documentElement.scrollWidth > window.innerWidth
			);
			expect(overflow, `${path} overflowed at ${width}px`).toBe(false);
		}
	}
});
