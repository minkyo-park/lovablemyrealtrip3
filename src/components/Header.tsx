import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AFFILIATE_LINK = "https://myrealt.rip/XdEQf5";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/card-discount", label: "카드·결제 할인" },
  { path: "/how-to-use", label: "사용방법·FAQ" },
  { path: "/savings-strategy", label: "절약 전략" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <span className="text-secondary">✈</span> 마이리얼트립 할인쿠폰
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button ml-2 text-sm px-4 py-2">
            할인 받으러 가기 →
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-border bg-card pb-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-button mt-2 w-full text-center text-sm"
          >
            할인 받으러 가기 →
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
