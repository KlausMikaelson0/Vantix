'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, Globe, Shield, Code, Zap, Award, CheckCircle2, ExternalLink, ShoppingCart } from 'lucide-react'

interface Asset {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  price: number
  image: string
  demoLink: string
  category: string
  categoryAr: string
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      features: 'Features',
      contact: 'Contact',
      admin: 'Admin',
    },
    hero: {
      headline: 'Architecting Digital Legacies',
      subheadline: 'We craft high-performance digital assets with 100% ownership and zero monthly fees.',
      cta: 'Explore Portfolio',
      secondary: 'Schedule Consultation',
    },
    portfolio: {
      title: 'Premium Asset Collection',
      subtitle: 'Handcrafted e-commerce solutions designed for luxury brands',
      viewDemo: 'Live Demo',
      acquire: 'Acquire Asset',
      sar: 'SAR',
    },
    features: {
      title: 'The Vantix Advantage',
      subtitle: 'Why industry leaders choose our digital assets',
      items: [
        {
          title: 'Clean Architecture',
          description: 'Enterprise-grade code following industry best practices and modern standards',
        },
        {
          title: 'Zero Subscriptions',
          description: 'One-time investment with complete ownership. No recurring fees, ever',
        },
        {
          title: 'SEO Optimized',
          description: 'Built for performance with Core Web Vitals and search engine excellence',
        },
        {
          title: 'Full Ownership',
          description: 'Complete source code transfer with unlimited modification rights',
        },
      ],
    },
    inquiry: {
      title: 'Acquire This Asset',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Project Details',
      submit: 'Submit Inquiry',
      close: 'Close',
    },
    footer: {
      tagline: 'Elite digital asset architecture for visionary brands',
      rights: 'All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      portfolio: 'المعرض',
      features: 'المميزات',
      contact: 'اتصل بنا',
      admin: 'لوحة التحكم',
    },
    hero: {
      headline: 'بناء إرث رقمي متميز',
      subheadline: 'نصمم أصول رقمية عالية الأداء مع ملكية كاملة وبدون رسوم شهرية.',
      cta: 'استكشف المعرض',
      secondary: 'حجز استشارة',
    },
    portfolio: {
      title: 'مجموعة الأصول المميزة',
      subtitle: 'حلول تجارة إلكترونية مصممة للعلامات الفاخرة',
      viewDemo: 'عرض مباشر',
      acquire: 'الحصول على الأصل',
      sar: 'ريال',
    },
    features: {
      title: 'ميزة فانتيكس',
      subtitle: 'لماذا يختار قادة الصناعة أصولنا الرقمية',
      items: [
        {
          title: 'بنية نظيفة',
          description: 'كود احترافي يتبع أفضل ممارسات الصناعة والمعايير الحديثة',
        },
        {
          title: 'بدون اشتراكات',
          description: 'استثمار لمرة واحدة مع ملكية كاملة. لا رسوم متكررة أبداً',
        },
        {
          title: 'محسّن لمحركات البحث',
          description: 'مصمم للأداء مع التميز في محركات البحث',
        },
        {
          title: 'ملكية كاملة',
          description: 'نقل كامل للكود المصدري مع حقوق تعديل غير محدودة',
        },
      ],
    },
    inquiry: {
      title: 'طلب الحصول على الأصل',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'تفاصيل المشروع',
      submit: 'إرسال الطلب',
      close: 'إغلاق',
    },
    footer: {
      tagline: 'بناء أصول رقمية متميزة للعلامات الطموحة',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
}

