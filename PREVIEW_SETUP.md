# Storyblok Preview Setup

## Production Preview Setup

### 1. Set Preview URL in Storyblok

Go to **Settings > Visual Editor** and set:
```
https://corydhmiller.com/api/preview?secret=YOUR_SECRET&slug=
```

### 2. Environment Variables

Add to your production environment:
```bash
# Storyblok tokens
NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN=your_preview_token_here
NEXT_PUBLIC_STORYBLOK_PUBLIC_TOKEN=your_public_token_here
STORYBLOK_PREVIEW_SECRET=your_secret_key_here

# Fallback token (if you don't have separate tokens)
NEXT_PUBLIC_STORYBLOK_API_TOKEN=your_token_here
```

### 3. Get Your Tokens

1. **Preview Token:** Go to Settings > Access Tokens > Preview Token
2. **Public Token:** Go to Settings > Access Tokens > Public Token  
3. **Preview Secret:** Create a random string (e.g., `openssl rand -hex 32`)

## How Preview Works

### Preview URLs:

**1. Storyblok Configuration URL:**
```
https://corydhmiller.com/api/preview?secret=YOUR_SECRET&slug=
```

**2. Direct Preview Testing:**
```
https://corydhmiller.com/api/preview?secret=YOUR_SECRET&slug=blog/your-post-slug
```

**3. Actual Preview Page:**
```
https://corydhmiller.com/preview/your-post-slug
```

### Visual Editor Workflow:

1. **Edit content in Storyblok**
2. **Click "Preview" button**  
3. **Visual Editor opens with live editing**
4. **See changes in real-time**

## Troubleshooting

### Common Issues:

1. **"Invalid secret" error:**
   - Check your `STORYBLOK_PREVIEW_SECRET` matches the URL

2. **"Story not found" error:**
   - Verify the slug exists in Storyblok
   - Check your preview token permissions

3. **Visual Editor not loading:**
   - Ensure site is deployed and accessible
   - Check browser console for errors

4. **Changes not reflecting:**
   - Hard refresh the Visual Editor
   - Check that draft mode is enabled (yellow banner)