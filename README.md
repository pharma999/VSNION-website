# VSNION - Creative Digital Solutions

A modern, responsive website for VSNION, showcasing their expertise in AI, web development, mobile apps, IoT, DevOps, and training services.

## Features

- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance Focused**: Built with Vite for fast loading
- **Accessibility**: WCAG compliant with proper ARIA labels
- **PWA Ready**: Includes manifest and service worker setup
- **Analytics Ready**: Google Analytics integration
- **Training Programs**: Comprehensive technology training and workshops

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Material-UI
- **SEO**: React Helmet Async

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Deployment

### Production Server Configuration

For optimal performance and SEO, configure your server with:

- **Compression**: Enable gzip/brotli compression
- **Redirects**: Force HTTPS and www/non-www redirects
- **Caching**: Set appropriate cache headers for static assets
- **CDN**: Use a CDN for global distribution

### Example Nginx Configuration

```nginx
server {
    listen 80;
    server_name vsnion.com www.vsnion.com;
    return 301 https://www.vsnion.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.vsnion.com;

    # SSL configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Static assets
    location / {
        root /path/to/build;
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Images

Replace placeholder images in `/public/images/` with optimized versions:
- ai-solutions.jpg
- web-development.jpg
- app-development.jpg
- iot-implementation.jpg
- devops.jpg

## Analytics

Update the Google Analytics ID in `src/app/App.tsx` with your actual GA measurement ID.

## SEO Checklist

- [x] Meta tags and Open Graph
- [x] Structured data (JSON-LD)
- [x] Sitemap and robots.txt
- [x] Favicon and manifest
- [x] Semantic HTML
- [x] Accessibility features
- [ ] Submit to search engines
- [ ] Monitor with Google Search Console

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
