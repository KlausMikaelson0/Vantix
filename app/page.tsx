'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit2, Trash2, Save, X, Eye } from 'lucide-react'

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

export default function AdminDashboard() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadAssets()
  }, [])

  const loadAssets = () => {
    const storedAssets = localStorage.getItem('vantix_assets')
    if (storedAssets) {
      setAssets(JSON.parse(storedAssets))
    }
  }

  const saveAssets = (newAssets: Asset[]) => {
    localStorage.setItem('vantix_assets', JSON.stringify(newAssets))
    setAssets(newAssets)
  }

  const handleAddNew = () => {
    setEditingAsset({
      id: Date.now().toString(),
      title: '',
      titleAr: '',
      description: '',
      descriptionAr: '',
      price: 0,
      image: '',
      demoLink: '',
      category: '',
      categoryAr: '',
    })
    setIsEditing(false)
    setShowForm(true)
  }

  const handleEdit = (asset: Asset) => {
    setEditingAsset(asset)
    setIsEditing(true)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this asset?')) {
      const newAssets = assets.filter(a => a.id !== id)
      saveAssets(newAssets)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingAsset) return

    if (isEditing) {
      const newAssets = assets.map(a => a.id === editingAsset.id ? editingAsset : a)
      saveAssets(newAssets)
    } else {
      saveAssets([...assets, editingAsset])
    }

    setShowForm(false)
    setEditingAsset(null)
  }

  const handleInputChange = (field: keyof Asset, value: string | number) => {
    if (!editingAsset) return
    setEditingAsset({ ...editingAsset, [field]: value })
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Admin Header */}
      <nav className="bg-[#0A0A0A] border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-[#C5A059] hover:text-[#D4B876] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Site
              </Link>
              <h1 className="text-2xl font-playfair font-bold text-white">
                Vantix Admin Dashboard
              </h1>
            </div>
            <button
              onClick={handleAddNew}
              className="flex items-center gap-2 px-4 py-2 bg-[#C5A059] hover:bg-[#A88944] text-black font-semibold rounded-md transition-all"
            >
              <Plus className="w-5 h-5" />
              Add New Asset
            </button>
          </div>
        </div>
      </nav>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#0A0A0A] border border-[#C5A059]/20 rounded-lg p-6">
            <h3 className="text-[#B8B8B8] text-sm mb-2">Total Assets</h3>
            <p className="text-3xl font-bold text-white">{assets.length}</p>
          </div>
          <div className="bg-[#0A0A0A] border border-[#C5A059]/20 rounded-lg p-6">
            <h3 className="text-[#B8B8B8] text-sm mb-2">Portfolio Value</h3>
            <p className="text-3xl font-bold text-[#C5A059]">
              {assets.reduce((sum, a) => sum + a.price, 0).toLocaleString()} SAR
            </p>
          </div>
          <div className="bg-[#0A0A0A] border border-[#C5A059]/20 rounded-lg p-6">
            <h3 className="text-[#B8B8B8] text-sm mb-2">Avg. Price</h3>
            <p className="text-3xl font-bold text-white">
              {assets.length > 0 ? Math.round(assets.reduce((sum, a) => sum + a.price, 0) / assets.length).toLocaleString() : 0} SAR
            </p>
          </div>
        </div>

        {/* Assets Table */}
        <div className="bg-[#0A0A0A] border border-[#C5A059]/20 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#050505] border-b border-[#C5A059]/20">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C5A059]">Asset</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C5A059]">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#C5A059]">Price</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#C5A059]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C5A059]/10">
                {assets.map((asset) => (
                  <tr key={asset.id} className="hover:bg-[#050505] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={asset.image}
                          alt={asset.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <p className="font-semibold text-white">{asset.title}</p>
                          <p className="text-sm text-[#B8B8B8]">{asset.titleAr}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white">{asset.category}</p>
                      <p className="text-sm text-[#B8B8B8]">{asset.categoryAr}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-[#C5A059]">
                        {asset.price.toLocaleString()} SAR
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <a
                          href={asset.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-[#B8B8B8] hover:text-[#C5A059] transition-colors"
                          title="View Demo"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                        <button
                          onClick={() => handleEdit(asset)}
                          className="p-2 text-[#B8B8B8] hover:text-[#C5A059] transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(asset.id)}
                          className="p-2 text-[#B8B8B8] hover:text-red-500 transition-colors"
                          title="Delete"
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

      {/* Edit/Add Modal */}
      {showForm && editingAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto">
          <div className="bg-[#0A0A0A] border border-[#C5A059]/30 rounded-lg max-w-2xl w-full p-8 my-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-playfair font-bold text-white">
                {isEditing ? 'Edit Asset' : 'Add New Asset'}
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-[#B8B8B8] hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#B8B8B8] mb-2">Title (English)</label>
                  <input
                    type="text"
                    value={editingAsset.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[#B8B8B8] mb-2">Title (Arabic)</label>
                  <input
                    type="text"
                    value={editingAsset.titleAr}
                    onChange={(e) => handleInputChange('titleAr', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#B8B8B8] mb-2">Category (English)</label>
                  <input
                    type="text"
                    value={editingAsset.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[#B8B8B8] mb-2">Category (Arabic)</label>
                  <input
                    type="text"
                    value={editingAsset.categoryAr}
                    onChange={(e) => handleInputChange('categoryAr', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                    dir="rtl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#B8B8B8] mb-2">Description (English)</label>
                <textarea
                  value={editingAsset.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[#B8B8B8] mb-2">Description (Arabic)</label>
                <textarea
                  value={editingAsset.descriptionAr}
                  onChange={(e) => handleInputChange('descriptionAr', e.target.value)}
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                  dir="rtl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#B8B8B8] mb-2">Price (SAR)</label>
                  <input
                    type="number"
                    value={editingAsset.price}
                    onChange={(e) => handleInputChange('price', parseInt(e.target.value))}
                    required
                    min="0"
                    step="100"
                    className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[#B8B8B8] mb-2">Demo Link</label>
                  <input
                    type="url"
                    value={editingAsset.demoLink}
                    onChange={(e) => handleInputChange('demoLink', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#B8B8B8] mb-2">Image URL</label>
                <input
                  type="url"
                  value={editingAsset.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-[#050505] border border-[#C5A059]/30 rounded-md text-white focus:outline-none focus:border-[#C5A059]"
                />
                {editingAsset.image && (
                  <div className="mt-4">
                    <img
                      src={editingAsset.image}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-3 bg-transparent border border-[#C5A059]/30 text-white rounded-md hover:bg-[#C5A059]/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#C5A059] hover:bg-[#A88944] text-black font-semibold rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {isEditing ? 'Update Asset' : 'Create Asset'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
