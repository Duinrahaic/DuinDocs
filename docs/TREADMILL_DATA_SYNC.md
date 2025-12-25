# Treadmill Data Auto-Sync System

This document explains how treadmill compatibility data is automatically synchronized from the source repository.

## Overview

The treadmill compatibility data is maintained in an external repository at:
https://github.com/Duinrahaic/treadmill-compatibility

This system automatically fetches and updates the data in this documentation site.

## How It Works

### 1. Data Source
- **Source Repository**: `Duinrahaic/treadmill-compatibility`
- **Data File**: `data/treadmills.json`
- **Raw URL**: https://raw.githubusercontent.com/Duinrahaic/treadmill-compatibility/master/data/treadmills.json

### 2. Automatic Updates

The system runs on three triggers:

#### a. Daily Schedule
- Runs every day at 2 AM UTC
- Checks for new data from the source repository
- Automatically commits and deploys if changes are detected

#### b. Manual Trigger
You can manually trigger an update:
1. Go to the GitHub Actions tab
2. Select "Update Treadmill Data" workflow
3. Click "Run workflow"

#### c. Webhook (Optional)
- The workflow can be triggered via repository dispatch
- Event type: `treadmill-data-updated`
- Useful for immediate updates when PRs are merged in the source repo

### 3. Files Updated

When data changes, two files are automatically updated:

- **`public/data/treadmills.json`**: Raw JSON data (for external access)
- **`src/data/treadmills.ts`**: TypeScript module (used by components)

### 4. Deployment

After the data files are updated and committed:
1. The commit triggers your hosting platform's auto-deploy
2. The site rebuilds with the new data
3. Changes are live within minutes

## Manual Update

If you need to manually update the data:

```bash
# Run the fetch script
node scripts/fetch-treadmills.js

# Commit the changes
git add public/data/treadmills.json src/data/treadmills.ts
git commit -m "chore: update treadmill compatibility data"
git push
```

## Setting Up Webhooks (Optional)

To enable instant updates when PRs are merged in the source repository:

### In the Source Repository (treadmill-compatibility)

Create `.github/workflows/notify-docs.yml`:

```yaml
name: Notify Documentation Site

on:
  push:
    branches:
      - master
    paths:
      - 'data/treadmills.json'

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger docs update
        run: |
          curl -X POST \
            -H "Accept: application/vnd.github+json" \
            -H "Authorization: token ${{ secrets.DOCS_REPO_TOKEN }}" \
            https://api.github.com/repos/YOUR_USERNAME/DuinDocs/dispatches \
            -d '{"event_type":"treadmill-data-updated"}'
```

### Setup Required:
1. Create a Personal Access Token with `repo` scope
2. Add it as `DOCS_REPO_TOKEN` secret in the source repository
3. Update `YOUR_USERNAME` in the workflow file

## Monitoring

Check the status of updates:
- **GitHub Actions**: View workflow runs and logs
- **Last Updated**: Check the timestamp in `src/data/treadmills.ts`
- **Data Version**: Check `meta.generatedAt` in the JSON

## Troubleshooting

### Data Not Updating
1. Check GitHub Actions workflow runs for errors
2. Verify the source repository is accessible
3. Check network/API rate limits

### Build Failures
1. Ensure the JSON structure matches expected schema
2. Check TypeScript type compatibility
3. Review build logs for import errors

### Manual Override
If automatic updates fail, you can always manually update:
1. Download the latest `treadmills.json` from the source repo
2. Run `node scripts/fetch-treadmills.js`
3. Commit and push the changes

## Data Schema

The data follows this structure:

```typescript
{
  meta: {
    generatedAt: string;      // ISO timestamp
    schemaVersion: string;    // Version number
  },
  treadmills: [
    {
      id: string;
      make: string;
      model: string;
      driver: string;
      features: string[];     // e.g., ["speedControl", "inclineControl"]
      vendorApps: Array<{
        name: string;
        supported: boolean;
      }>;
    }
  ]
}
```

## Contributing

To add or update treadmill data:
1. Submit PRs to the source repository: `Duinrahaic/treadmill-compatibility`
2. Once merged, this documentation will auto-update within 24 hours
3. Or manually trigger an immediate update via GitHub Actions
