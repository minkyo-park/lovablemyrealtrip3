const AFFILIATE_LINK = "https://myrealt.rip/aRT258";

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const CTABanner = ({
  title = "지금 바로 마이리얼트립 할인 받기!",
  description = "할인코드 + 카드 할인 + 간편결제 할인을 중복 적용하면 최대 수십만 원 절약! 아래 버튼을 통해 바로 할인을 적용하세요.",
  buttonText = "할인 적용하고 예약하기 →",
}: CTABannerProps) => (
  <section className="hero-section rounded-xl p-6 sm:p-10 my-10 text-center relative z-10">
    <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
    <p className="text-sm sm:text-base opacity-90 mb-6 max-w-xl mx-auto">{description}</p>
    <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-base sm:text-lg px-8 py-4">
      {buttonText}
    </a>
  </section>
);

export default CTABanner;
