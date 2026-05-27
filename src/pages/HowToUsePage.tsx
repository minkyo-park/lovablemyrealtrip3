import { Helmet } from "react-helmet-async";
import { useState } from "react";
import CTABanner from "@/components/CTABanner";
import howtoHero from "@/assets/howto-hero.jpg";
import howToGuide from "@/assets/how-to-guide.png";
import troubleshoot from "@/assets/troubleshoot.png";
import faqImg from "@/assets/faq.png";

const AFFILIATE_LINK = "https://myrealt.rip/aRT258";

const HowToUsePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "할인코드 중복 적용이 가능한가요?", a: "할인코드(쿠폰)끼리는 중복 불가 — 1건당 1개의 할인쿠폰만 적용 가능합니다. 단, 할인코드와 카드사 즉시 할인·청구 할인은 별도로 중복 적용 가능합니다. 결론적으로 할인코드 1개 + 카드 할인 + 간편결제 할인을 모두 조합하면 최대 혜택을 받을 수 있습니다." },
    { q: "포인트와 할인코드를 동시에 사용할 수 있나요?", a: "가능합니다. 마이리얼트립 포인트(Trip Cash)와 할인쿠폰은 중복 사용 가능합니다. 예약 페이지에서 함께 체크하면 됩니다. 단, 여러 쿠폰을 동시에 적용하는 것은 불가능합니다." },
    { q: "취소 후 재예약 시 동일 쿠폰을 다시 사용할 수 있나요?", a: "1회 제한 쿠폰은 사용 후 예약을 취소해도 재사용 불가합니다. 2회 이상 사용 가능한 쿠폰은 유효 기간 내 재사용 가능한 경우도 있습니다. 취소 후 3일 내 재발급 요청하거나 마이페이지에서 자동 복원 여부를 확인하세요." },
    { q: "쿠폰함 저장과 직접 입력의 차이는?", a: "쿠폰함에 저장하면 여러 쿠폰을 비교할 수 있고, 결제 시 '최대할인적용'으로 가장 유리한 쿠폰이 자동 선택됩니다. 직접 입력은 절차가 간단하지만 비교가 어렵습니다." },
    { q: "환불 시 결제 수단별 처리 시간은?", a: "신용카드 취소 시 빠르면 즉시 ~ 5-10 영업일 이내입니다. 환불 확인이 필요한 경우 더 오래 걸릴 수 있으므로 고객센터(1670-8208) 문의를 권장합니다." },
    { q: "결제 수단을 변경할 수 있나요?", a: "구매 후 결제 수단 변경은 불가합니다. 반드시 결제 전에 최적의 결제 수단을 선택해야 합니다." },
    { q: "할인코드가 적용 안 되면 어떻게 하나요?", a: "적용 대상 상품 확인, 최소 결제금액 확인, 유효기간 확인, 로그인 상태 확인 후에도 안 되면 앱을 최신 버전으로 업데이트하거나 브라우저 캐시를 삭제한 뒤 재시도하세요. 그래도 안 되면 고객센터에 문의하세요." },
  ];

  return (
    <>
      <Helmet>
        <title>사용방법·트러블슈팅 - 마이리얼트립 할인쿠폰</title>
        <meta name="description" content="마이리얼트립 할인코드 적용법, 쿠폰 등록 방법, 할인코드가 안 될 때 해결법, 결제 오류 트러블슈팅, FAQ까지 모두 정리했습니다." />
        <link rel="canonical" href="https://mrt.couponmonster.co.kr/how-to-use" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="사용방법·트러블슈팅 - 마이리얼트립 할인쿠폰" />
        <meta property="og:description" content="마이리얼트립 할인코드 적용법, 쿠폰 등록 방법, 할인코드가 안 될 때 해결법, 결제 오류 트러블슈팅, FAQ까지 모두 정리했습니다." />
        <meta property="og:url" content="https://mrt.couponmonster.co.kr/how-to-use" />
        <meta property="og:image" content="https://mrt.couponmonster.co.kr/og-image.jpg" />
        <meta property="og:site_name" content="마이리얼트립 할인쿠폰" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="사용방법·트러블슈팅 - 마이리얼트립 할인쿠폰" />
        <meta name="twitter:description" content="마이리얼트립 할인코드 적용법, 쿠폰 등록 방법, 할인코드가 안 될 때 해결법, 결제 오류 트러블슈팅, FAQ까지 모두 정리했습니다." />
        <meta name="twitter:image" content="https://mrt.couponmonster.co.kr/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      <section className="hero-section relative">
        <img src={howtoHero} alt="마이리얼트립 할인코드 사용방법" width={1920} height={640} className="w-full h-40 sm:h-56 md:h-72 object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-4xl font-black mb-2 drop-shadow-lg">사용방법 · 트러블슈팅</h1>
            <p className="text-sm sm:text-lg opacity-90">할인코드 적용법부터 오류 해결까지 완벽 가이드</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-10">
        {/* Step by Step 가이드 */}
        <section className="mb-14">
          <h2 className="section-title">📋 할인코드 사용방법 (Step by Step)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={howToGuide} alt="할인코드 사용 방법 가이드" width={400} height={300} loading="lazy" className="w-full h-48 object-contain mb-4" />
              <h3 className="font-bold text-lg mb-3 text-primary">방법 A: 쿠폰함에 미리 등록 (권장)</h3>
              <ol className="space-y-3">
                {[
                  "사용하고 싶은 할인코드를 복사합니다",
                  "마이리얼트립 앱 또는 웹 접속 → 로그인",
                  "우측 상단 프로필 아이콘 클릭",
                  "'쿠폰' 탭 선택 → '쿠폰 등록하기' 클릭",
                  "복사한 할인코드 붙여넣기 → '등록' 클릭",
                  "쿠폰이 발급되면 쿠폰함에서 확인",
                  "원하는 상품 선택 → 결제 진행",
                  "결제 창에서 '쿠폰할인' → '최대할인적용' 선택",
                  "쿠폰이 자동 적용되어 할인 금액 반영!",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="step-number">{i + 1}</span>
                    <span className="text-sm text-muted-foreground pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 text-secondary">방법 B: 결제 페이지에서 직접 입력</h3>
              <ol className="space-y-3 mb-6">
                {[
                  "원하는 상품 선택 → 결제 페이지 진입",
                  "결제 페이지 내 '할인코드 입력란'에 코드 직접 입력",
                  "할인 금액이 즉시 차감되어 최종 결제 금액에 반영",
                  "'최대할인 적용'을 선택하면 할인 내역 확인 가능",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="step-number bg-secondary">{i + 1}</span>
                    <span className="text-sm text-muted-foreground pt-1">{step}</span>
                  </li>
                ))}
              </ol>

              <h4 className="font-bold mb-3">방법 A vs B 비교</h4>
              <div className="table-responsive">
                <table className="data-table">
                  <thead><tr><th>항목</th><th>쿠폰함 등록</th><th>직접 입력</th></tr></thead>
                  <tbody>
                    <tr><td>장점</td><td className="text-xs">여러 쿠폰 비교 가능</td><td className="text-xs">바로 적용, 절차 간소</td></tr>
                    <tr><td>단점</td><td className="text-xs">등록 후 7일 내 사용</td><td className="text-xs">비교 어려움</td></tr>
                    <tr><td>추천</td><td className="text-xs">여러 쿠폰 보유 시</td><td className="text-xs">쿠폰 1개만 사용</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-bold mt-6 mb-2">카드사 전용 쿠폰 등록</h4>
              <div className="info-card">
                <ol className="text-sm text-muted-foreground space-y-1">
                  <li>1. '쿠폰 등록하기' 페이지 접속</li>
                  <li>2. <strong>카드번호 앞 6자리 + 등록 연월</strong> 입력 (예: XXXXXX2604)</li>
                  <li>3. 쿠폰 수령 완료</li>
                  <li>4. 해당 월 내 미사용 시 자동 소멸</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button">
              지금 할인코드 적용하러 가기 →
            </a>
          </div>
        </section>

        {/* 트러블슈팅 */}
        <section className="mb-14">
          <h2 className="section-title">🔧 할인코드 적용 안 될 때 — 트러블슈팅</h2>
          <img src={troubleshoot} alt="트러블슈팅 가이드" width={400} height={300} loading="lazy" className="mx-auto h-32 object-contain mb-6" />

          <div className="space-y-4">
            {[
              { title: "적용 대상 상품이 아닌 경우", desc: "여행자보험, 렌터카, 편도 항공권은 적용 불가. 할인코드 하단의 '적용 대상' 항목을 확인하세요.", icon: "🔴" },
              { title: "'최저가 보장제' 상품인 경우", desc: "'최저가 보장제' 표시 상품은 이미 특별 할인이 반영된 상태로, 할인코드 추가 적용 불가. 카드 할인은 별도 적용 가능.", icon: "🔴" },
              { title: "최소 결제금액 미달", desc: "각 쿠폰마다 최소 결제금액이 있습니다 (5만/10만/15만 원). 쿠폰 상세에서 확인하세요.", icon: "🔴" },
              { title: "유효기간 만료", desc: "등록 후 발급된 쿠폰은 보통 7일 이내 사용 필수. 결제할 시기에 맞춰 쿠폰 발급 타이밍을 조절하세요.", icon: "🔴" },
              { title: "이미 사용한 코드 재적용", desc: "동일 코드는 계정당 1회만 사용 가능. 새로 발급된 다른 코드를 찾아 사용하세요.", icon: "🔴" },
              { title: "예산(선착순) 소진", desc: "대부분의 할인코드는 선착순으로 운영. 월 초에 미리 등록하거나, 다른 유효한 코드를 탐색하세요.", icon: "🔴" },
              { title: "카테고리 불일치", desc: "일부 코드는 특정 카테고리(해외 투어·티켓)에만 적용 가능. 코드별 적용 카테고리를 확인하세요.", icon: "🔴" },
              { title: "로그인 상태 문제", desc: "할인코드 적용에는 로그인 필수. 쿠키/캐시 문제 시 로그아웃 후 재로그인하세요.", icon: "🔴" },
              { title: "앱 버전 문제", desc: "구버전 앱에서는 일부 기능이 작동하지 않을 수 있음. 앱 스토어에서 최신 버전으로 업데이트하세요.", icon: "🔴" },
              { title: "네트워크/브라우저 문제", desc: "안정적인 Wi-Fi에서 접속하고, 다른 브라우저(크롬, 사파리)를 사용해보세요.", icon: "🔴" },
            ].map((item, i) => (
              <div key={i} className="info-card">
                <h3 className="font-bold text-sm mb-1">{item.icon} 원인 {i + 1}: {item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 결제 오류 */}
        <section className="mb-14">
          <h2 className="section-title">💳 결제 오류 트러블슈팅</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="info-card">
              <h3 className="font-bold mb-2">결제 중 오류 발생 시</h3>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. 앱/웹 재실행 및 재접속</li>
                <li>2. 앱 최신 버전 업데이트</li>
                <li>3. 다른 결제 수단으로 변경</li>
                <li>4. 고객지원실 <strong>1670-8208</strong> 또는 1:1 채팅상담</li>
              </ol>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">결제 중 쿠폰이 사라진 경우</h3>
              <p className="text-sm text-muted-foreground">결제 오류 시 쿠폰이 소멸될 수 있습니다. 고객지원실에 문의하여 쿠폰 환급(복원) 요청하세요. 1회 제한 쿠폰은 자동 복원이 안 될 수 있습니다.</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">해외카드 결제 오류</h3>
              <p className="text-sm text-muted-foreground">Visa, Master, JCB 등 해외카드 가능하나 일부 카드사에서 거절될 수 있습니다. 카드사에 온라인 해외결제 차단 해제를 요청하세요.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="section-title">❓ 자주 묻는 질문 (FAQ)</h2>
          <img src={faqImg} alt="자주 묻는 질문" width={200} height={150} loading="lazy" className="mx-auto h-24 object-contain mb-6" />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-sm pr-4">Q{i + 1}. {faq.q}</span>
                  <svg className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="info-card mt-6 text-center">
            <h3 className="font-bold mb-2">📞 마이리얼트립 고객센터</h3>
            <p className="text-sm text-muted-foreground">전화: <strong>1670-8208</strong> | 1:1 채팅상담: 앱/PC 화면 하단</p>
            <p className="text-xs text-muted-foreground mt-1">운영 시간: 연중무휴, 09:00~18:00 (점심 12:00~13:00)</p>
          </div>
        </section>

        {/* 할인코드 적용 체크리스트 (추가) */}
        <section className="mb-14">
          <h2 className="section-title">✅ 할인코드 적용 전 체크리스트</h2>
          <div className="info-card">
            <ul className="space-y-2 text-sm">
              {[
                "마이리얼트립 앱 최신 버전인지 확인",
                "로그인 상태 확인",
                "할인코드의 적용 대상 상품 카테고리 확인 (투어/숙소/항공)",
                "최소 결제금액 충족 여부 확인",
                "할인코드 유효기간 확인 (등록 후 7일 이내)",
                "'최저가 보장제' 마크 여부 확인",
                "결제 수단 미리 선택 (카드 할인 조합 확인)",
                "자정 선착순 할인 시간 확인 (간편결제)",
                "결제 직전 '할인 내역'에서 중복 적용 확인",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-success font-bold">☐</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTABanner title="할인코드 준비 완료!" description="위 가이드를 따라 할인코드를 적용하고, 카드 할인까지 중복 적용하세요!" buttonText="지금 할인 적용하러 가기 →" />
      </main>
    </>
  );
};

export default HowToUsePage;
