import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShoppingBag, 
  PlusCircle, 
  BarChart3, 
  Search, 
  Filter, 
  Sparkles, 
  Heart, 
  Shirt, 
  Palette, 
  School, 
  DollarSign, 
  Upload, 
  Check, 
  X, 
  TrendingUp, 
  Package, 
  Users, 
  ChevronRight, 
  Award, 
  Tag, 
  MapPin, 
  ShoppingCart, 
  SlidersHorizontal,
  Trash2,
  ExternalLink,
  Edit3,
  Info,
  CheckCircle2,
  Flame,
  Layer,
  HelpCircle
} from 'lucide-react';

const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Westbridge Varsity Oversized Hoodie',
    category: 'Hoodies',
    school: 'Westbridge High',
    club: 'Senior Class \'26',
    price: 48.00,
    costToMake: 26.00,
    fundraisePerUnit: 22.00,
    rating: 4.9,
    reviewsCount: 42,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    colors: ['#1e3a8a', '#374151', '#059669', '#111827'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    creator: 'Maya Lin (Senior VP)',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    description: 'Heavyweight 400 GSM premium cotton hoodie with embroidered vintage varsity lettering. Features a double-lined hood and spacious kangaroo pocket.',
    salesCount: 128,
    isStudentDesign: true
  },
  {
    id: 'prod-2',
    title: 'Robotics Team Champions Cap',
    category: 'Caps',
    school: 'Oakridge Tech',
    club: 'Robotics Team',
    price: 24.50,
    costToMake: 12.00,
    fundraisePerUnit: 12.50,
    rating: 4.8,
    reviewsCount: 19,
    badge: 'Fundraiser',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    colors: ['#111827', '#1e40af', '#b91c1c'],
    sizes: ['One Size'],
    creator: 'Alex Chen (Robotics Captain)',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    description: 'Structured 6-panel dad hat featuring high-density 3D gear logo stitching. Adjustable brass buckle closure.',
    salesCount: 84,
    isStudentDesign: true
  },
  {
    id: 'prod-3',
    title: 'Eco-Canvas Campus Tote Bag',
    category: 'Tote Bags',
    school: 'Metropolitan Academy',
    club: 'Eco Club',
    price: 18.00,
    costToMake: 8.00,
    fundraisePerUnit: 10.00,
    rating: 4.7,
    reviewsCount: 31,
    badge: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    colors: ['#f3f4f6', '#d1d5db', '#065f46'],
    sizes: ['One Size'],
    creator: 'Sarah Jenkins',
    creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    description: '100% organic unbleached canvas tote. Reinforced straps capable of carrying laptop and heavy textbooks.',
    salesCount: 210,
    isStudentDesign: true
  },
  {
    id: 'prod-4',
    title: 'Cyber-Engineering Matte Flask',
    category: 'Water Bottles',
    school: 'Oakridge Tech',
    club: 'Engineering Club',
    price: 28.00,
    costToMake: 14.00,
    fundraisePerUnit: 14.00,
    rating: 5.0,
    reviewsCount: 56,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    colors: ['#18181b', '#0284c7', '#dc2626'],
    sizes: ['32 oz'],
    creator: 'David Miller',
    creatorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    description: 'Double-wall vacuum insulated stainless steel water bottle. Keeps drinks icy cold for 24 hours. Engraved gear motif.',
    salesCount: 95,
    isStudentDesign: true
  },
  {
    id: 'prod-5',
    title: 'Drama Guild Retro Acid-Wash Tee',
    category: 'T-Shirts',
    school: 'Westbridge High',
    club: 'Drama Guild',
    price: 26.00,
    costToMake: 13.00,
    fundraisePerUnit: 13.00,
    rating: 4.6,
    reviewsCount: 15,
    badge: 'Pre-order',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    colors: ['#374151', '#4c1d95', '#831843'],
    sizes: ['S', 'M', 'L', 'XL'],
    creator: 'Elena Rostova',
    creatorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    description: 'Ultra-soft ring-spun cotton with custom acid-wash texture. Front screen print with theatrical mask emblem.',
    salesCount: 62,
    isStudentDesign: true
  },
  {
    id: 'prod-6',
    title: 'Vinyl Laptop Sticker Pack (5-Pack)',
    category: 'Stickers',
    school: 'Westbridge High',
    club: 'Art Honor Society',
    price: 12.00,
    costToMake: 3.00,
    fundraisePerUnit: 9.00,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Student Creator',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
    colors: ['#ffffff'],
    sizes: ['Standard Pack'],
    creator: 'Chloe Bennett',
    creatorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
    description: 'Waterproof die-cut vinyl stickers designed by student digital artists. Weatherproof finish resist scratching and fading.',
    salesCount: 340,
    isStudentDesign: true
  }
];

