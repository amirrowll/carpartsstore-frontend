// Simple Lighthouse test script
const fs = require('fs');
const path = require('path');

// Analyze the build output for SEO and performance
const analyzeBuild = () => {
  const distPath = path.join(__dirname, 'dist');
  
  console.log('🔍 Analyzing build output for SEO and Performance...\n');
  
  // Check if dist folder exists
  if (!fs.existsSync(distPath)) {
    console.log('❌ dist folder not found. Run `npm run build` first.');
    return;
  }
  
  // Check index.html
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    const htmlContent = fs.readFileSync(indexPath, 'utf8');
    
    console.log('📄 Index.html Analysis:');
    
    // Check for SEO elements
    const checks = {
      'Title tag': /<title>.*<\/title>/i.test(htmlContent),
      'Meta description': /<meta[^>]*name=["']description["'][^>]*>/i.test(htmlContent),
      'Meta keywords': /<meta[^>]*name=["']keywords["'][^>]*>/i.test(htmlContent),
      'Open Graph tags': /<meta[^>]*property=["']og:/i.test(htmlContent),
      'Twitter Card tags': /<meta[^>]*name=["']twitter:/i.test(htmlContent),
      'Schema.org markup': /<script[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(htmlContent),
      'Canonical URL': /<link[^>]*rel=["']canonical["'][^>]*>/i.test(htmlContent),
      'Viewport meta': /<meta[^>]*name=["']viewport["'][^>]*>/i.test(htmlContent),
      'Charset meta': /<meta[^>]*charset=["']UTF-8["'][^>]*>/i.test(htmlContent),
      'Favicon': /<link[^>]*rel=["'](icon|shortcut icon)["'][^>]*>/i.test(htmlContent),
    };
    
    Object.entries(checks).forEach(([check, result]) => {
      console.log(`  ${result ? '✅' : '❌'} ${check}`);
    });
    
    // Count script and style tags
    const scriptCount = (htmlContent.match(/<script[^>]*>/gi) || []).length;
    const styleCount = (htmlContent.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || []).length;
    
    console.log(`\n📊 Resource Count:`);
    console.log(`  📜 Script tags: ${scriptCount}`);
    console.log(`  🎨 Stylesheet links: ${styleCount}`);
  }
  
  // Analyze asset sizes
  console.log('\n📦 Asset Size Analysis:');
  
  const assetsPath = path.join(distPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    const files = fs.readdirSync(assetsPath);
    let totalSize = 0;
    
    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalSize += stats.size;
      
      console.log(`  ${getFileIcon(file)} ${file}: ${sizeKB} KB`);
    });
    
    console.log(`\n📈 Total assets size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    
    // Performance recommendations
    console.log('\n🚀 Performance Recommendations:');
    
    if (totalSize > 5 * 1024 * 1024) { // > 5MB
      console.log('  ⚠️  Bundle size is large (>5MB). Consider:');
      console.log('    • Code splitting');
      console.log('    • Lazy loading images');
      console.log('    • Remove unused dependencies');
    } else {
      console.log('  ✅ Bundle size is good (<5MB)');
    }
    
    // Check for large images
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
    imageFiles.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      if (stats.size > 500 * 1024) { // > 500KB
        console.log(`  ⚠️  Large image: ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
        console.log('    • Consider compressing with WebP format');
        console.log('    • Use responsive images with srcset');
      }
    });
  }
  
  // Check for critical files
  console.log('\n📋 Critical Files Check:');
  
  const criticalFiles = {
    'robots.txt': path.join(distPath, 'robots.txt'),
    'sitemap.xml': path.join(distPath, 'sitemap.xml'),
    '.htaccess': path.join(distPath, '.htaccess'),
  };
  
  Object.entries(criticalFiles).forEach(([name, filePath]) => {
    const exists = fs.existsSync(filePath);
    console.log(`  ${exists ? '✅' : '❌'} ${name}`);
  });
  
  // SEO Score Calculation
  console.log('\n🏆 SEO Score Estimation:');
  
  const seoScore = calculateSEOScore(htmlContent);
  console.log(`  📊 Estimated SEO Score: ${seoScore}/100`);
  
  if (seoScore >= 80) {
    console.log('  🎉 Excellent SEO optimization!');
  } else if (seoScore >= 60) {
    console.log('  👍 Good SEO, room for improvement');
  } else {
    console.log('  ⚠️  Needs SEO improvements');
  }
};

const getFileIcon = (filename) => {
  if (/\.js$/i.test(filename)) return '📜';
  if (/\.css$/i.test(filename)) return '🎨';
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(filename)) return '🖼️';
  if (/\.html$/i.test(filename)) return '📄';
  return '📁';
};

const calculateSEOScore = (htmlContent) => {
  let score = 0;
  
  // Basic checks (40 points)
  if (/<title>.*<\/title>/i.test(htmlContent)) score += 10;
  if (/<meta[^>]*name=["']description["'][^>]*>/i.test(htmlContent)) score += 10;
  if (/<meta[^>]*name=["']viewport["'][^>]*>/i.test(htmlContent)) score += 5;
  if (/<meta[^>]*charset=["']UTF-8["'][^>]*>/i.test(htmlContent)) score += 5;
  if (/<link[^>]*rel=["']canonical["'][^>]*>/i.test(htmlContent)) score += 10;
  
  // Advanced SEO (30 points)
  if (/<meta[^>]*property=["']og:/i.test(htmlContent)) score += 10;
  if (/<meta[^>]*name=["']twitter:/i.test(htmlContent)) score += 5;
  if (/<script[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(htmlContent)) score += 15;
  
  // Performance indicators (30 points)
  const scriptCount = (htmlContent.match(/<script[^>]*>/gi) || []).length;
  const styleCount = (htmlContent.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || []).length;
  
  if (scriptCount <= 5) score += 10;
  if (styleCount <= 3) score += 10;
  if (/loading=["']lazy["']/i.test(htmlContent)) score += 10;
  
  return Math.min(100, score);
};

// Run analysis
analyzeBuild();

// Additional recommendations
console.log('\n💡 Next Steps for Lighthouse Test:');
console.log('1. Install Lighthouse globally: npm install -g lighthouse');
console.log('2. Run: lighthouse http://localhost:5173 --view');
console.log('3. Or use Chrome DevTools > Lighthouse tab');
console.log('4. Deploy to production and test: lighthouse https://pinpartstore.com --view');
console.log('\n🔧 Quick Performance Improvements:');
console.log('• Enable gzip compression on server');
console.log('• Use CDN for static assets');
console.log('• Implement image lazy loading');
console.log('• Minify CSS and JavaScript');
console.log('• Use browser caching');