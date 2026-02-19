'use client'

import { useState, useEffect } from 'react'
import { Globe, Code, TrendingUp, Award, ShoppingBag, ExternalLink, X, Menu } from 'lucide-react'

interface Asset {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  image: string
  price: number
  demoLink: string
  category: string
  categoryAr: string
}

const initialAssets: Asset[] = [
  {
    id: '1',
    title: 'Royal Oud & Perfumes',
    titleAr: 'رويال عود للعطور الفاخرة',
    description: 'Ultra-premium oriental fragrance e-commerce platform featuring rare oud collections, bespoke scent profiling technology, and exclusive membership rewards. Complete with advanced inventory management, multi-currency payment gateway, and AI-powered personalized recommendations for discerning clientele.',
    descriptionAr: 'أصل رقمي للنخبة يقدم منصة تجارة إلكترونية فاخرة متخصصة في العطور الشرقية النادرة ومجموعات العود الاستثنائية. مزودة بتقنية تحديد الروائح المخصصة، نظام عضويات حصرية، وبوابة دفع متعددة العملات مع توصيات ذكية مدعومة بالذكاء الاصطناعي. استثمار تقني مستدام بملكية كاملة.',
    image: 'https://placehold.co/800x600?text=Luxurious+Arabian+oud+perfume+bottles+with+gold+accents+on+dark+marble+and+elegant+oriental+design',
    price: 15000,
    demoLink: '#',
    category: 'Luxury Fragrances',
    categoryAr: 'العطور الفاخرة'
  },
  {
    id: '2',
    title: 'Titan Gaming Gear Hub',
    titleAr: 'تيتان لمعدات الألعاب الاحترافية',
    description: 'Elite gaming equipment marketplace engineered for professional esports athletes and enthusiasts. Features real-time inventory synchronization, advanced product comparison tools, gaming community forums, live streaming integration, and comprehensive warranty management. Built with cutting-edge performance optimization for seamless user experience.',
    descriptionAr: 'منصة احترافية متكاملة لمعدات الألعاب الإلكترونية موجهة للاعبين المحترفين وعشاق الرياضات الإلكترونية. تتضمن نظام مخزون متزامن لحظياً، أدوات مقارنة متقدمة، منتديات مجتمعية، تكامل مع البث المباشر، وإدارة شاملة للضمانات. مهندسة بتقنيات متطورة لضمان أداء استثنائي وتجربة مستخدم سلسة.',
    image: 'https://placehold.co/800x600?text=Professional+gaming+setup+with+RGB+mechanical+keyboard+gaming+mouse+and+futuristic+neon+lighting',
    price: 8500,
    demoLink: '#',
    category: 'Gaming & Esports',
    categoryAr: 'الألعاب والرياضات الإلكترونية'
  },
  {
    id: '3',
    title: 'Artisan Coffee Roasters',
    titleAr: 'محمصة القهوة الحرفية',
    description: 'Premium specialty coffee e-commerce platform designed for artisan roasters and coffee connoisseurs. Includes subscription management system, bean origin tracking, roast profile customization, brewing guide integration, and loyalty rewards program. Features advanced SEO architecture and conversion-optimized checkout flow for maximum revenue.',
    descriptionAr: 'منصة تجارة إلكترونية راقية للقهوة المتخصصة مصممة لمحبي القهوة الحرفية والمحامص الفاخرة. تشمل نظام إدارة اشتراكات متقدم، تتبع أصل حبوب البن، تخصيص ملفات التحميص، دليل طرق التحضير، وبرنامج ولاء شامل. مبنية بهندسة SEO متطورة ومسار دفع محسّن لتحقيق أقصى عائد استثماري.',
    image: 'https://placehold.co/800x600?text=Artisan+coffee+beans+roasting+with+vintage+equipment+warm+lighting+and+rustic+modern+cafe+atmosphere',
    price: 5500,
    demoLink: '#',
    category: 'Food & Beverage',
    categoryAr: 'الأطعمة والمشروبات الفاخرة'
  },
  {
    id: '4',
    title: 'Velvet Fashion House',
    titleAr: 'بيت الأزياء المخملي',
    description: 'Haute couture online boutique with virtual try-on',
    descriptionAr: 'بوتيك الأزياء الراقية مع التجربة الافتراضية',
    image: 'https://placehold.co/800x600?text=Elegant+fashion+runway+with+haute+couture+dresses+and+sophisticated+modern+boutique+interior',
    price: 13500,
    demoLink: '#',
    category: 'Fashion',
    categoryAr: 'الموضة'
  },
  {
    id: '5',
    title: 'TechNova Electronics',
    titleAr: 'تك نوفا للإلكترونيات',
    description: 'Advanced electronics store with AI-powered recommendations',
    descriptionAr: 'متجر إلكترونيات متقدم مع توصيات مدعومة بالذكاء الاصطناعي',
    image: 'https://placehold.co/800x600?text=Sleek+electronics+showroom+with+premium+gadgets+modern+displays+and+futuristic+technology',
    price: 10500,
    demoLink: '#',
    category: 'Electronics',
    categoryAr: 'الإلكترونيات'
  },
  {
    id: '6',
    title: 'ZenFlow Wellness',
    titleAr: 'زين فلو للعافية',
    description: 'Holistic wellness products marketplace with member portal',
    descriptionAr: 'سوق منتجات العافية الشاملة مع بوابة الأعضاء',
    image: 'https://placehold.co/800x600?text=Serene+wellness+spa+with+natural+products+soft+lighting+and+calming+zen+aesthetic',
    price: 9500,
    demoLink: '#',
    category: 'Health & Wellness',
    categoryAr: 'الصحة والعافية'
  },
  {
    id: '7',
    title: 'Essence Perfumery',
    titleAr: 'عطور إيسنس',
    description: 'Luxury fragrance store with scent profiling technology',
    descriptionAr: 'متجر العطور الفاخرة مع تقنية تحديد الروائح',
    image: 'https://placehold.co/800x600?text=Luxury+perfume+bottles+on+marble+with+golden+accents+and+elegant+sophisticated+display',
    price: 12000,
    demoLink: '#',
    category: 'Beauty',
    categoryAr: 'الجمال'
  },
  {
    id: '8',
    title: 'Titan Sports Gear',
    titleAr: 'تيتان لمعدات الرياضة',
    description: 'Professional athletic equipment with performance analytics',
    descriptionAr: 'معدات رياضية احترافية مع تحليلات الأداء',
    image: 'https://placehold.co/800x600?text=Professional+sports+equipment+gym+with+modern+athletic+gear+and+dynamic+fitness+atmosphere',
    price: 10000,
    demoLink: '#',
    category: 'Sports',
    categoryAr: 'الرياضة'
  },
  {
    id: '9',
    title: 'Luxe Home Décor',
    titleAr: 'لوكس لديكور المنزل',
    description: 'Designer furniture and décor with AR room preview',
    descriptionAr: 'أثاث وديكور مصمم مع معاينة الغرفة بالواقع المعزز',
    image: 'https://placehold.co/800x600?text=Luxury+interior+design+with+designer+furniture+elegant+decor+and+sophisticated+modern+home',
    price: 14000,
    demoLink: '#',
    category: 'Home & Living',
    categoryAr: 'المنزل والمعيشة'
  },
  {
    id: '10',
    title: 'Brilliance Jewelry',
    titleAr: 'بريليانس للمجوهرات',
    description: 'Fine jewelry collection with certification and custom design',
    descriptionAr: 'مجموعة المجوهرات الفاخرة مع الشهادات والتصميم المخصص',
    image: 'https://placehold.co/800x600?text=Exquisite+diamond+jewelry+on+black+velvet+with+brilliant+sparkling+gems+and+luxury+presentation',
    price: 15000,
    demoLink: '#',
    category: 'Jewelry',
    categoryAr: 'المجوهرات'
  }
]

