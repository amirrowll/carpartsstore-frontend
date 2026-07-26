import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image = '/PinpartStore.JPEG',
  type = 'website' 
}) => {
  const location = useLocation();
  
  const defaultTitle = 'Pinpart Store - فروشگاه تخصصی قطعات یدکی خودرو';
  const defaultDescription = 'فروشگاه تخصصی قطعات یدکی خودرو - لوازم سایپا، ایران خودرو و چینی با بهترین قیمت و کیفیت';
  const defaultKeywords = 'قطعات یدکی, لوازم سایپا, لوازم ایران خودرو, لوازم چینی, خودرو, قطعات خودرو, فروشگاه قطعات';
  
  const seoTitle = title ? `${title} | Pinpart Store` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  
  useEffect(() => {
    // Update page title
    document.title = seoTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoDescription);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoKeywords);
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://pinpartstore.com${location.pathname}`);
    
    // Update Open Graph tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    updateMetaTag('og:title', seoTitle);
    updateMetaTag('og:description', seoDescription);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', `https://pinpartstore.com${location.pathname}`);
    updateMetaTag('og:type', type);
    updateMetaTag('og:locale', 'fa_IR');
    
    // Cleanup function
    return () => {
      // Reset to defaults
      document.title = defaultTitle;
    };
  }, [title, description, keywords, image, type, location.pathname, seoTitle, seoDescription, seoKeywords, defaultTitle]);
  
  return null;
};

export default SEO;