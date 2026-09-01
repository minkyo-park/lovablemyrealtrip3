import { Link } from "react-router-dom";

const AFFILIATE_LINK = "https://myrealt.rip/aRT258";

const Footer = () => (
  <footer className="bg-foreground text-background/80 mt-16">
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-lg text-background mb-4">✈ 마이리얼트립 할인쿠폰</h3>
          <p className="text-sm leading-relaxed">
            마이리얼트립의 모든 할인 정보를 한 곳에서! 할인코드, 카드 할인, 간편결제 할인, 
            면세점 혜택까지 최신 정보를 매월 업데이트합니다.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-background mb-4">페이지 안내</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-background transition-colors">홈 — 할인쿠폰 총정리</Link></li>
            <li><Link to="/card-discount" className="hover:text-background transition-colors">카드·결제 할인 비교</Link></li>
            <li><Link to="/how-to-use" className="hover:text-background transition-colors">사용방법·트러블슈팅</Link></li>
            <li><Link to="/savings-strategy" className="hover:text-background transition-colors">절약 전략·부가혜택</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-background mb-4">인기 키워드</h4>
          <ul className="space-y-2 text-sm">
            <li>마이리얼트립 할인코드</li>
            <li>마이리얼트립 카드 할인</li>
            <li>마이리얼트립 항공권 특가</li>
            <li>마이리얼트립 면세점 혜택</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-background mb-4">지금 바로 할인 받기</h4>
          <p className="text-sm mb-4">최대 15% 할인 + 추가 쿠폰까지!</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-sm">
            마이리얼트립 할인 적용 →
          </a>
        </div>
      </div>
      <div className="border-t border-background/20 pt-6 text-center text-xs text-background/50">
        <p>© 2026 마이리얼트립 할인쿠폰. 본 사이트는 마이리얼트립 제휴 파트너로서 일부 링크를 통해 수수료를 받을 수 있습니다.</p>
        <p className="mt-1">최종 업데이트: 2026년 9월 | 마이리얼트립 고객센터: 1670-8208</p>
      </div>
    </div>
  </footer>
);

export default Footer;
