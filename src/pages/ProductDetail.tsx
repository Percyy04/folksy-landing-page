import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import productScarves from "@/assets/product-scarves.jpg";
import productGiftset from "@/assets/product-giftset.jpg";
import productCustom from "@/assets/product-custom.jpg";

// Sample product data
const products = {
  "khan-hoa-tiet-lotus": {
    id: "khan-hoa-tiet-lotus",
    name: "Khăn Lụa Hoạ Tiết Sen",
    price: 450000,
    originalPrice: 600000,
    description: "Khăn lụa cao cấp với họa tiết hoa sen - biểu tượng của sự thanh khiết và vẻ đẹp Việt Nam. Chất liệu lụa tơ tằm 100% mềm mại, thoáng mát.",
    images: [productScarves, productGiftset, productCustom],
    colors: ["Đỏ", "Xanh Navy", "Vàng Gold"],
    sizes: ["Standard (90x90cm)"],
    details: [
      "Chất liệu: Lụa tơ tằm 100%",
      "Kích thước: 90x90cm",
      "Họa tiết in silk-screen thủ công",
      "Viền may tỉ mỉ, chắc chắn",
      "Dễ dàng bảo quản và giặt tay"
    ]
  },
  "gift-set-tet": {
    id: "gift-set-tet",
    name: "Gift Set Tết 2024",
    price: 850000,
    originalPrice: 1200000,
    description: "Bộ quà tặng Tết cao cấp bao gồm khăn lụa, hộp đựng sang trọng và thiệp chúc mừng. Quà tặng ý nghĩa cho người thân, đối tác.",
    images: [productGiftset, productScarves, productCustom],
    colors: ["Set Đỏ Vàng", "Set Xanh Gold"],
    sizes: ["Premium Box"],
    details: [
      "Bao gồm: 1 khăn lụa + hộp gỗ + thiệp",
      "Khăn lụa tơ tằm 100%",
      "Hộp gỗ sang trọng có khắc tên",
      "Thiệp chúc mừng cao cấp",
      "Túi giấy kraft đi kèm"
    ]
  },
  "thiet-ke-rieng": {
    id: "thiet-ke-rieng",
    name: "Thiết Kế Khăn Theo Yêu Cầu",
    price: 1200000,
    originalPrice: 1500000,
    description: "Dịch vụ thiết kế và in khăn lụa theo yêu cầu riêng. Phù hợp cho quà tặng doanh nghiệp, sự kiện đặc biệt.",
    images: [productCustom, productScarves, productGiftset],
    colors: ["Tùy Chọn"],
    sizes: ["Tùy Chọn"],
    details: [
      "Thiết kế theo logo/họa tiết riêng",
      "Tư vấn thiết kế miễn phí",
      "In silk-screen chất lượng cao",
      "Đơn hàng tối thiểu: 50 chiếc",
      "Thời gian sản xuất: 2-3 tuần"
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products] || products["khan-hoa-tiet-lotus"];
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                      <img
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  className="aspect-square overflow-hidden rounded-md border-2 border-border hover:border-primary transition-colors"
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">
                  {product.price.toLocaleString('vi-VN')}₫
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString('vi-VN')}₫
                  </span>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Màu sắc: <span className="font-normal text-muted-foreground">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border-2 transition-all text-sm font-medium ${
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Kích thước: <span className="font-normal text-muted-foreground">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border-2 transition-all text-sm font-medium ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Số lượng</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-border rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 hover:bg-accent transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-2 font-semibold min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-accent transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Thêm vào giỏ
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Details */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Chi tiết sản phẩm</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
