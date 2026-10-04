const { test, expect } = require('@playwright/test');
const path = require('path');

test('responsive layout verification', async ({ page }) => {
  const filePath = `file://${path.resolve(__dirname, '../index.html')}`;

  // Desktop Viewport
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(filePath);
  const desktopCols = await page.$eval('.fruit-grid', el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  console.log(`Desktop columns at 1280x800: ${desktopCols}`);
  expect(desktopCols).toBe(4);
  await page.screenshot({ path: path.resolve(__dirname, '../screenshots/desktop.png'), fullPage: true });

  // Mobile Viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(filePath);
  const mobileCols = await page.$eval('.fruit-grid', el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  console.log(`Mobile columns at 375x667: ${mobileCols}`);
  expect(mobileCols).toBe(1);
  await page.screenshot({ path: path.resolve(__dirname, '../screenshots/mobile.png'), fullPage: true });
});