const defaultAssets: Asset[] = [
  {
    id: '1',
    title: 'Artisan Coffee Collective',
    titleAr: 'متجر القهوة الحرفية',
    description: 'Premium coffee e-commerce with subscription management',
    descriptionAr: 'متجر قهوة فاخر مع إدارة الاشتراكات',
    price: 8500,
    image: 'https://placehold.co/800x600?text=Luxury+coffee+shop+storefront+with+warm+ambient+lighting+and+artisan+coffee+displays',
    demoLink: '#',
    category: 'Food & Beverage',
    categoryAr: 'الطعام والشراب',
  },
  {
    id: '2',
    title: 'Chronos Luxury Timepieces',
    titleAr: 'ساعات كرونوس الفاخرة',
    description: 'High-end watch gallery with authentication system',
    descriptionAr: 'معرض ساعات راقي مع نظام مصادقة',
    price: 12500,
    image: 'https://placehold.co/800x600?text=Elegant+luxury+watch+display+with+premium+timepieces+and+sophisticated+lighting',
    demoLink: '#',
    category: 'Luxury Goods',
    categoryAr: 'سلع فاخرة',
  },
  {
    id: '3',
    title: 'Nexus Gaming Emporium',
    titleAr: 'متجر نيكسوس للألعاب',
    description: 'Gaming peripherals store with live inventory tracking',
    descriptionAr: 'متجر ملحقات الألعاب مع تتبع المخزون',
    price: 9500,
    image: 'https://placehold.co/800x600?text=Modern+gaming+store+with+RGB+lighting+and+high+tech+gaming+equipment',
    demoLink: '#',
    category: 'Gaming',
    categoryAr: 'الألعاب',
  },
  {
    id: '4',
    title: 'Lumière Fashion House',
    titleAr: 'دار الأزياء لوميير',
    description: 'Haute couture boutique with AR try-on features',
    descriptionAr: 'بوتيك أزياء راقية مع ميزة التجربة الافتراضية',
    price: 11000,
    image: 'https://placehold.co/800x600?text=Sophisticated+fashion+boutique+interior+with+haute+couture+displays+and+elegant+lighting',
    demoLink: '#',
    category: 'Fashion',
    categoryAr: 'الأزياء',
  },
  {
    id: '5',
    title: 'TechVault Electronics',
    titleAr: 'متجر تيك فولت للإلكترونيات',
    description: 'Premium electronics marketplace with warranty management',
    descriptionAr: 'سوق إلكترونيات فاخر مع إدارة الضمان',
    price: 10500,
    image: 'https://placehold.co/800x600?text=Premium+electronics+store+with+modern+tech+gadgets+and+sleek+minimalist+design',
    demoLink: '#',
    category: 'Electronics',
    categoryAr: 'الإلكترونيات',
  },
  {
    id: '6',
    title: 'Vita Organics',
    titleAr: 'فيتا أورجانيكس',
    description: 'Organic wellness products with subscription boxes',
    descriptionAr: 'منتجات صحية عضوية مع صناديق الاشتراك',
    price: 7500,
    image: 'https://placehold.co/800x600?text=Natural+organic+wellness+store+with+eco+friendly+products+and+botanical+elements',
    demoLink: '#',
    category: 'Health & Wellness',
    categoryAr: 'الصحة والعافية',
  },
  {
    id: '7',
    title: 'Maison du Parfum',
    titleAr: 'بيت العطور',
    description: 'Luxury fragrance boutique with scent profiling',
    descriptionAr: 'بوتيك عطور فاخر مع تحليل الروائح',
    price: 9000,
    image: 'https://placehold.co/800x600?text=Elegant+perfume+boutique+with+luxury+fragrance+bottles+and+golden+accents',
    demoLink: '#',
    category: 'Beauty',
    categoryAr: 'الجمال',
  },
  {
    id: '8',
    title: 'Apex Sports Gear',
    titleAr: 'معدات أبيكس الرياضية',
    description: 'Performance sportswear with size recommendation AI',
    descriptionAr: 'ملابس رياضية مع توصيات مقاسات ذكية',
    price: 8000,
    image: 'https://placehold.co/800x600?text=Dynamic+sports+gear+store+with+athletic+equipment+and+performance+apparel',
    demoLink: '#',
    category: 'Sports',
    categoryAr: 'الرياضة',
  },
  {
    id: '9',
    title: 'Artisan Home Décor',
    titleAr: 'ديكور المنزل الحرفي',
    description: 'Handcrafted furniture and décor marketplace',
    descriptionAr: 'سوق أثاث وديكور مصنوع يدوياً',
    price: 10000,
    image: 'https://placehold.co/800x600?text=Artisan+home+decor+showroom+with+handcrafted+furniture+and+elegant+interior+design',
    demoLink: '#',
    category: 'Home & Living',
    categoryAr: 'المنزل والمعيشة',
  },
  {
    id: '10',
    title: 'Heritage Jewelry Collection',
    titleAr: 'مجموعة المجوهرات التراثية',
    description: 'Fine jewelry store with authentication certificates',
    descriptionAr: 'متجر مجوهرات راقي مع شهادات أصالة',
    price: 13500,
    image: 'https://placehold.co/800x600?text=Luxurious+jewelry+store+with+precious+gems+and+gold+accents+on+black+velvet',
    demoLink: '#',
    category: 'Jewelry',
    categoryAr: 'المجوهرات',
  },
]

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [assets, setAssets] = useState<Asset[]>([])
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [showInquiryModal, setShowInquiryModal] = useState(false)

  useEffect(() => {
    const storedAssets = localStorage.getItem('vantix_assets')
    if (storedAssets) {
      setAssets(JSON.parse(storedAssets))
    } else {
      setAssets(defaultAssets)
      localStorage.setItem('vantix_assets', JSON.stringify(defaultAssets))
    }
  }, [])

  const t = translations[language]
  const isRTL = language === 'ar'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en')
  }

  const handleAcquireClick = (asset: Asset) => {
    setSelectedAsset(asset)
    setShowInquiryModal(true)
  }

  const handleSubmitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    alert(`Inquiry submitted for ${selectedAsset?.title}\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}`)
    setShowInquiryModal(false)
  }

  return (
    <div className={`min-h-screen ${isRTL ? 'font-tajawal' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-playfair font-bold text-[#C5A059] tracking-wider">
                VANTIX
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white hover:text-[#C5A059] transition-colors">
                {t.nav.home}
              </a>
              <a href="#portfolio" className="text-white hover:text-[#C5A059] transition-colors">
                {t.nav.portfolio}
              </a>
              <a href="#features" className="text-white hover:text-[#C5A059] transition-colors">
                {t.nav.features}
              </a>
              <Link href="/admin" className="text-white hover:text-[#C5A059] transition-colors">
                {t.nav.admin}
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] hover:bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-md transition-colors"
              >
                <Globe className="w-4 h-4 text-[#C5A059]" />
                <span className="text-white">{language === 'en' ? 'AR' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#home" className="block text-white hover:text-[#C5A059]">
                {t.nav.home}
              </a>
              <a href="#portfolio" className="block text-white hover:text-[#C5A059]">
                {t.nav.portfolio}
              </a>
              <a href="#features" className="block text-white hover:text-[#C5A059]">
                {t.nav.features}
              </a>
              <Link href="/admin" className="block text-white hover:text-[#C5A059]">
                {t.nav.admin}
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] border border-[#C5A059]/30 rounded-md"
              >
                <Globe className="w-4 h-4 text-[#C5A059]" />
                <span className="text-white">{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight">
              {t.hero.headline}
            </h2>
            <p className="text-xl sm:text-2xl text-[#B8B8B8] max-w-3xl mx-auto leading-relaxed">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#portfolio"
                className="px-8 py-4 bg-[#C5A059] hover:bg-[#A88944] text-black font-semibold rounded-md transition-all transform hover:scale-105 flex items-center gap-2"
              >
                {t.hero.cta}
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 font-semibold rounded-md transition-all"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-xl text-[#B8B8B8]">{t.portfolio.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assets.map((asset) => (
              <div
                key={asset.id}
                className="luxury-card bg-[#050505] border border-[#C5A059]/20 rounded-lg overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={asset.image}
                    alt={isRTL ? asset.titleAr : asset.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#C5A059] text-black px-3 py-1 rounded-md font-semibold">
                    {asset.price.toLocaleString()} {t.portfolio.sar}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {isRTL ? asset.titleAr : asset.title}
                    </h3>
                    <p className="text-sm text-[#C5A059] mb-2">
                      {isRTL ? asset.categoryAr : asset.category}
                    </p>
                    <p className="text-[#B8B8B8]">
                      {isRTL ? asset.descriptionAr : asset.description}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={asset.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-transparent border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 rounded-md transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.portfolio.viewDemo}
                    </a>
                    <button
                      onClick={() => handleAcquireClick(asset)}
                      className="flex-1 px-4 py-2 bg-[#C5A059] hover:bg-[#A88944] text-black font-semibold rounded-md transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
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
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-[#B8B8B8]">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, ...t.features.items[0] },
              { icon: Shield, ...t.features.items[1] },
              { icon: Zap, ...t.features.items[2] },
              { icon: Award, ...t.features.items[3] },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#0A0A0A] border border-[#C5A059]/20 rounded-lg p-6 text-center space-y-4 hover:border-[#C5A059]/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C5A059]/10 rounded-full">
                  <feature.icon className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-[#B8B8B8]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#C5A059]/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold text-[#C5A059] mb-4">VANTIX</h2>
          <p className="text-[#B8B8B8] mb-6">{t.footer.tagline}</p>
          <p className="text-sm text-[#666]">
            © {new Date().getFullYear()} Vantix. {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* Inquiry Modal */}
      {showInquiryModal && selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-[#0A0A0A] border border-[#C5A059]/30 rounded-lg max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-playfair font-bold text-white">
                {t.inquiry.title}
              </h3>
              <button
                onClick={() => setShowInquiryModal(false)}
                className="text-[#B8B8B8] hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mb-6 p-4 bg-[#050505] rounded-md border border-[#C5A059]/20">
              <p className="text-[#C5A059] font-semibold">
                {isRTL ? selectedAsset.titleAr : selectedAsset.title}
              </p>
              <p className="text-white text-xl font-bold mt-2">
                {selectedAsset.price.toLocaleString()} {t.portfolio.sar}
              </p>
            </div>
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div>
                <label className="block text-[#B8B8B8] mb-2">{t.inquiry.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div>
                <label className="block text-[#B8B8B8] mb-2">{t.inquiry.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div>
                <label className="block text-[#B8B8B8] mb-2">{t.inquiry.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div>
                <label className="block text-[#B8B8B8] mb-2">{t.inquiry.message}</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowInquiryModal(false)}
                  className="flex-1 px-6 py-3 bg-transparent border border-[#C5A059]/30 text-white rounded-md hover:bg-[#C5A059]/10 transition-all"
                >
                  {t.inquiry.close}
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#C5A059] hover:bg-[#A88944] text-black font-semibold rounded-md transition-all"
                >
                  {t.inquiry.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
