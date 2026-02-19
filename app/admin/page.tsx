'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, Save, X, BarChart3, DollarSign, Package } from 'lucide-react'

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

const defaultAssets: Asset[] = [
  {
    id: '1',
    title: 'Artisan Coffee House',
    titleAr: 'بيت القهوة الحرفية',
    description: 'Premium coffee e-commerce platform with subscription features',
    descriptionAr: 'منصة تجارة إلكترونية للقهوة الفاخرة مع ميزات الاشتراك',
    image: 'https://placehold.co/800x600?text=Elegant+dark+coffee+shop+storefront+with+warm+lighting+and+modern+minimalist+interior+design',
    price: 12500,
    demoLink: '#',
    category: 'Food & Beverage',
    categoryAr: 'الأطعمة والمشروبات'
  },
  {
    id: '2',
    title: 'Chronos Luxury Watches',
    titleAr: 'ساعات كرونوس الفاخرة',
    description: 'High-end timepiece marketplace with authentication system',
    descriptionAr: 'سوق الساعات الفاخرة مع نظام المصادقة',
    image: 'https://placehold.co/800x600?text=Luxury+watch+collection+displayed+on+velvet+with+golden+lighting+and+premium+presentation',
    price: 15000,
    demoLink: '#',
    category: 'Luxury Goods',
    categoryAr: 'السلع الفاخرة'
  },
  {
    id: '3',
    title: 'Apex Gaming Arena',
    titleAr: 'أرينا أبيكس للألعاب',
    description: 'Complete gaming gear store with live inventory tracking',
    descriptionAr: 'متجر كامل لمعدات الألعاب مع تتبع المخزون المباشر',
    image: 'https://placehold.co/800x600?text=Modern+gaming+setup+with+RGB+lighting+controllers+and+futuristic+neon+blue+accents',
    price: 11000,
    demoLink: '#',
    category: 'Gaming',
    categoryAr: 'الألعاب'
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

export default function AdminDashboard() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Asset>({
    id: '',
    title: '',
    titleAr: '',
    description: '',
    descriptionAr: '',
    image: '',
    price: 0,
    demoLink: '',
    category: '',
    categoryAr: ''
  })

  useEffect(() => {
    const savedAssets = localStorage.getItem('vantixAssets')
    if (savedAssets) {
      setAssets(JSON.parse(savedAssets))
    } else {
      setAssets(defaultAssets)
      localStorage.setItem('vantixAssets', JSON.stringify(defaultAssets))
    }
  }, [])

  const saveAssets = (newAssets: Asset[]) => {
    setAssets(newAssets)
    localStorage.setItem('vantixAssets', JSON.stringify(newAssets))
  }

  const handleAdd = () => {
    setEditingAsset(null)
    setFormData({
      id: Date.now().toString(),
      title: '',
      titleAr: '',
      description: '',
      descriptionAr: '',
      image: '',
      price: 0,
      demoLink: '',
      category: '',
      categoryAr: ''
    })
    setShowForm(true)
  }

  const handleEdit = (asset: Asset) => {
    setEditingAsset(asset)
    setFormData(asset)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this asset?')) {
      const newAssets = assets.filter(a => a.id !== id)
      saveAssets(newAssets)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingAsset) {
      const newAssets = assets.map(a => a.id === editingAsset.id ? formData : a)
      saveAssets(newAssets)
    } else {
      const newAssets = [...assets, formData]
      saveAssets(newAssets)
    }
    
    setShowForm(false)
    setEditingAsset(null)
  }

  const totalValue = assets.reduce((sum, asset) => sum + asset.price, 0)
  const avgPrice = assets.length > 0 ? totalValue / assets.length : 0

  return (
    <div style={{ backgroundColor: 'var(--color-luxury-black)' }} className="min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: 'var(--color-charcoal)' }} className="border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-playfair font-bold mb-2" style={{ color: 'var(--color-gold)' }}>
                VANTIX Admin
              </h1>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Manage your digital asset portfolio
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/"
                style={{ 
                  borderColor: 'var(--color-gold)',
                  color: 'var(--color-gold)'
                }}
                className="px-6 py-3 rounded-md border-2 hover:opacity-80 transition-all font-semibold"
              >
                View Site
              </a>
              <button
                onClick={handleAdd}
                style={{ 
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-luxury-black)'
                }}
                className="px-6 py-3 rounded-md hover:opacity-90 transition-all font-semibold flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Asset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div style={{ backgroundColor: 'var(--color-charcoal)' }} className="p-8 rounded-lg border border-gray-700/50 luxury-card">
            <div className="flex items-center gap-4 mb-4">
              <Package style={{ color: 'var(--color-gold)' }} className="w-8 h-8" />
              <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm font-semibold">
                Total Assets
              </span>
            </div>
            <p style={{ color: 'var(--color-text-primary)' }} className="text-4xl font-bold">
              {assets.length}
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-charcoal)' }} className="p-8 rounded-lg border border-gray-700/50 luxury-card">
            <div className="flex items-center gap-4 mb-4">
              <DollarSign style={{ color: 'var(--color-gold)' }} className="w-8 h-8" />
              <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm font-semibold">
                Portfolio Value
              </span>
            </div>
            <p style={{ color: 'var(--color-text-primary)' }} className="text-4xl font-bold">
              {totalValue.toLocaleString()} <span className="text-2xl">SAR</span>
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-charcoal)' }} className="p-8 rounded-lg border border-gray-700/50 luxury-card">
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 style={{ color: 'var(--color-gold)' }} className="w-8 h-8" />
              <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm font-semibold">
                Average Price
              </span>
            </div>
            <p style={{ color: 'var(--color-text-primary)' }} className="text-4xl font-bold">
              {Math.round(avgPrice).toLocaleString()} <span className="text-2xl">SAR</span>
            </p>
          </div>
        </div>

        {/* Assets Table */}
        <div style={{ backgroundColor: 'var(--color-charcoal)' }} className="rounded-lg border border-gray-700/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: 'var(--color-luxury-black)' }}>
                <tr>
                  <th style={{ color: 'var(--color-text-primary)' }} className="px-6 py-5 text-left font-semibold">
                    Asset
                  </th>
                  <th style={{ color: 'var(--color-text-primary)' }} className="px-6 py-5 text-left font-semibold">
                    Category
                  </th>
                  <th style={{ color: 'var(--color-text-primary)' }} className="px-6 py-5 text-left font-semibold">
                    Price
                  </th>
                  <th style={{ color: 'var(--color-text-primary)' }} className="px-6 py-5 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset, index) => (
                  <tr 
                    key={asset.id}
                    className="border-t border-gray-700/50 hover:bg-black/20 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={asset.image}
                          alt={asset.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p style={{ color: 'var(--color-text-primary)' }} className="font-semibold">
                            {asset.title}
                          </p>
                          <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                            {asset.titleAr}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span 
                        style={{ 
                          backgroundColor: 'var(--color-gold)',
                          color: 'var(--color-luxury-black)'
                        }}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {asset.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span style={{ color: 'var(--color-gold)' }} className="font-bold text-lg">
                        {asset.price.toLocaleString()} SAR
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => handleEdit(asset)}
                          style={{ color: 'var(--color-text-primary)' }}
                          className="hover:opacity-70 transition-opacity"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(asset.id)}
                          style={{ color: '#ef4444' }}
                          className="hover:opacity-70 transition-opacity"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            style={{ backgroundColor: 'var(--color-charcoal)' }}
            className="max-w-3xl w-full rounded-lg p-10 relative max-h-[90vh] overflow-y-auto border border-gray-700/50"
          >
            <button
              onClick={() => setShowForm(false)}
              style={{ color: 'var(--color-text-secondary)' }}
              className="absolute top-6 right-6 hover:opacity-80 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 
              className="text-3xl font-playfair font-bold mb-8"
              style={{ color: 'var(--color-gold)' }}
            >
              {editingAsset ? 'Edit Asset' : 'Add New Asset'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    style={{ 
                      backgroundColor: 'var(--color-luxury-black)',
                      color: 'var(--color-text-primary)',
                      borderColor: 'var(--color-gray-light)'
                    }}
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                  />
                </div>

                <div>
                  <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                    Title (Arabic)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.titleAr}
                    onChange={(e) => setFormData({...formData, titleAr: e.target.value})}
                    style={{ 
                      backgroundColor: 'var(--color-luxury-black)',
                      color: 'var(--color-text-primary)',
                      borderColor: 'var(--color-gray-light)'
                    }}
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                  />
                </div>
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  Description (English)
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all resize-none"
                />
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  Description (Arabic)
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.descriptionAr}
                  onChange={(e) => setFormData({...formData, descriptionAr: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                    Category (English)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    style={{ 
                      backgroundColor: 'var(--color-luxury-black)',
                      color: 'var(--color-text-primary)',
                      borderColor: 'var(--color-gray-light)'
                    }}
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                  />
                </div>

                <div>
                  <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                    Category (Arabic)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.categoryAr}
                    onChange={(e) => setFormData({...formData, categoryAr: e.target.value})}
                    style={{ 
                      backgroundColor: 'var(--color-luxury-black)',
                      color: 'var(--color-text-primary)',
                      borderColor: 'var(--color-gray-light)'
                    }}
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                  />
                </div>
              </div>

              <div>
                <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                  Image URL
                </label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  style={{ 
                    backgroundColor: 'var(--color-luxury-black)',
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-gray-light)'
                  }}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                    Price (SAR)
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="500"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                    style={{ 
                      backgroundColor: 'var(--color-luxury-black)',
                      color: 'var(--color-text-primary)',
                      borderColor: 'var(--color-gray-light)'
                    }}
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                  />
                </div>

                <div>
                  <label style={{ color: 'var(--color-text-primary)' }} className="block mb-2 font-semibold">
                    Demo Link
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.demoLink}
                    onChange={(e) => setFormData({...formData, demoLink: e.target.value})}
                    style={{ 
                      backgroundColor: 'var(--color-luxury-black)',
                      color: 'var(--color-text-primary)',
                      borderColor: 'var(--color-gray-light)'
                    }}
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-opacity-80 transition-all"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{ 
                    borderColor: 'var(--color-gray-light)',
                    color: 'var(--color-text-secondary)'
                  }}
                  className="flex-1 px-6 py-3 rounded-md border-2 hover:opacity-80 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ 
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-luxury-black)'
                  }}
                  className="flex-1 px-6 py-3 rounded-md hover:opacity-90 transition-all font-semibold flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {editingAsset ? 'Update Asset' : 'Create Asset'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
