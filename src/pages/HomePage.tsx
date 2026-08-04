import { Head } from "vite-react-ssg";
import CouponCode from "@/components/CouponCode";
import coupon1 from "@/assets/coupon-1.webp";
import coupon2 from "@/assets/coupon-2.webp";
import coupon3 from "@/assets/coupon-3.webp";
import coupon4 from "@/assets/coupon-4.webp";
import coupon5 from "@/assets/coupon-5.webp";
import CTABanner from "@/components/CTABanner";
import heroBanner from "@/assets/hero-banner.jpg";
import discountCode from "@/assets/discount-code.png";
import flightDiscount from "@/assets/flight-discount.png";
import hotelDiscount from "@/assets/hotel-discount.png";
import tourTicket from "@/assets/tour-ticket.png";
import newMember from "@/assets/new-member.png";
import cardComparison from "@/assets/card-comparison.png";
import mobilePayment from "@/assets/mobile-payment.png";
import priceCompare from "@/assets/price-compare.png";
import { Link } from "react-router-dom";

const AFFILIATE_LINK = "https://myrealt.rip/aRT258";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>마이리얼트립 할인쿠폰</title>
        <meta name="description" content="매달 갱신되는 마이리얼트립 8월 할인쿠폰 정보. 적용 가능한 상품, 사용 조건, 유효기간까지 할인코드별로 꼼꼼하게 정리했습니다. 8월 여행 경비 확 줄이는 마이리얼트립 쿠폰, 여기서 받아가세요." />
        <link rel="canonical" href="https://mrt.couponmonster.co.kr/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="마이리얼트립 할인쿠폰" />
        <meta property="og:description" content="매달 갱신되는 마이리얼트립 8월 할인쿠폰 정보. 적용 가능한 상품, 사용 조건, 유효기간까지 할인코드별로 꼼꼼하게 정리했습니다. 8월 여행 경비 확 줄이는 마이리얼트립 쿠폰, 여기서 받아가세요." />
        <meta property="og:url" content="https://mrt.couponmonster.co.kr/" />
        <meta property="og:image" content="https://mrt.couponmonster.co.kr/og-image.jpg" />
        <meta property="og:site_name" content="마이리얼트립 할인쿠폰" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="마이리얼트립 할인쿠폰" />
        <meta name="twitter:description" content="매달 갱신되는 마이리얼트립 8월 할인쿠폰 정보. 적용 가능한 상품, 사용 조건, 유효기간까지 할인코드별로 꼼꼼하게 정리했습니다." />
        <meta name="twitter:image" content="https://mrt.couponmonster.co.kr/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "마이리얼트립 할인쿠폰",
          "description": "매달 갱신되는 마이리얼트립 8월 할인쿠폰 정보. 적용 가능한 상품, 사용 조건, 유효기간까지 할인코드별로 꼼꼼하게 정리했습니다.",
          "datePublished": "2026-06-01",
          "dateModified": "2026-08-04",
          "author": { "@type": "Organization", "name": "마이리얼트립 할인쿠폰" },
          "publisher": { "@type": "Organization", "name": "마이리얼트립 할인쿠폰", "url": "https://mrt.couponmonster.co.kr" }
        })}</script>
      </Head>

      {/* Hero */}
      <section className="hero-section relative">
        <img src={heroBanner} alt="마이리얼트립 할인쿠폰 총정리 배너" width={1920} height={640} className="w-full h-48 sm:h-64 md:h-80 object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 drop-shadow-lg">마이리얼트립 할인쿠폰 총정리</h1>
            <p className="text-sm sm:text-lg mb-6 opacity-90 max-w-2xl mx-auto">2026년 8월 최신 할인코드 · 카드사별 최대 15% 할인 · 간편결제 할인 · 면세점 혜택까지 한눈에!</p>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-base sm:text-lg px-8 py-4">
              지금 할인 받으러 가기 →
            </a>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-10">
        {/* 현재 사용 가능한 할인코드 */}
        <section className="mb-14">
          <h2 className="section-title">📋 현재 사용 가능한 할인코드 (2026년 8월)</h2>
          <p className="text-sm text-muted-foreground mb-6">아래 코드는 2026년 8월 기준이며, 매월 말일에 만료 후 새 코드로 갱신됩니다. 코드를 클릭하면 복사됩니다.</p>
          
          <div className="space-y-4">
            <CouponCode code="LINKPRICE3000" discount="3,000원 할인 (약 2%)" minAmount="15만 원" note="해외 투어·티켓 전용 · 선착순 한정 수량 · 발급일로부터 7일 이내 사용 · 예산 소진 시 별도 안내 없이 종료" image={coupon1} href="https://myrealt.rip/ai1986" />
            <CouponCode code="LINKPRICE1000" discount="1,000원 할인 (약 2%)" minAmount="5만 원" note="해외 투어·티켓 전용 · 선착순 한정 수량 · 발급일로부터 7일 이내 사용 · 예산 소진 시 별도 안내 없이 종료" image={coupon2} href="https://myrealt.rip/ai1986" />
            <CouponCode code="PACKMKTP5000" discount="5,000원 할인" minAmount="15만 원" note="해외 투어·티켓 전용" image={coupon1} />
            <CouponCode code="2MKTPCH5000" discount="5,000원 할인" minAmount="15만 원" note="해외 투어·티켓 전용" image={coupon2} />
            <CouponCode code="PACKMPT3000" discount="3,000원 할인" minAmount="10만 원" note="해외 투어·티켓 전용 · 선착순" image={coupon3} />
            <CouponCode code="PACKMKTP1000" discount="1,000원 할인" minAmount="5만 원" note="상시 쿠폰 · 해외 투어·티켓 전용" image={coupon4} />
            <CouponCode code="MKTPCH1000" discount="1,000원 할인" minAmount="5만 원" note="상시 쿠폰 · 해외 투어·티켓 전용" image={coupon5} />
          </div>

          <div className="info-card mt-6 border-l-4 border-warning">
            <h3 className="font-bold mb-2">⚠ 공통 유의사항</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 모든 할인코드는 8월 31일까지 등록 가능</li>
              <li>• 코드 등록 시 쿠폰은 7일 이내 사용 필수</li>
              <li>• 유효기간 경과 시 동일 코드 재등록 불가</li>
              <li>• 다른 할인쿠폰과 중복 사용 불가 (1건당 1쿠폰)</li>
              <li>• 여행자보험, 렌터카, 편도 항공권에는 적용 불가</li>
              <li>• 예산 소진 시 조기 종료 가능</li>
            </ul>
          </div>
        </section>

        {/* 할인 중복 적용 공식 */}
        <section className="bg-primary/5 rounded-xl p-6 sm:p-8 mb-14 border border-primary/10">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">💡 할인 극대화 공식 (중복 적용)</h2>
          <div className="bg-card rounded-lg p-4 sm:p-6 text-center mb-4">
            <p className="text-sm sm:text-lg font-bold">
              <span className="badge-discount mr-1">할인코드</span> + 
              <span className="badge-info mx-1">카드 즉시 할인</span> + 
              <span className="badge-discount mx-1">간편결제 할인</span> = 
              <span className="text-primary font-black ml-1">최대 중복 혜택!</span>
            </p>
          </div>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>✅ 할인코드와 카드 할인은 별개로 중복 적용됨</li>
            <li>✅ 간편결제(카카오페이·토스페이 등)와 카드 할인도 동시 적용 가능</li>
            <li>⚠️ 할인쿠폰은 1건당 1개만 적용 (가장 할인이 큰 쿠폰 자동 선택)</li>
          </ul>
          <div className="text-center mt-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button">
              할인 중복 적용하고 예약하기 →
            </a>
          </div>
        </section>

        {/* 할인 4종류 소개 */}
        <section className="mb-14">
          <h2 className="section-title">마이리얼트립 할인의 4가지 종류</h2>
          <p className="text-muted-foreground mb-6">마이리얼트립에서 제공하는 할인은 크게 4가지이며, <strong className="text-foreground">모두 중복 적용이 가능</strong>합니다. 할인코드 + 할인쿠폰 + 카드할인 + 할인특가를 동시에 활용하면 체감 할인이 극대화됩니다.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <article className="info-card">
              <div className="flex items-start gap-4">
                <img src={discountCode} alt="할인코드 아이콘" width={80} height={60} loading="lazy" className="rounded-lg flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">① 할인코드 (프로모션 코드)</h3>
                  <p className="text-sm text-muted-foreground">결제 단계에서 직접 입력하거나 쿠폰함에 미리 등록하여 사용하는 텍스트 코드입니다. 마이리얼트립 공식, 인플루언서 제휴, 파트너사 전용으로 제공됩니다.</p>
                  <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                    <li>• 5만 원 이상: 1,000원 할인</li>
                    <li>• 10만 원 이상: 3,000원 할인</li>
                    <li>• 15만 원 이상: 5,000원 할인</li>
                  </ul>
                  <p className="text-xs text-destructive mt-2">⚠ 등록 후 7일 이내 사용 필수 · 계정당 1회</p>
                </div>
              </div>
            </article>

            <article className="info-card">
              <h3 className="font-bold text-lg mb-1">② 할인쿠폰 (공식 쿠폰)</h3>
              <p className="text-sm text-muted-foreground">공식 프로모션 페이지에서 코드 입력 없이 '다운로드'로 받는 쿠폰입니다.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="badge-discount">대륙여행 최대 20%</span>
                <span className="badge-discount">유럽 3%+</span>
                <span className="badge-discount">동남아 최대 10%</span>
                <span className="badge-discount">한인민박 최대 41%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">매월 1일 갱신 · 로그인 후 무제한 발급</p>
            </article>

            <article className="info-card">
              <h3 className="font-bold text-lg mb-1">③ 카드 할인 (제휴카드)</h3>
              <p className="text-sm text-muted-foreground">제휴 카드사로 결제 시 자동 적용되는 할인입니다. 별도 코드 입력이 필요 없습니다.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="badge-info">해외 항공권 최대 15%</span>
                <span className="badge-info">숙소·투어 최대 6만원</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">할인코드·쿠폰과 중복 적용 가능!</p>
              <Link to="/card-discount" className="text-xs text-primary font-medium mt-2 inline-block hover:underline">카드 할인 비교 보기 →</Link>
            </article>

            <article className="info-card">
              <h3 className="font-bold text-lg mb-1">④ 할인특가 (기획전·세일)</h3>
              <p className="text-sm text-muted-foreground">마이리얼트립 자체 특가 프로모션입니다.</p>
              <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                <li>• 인기 호캉스 이번주 특가</li>
                <li>• 숙박페스타 시즌별</li>
                <li>• 항공사 라이브 세일</li>
                <li>• 학생 특가 최대 40% 할인</li>
              </ul>
              <p className="text-xs text-destructive mt-2">⚠ '최저가 보장제' 상품은 할인코드 추가 적용 불가</p>
            </article>
          </div>
        </section>


        <section className="mb-14">
          <h2 className="section-title">✈️ 항공권 프로모션</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="info-card">
              <img src={flightDiscount} alt="마이리얼트립 항공권 할인" width={400} height={300} loading="lazy" className="w-full h-40 object-contain mb-4" />
              <h3 className="font-bold text-lg mb-2">카드사 제휴 항공권 즉시 할인</h3>
              <p className="text-sm text-muted-foreground mb-3">삼성, 신한, KB국민, 우리, 현대, 롯데, NH농협, 대한항공카드 등 주요 카드사 결제 시 해외 항공권 <strong>최대 15% 즉시 할인</strong></p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 별도 코드 입력 불필요, 결제 시 자동 적용</li>
                <li>• 노선, 항공사, 출발일에 따라 할인율 상이</li>
                <li>• 유류할증료·TAX 일부 제외</li>
              </ul>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button mt-4 text-sm w-full text-center">항공권 특가 확인 →</a>
            </div>

            <div className="info-card">
              <h3 className="font-bold text-lg mb-2">항공사별 라이브 세일</h3>
              <p className="text-sm text-muted-foreground mb-3">매월 진에어, 티웨이, 에어부산, 제주항공, 아시아나 등과 협력한 특가 항공권을 제공합니다.</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 라이브 구매자 추가 1만 원 할인</li>
                <li>• 제휴카드 최대 15% 할인</li>
                <li>• Grab 13만 원 상당 패스, eSIM 50% 할인</li>
                <li>• <strong>빅세일 운임에도 쿠폰·카드 할인 중복 적용 가능!</strong></li>
              </ul>
              <h4 className="font-bold mt-4 mb-2">🆕 럭키글라이드 (2026 신규)</h4>
              <p className="text-xs text-muted-foreground">AI 기반 항공권 가격 탐색 서비스. 출발지/도착지 입력 후 그래프로 날짜별 가격 추이를 확인하고 최적 출발일을 데이터 기반으로 제안받을 수 있습니다.</p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button mt-4 text-sm w-full text-center">라이브 세일 보기 →</a>
            </div>
          </div>
        </section>

        {/* 숙소·투어 프로모션 */}
        <section className="mb-14">
          <h2 className="section-title">🏨 숙소·투어·티켓 프로모션</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <article className="info-card">
              <img src={hotelDiscount} alt="숙소 할인 프로모션" width={400} height={300} loading="lazy" className="w-full h-32 object-contain mb-3" />
              <h3 className="font-bold mb-2">숙소 프로모션</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 인기 호캉스 이번주 특가 (한정 수량)</li>
                <li>• 파리 한인민박 최대 30% 할인</li>
                <li>• 롯데리조트·하이원 초특가</li>
                <li>• 정부지원 숙박할인 최대 5만 원</li>
                <li>• 롯데호텔 선착순 2만 원 쿠폰</li>
              </ul>
            </article>
            <article className="info-card">
              <img src={tourTicket} alt="투어 티켓 할인" width={400} height={300} loading="lazy" className="w-full h-32 object-contain mb-3" />
              <h3 className="font-bold mb-2">투어·티켓 프로모션</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 전 세계 인기 여행지 투어 특가</li>
                <li>• 유레일 패스 최대 10% 할인</li>
                <li>• 모바일 QR패스 즉시 탑승</li>
                <li>• eSIM 15% 할인코드</li>
                <li>• 학생 특가 최대 40% 할인</li>
              </ul>
            </article>
            <article className="info-card">
              <img src={newMember} alt="신규회원 혜택" width={400} height={300} loading="lazy" className="w-full h-32 object-contain mb-3" />
              <h3 className="font-bold mb-2">신규 회원 전용 혜택</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 회원가입 시 전용 할인쿠폰 발송</li>
                <li>• 첫 구매 전용 할인코드 제공</li>
                <li>• 앱 설치 후 즉시 쿠폰 다운로드</li>
                <li>• 예산 소진 시 조기 마감 주의</li>
              </ul>
            </article>
          </div>
          <div className="text-center mt-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button">
              전체 프로모션 확인하기 →
            </a>
          </div>
        </section>

        {/* 카드사별 항공권 할인 비교 */}
        <section className="mb-14">
          <h2 className="section-title">✈️ 카드사별 항공권 할인 비교</h2>
          <p className="text-sm text-muted-foreground mb-4">해외 항공권 결제 시 카드사 제휴로 최대 15% 즉시 할인이 적용됩니다. 별도 코드 입력 없이 결제 단계에서 자동 반영됩니다.</p>

          <img src={cardComparison} alt="카드사별 할인 비교" width={400} height={300} loading="lazy" className="mx-auto h-40 object-contain mb-6" />

          <div className="table-responsive">
            <table className="data-table min-w-[700px]">
              <thead>
                <tr>
                  <th>카드사</th>
                  <th>항공권 할인</th>
                  <th>숙소·투어 할인</th>
                  <th>특이사항</th>
                  <th>추천</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">삼성카드</td><td>최대 15%</td><td>최대 6만 원 청구</td><td className="text-xs">카카오페이+삼성카드 시 최대 4만 원 추가</td><td><span className="badge-discount">고액 추천</span></td></tr>
                <tr><td className="font-bold">신한카드</td><td>최대 15%</td><td>Tops 쿠폰 8%</td><td className="text-xs">Point Plan 15만 원 캐시백 (조건부)</td><td><span className="badge-info">캐시백</span></td></tr>
                <tr><td className="font-bold">KB국민카드</td><td>최대 15%</td><td>KB Pay 추가 할인</td><td className="text-xs">M포인트 사용 가능</td><td><span className="badge-info">포인트</span></td></tr>
                <tr><td className="font-bold">우리카드</td><td>최대 15%</td><td>청구 할인</td><td className="text-xs">발권대행수수료 별도</td><td></td></tr>
                <tr><td className="font-bold">현대카드</td><td>할인 적용</td><td>M포인트 10%</td><td className="text-xs">소액 결제에 최적화</td><td><span className="badge-discount">소액 추천</span></td></tr>
                <tr><td className="font-bold text-primary">롯데카드</td><td>최대 15%</td><td className="font-bold text-primary">토스페이 조합 최대 12만 원!</td><td className="text-xs">가장 큰 조합 혜택</td><td><span className="badge-discount">최대 혜택</span></td></tr>
                <tr><td className="font-bold">NH농협카드</td><td>최대 15%</td><td>-</td><td className="text-xs">노선별 할인율 상이</td><td></td></tr>
                <tr><td className="font-bold">대한항공카드</td><td>최대 15%</td><td>-</td><td className="text-xs">20만 원 캐시백 이벤트 응모</td><td><span className="badge-info">캐시백</span></td></tr>
              </tbody>
            </table>
          </div>

          <div className="info-card mt-6">
            <h3 className="font-bold mb-2">📌 카드사 쿠폰 등록 방법</h3>
            <p className="text-sm text-muted-foreground">마이리얼트립 '쿠폰 등록하기' 페이지에서 <strong>카드번호 앞 6자리 + 등록 연월</strong> 입력 (예: 26년 4월 → XXXXXX2604) → 쿠폰 수령. 해당 월 미사용 시 자동 소멸.</p>
          </div>

          <div className="text-center mt-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button">
              카드 할인 적용하고 예약하기 →
            </a>
          </div>
        </section>

        {/* 간편결제별 할인 비교 */}
        <section className="mb-14">
          <h2 className="section-title">📱 간편결제별 할인 비교</h2>
          <p className="text-sm text-muted-foreground mb-4">간편결제 할인은 대부분 <strong>매일 00시 선착순</strong>으로 빠르게 소진됩니다. 자정에 미리 준비하세요!</p>

          <img src={mobilePayment} alt="간편결제 할인 비교" width={400} height={300} loading="lazy" className="mx-auto h-40 object-contain mb-6" />

          <div className="table-responsive">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr><th>결제 수단</th><th>할인 내용</th><th>선착순</th><th>특이사항</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">토스페이먼츠 (퀵 계좌이체)</td><td><span className="badge-discount">최대 50,000원</span></td><td>매일 00시</td><td className="text-xs">고가 상품에 적합</td></tr>
                <tr><td className="font-bold">카카오페이 머니</td><td>6만원↑ 1,000원 / 20만원↑ 3,000원</td><td>매일 00시</td><td className="text-xs">월 단위 진행</td></tr>
                <tr><td className="font-bold text-primary">카카오페이 + 삼성카드</td><td><span className="badge-discount">최대 40,000원</span></td><td>-</td><td className="text-xs">계정당 1회</td></tr>
                <tr><td className="font-bold">토스페이</td><td>최대 15,000원</td><td>매일 00시</td><td className="text-xs">신규/첫 결제 유리</td></tr>
                <tr><td className="font-bold text-primary">토스페이 + 롯데카드</td><td><span className="badge-discount">최대 120,000원!</span></td><td>-</td><td className="text-xs font-bold text-primary">가장 큰 조합 혜택</td></tr>
                <tr><td className="font-bold">네이버페이</td><td>결제 금액별 할인</td><td>시기별 상이</td><td className="text-xs">포인트 적립 병행</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 금액대별 최적 조합 */}
        <section className="mb-14">
          <h2 className="section-title">💡 결제 금액대별 최적 조합 추천</h2>
          <p className="text-sm text-muted-foreground mb-6">결제 금액에 따라 어떤 결제 수단을 조합해야 할인이 극대화되는지 비교 분석한 내용입니다. <strong>타 사이트에서는 찾기 어려운 실용적 정보!</strong></p>

          <img src={priceCompare} alt="결제 금액별 최적 조합 추천" width={400} height={300} loading="lazy" className="mx-auto h-40 object-contain mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="info-card border-t-4 border-primary/40">
              <h3 className="font-bold text-lg mb-2">💰 소액 (30만 원 이하)</h3>
              <p className="text-sm font-medium text-primary mb-2">추천: 카카오페이 머니 + 할인코드</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 카카오페이 머니 자정 선착순 할인</li>
                <li>• 할인코드 1,000원 추가</li>
                <li>• M포인트 보유 시: 현대카드 최적</li>
                <li>• 소액에서는 정액 할인이 체감이 큼</li>
              </ul>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button mt-4 text-xs w-full text-center">소액 할인 적용 →</a>
            </div>
            <div className="info-card border-t-4 border-secondary">
              <h3 className="font-bold text-lg mb-2">💵 중간 (30~100만 원)</h3>
              <p className="text-sm font-medium text-secondary mb-2">추천: 카카오페이 + 삼성카드</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 카카오페이+삼성카드 최대 4만 원</li>
                <li>• 또는 삼성카드 단독 청구 할인</li>
                <li>• 결제 직전 '할인 내역' 확인 필수</li>
                <li>• 청구 할인이 결제 금액에 비례</li>
              </ul>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button mt-4 text-xs w-full text-center">중간 금액 할인 적용 →</a>
            </div>
            <div className="info-card border-t-4 border-primary">
              <h3 className="font-bold text-lg mb-2">💎 고액 (100만 원 이상)</h3>
              <p className="text-sm font-medium text-primary mb-2">추천: 토스페이 + 롯데카드</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 토스페이+롯데카드 최대 12만 원!</li>
                <li>• 또는 퀵 계좌이체 최대 5만 원</li>
                <li>• 무이자 할부 최대 12개월 지원</li>
                <li>• 고가 항공권/리조트에 최적</li>
              </ul>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button mt-4 text-xs w-full text-center">고액 할인 적용 →</a>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link to="/card-discount" className="cta-button-outline">카드·결제 할인 더 자세히 보기 →</Link>
          </div>
        </section>

        {/* 실제 할인 시뮬레이션 */}
        <section className="mb-14">
          <h2 className="section-title">🧮 실제 할인 시뮬레이션 예시</h2>
          <p className="text-sm text-muted-foreground mb-4">실제 결제 금액별로 어떤 조합이 얼마나 절약되는지 계산해봤습니다.</p>
          <div className="table-responsive">
            <table className="data-table min-w-[700px]">
              <thead>
                <tr><th>시나리오</th><th>상품 금액</th><th>할인코드</th><th>카드 할인</th><th>간편결제</th><th>총 할인</th><th>실 결제</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">동남아 투어 (소액)</td><td>80,000원</td><td>-1,000원</td><td>-</td><td>카카오페이 -1,000원</td><td className="font-bold text-primary">-2,000원</td><td>78,000원</td>
                </tr>
                <tr>
                  <td className="font-medium">일본 투어+호텔 (중간)</td><td>450,000원</td><td>-5,000원</td><td>삼성 -30,000원</td><td>카카오페이 -3,000원</td><td className="font-bold text-primary">-38,000원</td><td>412,000원</td>
                </tr>
                <tr>
                  <td className="font-medium">유럽 항공+리조트 (고액)</td><td>1,500,000원</td><td>-5,000원</td><td>항공 15% -225,000원</td><td>토스+롯데 -120,000원</td><td className="font-bold text-primary">-350,000원</td><td>1,150,000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">※ 위 금액은 예시이며, 실제 할인 금액은 상품·카드사·프로모션 조건에 따라 달라질 수 있습니다.</p>
        </section>

        {/* 할인코드 vs 할인쿠폰 비교표 */}
        <section className="mb-14">
          <h2 className="section-title">📊 할인코드 vs 할인쿠폰 vs 카드할인 비교</h2>
          <p className="text-sm text-muted-foreground mb-4">마이리얼트립의 할인 유형별 차이를 한눈에 비교해보세요.</p>
          <div className="table-responsive">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>할인코드</th>
                  <th>할인쿠폰</th>
                  <th>카드 할인</th>
                  <th>할인특가</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-medium">적용 방식</td><td>코드 입력/등록</td><td>다운로드</td><td>자동 적용</td><td>상품 자체 반영</td></tr>
                <tr><td className="font-medium">할인 규모</td><td>1,000~5,000원</td><td>3%~41%</td><td>최대 15%</td><td>상품마다 상이</td></tr>
                <tr><td className="font-medium">중복 적용</td><td>카드 할인과 가능</td><td>카드 할인과 가능</td><td>쿠폰과 가능</td><td>제한적</td></tr>
                <tr><td className="font-medium">유효기간</td><td>등록 후 7일</td><td>해당 월 말</td><td>매월 갱신</td><td>프로모션 기간</td></tr>
                <tr><td className="font-medium">대상 상품</td><td>주로 투어·티켓</td><td>지역/테마별</td><td>항공·숙소·투어</td><td>기획전 상품</td></tr>
                <tr><td className="font-medium">추천 상황</td><td>소액 결제 시</td><td>지역 맞춤 여행</td><td>고액 결제 시</td><td>특가 상품 발견 시</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 실 사용 후기 (추가 정보) */}
        <section className="mb-14">
          <h2 className="section-title">💬 실 사용 후기 & 절약 사례</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="info-card border-l-4 border-primary">
              <p className="text-sm mb-2">"일본 오사카 투어 15만원짜리 예약할 때 <strong>PACKMKTP5000</strong> 코드로 5,000원 할인 + 삼성카드 청구 할인 3만원까지 받아서 총 35,000원 절약했어요!"</p>
              <p className="text-xs text-muted-foreground">— 김*진님, 2026년 4월 사용</p>
            </div>
            <div className="info-card border-l-4 border-secondary">
              <p className="text-sm mb-2">"토스페이 + 롯데카드 조합으로 제주도 리조트 예약 시 <strong>12만원 할인</strong> 받았습니다. 이 사이트에서 조합 추천 보고 따라했어요."</p>
              <p className="text-xs text-muted-foreground">— 이*수님, 2026년 2월 사용</p>
            </div>
            <div className="info-card border-l-4 border-success">
              <p className="text-sm mb-2">"카카오페이 머니 자정 선착순으로 3,000원 할인 + 할인코드 1,000원 = <strong>소액이지만 알뜰하게</strong> 다낭 투어 예약 완료!"</p>
              <p className="text-xs text-muted-foreground">— 박*현님, 2026년 7월 사용</p>
            </div>
            <div className="info-card border-l-4 border-warning">
              <p className="text-sm mb-2">"유럽 항공권 120만원 결제할 때 <strong>카드 즉시 15% 할인</strong>으로 18만원 절약. 추가로 면세점 BLACK PASS 혜택까지! 마이리얼트립 할인 극대화 꿀팁입니다."</p>
              <p className="text-xs text-muted-foreground">— 정*아님, 2026년 4월 사용</p>
            </div>
          </div>
        </section>

        {/* 페이지 네비게이션 */}
        <section className="mb-14">
          <h2 className="section-title">📖 더 자세한 정보 보기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link to="/card-discount" className="info-card group text-center">
              <span className="text-3xl mb-2 block">💳</span>
              <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">카드·결제 할인 비교</h3>
              <p className="text-xs text-muted-foreground">카드사별·간편결제별 할인 비교 + 최적 조합 가이드</p>
            </Link>
            <Link to="/how-to-use" className="info-card group text-center">
              <span className="text-3xl mb-2 block">📱</span>
              <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">사용방법·트러블슈팅</h3>
              <p className="text-xs text-muted-foreground">할인코드 적용법, 오류 해결, FAQ 위키</p>
            </Link>
            <Link to="/savings-strategy" className="info-card group text-center">
              <span className="text-3xl mb-2 block">🏆</span>
              <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">절약 전략·부가혜택</h3>
              <p className="text-xs text-muted-foreground">면세점 제휴, 최저가 보장제, 시즌별 전략</p>
            </Link>
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  );
};

export default HomePage;
