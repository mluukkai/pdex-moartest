// @ts-nocheck
// eslint-disable-next-line no-undef
const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('can follow a link', async ({ page }) => {
    await page.getByText('ivysaur').click()

    await expect(page.getByText('Overgrow')).toBeVisible()
    await expect(page.getByText('Chlorophyll')).toBeVisible()
  })
})