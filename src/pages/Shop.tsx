import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import productScarvesImg from "@/assets/product-scarves.jpg";
import productGiftsetImg from "@/assets/product-giftset.jpg";
import productCustomImg from "@/assets/product-custom.jpg";

const products = [
  {
    id: "khan-hoa-tiet-lotus",
    name: "Khăn Lụa Hoạ Tiết Sen",
    price: "825,000₫",
    image: productScarvesImg,
    category: "scarves",
    bestSeller: true,
  },
  {
    id: "khan-hoa-tiet-dragon",
    name: "Khăn Lụa Rồng Phượng",
    price: "850,000₫",
    image: productScarvesImg,
    category: "scarves",
    bestSeller: false,
  },
  {
    id: "gift-set-premium",
    name: "Gift Set Cao Cấp",
    price: "1,200,000₫",
    image: productGiftsetImg,
    category: "giftsets",
    bestSeller: true,
  },
  {
    id: "gift-set-deluxe",
    name: "Gift Set Deluxe",
    price: "980,000₫",
    image: productGiftsetImg,
    category: "giftsets",
    bestSeller: false,
  },
  {
    id: "thiet-ke-rieng-1",
    name: "Thiết Kế Riêng - Custom Design",
    price: "1,500,000₫",
    image: productCustomImg,
    category: "custom",
    bestSeller: false,
  },
  {
    id: "khan-hoa-tiet-bamboo",
    name: "Khăn Lụa Tre Việt",
    price: "795,000₫",
    image: productScarvesImg,
    category: "scarves",
    bestSeller: false,
  },
];

const categories = [
  { value: "all", label: "Tất cả" },
  { value: "scarves", label: "Khăn Hoạ Tiết" },
  { value: "giftsets", label: "Gift Sets" },
  { value: "custom", label: "Thiết Kế Riêng" },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(
    (product) => selectedCategory === "all" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, ""));
    }
    if (sortBy === "price-high") {
      return parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, ""));
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={productScarvesImg}
          alt="Vietnam Designed Silk Scarves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">VIETNAM</h1>
            <h2 className="text-3xl md:text-4xl font-light">DESIGNED SILK SCARVES</h2>
            <p className="mt-4 text-lg">Modern Designs inspired by Vietnamese Dynasties' Royal Art</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Lọc theo</h3>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground mb-3">Danh mục</h4>
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === category.value
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Hiển thị {sortedProducts.length} sản phẩm
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Nổi bật</SelectItem>
                  <SelectItem value="name">Tên A-Z</SelectItem>
                  <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                  <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.bestSeller && (
                        <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                          Best Seller
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Button variant="secondary" size="sm">
                          Xem nhanh
                        </Button>
                      </div>
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xl font-bold text-primary mb-4">{product.price}</p>
                    <Button className="w-full" variant="outline">
                      Thêm vào giỏ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