export default function VantixMarketplace() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')
  const [assets, setAssets] = useState<Asset[]>(initialAssets)
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [showInquiryModal, setShowInquiryModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    assetInterest: '',
    budget: '',
    message: ''
  })

  const isRTL = language === 'ar'

  useEffect(() => {
    const savedAssets = localStorage.getItem('vantixAssets')
    if (savedAssets) {
      setAssets(JSON.parse(savedAssets))
    }
  }, [])

  const content = {
    en: {
      nav: {
        portfolio: 'Portfolio',
        features: 'Features',
        process: 'Process',
        contact: 'Get Started'
      },
      hero: {
        headline: 'Architecting Digital Legacies',
        subheadline: 'We craft high-performance digital assets with 100% ownership and zero monthly fees.',
        cta: 'Explore Assets',
        ctaSecondary: 'Schedule Consultation'
      },
      portfolio: {
        title: 'Premium Asset Portfolio',
        subtitle: 'Turnkey e-commerce solutions engineered for excellence',
        viewDemo: 'Live Demo',
        acquire: 'Acquire Asset',
        sar: 'SAR'
      },
      features: {
        title: 'Uncompromising Standards',
        subtitle: 'Every asset is architected to enterprise-grade specifications',
        items: [
          {
            icon: 'code',
            title: 'Production-Grade Code',
            description: 'Hand-crafted, semantic code following industry best practices and WCAG standards'
          },
          {
            icon: 'award',
            title: 'Complete Ownership',
            description: 'Full source code ownership with lifetime updates and zero recurring costs'
          },
          {
            icon: 'trending',
            title: 'SEO Optimized',
            description: 'Built-in technical SEO architecture with Core Web Vitals optimization'
          },
          {
            icon: 'globe',
            title: 'Multilingual Ready',
            description: 'RTL/LTR support with localization infrastructure for global markets'
          }
        ]
      },
      inquiry: {
        title: 'Begin Your Digital Transformation',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company Name (Optional)',
        assetInterest: 'Asset of Interest',
        budget: 'Investment Budget (SAR)',
        message: 'Project Requirements',
        submit: 'Submit Inquiry',
        success: 'Thank you! We will contact you within 24 hours.'
      },
      footer: {
        tagline: 'Elite digital asset architecture for discerning brands',
        rights: 'All Rights Reserved',
        portfolio: 'Portfolio',
        about: 'About Vantix',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy'
      }
    },
    ar: {
      nav: {
        portfolio: 'المعرض',
        features: 'المميزات',
        process: 'العملية',
        contact: 'ابدأ الآن'
      },
      hero: {
        headline: 'هندسة الأصول الرقمية بتميّز مطلق',
        subheadline: 'نبتكر منصات تجارة إلكترونية فاخرة بملكية كاملة وأداء استثنائي - دون أي رسوم اشتراك شهرية.',
        cta: 'استكشف محفظة الأصول',
        ctaSecondary: 'احجز استشارة حصرية'
      },
      portfolio: {
        title: 'محفظة الأصول الرقمية للنخبة',
        subtitle: 'منصات تجارة إلكترونية احترافية مهندسة بدقة متناهية | استثمار تقني مستدام بملكية كاملة',
        viewDemo: 'مشاهدة العرض التوضيحي المباشر',
        acquire: 'الاستحواذ على الأصل الرقمي',
        sar: 'ريال سعودي'
      },
      features: {
        title: 'معايير الجودة المطلقة',
        subtitle: 'كل أصل رقمي مهندس وفق أعلى المواصفات التقنية والتجارية',
        items: [
          {
            icon: 'code',
            title: 'برمجة نظيفة باحترافية عالية',
            description: 'كود مكتوب يدوياً بخبرة متخصصة، يتبع أرقى الممارسات العالمية ومعايير إمكانية الوصول WCAG'
          },
          {
            icon: 'award',
            title: 'ملكية كاملة ومطلقة',
            description: 'ملكية تامة للكود المصدري مع حق التعديل الكامل وتحديثات مدى الحياة - دون أي رسوم متكررة أو قيود'
          },
          {
            icon: 'trending',
            title: 'تحسين متقدم لمحركات البحث',
            description: 'هندسة SEO تقنية متكاملة مع تحسين شامل لمؤشرات Core Web Vitals لضمان أداء متفوق وظهور قوي'
          },
          {
            icon: 'globe',
            title: 'دعم لغوي احترافي متعدد',
            description: 'دعم كامل للغة العربية والإنجليزية مع بنية RTL/LTR احترافية ومرونة للتوسع في الأسواق العالمية'
          }
        ]
      },
      inquiry: {
        title: 'ابدأ رحلة التحول الرقمي لعلامتك التجارية',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني المؤسسي',
        phone: 'رقم الهاتف / الجوال',
        company: 'اسم العلامة التجارية أو المؤسسة (اختياري)',
        assetInterest: 'الأصل الرقمي للنخبة المطلوب',
        budget: 'الميزانية الاستثمارية للأصل الرقمي (ريال سعودي)',
        message: 'تفاصيل مشروعكم ومتطلبات التخصيص',
        submit: 'إرسال طلب الاستحواذ على الأصل الرقمي',
        success: 'تم استلام طلبكم بنجاح! سيتواصل معكم فريق الاستشارات المتخصص خلال 24 ساعة لمناقشة استثماركم التقني المستدام.'
      },
      footer: {
        tagline: 'هندسة الأصول الرقمية الفاخرة للعلامات التجارية المتميزة',
        rights: 'جميع الحقوق محفوظة',
        portfolio: 'محفظة الأصول',
        about: 'عن فانتكس',
        terms: 'الشروط والأحكام',
        privacy: 'سياسة الخصوصية'
      }
    }
  }

  const t = content[language]

  const handleInquiry = (asset: Asset) => {
    setSelectedAsset(asset)
    setFormData({
      ...formData,
      assetInterest: language === 'en' ? asset.title : asset.titleAr
    })
    setShowInquiryModal(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(t.inquiry.success)
    setShowInquiryModal(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      assetInterest: '',
      budget: '',
      message: ''
    })
  }

  const getFeatureIcon = (icon: string) => {
    switch(icon) {
      case 'code': return <Code className="w-8 h-8" />
      case 'award': return <Award className="w-8 h-8" />
      case 'trending': return <TrendingUp className="w-8 h-8" />
      case 'globe': return <Globe className="w-8 h-8" />
      default: return <Code className="w-8 h-8" />
    }
  }

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-tajawal' : ''}>
      {/* Navigation */}
      <nav style={{ backgroundColor: 'var(--color-charcoal)' }} className="fixed w-full top-0 z-50 border-b border-gray-700/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-playfair font-bold tracking-wider" style={{ color: 'var(--color-gold)' }}>
                VANTIX
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#portfolio" style={{ color: 'var(--color-text-primary)' }} className="hover:opacity-80 transition-opacity text-sm tracking-wide">
                {t.nav.portfolio}
              </a>
              <a href="#features" style={{ color: 'var(--color-text-primary)' }} className="hover:opacity-80 transition-opacity text-sm tracking-wide">
                {t.nav.features}
              </a>
              <a href="#contact" style={{ color: 'var(--color-text-primary)' }} className="hover:opacity-80 transition-opacity text-sm tracking-wide">
                {t.nav.contact}
              </a>
              
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                style={{ 
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-luxury-black)'
                }}
                className="px-6 py-2.5 rounded-md font-semibold hover:opacity-90 transition-all text-sm tracking-wide"
              >
                {language === 'en' ? 'عربي' : 'English'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              style={{ color: 'var(--color-text-primary)' }}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-6 pb-4 space-y-4">
              <a href="#portfolio" style={{ color: 'var(--color-text-primary)' }} className="block hover:opacity-80 transition-opacity">
                {t.nav.portfolio}
              </a>
              <a href="#features" style={{ color: 'var(--color-text-primary)' }} className="block hover:opacity-80 transition-opacity">
                {t.nav.features}
              </a>
              <a href="#contact" style={{ color: 'var(--color-text-primary)' }} className="block hover:opacity-80 transition-opacity">
                {t.nav.contact}
              </a>
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                style={{ 
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-luxury-black)'
                }}
                className="w-full px-6 py-2.5 rounded-md font-semibold hover:opacity-90 transition-all"
              >
                {language === 'en' ? 'عربي' : 'English'}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--color-luxury-black)' }} className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-7xl font-playfair font-bold mb-8 leading-tight tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {t.hero.headline}
          </h2>
          <p 
            className="text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#portfolio"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-luxury-black)' }}
              className="px-10 py-4 rounded-md font-semibold hover:opacity-90 transition-all text-base tracking-wide shadow-lg"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              style={{ 
                borderColor: 'var(--color-gold)',
                color: 'var(--color-gold)'
              }}
              className="px-10 py-4 rounded-md font-semibold border-2 hover:opacity-80 transition-all text-base tracking-wide"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ backgroundColor: 'var(--color-charcoal)' }} className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 
              className="text-4xl md:text-5xl font-playfair font-bold mb-6"
              style={{ color: 'var(--color-gold)' }}
            >
              {t.portfolio.title}
            </h3>
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {assets.map((asset) => (
              <div
                key={asset.id}
                style={{ backgroundColor: 'var(--color-luxury-black)' }}
                className="luxury-card rounded-lg overflow-hidden border border-gray-700/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={asset.image}
                    alt={language === 'en' ? asset.title : asset.titleAr}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div 
                    style={{ backgroundColor: 'var(--color-gold)' }}
                    className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-semibold"
                  >
                    <span style={{ color: 'var(--color-luxury-black)' }}>
                      {language === 'en' ? asset.category : asset.categoryAr}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h4 
                    className="text-2xl font-playfair font-bold mb-4"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {language === 'en' ? asset.title : asset.titleAr}
                  </h4>
                  <p 
                    className="mb-6 leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {language === 'en' ? asset.description : asset.descriptionAr}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-700/50">
                    <span 
                      className="text-3xl font-bold"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      {asset.price.toLocaleString()}
                    </span>
                    <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                      {t.portfolio.sar}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={asset.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        borderColor: 'var(--color-gold)',
                        color: 'var(--color-gold)'
                      }}
                      className="flex-1 px-5 py-3 rounded-md border-2 hover:opacity-80 transition-all text-center font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.portfolio.viewDemo}
                    </a>
                    <button
                      onClick={() => handleInquiry(asset)}
                      style={{ 
                        backgroundColor: 'var(--color-gold)',
                        color: 'var(--color-luxury-black)'
                      }}
                      className="flex-1 px-5 py-3 rounded-md hover:opacity-90 transition-all font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {t.portfolio.acquire}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ backgroundColor: 'var(--color-luxury-black)' }} className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 
              className="text-4xl md:text-5xl font-playfair font-bold mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {t.features.title}
            </h3>
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                style={{ backgroundColor: 'var(--color-charcoal)' }}
                className="p-10 rounded-lg border border-gray-700/50 luxury-card text-center"
              >
                <div 
                  style={{ color: 'var(--color-gold)' }}
                  className="mb-6 flex justify-center"
                >
                  {getFeatureIcon(feature.icon)}
                </div>
                <h4 
                  className="text-xl font-bold mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {feature.title}
                </h4>
                <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-charcoal)' }} className="py-16 px-6 lg:px-8 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-4" style={{ color: 'var(--color-gold)' }}>
                VANTIX
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                {t.nav.portfolio}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#portfolio" style={{ color: 'var(--color-text-secondary)' }} className="hover:opacity-80 transition-opacity">
                    {t.footer.portfolio}
                  </a>
                </li>
                <li>
                  <a href="#features" style={{ color: 'var(--color-text-secondary)' }} className="hover:opacity-80 transition-opacity">
                    {t.nav.features}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                {t.footer.about}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" style={{ color: 'var(--color-text-secondary)' }} className="hover:opacity-80 transition-opacity">
                    {t.footer.terms}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: 'var(--color-text-secondary)' }} className="hover:opacity-80 transition-opacity">
                    {t.footer.privacy}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700/50 text-center">
            <p style={{ color: 'var(--color-text-secondary)' }}>
              © 2024 Vantix. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            style={{ backgroundColor: 'var(--color-charcoal)' }}
            className="max-w-2xl w-full rounded-lg p-10 relative max-h-[90vh] overflow-y-auto border border-gray-700/50"
          >
            <button
              onClick={() => setShowInquiryModal(false)}
              style={{ color: 'var(--color-text-secondary)' }}
              className="absolute top-6 right-6 hover:opacity-80 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 
              className="text-3xl font-playfair font-bold mb-8"
              style={{ color: 'var(--color-gold)' }}
            >
              {t.inquiry.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  {t.inquiry.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-5 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                />
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  {t.inquiry.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-5 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                />
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  {t.inquiry.phone}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-5 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                />
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  {t.inquiry.company}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-5 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                />
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  {t.inquiry.assetInterest}
                </label>
                <input
                  type="text"
                  required
                  value={formData.assetInterest}
                  onChange={(e) => setFormData({...formData, assetInterest: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-5 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                />
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  {t.inquiry.budget}
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-5 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                >
                  <option value="">Select range</option>
                  <option value="1000-5000">1,000 - 5,000 SAR</option>
                  <option value="5000-10000">5,000 - 10,000 SAR</option>
                  <option value="10000-15000">10,000 - 15,000 SAR</option>
                  <option value="15000+">15,000+ SAR</option>
                </select>
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  {t.inquiry.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-5 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                style={{ 
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-luxury-black)'
                }}
                className="w-full px-8 py-4 rounded-md font-bold hover:opacity-90 transition-all text-lg"
              >
                {t.inquiry.submit}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
