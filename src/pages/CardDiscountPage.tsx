import { Helmet } from "react-helmet-async";
import CTABanner from "@/components/CTABanner";
import cardHero from "@/assets/card-hero.jpg";
import cardComparison from "@/assets/card-comparison.png";
import mobilePayment from "@/assets/mobile-payment.png";
import priceCompare from "@/assets/price-compare.png";

const AFFILIATE_LINK = "https://myrealt.rip/XdEQf5";

const CardDiscountPage = () => {
  return (
    <>
      <Helmet>
        <title>카드·결제 할인 비교 - 마이리얼트립 할인쿠폰</title>
        <meta name="description" content="마이리얼트립 삼성카드, 신한카드, KB국민카드, 롯데카드 등 카드사별 할인 비교와 카카오페이, 토스페이 간편결제 할인까지! 결제 금액대별 최적 조합을 확인하세요." />
        <link rel="canonical" href="https://mrt.couponmonster.co.kr/card-discount" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "마이리얼트립 카드·결제 할인 비교 2026",
          "description": "카드사별, 간편결제별 마이리얼트립 할인 비교 및 최적 조합 가이드",
          "datePublished": "2026-04-01",
          "dateModified": "2026-04-07",
          "author": { "@type": "Organization", "name": "쿠폰몬스터" }
        })}</script>
      </Helmet>

      <section className="hero-section relative">
        <img src={cardHero} alt="마이리얼트립 카드 결제 할인 비교" width={1920} height={640} className="w-full h-40 sm:h-56 md:h-72 object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-4xl font-black mb-2 drop-shadow-lg">카드·결제 할인 비교</h1>
            <p className="text-sm sm:text-lg opacity-90">카드사별·간편결제별 할인을 비교하고 최적 조합을 찾으세요</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-10">
        {/* 결제 수단 총정리 */}
        <section className="mb-14">
          <h2 className="section-title">💳 마이리얼트립 결제 수단 총정리</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="info-card">
              <h3 className="font-bold mb-2">일반 결제</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 퀵 계좌이체 (토스페이먼츠)</li>
                <li>• 신용카드 / 체크카드</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">간편 결제</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 카카오페이</li>
                <li>• KB페이</li>
                <li>• 페이코 / 토스페이</li>
                <li>• 네이버페이</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">해외 결제</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Visa / Master</li>
                <li>• JCB / KDB산업</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">기타 안내</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 구매 후 결제 수단 변경 불가</li>
                <li>• 무이자 할부: 최대 7~12개월</li>
              </ul>
            </div>
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
                <tr>
                  <td className="font-bold">삼성카드</td>
                  <td>최대 15%</td>
                  <td>최대 6만 원 청구</td>
                  <td className="text-xs">카카오페이+삼성카드 시 최대 4만 원 추가</td>
                  <td><span className="badge-discount">고액 추천</span></td>
                </tr>
                <tr>
                  <td className="font-bold">신한카드</td>
                  <td>최대 15%</td>
                  <td>Tops 쿠폰 8%</td>
                  <td className="text-xs">Point Plan 15만 원 캐시백 (조건부)</td>
                  <td><span className="badge-info">캐시백</span></td>
                </tr>
                <tr>
                  <td className="font-bold">KB국민카드</td>
                  <td>최대 15%</td>
                  <td>KB Pay 추가 할인</td>
                  <td className="text-xs">M포인트 사용 가능</td>
                  <td><span className="badge-info">포인트</span></td>
                </tr>
                <tr>
                  <td className="font-bold">우리카드</td>
                  <td>최대 15%</td>
                  <td>청구 할인</td>
                  <td className="text-xs">발권대행수수료 별도</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="font-bold">현대카드</td>
                  <td>할인 적용</td>
                  <td>M포인트 10%</td>
                  <td className="text-xs">소액 결제에 최적화</td>
                  <td><span className="badge-discount">소액 추천</span></td>
                </tr>
                <tr>
                  <td className="font-bold text-primary">롯데카드</td>
                  <td>최대 15%</td>
                  <td className="font-bold text-primary">토스페이 조합 최대 12만 원!</td>
                  <td className="text-xs">가장 큰 조합 혜택</td>
                  <td><span className="badge-discount">최대 혜택</span></td>
                </tr>
                <tr>
                  <td className="font-bold">NH농협카드</td>
                  <td>최대 15%</td>
                  <td>-</td>
                  <td className="text-xs">노선별 할인율 상이</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="font-bold">대한항공카드</td>
                  <td>최대 15%</td>
                  <td>-</td>
                  <td className="text-xs">20만 원 캐시백 이벤트 응모</td>
                  <td><span className="badge-info">캐시백</span></td>
                </tr>
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

        {/* 간편결제 할인 비교 */}
        <section className="mb-14">
          <h2 className="section-title">📱 간편결제별 할인 비교</h2>
          <p className="text-sm text-muted-foreground mb-4">간편결제 할인은 대부분 <strong>매일 00시 선착순</strong>으로 빠르게 소진됩니다. 자정에 미리 준비하세요!</p>

          <img src={mobilePayment} alt="간편결제 할인 비교" width={400} height={300} loading="lazy" className="mx-auto h-40 object-contain mb-6" />

          <div className="table-responsive">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>결제 수단</th>
                  <th>할인 내용</th>
                  <th>선착순</th>
                  <th>특이사항</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">토스페이먼츠 (퀵 계좌이체)</td>
                  <td><span className="badge-discount">최대 50,000원</span></td>
                  <td>매일 00시</td>
                  <td className="text-xs">고가 상품에 적합</td>
                </tr>
                <tr>
                  <td className="font-bold">카카오페이 머니</td>
                  <td>6만원↑ 1,000원 / 20만원↑ 3,000원</td>
                  <td>매일 00시</td>
                  <td className="text-xs">월 단위 진행</td>
                </tr>
                <tr>
                  <td className="font-bold text-primary">카카오페이 + 삼성카드</td>
                  <td><span className="badge-discount">최대 40,000원</span></td>
                  <td>-</td>
                  <td className="text-xs">계정당 1회</td>
                </tr>
                <tr>
                  <td className="font-bold">토스페이</td>
                  <td>최대 15,000원</td>
                  <td>매일 00시</td>
                  <td className="text-xs">신규/첫 결제 유리</td>
                </tr>
                <tr>
                  <td className="font-bold text-primary">토스페이 + 롯데카드</td>
                  <td><span className="badge-discount">최대 120,000원!</span></td>
                  <td>-</td>
                  <td className="text-xs font-bold text-primary">가장 큰 조합 혜택</td>
                </tr>
                <tr>
                  <td className="font-bold">네이버페이</td>
                  <td>결제 금액별 할인</td>
                  <td>시기별 상이</td>
                  <td className="text-xs">포인트 적립 병행</td>
                </tr>
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
        </section>

        {/* 무이자 할부 */}
        <section className="mb-14">
          <h2 className="section-title">🏦 무이자 할부 카드사별 현황</h2>
          <div className="table-responsive">
            <table className="data-table min-w-[500px]">
              <thead>
                <tr><th>카드사</th><th>무이자 할부</th><th>비고</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">삼성카드</td><td>최대 7개월</td><td className="text-xs">부분 무이자 추가 가능</td></tr>
                <tr><td className="font-bold">신한카드</td><td>최대 7개월</td><td></td></tr>
                <tr><td className="font-bold">KB국민카드</td><td>최대 7개월</td><td className="text-xs">BC마크 유무에 따라 상이</td></tr>
                <tr><td className="font-bold">우리카드</td><td>최대 7개월</td><td className="text-xs">BC마크 없는 우리카드 별도</td></tr>
                <tr><td className="font-bold">현대카드</td><td>최대 7개월</td><td></td></tr>
                <tr><td className="font-bold">롯데카드</td><td>최대 7개월</td><td></td></tr>
                <tr><td className="font-bold">NH농협카드</td><td>최대 7개월</td><td className="text-xs">홈쇼핑 업종 제외</td></tr>
                <tr><td className="font-bold">하나카드</td><td>최대 7개월</td><td className="text-xs">환금성업종 제외</td></tr>
              </tbody>
            </table>
          </div>
          <div className="info-card mt-4 border-l-4 border-warning">
            <h4 className="font-bold text-sm mb-1">무이자 할부 공통 제외 대상</h4>
            <p className="text-xs text-muted-foreground">개인사업자, 법인, 체크, 선불, 기프트, 하이브리드, 은행계열 카드 제외. 무이자 제외 업종: 제약, 등록금, 도시가스 등. 7개월 초과는 부분 무이자 할부 적용.</p>
          </div>
        </section>

        {/* 카드사별 실제 할인 시뮬레이션 (추가 정보) */}
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
                  <td className="font-medium">동남아 투어 (소액)</td>
                  <td>80,000원</td>
                  <td>-1,000원</td>
                  <td>-</td>
                  <td>카카오페이 -1,000원</td>
                  <td className="font-bold text-primary">-2,000원</td>
                  <td>78,000원</td>
                </tr>
                <tr>
                  <td className="font-medium">일본 투어+호텔 (중간)</td>
                  <td>450,000원</td>
                  <td>-5,000원</td>
                  <td>삼성 -30,000원</td>
                  <td>카카오페이 -3,000원</td>
                  <td className="font-bold text-primary">-38,000원</td>
                  <td>412,000원</td>
                </tr>
                <tr>
                  <td className="font-medium">유럽 항공+리조트 (고액)</td>
                  <td>1,500,000원</td>
                  <td>-5,000원</td>
                  <td>항공 15% -225,000원</td>
                  <td>토스+롯데 -120,000원</td>
                  <td className="font-bold text-primary">-350,000원</td>
                  <td>1,150,000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">※ 위 금액은 예시이며, 실제 할인 금액은 상품·카드사·프로모션 조건에 따라 달라질 수 있습니다.</p>
        </section>

        <CTABanner title="최적의 카드 할인 조합으로 예약하세요!" description="카드사별 최대 15% 즉시 할인 + 간편결제 할인을 중복 적용하면 수십만 원 절약 가능!" />
      </main>
    </>
  );
};

export default CardDiscountPage;
