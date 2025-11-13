import { Instagram, Facebook, Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-primary">FOLKSIGHT</span>
              <span className="text-xs tracking-widest text-muted-foreground">Embrace Heritage</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Giới thiệu những câu chuyện văn hóa Việt Nam qua nghệ thuật khăn lụa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Liên Kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/ve-chung-toi" className="text-muted-foreground hover:text-primary transition-colors">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="/san-pham" className="text-muted-foreground hover:text-primary transition-colors">
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a href="/gift-set" className="text-muted-foreground hover:text-primary transition-colors">
                  Gift Sets
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Hỗ Trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/lien-he" className="text-muted-foreground hover:text-primary transition-colors">
                  Liên Hệ
                </a>
              </li>
              <li>
                <a href="/chinh-sach" className="text-muted-foreground hover:text-primary transition-colors">
                  Chính Sách
                </a>
              </li>
              <li>
                <a href="/giao-hang" className="text-muted-foreground hover:text-primary transition-colors">
                  Giao Hàng
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Theo Dõi</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Folksight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
