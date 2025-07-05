import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test.describe('Login Page', () => {
  test('should have login form elements', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Mock a simple login page for demonstration
    await page.setContent(`
      <div>
        <input data-testid="username" placeholder="Username" />
        <input data-testid="password" type="password" placeholder="Password" />
        <button data-testid="login-button">Login</button>
        <div data-testid="error-message" style="display: none;">Error message</div>
      </div>
    `);

    // Test that we can interact with the form elements
    await loginPage.login('testuser', 'testpass');
    
    // Check that the username field was filled
    await expect(page.locator('[data-testid="username"]')).toHaveValue('testuser');
    
    // Check that the password field was filled
    await expect(page.locator('[data-testid="password"]')).toHaveValue('testpass');
  });
});