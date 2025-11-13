import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productScarves from "@/assets/product-scarves.jpg";
import productGiftset from "@/assets/product-giftset.jpg";
import productCustom from "@/assets/product-custom.jpg";

const categories = [
  {
    title: "Khăn Hoạ Tiết",
    description: "Chúng tôi giới thiệu những câu chuyện của Việt Nam thông qua các mẫu thiết kế áp dụng trên khăn lụa.",
    image: productScarves,
    link: "/product/khan-hoa-tiet-lotus",
    buttonText: "Mua Sắm"
  },
  {
    title: "Gift Sets",
    description: "Bạn đang tìm kiếm một món quà thực sự độc đáo? Hãy ghé xem bộ sưu tập các set quà tặng của chúng tôi.",
    image: productGiftset,
    link: "/product/gift-set-tet",
    buttonText: "Xem thêm"
  },
  {
    title: "Thiết Kế Riêng",
    description: "Thiết kế riêng logo thương hiệu hoặc lời chúc cá nhân lên khăn - quà tặng ý nghĩa cho cá nhân và doanh nghiệp.",
    image: productCustom,
    link: "/product/thiet-ke-rieng",
    buttonText: "Mua Sắm"
  }
];

export const ProductCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            NHỮNG GÌ CHÚNG TÔI CUNG CẤP
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                <Link to={category.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    {category.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
