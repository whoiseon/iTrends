describe('Auth Screen', () => {
  it('"Sign In" button should be visible', async () => {
    await expect(element(by.id('signin-link-button'))).toBeVisible();
  });

  it('"Sign Up" button should be visible', async () => {
    await expect(element(by.id('signup-link-button'))).toBeVisible();
  });
});
