# Next.js Authentication Template

This template provides authentication using Auth.js (formerly NextAuth.js) with multiple providers and database options.

## Initial Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Generate auth secret:
   ```bash
   openssl rand -base64 32
   ```
   Add this to your `.env.local` file as `AUTH_SECRET`
4. Create a `.env.local` file in the root directory if it doesn't exist

## Database Configuration

Choose one of the following database options:

### Option 1: Local PostgreSQL with Docker

1. Install Docker Desktop
2. Navigate to the `database` folder
3. Update `docker-compose.yml` with your preferred settings:

   ```yaml
   POSTGRES_USER: your_username
   POSTGRES_PASSWORD: your_password
   POSTGRES_DB: your_database_name

   # If using pgAdmin, update:
   PGADMIN_DEFAULT_EMAIL: your.email@example.com
   PGADMIN_DEFAULT_PASSWORD: your_password
   ```

4. Start the containers:
   ```bash
   cd database
   docker compose up -d
   ```
5. Add your local database URL to `.env.local`:
   ```
   DATABASE_URL="postgresql://your_username:your_password@localhost:5432/your_database_name"
   ```

### Option 2: Vercel Postgres/Neon Database

1. Create a new database at [Vercel Storage](https://vercel.com/storage/postgres) or [Neon](https://neon.tech)
2. Copy the connection string to `.env.local`:
   ```
   DATABASE_URL=your_connection_string
   ```

## Configure Database Connection

In `src/lib/db.ts`, the database connection is automatically set up using the `DATABASE_URL` from your environment variables. No manual configuration is needed for the connection.

## Auth.js Configuration

### Database Schema

The database schema is already configured in `src/db/schema.ts` with the necessary tables for Auth.js:

- `users`
- `accounts`
- `sessions`
- `verificationTokens`

### Apply Database Migrations

After setting up your database connection:

```bash
pnpm dlx drizzle-kit push:pg
```

This will apply your schema to the database.

### Database Studio (Optional)

To view and manage your database through a visual interface:

```bash
pnpm dlx drizzle-kit studio
```

## OAuth Provider Setup

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID
3. Add authorized origins: `http://localhost:3000` (or your production URL)
4. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
5. Add credentials to `.env.local`:
   ```
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   ```

### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Add homepage URL: `http://localhost:3000`
4. Add callback URL: `http://localhost:3000/api/auth/callback/github`
5. Add credentials to `.env.local`:
   ```
   GITHUB_ID=your_client_id
   GITHUB_SECRET=your_client_secret
   ```

### Microsoft Entra ID (Azure AD)

1. Go to [Microsoft Entra ID](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps)
2. Create a new application registration
3. Set the redirect URI as Web platform with value: `http://localhost:3000/api/auth/callback/azure-ad`
4. Add credentials to `.env.local`:
   ```
   AZURE_AD_CLIENT_ID=your_client_id
   AZURE_AD_CLIENT_SECRET=your_client_secret
   AZURE_AD_TENANT_ID=your_tenant_id
   ```

## Email Provider Setup

For email authentication and notifications:

1. Choose a provider like Resend, SendGrid, or Postmark
2. For example, with Resend:
   - Sign up at [Resend](https://resend.com)
   - Create an API key
   - Add to `.env.local`:
     ```
     EMAIL_SERVER=smtp://api:your_api_key@smtp.resend.com:587
     EMAIL_FROM=your_verified_sender_email
     ```

## Environment Variables

Create a `.env.local` file with the following:

```
# Auth
AUTH_SECRET=your_generated_secret
AUTH_URL=http://localhost:3000

# Database
DATABASE_URL=your_database_connection_string

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
AZURE_AD_CLIENT_ID=your_azure_client_id
AZURE_AD_CLIENT_SECRET=your_azure_client_secret
AZURE_AD_TENANT_ID=your_azure_tenant_id

# Email
EMAIL_SERVER=your_smtp_server_details
EMAIL_FROM=your_email_address
```

## Protected Routes

The application uses middleware to protect routes. Review or modify `src/middleware.ts` to adjust protected routes:

```typescript
// Routes that require authentication
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/settings/:path*",
    "/api/authenticated/:path*",
  ],
};
```

## Development

Start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your application.

## Production Deployment

For deployment to production:

1. Set up your production environment variables
2. For Vercel deployment:
   ```bash
   pnpm dlx vercel
   ```
3. For other platforms, build the production version:
   ```bash
   pnpm build
   pnpm start
   ```

## Additional Resources

- [Auth.js Documentation](https://authjs.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