const SCHOOL_CLUBS = [
  'All Schools & Clubs',
  'Westbridge High',
  'Senior Class \'26',
  'Robotics Team',
  'Engineering Club',
  'Eco Club',
  'Drama Guild',
  'Art Honor Society'
];

const CATEGORIES = ['All Categories', 'Hoodies', 'T-Shirts', 'Caps', 'Tote Bags', 'Water Bottles', 'Stickers'];

export default function App() {
  /* State Navigation & Modals */
  const [activeTab, setActiveTab] = useState('store'); // 'store' | 'creator' | 'dashboard'
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  /* Filter States */
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedClub, setSelectedClub] = useState('All Schools & Clubs');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState(100);

  /* Toast Notification Helper */
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  /* Filter Logic */
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.school.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
      const matchesClub = selectedClub === 'All Schools & Clubs' || 
                          product.school === selectedClub || 
                          product.club === selectedClub;
      const matchesPrice = product.price <= priceRange;

      return matchesSearch && matchesCategory && matchesClub && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.salesCount - a.salesCount;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [products, searchQuery, selectedCategory, selectedClub, sortBy, priceRange]);

  /* Cart Operations */
  const addToCart = (product, selectedColor, selectedSize) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(item => 
        item.id === product.id && item.color === selectedColor && item.size === selectedSize
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, {
        ...product,
        color: selectedColor || product.colors[0],
        size: selectedSize || product.sizes[0],
        quantity: 1
      }];
    });
    triggerToast(`Added "${product.title}" to cart!`);
  };

  const updateCartQty = (index, delta) => {
    setCart(prev => {
      const updated = [...prev];
      updated[index].quantity += delta;
      if (updated[index].quantity <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      return updated;
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    triggerToast('Item removed from cart');
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white pb-16">
      
      {}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('store')}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <School className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
                  CampusCraft
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                  Student Store
                </span>
              </div>
              <p className="text-xs text-slate-400">By Students, For Campus</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center p-1 bg-slate-900/90 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('store')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'store'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Store</span>
            </button>

            <button
              onClick={() => setActiveTab('creator')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'creator'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Palette className="w-4 h-4 text-pink-400" />
              <span>Design & Sell</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'dashboard'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Club Fundraising</span>
            </button>
          </nav>

          {/* Cart Icon & Mobile Nav Menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition group"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-pink-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950 animate-pulse">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Tab Bar */}
        <div className="md:hidden flex border-t border-slate-800/80 bg-slate-950 px-2 py-2 justify-around text-xs">
          <button
            onClick={() => setActiveTab('store')}
            className={`flex flex-col items-center space-y-1 px-3 py-1.5 rounded-lg ${
              activeTab === 'store' ? 'text-indigo-400 font-bold bg-slate-900' : 'text-slate-400'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Store</span>
          </button>
          <button
            onClick={() => setActiveTab('creator')}
            className={`flex flex-col items-center space-y-1 px-3 py-1.5 rounded-lg ${
              activeTab === 'creator' ? 'text-indigo-400 font-bold bg-slate-900' : 'text-slate-400'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Design</span>
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center space-y-1 px-3 py-1.5 rounded-lg ${
              activeTab === 'dashboard' ? 'text-indigo-400 font-bold bg-slate-900' : 'text-slate-400'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Fundraising</span>
          </button>
        </div>
      </header>

      {}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-slate-900 text-white px-5 py-3.5 rounded-2xl border border-indigo-500/40 shadow-2xl shadow-indigo-500/20 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Dynamic View Controller */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'store' && (
          <StorefrontView
            products={filteredProducts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedClub={selectedClub}
            setSelectedClub={setSelectedClub}
            sortBy={sortBy}
            setSortBy={setSortBy}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            onSelectProduct={setSelectedProduct}
            onAddToCart={addToCart}
            onOpenCreator={() => setActiveTab('creator')}
          />
        )}

        {activeTab === 'creator' && (
          <CreatorStudioView
            onPublish={(newProduct) => {
              setProducts([newProduct, ...products]);
              setActiveTab('store');
              triggerToast('🚀 Your merch design was published successfully to the campus store!');
            }}
          />
        )}

        {activeTab === 'dashboard' && (
          <SellerDashboardView products={products} />
        )}
      </main>

      {}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {}
      {isCartOpen && (
        <ShoppingCartDrawer
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onUpdateQty={updateCartQty}
          onRemove={removeFromCart}
          cartTotal={cartTotal}
          triggerToast={triggerToast}
        />
      )}
    </div>
  );
}

/* =========================================================================
   STOREFRONT VIEW COMPONENT
   ========================================================================= */
function StorefrontView({
  products,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedClub,
  setSelectedClub,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  onSelectProduct,
  onAddToCart,
  onOpenCreator
}) {
  return (
    <div className="space-y-8">
      
      {/* Hero Banner with Call to Action */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900/60 via-slate-900 to-violet-950/80 border border-slate-800/80 p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Senior Class & Club Merch Drop 2026</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
            Wear Your Pride.<br />
            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Fund Student Dreams.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover official high school & college club merch created by fellow students. 100% of profits go directly back to campus clubs, athletics, and graduation funds.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenCreator}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition shadow-lg shadow-indigo-600/30 flex items-center space-x-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Submit A Custom Design</span>
            </button>
            <a
              href="#catalog"
              className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition flex items-center space-x-2"
            >
              <span>Explore Drops</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {}
      <div id="catalog" className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
          
          {/* Search Input */}
          <div className="relative flex-1 min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search hoodie, robotics club, senior class..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          {/* Filters & Dropdowns */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* School Filter Dropdown */}
            <select
              value={selectedClub}
              onChange={(e) => setSelectedClub(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              {SCHOOL_CLUBS.map(club => (
                <option key={club} value={club}>{club}</option>
              ))}
            </select>

            {/* Category Filter Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {}
        {products.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-dashed border-slate-800 space-y-4">
            <Package className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-300">No merchandise found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              We couldn't find any items matching your filters. Try clearing your search query or picking a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedClub('All Schools & Clubs');
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl text-slate-200 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={() => onSelectProduct(product)}
                onQuickAdd={() => onAddToCart(product, product.colors[0], product.sizes[0])}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product, onSelect, onQuickAdd }) {
  return (
    <div className="group bg-slate-900/70 hover:bg-slate-900 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10">
      
      {/* Top Image Preview */}
      <div className="relative aspect-square overflow-hidden bg-slate-950 cursor-pointer" onClick={onSelect}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge && (
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md border shadow-sm ${
              product.badge === 'Popular' ? 'bg-amber-500/80 text-white border-amber-400/30' :
              product.badge === 'Fundraiser' ? 'bg-emerald-500/80 text-white border-emerald-400/30' :
              product.badge === 'Limited Edition' ? 'bg-pink-500/80 text-white border-pink-400/30' :
              'bg-indigo-500/80 text-white border-indigo-400/30'
            }`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Club Tag Overlay */}
        <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-xl flex items-center justify-between text-xs text-slate-300">
          <span className="font-semibold text-indigo-300 truncate">{product.club}</span>
          <span className="text-[10px] text-slate-400">{product.school}</span>
        </div>
      </div>

      {/* Body Metadata */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>{product.category}</span>
            <div className="flex items-center space-x-1 text-amber-400 font-semibold">
              <span>★</span>
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 
            onClick={onSelect}
            className="font-bold text-slate-100 text-base line-clamp-1 hover:text-indigo-400 transition cursor-pointer"
          >
            {product.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* Financial & Fundraiser Impact */}
        <div className="pt-3 border-t border-slate-800/80 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xl font-black text-white">${product.price.toFixed(2)}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                +${product.fundraisePerUnit.toFixed(2)} to club
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onSelect}
              className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition text-center"
            >
              View Details
            </button>
            <button
              onClick={onQuickAdd}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-md shadow-indigo-600/20"
              title="Quick Add to Cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   INTERACTIVE CREATOR STUDIO & DESIGN MOCKUP VIEW
   ========================================================================= */
function CreatorStudioView({ onPublish }) {
  const [productTitle, setProductTitle] = useState('Senior Class \'26 Oversized Tee');
  const [selectedSchool, setSelectedSchool] = useState('Westbridge High');
  const [selectedClub, setSelectedClub] = useState('Senior Class \'26');
  const [category, setCategory] = useState('T-Shirts');
  const [garmentColor, setGarmentColor] = useState('#18181b');
  const [designText, setDesignText] = useState('SENIORS \'26');
  const [textColor, setTextColor] = useState('#ffffff');
  const [retailPrice, setRetailPrice] = useState(28);
  const [costToMake] = useState(12);
  const [creatorName, setCreatorName] = useState('Alex Rivera (Student Rep)');
  const [description, setDescription] = useState('Custom student designed merch. Pre-order now to support our graduation ceremony and prom fund!');

  const profitMargin = retailPrice - costToMake;

  const handlePublish = (e) => {
    e.preventDefault();
    if (!productTitle.trim() || !designText.trim()) return;

    const newProduct = {
      id: `prod-${Date.now()}`,
      title: productTitle,
      category: category,
      school: selectedSchool,
      club: selectedClub,
      price: parseFloat(retailPrice),
      costToMake: costToMake,
      fundraisePerUnit: profitMargin > 0 ? profitMargin : 0,
      rating: 5.0,
      reviewsCount: 1,
      badge: 'Student Creator',
      image: category === 'Hoodies' 
        ? 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80'
        : category === 'Caps' 
        ? 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
        : category === 'Tote Bags'
        ? 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
        : 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      colors: [garmentColor, '#ffffff', '#000000'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      creator: creatorName,
      creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      description: description,
      salesCount: 0,
      isStudentDesign: true
    };

    onPublish(newProduct);
  };

  return (
    <div className="space-y-8">
      
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Creator Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Design & Launch School Merch</h1>
          <p className="text-slate-400 text-sm">Create custom merchandise for your class, sports team, or club and start fundraising instantly.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {}
        <div className="lg:col-span-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col items-center justify-center space-y-6">
          <div className="text-xs text-slate-400 font-semibold flex items-center space-x-1">
            <Layer className="w-4 h-4 text-indigo-400" />
            <span>Live Interactive Preview Canvas</span>
          </div>

          {/* Garment Mockup Container */}
          <div className="relative w-full max-w-sm aspect-square rounded-2xl flex items-center justify-center p-8 transition-colors duration-300 shadow-2xl border border-slate-700/50 overflow-hidden"
               style={{ backgroundColor: garmentColor }}>
            
            {/* Visual Icon overlay simulating garment shape */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
              {category === 'Hoodies' || category === 'T-Shirts' ? (
                <Shirt className="w-64 h-64 text-white" />
              ) : (
                <Package className="w-64 h-64 text-white" />
              )}
            </div>

            {/* Custom Design Front Overlay */}
            <div className="relative z-10 text-center p-6 border-2 border-dashed border-white/20 rounded-xl bg-black/20 backdrop-blur-xs max-w-[80%]">
              <span className="block text-xs uppercase tracking-widest font-bold opacity-75 mb-1" style={{ color: textColor }}>
                {selectedSchool}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase break-words leading-none" style={{ color: textColor }}>
                {designText || 'YOUR LOGO HERE'}
              </h2>
              <span className="block text-[10px] font-semibold mt-2 opacity-90 tracking-wider" style={{ color: textColor }}>
                OFFICIAL {selectedClub.toUpperCase()} MERCH
              </span>
            </div>

            <div className="absolute bottom-3 right-3 text-[10px] bg-slate-950/80 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-800">
              {category} • Custom Sample
            </div>
          </div>

          {/* Live Profit Calculator Widget */}
          <div className="w-full bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400">
              <span>ESTIMATED FUNDRAISING PROFIT</span>
              <span className="text-emerald-400">100% Goes to {selectedClub}</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Retail Price</p>
                <p className="text-lg font-black text-white">${retailPrice}</p>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Base Cost</p>
                <p className="text-lg font-black text-slate-400">${costToMake}</p>
              </div>
              <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">Profit / Unit</p>
                <p className="text-lg font-black text-emerald-400">+${profitMargin > 0 ? profitMargin : 0}</p>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="lg:col-span-6 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <form onSubmit={handlePublish} className="space-y-5">
            
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Edit3 className="w-4 h-4 text-indigo-400" />
              <span>Product Specifications</span>
            </h3>

            {/* Product Title */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Product Title</label>
              <input
                type="text"
                required
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
                placeholder="e.g., Robotics Champions Zip Hoodie"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* School & Club Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">School Name</label>
                <input
                  type="text"
                  required
                  value={selectedSchool}
                  onChange={(e) => setSelectedSchool(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Club / Organization</label>
                <input
                  type="text"
                  required
                  value={selectedClub}
                  onChange={(e) => setSelectedClub(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Category & Garment Color Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Item Type</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none cursor-pointer"
                >
                  <option value="T-Shirts">T-Shirt</option>
                  <option value="Hoodies">Hoodie</option>
                  <option value="Caps">Cap / Hat</option>
                  <option value="Tote Bags">Tote Bag</option>
                  <option value="Water Bottles">Water Bottle</option>
                  <option value="Stickers">Sticker Pack</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Apparel Base Color</label>
                <div className="flex items-center space-x-2 pt-1">
                  {['#18181b', '#1e3a8a', '#991b1b', '#065f46', '#4c1d95', '#ffffff'].map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setGarmentColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        garmentColor === c ? 'scale-125 border-indigo-400 ring-2 ring-indigo-500/50' : 'border-slate-700'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Design Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Print Artwork Text</label>
                <input
                  type="text"
                  required
                  value={designText}
                  onChange={(e) => setDesignText(e.target.value)}
                  placeholder="e.g. ROBOTICS 2026"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Text Font Color</label>
                <div className="flex items-center space-x-2 pt-1">
                  {['#ffffff', '#f59e0b', '#38bdf8', '#a855f7', '#10b981', '#000000'].map(tc => (
                    <button
                      key={tc}
                      type="button"
                      onClick={() => setTextColor(tc)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        textColor === tc ? 'scale-125 border-indigo-400' : 'border-slate-700'
                      }`}
                      style={{ backgroundColor: tc }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Retail Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-300 uppercase">Set Listing Price ($)</label>
                <span className="text-sm font-extrabold text-indigo-400">${retailPrice}.00</span>
              </div>
              <input
                type="range"
                min="15"
                max="75"
                value={retailPrice}
                onChange={(e) => setRetailPrice(parseInt(e.target.value))}
                className="w-full accent-indigo-500 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Student Creator Name */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Student Lead / Organizer Name</label>
              <input
                type="text"
                required
                value={creatorName}
                onChange={(e) => setCreatorName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Submit / Publish Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-black text-base shadow-lg shadow-indigo-600/30 transition duration-200 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Publish To Campus Marketplace</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   STUDENT SELLER & FUNDRAISING DASHBOARD VIEW
   ========================================================================= */
function SellerDashboardView({ products }) {
  const totalSales = products.reduce((acc, item) => acc + (item.salesCount || 0), 0);
  const totalRaised = products.reduce((acc, item) => acc + ((item.salesCount || 0) * item.fundraisePerUnit), 0);
  const fundraisingGoal = 1000;
  const progressPercent = Math.min(Math.round((totalRaised / fundraisingGoal) * 100), 100);

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            <span>Club Revenue & Impact Tracker</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Student Seller Dashboard</h1>
          <p className="text-slate-400 text-sm">Monitor live merchandise sales and track progress towards your school club goals.</p>
        </div>
      </div>

      {/* Analytics Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Total Raised</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-3xl font-black text-white">${totalRaised.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
          <span className="text-[11px] text-emerald-400 font-semibold flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>+18.4% from last week</span>
          </span>
        </div>

        <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Units Sold</span>
            <Package className="w-4 h-4 text-indigo-400" />
          </div>
          <p className="text-3xl font-black text-white">{totalSales}</p>
          <span className="text-[11px] text-slate-400">Across 6 student drops</span>
        </div>

        <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Active Clubs</span>
            <Users className="w-4 h-4 text-pink-400" />
          </div>
          <p className="text-3xl font-black text-white">5 Clubs</p>
          <span className="text-[11px] text-indigo-400">Westbridge High & Tech</span>
        </div>

        <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
            <span>Next Payout</span>
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-3xl font-black text-white">Oct 15</p>
          <span className="text-[11px] text-slate-400">Direct to Student Union</span>
        </div>
      </div>

      {}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Flame className="w-5 h-5 text-orange-400" />
              <span>Robotics Team Competition Fundraiser</span>
            </h3>
            <p className="text-xs text-slate-400">Goal: Travel & Registration fee for State Championship 2026</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-emerald-400">${totalRaised.toFixed(0)}</span>
            <span className="text-sm font-bold text-slate-400"> / ${fundraisingGoal}</span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-950 h-4 rounded-full overflow-hidden p-0.5 border border-slate-800">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 h-full rounded-full transition-all duration-1000 shadow-lg"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-xs font-semibold text-slate-400">
          <span>{progressPercent}% Goal Reached</span>
          <span>${fundraisingGoal - totalRaised > 0 ? (fundraisingGoal - totalRaised).toFixed(0) : 0} Remaining</span>
        </div>
      </div>

      {/* Active Merch Listings Table */}
      <div className="bg-slate-900/60 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-white text-base">Active Campus Listings</h3>
          <span className="text-xs text-slate-400">{products.length} Items Listed</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-950/80 text-slate-400 text-xs uppercase font-bold border-b border-slate-800">
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-6">Club / Organization</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Profit / Unit</th>
                <th className="py-4 px-6">Units Sold</th>
                <th className="py-4 px-6 text-right">Total Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {products.map(p => (
                <tr key={p.id} className="hover:bg-slate-800/40 transition">
                  <td className="py-4 px-6 font-semibold text-white flex items-center space-x-3">
                    <img src={p.image} alt="" className="w-10 h-10 rounded-lg object-cover bg-slate-950" />
                    <span className="truncate max-w-xs">{p.title}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-slate-800 px-2.5 py-1 rounded-lg text-xs font-medium text-indigo-300 border border-slate-700">
                      {p.club}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-white">${p.price.toFixed(2)}</td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold">+${p.fundraisePerUnit.toFixed(2)}</td>
                  <td className="py-4 px-6 font-bold">{p.salesCount || 0}</td>
                  <td className="py-4 px-6 text-right font-black text-emerald-400">
                    ${((p.salesCount || 0) * p.fundraisePerUnit).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   PRODUCT DETAIL MODAL DIALOG
   ========================================================================= */
function ProductDetailModal({ product, onClose, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-950 text-slate-400 hover:text-white border border-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Gallery Image */}
          <div className="relative aspect-square bg-slate-950">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-bold uppercase tracking-wider bg-indigo-600/90 text-white px-3 py-1 rounded-lg backdrop-blur-md shadow-md">
                {product.club}
              </span>
            </div>
          </div>

          {/* Product Info & Purchase Options */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Creator Info Header */}
              <div className="flex items-center space-x-3 bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
                <img
                  src={product.creatorAvatar}
                  alt={product.creator}
                  className="w-9 h-9 rounded-full object-cover border border-indigo-500/40"
                />
                <div>
                  <p className="text-xs text-slate-400">Designed & Submitted by</p>
                  <p className="text-xs font-bold text-slate-200">{product.creator}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">{product.title}</h2>
                <p className="text-xs text-slate-400 mt-1">{product.school}</p>
              </div>

              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-black text-white">${product.price.toFixed(2)}</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  +${product.fundraisePerUnit.toFixed(2)} goes to {product.club}
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Color</label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-transform ${
                          selectedColor === color ? 'scale-110 border-indigo-400 ring-2 ring-indigo-500/40' : 'border-slate-800'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition ${
                          selectedSize === size
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/20'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  onAddToCart(product, selectedColor, selectedSize);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add To Cart • ${(product.price).toFixed(2)}</span>
              </button>
              
              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Free On-Campus Pickup at Student Union Room 204</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   SLIDE-OVER SHOPPING CART & CHECKOUT DRAWER
   ========================================================================= */
function ShoppingCartDrawer({ cart, onClose, onUpdateQty, onRemove, cartTotal, triggerToast }) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [pickupOption, setPickupOption] = useState('campus');
  const [isCheckoutMock, setIsCheckoutMock] = useState(false);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'STUDENT10') {
      setDiscount(cartTotal * 0.10);
      triggerToast('🎉 10% Student Discount Applied!');
    } else {
      triggerToast('❌ Invalid code. Try "STUDENT10"');
    }
  };

  const finalTotal = Math.max(0, cartTotal - discount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-xs animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg font-bold text-white">Your Campus Cart</h2>
              <span className="text-xs bg-slate-800 text-slate-300 font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingCart className="w-12 h-12 text-slate-700 mx-auto" />
                <p className="text-slate-400 text-sm font-semibold">Your cart is empty</p>
                <p className="text-slate-500 text-xs">Explore student merchandise to start supporting campus clubs!</p>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="flex items-center space-x-4 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
                  <img src={item.image} alt="" className="w-16 h-16 rounded-xl object-cover bg-slate-900 shrink-0" />
                  
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                    <p className="text-[11px] text-indigo-400 font-semibold">{item.club}</p>
                    <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                      <span>Size: {item.size}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <span>Color:</span>
                        <span className="w-2.5 h-2.5 rounded-full inline-block border border-slate-700" style={{ backgroundColor: item.color }} />
                      </div>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex flex-col items-end space-y-2">
                    <span className="text-sm font-black text-white">${(item.price * item.quantity).toFixed(2)}</span>
                    <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1">
                      <button onClick={() => onUpdateQty(idx, -1)} className="text-slate-400 hover:text-white text-xs font-bold">-</button>
                      <span className="text-xs font-bold text-white">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(idx, 1)} className="text-slate-400 hover:text-white text-xs font-bold">+</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer / Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-800 space-y-4 bg-slate-950/80">
              
              {/* Pickup Option Selector */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Fulfillment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPickupOption('campus')}
                    className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition ${
                      pickupOption === 'campus'
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="font-bold text-white">Campus Pickup</div>
                    <div className="text-[10px] text-slate-400">Student Union Rm 204 (Free)</div>
                  </button>

                  <button
                    onClick={() => setPickupOption('ship')}
                    className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition ${
                      pickupOption === 'ship'
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="font-bold text-white">Direct Shipping</div>
                    <div className="text-[10px] text-slate-400">Standard ($4.99)</div>
                  </button>
                </div>
              </div>

              {/* Promo Code Input */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. STUDENT10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition"
                >
                  Apply
                </button>
              </form>

              {/* Pricing Totals Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Student Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="text-white font-semibold">{pickupOption === 'campus' ? 'FREE' : '$4.99'}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-slate-800">
                  <span>Total</span>
                  <span className="text-indigo-400">${(finalTotal + (pickupOption === 'ship' ? 4.99 : 0)).toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  setIsCheckoutMock(true);
                  setTimeout(() => {
                    setIsCheckoutMock(false);
                    onClose();
                    triggerToast('🎉 Order Placed! Check your student email for pickup instructions.');
                  }, 2000);
                }}
                disabled={isCheckoutMock}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-sm shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isCheckoutMock ? (
                  <span>Processing Campus Order...</span>
                ) : (
                  <span>Complete Student Checkout</span>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}