import { Helmet } from "react-helmet-async";
import CTABanner from "@/components/CTABanner";
import savingsHero from "@/assets/savings-hero.jpg";
import dutyFree from "@/assets/duty-free.png";
import savingsStrategy from "@/assets/savings-strategy.png";
import seasonalCalendar from "@/assets/seasonal-calendar.png";
import checklist from "@/assets/checklist.png";
import priceCompare from "@/assets/price-compare.png";
import esim from "@/assets/esim.png";
import studentDiscount from "@/assets/student-discount.png";

const AFFILIATE_LINK = "https://myrealt.rip/aRT258";

const SavingsStrategyPage = () => {
  return (
    <>
      <Helmet>
        <title>절약 전략·부가혜택 - 마이리얼트립 할인쿠폰</title>
        <meta name="description" content="마이리얼트립 면세점 제휴 혜택, 최저가 보장제, Trip Cash 포인트, 시즌별 할인 전략, 타 플랫폼 비교, 학생 할인, eSIM 할인까지 독보적 절약 정보를 총정리했습니다." />
        <link rel="canonical" href="https://mrt.couponmonster.co.kr/savings-strategy" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="절약 전략·부가혜택 - 마이리얼트립 할인쿠폰" />
        <meta property="og:description" content="마이리얼트립 면세점 제휴 혜택, 최저가 보장제, Trip Cash 포인트, 시즌별 할인 전략, 타 플랫폼 비교, 학생 할인, eSIM 할인까지 독보적 절약 정보를 총정리했습니다." />
        <meta property="og:url" content="https://mrt.couponmonster.co.kr/savings-strategy" />
        <meta property="og:image" content="https://mrt.couponmonster.co.kr/og-image.jpg" />
        <meta property="og:site_name" content="마이리얼트립 할인쿠폰" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="절약 전략·부가혜택 - 마이리얼트립 할인쿠폰" />
        <meta name="twitter:description" content="마이리얼트립 면세점 제휴 혜택, 최저가 보장제, Trip Cash 포인트, 시즌별 할인 전략, 타 플랫폼 비교, 학생 할인, eSIM 할인까지 독보적 절약 정보를 총정리했습니다." />
        <meta name="twitter:image" content="https://mrt.couponmonster.co.kr/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "마이리얼트립 절약 전략·부가혜택 가이드 2026",
          "description": "면세점 제휴 혜택, 최저가 보장제, 시즌별 전략 등 독보적 절약 정보",
          "datePublished": "2026-06-01",
          "dateModified": "2026-06-07",
          "author": { "@type": "Organization", "name": "마이리얼트립 할인쿠폰" }
        })}</script>
      </Helmet>

      <section className="hero-section relative">
        <img src={savingsHero} alt="마이리얼트립 절약 전략" width={1920} height={640} className="w-full h-40 sm:h-56 md:h-72 object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-4xl font-black mb-2 drop-shadow-lg">절약 전략 · 부가혜택</h1>
            <p className="text-sm sm:text-lg opacity-90">면세점 제휴, 최저가 보장제, 시즌별 전략까지 독보적 정보</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-10">
        {/* 면세점 제휴 */}
        <section className="mb-14">
          <h2 className="section-title">🛍️ 면세점 제휴 혜택 완전 정리</h2>
          <p className="text-sm text-muted-foreground mb-6">마이리얼트립 고객이라면 대형 면세점의 멤버십 등급을 <strong>무료로 업그레이드</strong>하고 추가 혜택을 받을 수 있습니다. 출국 전 반드시 등록하세요!</p>

          <img src={dutyFree} alt="면세점 제휴 혜택" width={400} height={300} loading="lazy" className="mx-auto h-40 object-contain mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <article className="info-card border-l-4 border-primary">
              <h3 className="font-bold text-lg mb-2">🏢 신세계면세점</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 멤버십: <strong>BLACK PASS</strong>로 즉시 업그레이드</li>
                <li>• <span className="badge-discount">최대 20% 할인</span></li>
                <li>• 적립금: 최대 300만 원 상당</li>
                <li>• 쇼핑지원금: 최대 9만 원 (오프라인)</li>
                <li>• 온라인: 구매금액별 제휴캐시 증정</li>
                <li className="text-xs text-destructive">제외: CHANEL, 한국금거래소, IQOS, 설화수 등</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2">등록: 이벤트 페이지 → 쿠폰번호 확인 → 신세계면세점에서 입력</p>
            </article>

            <article className="info-card border-l-4 border-secondary">
              <h3 className="font-bold text-lg mb-2">🏢 신라면세점</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 멤버십: <strong>골드플러스(G+)</strong>로 업그레이드</li>
                <li>• 오프라인: 선불카드 또는 할인 사은권</li>
                <li>• 온라인: <span className="badge-discount">S.Rewards 최대 59만 포인트</span></li>
                <li>• $100 이상 구매 시 S.Rewards 사용</li>
                <li>• 등급 유지: 최근 2년 인도 기준</li>
              </ul>
            </article>

            <article className="info-card border-l-4 border-success">
              <h3 className="font-bold text-lg mb-2">🏢 롯데면세점</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 멤버십: <strong>GOLD 등급</strong> 업그레이드</li>
                <li>• 온라인 적립금: $5,000 기본</li>
                <li>• 마이리얼트립 전용 제휴쿠폰 제공</li>
                <li>• 플러스쿠폰과 중복 적용 가능!</li>
                <li>• 혜택 기간: ~2026.12.31</li>
              </ul>
            </article>

            <article className="info-card border-l-4 border-warning">
              <h3 className="font-bold text-lg mb-2">🏢 현대면세점</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 인천공항 전용: <span className="badge-discount">최대 $88 할인쿠폰</span></li>
              </ul>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <h4 className="font-bold text-xs mb-1">💡 면세점 혜택 TIP</h4>
                <p className="text-xs text-muted-foreground">출국 전 마이리얼트립 제휴로 면세점 등급을 먼저 올리고, 전용 쿠폰까지 중복 적용하세요. 해외여행 상품 구매 고객 한정, 내국인(KOR) 전용.</p>
              </div>
            </article>
          </div>

          <div className="text-center mt-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button">면세점 혜택 받으러 가기 →</a>
          </div>
        </section>

        {/* 최저가 보장제 */}
        <section className="mb-14">
          <h2 className="section-title">🏆 최저가 보장제 완전 가이드</h2>
          <img src={savingsStrategy} alt="최저가 보장제" width={400} height={300} loading="lazy" className="mx-auto h-40 object-contain mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="info-card">
              <h3 className="font-bold mb-2">적용 조건</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• '최저가 보장제' 또는 '단독 특가' 표시 상품만</li>
                <li>• 결제 후 <strong>24시간 이내</strong> 신청 필수</li>
                <li>• 숙박은 즉시 확정(실시간 예약) 상품에 한함</li>
                <li className="text-destructive">• 제외: 항공권, 감성 숙소, 한인 민박</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">비교 기준</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 결제 통화, 투어 날짜, 세부 옵션, 환불 규정까지 모든 조건 일치 필요</li>
                <li>• 일반 쿠폰 적용가만 비교 대상</li>
                <li>• 특정 신용카드 할인이나 타겟팅 쿠폰 적용가는 제외</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 mt-6 border border-primary/10">
            <h3 className="font-bold text-primary mb-2">💡 실전 활용 전략</h3>
            <p className="text-sm text-muted-foreground">마이리얼트립에서 먼저 예약 → 24시간 이내에 아고다, 부킹닷컴, 호텔스닷컴 등에서 동일 상품 가격 비교 → 더 저렴하면 차액 보상 신청! 가격 비교 피로도를 줄이면서도 최저가를 확보할 수 있습니다.</p>
          </div>
        </section>

        {/* Trip Cash */}
        <section className="mb-14">
          <h2 className="section-title">💰 포인트(Trip Cash) 시스템</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="info-card">
              <h3 className="font-bold mb-2">적립 방법</h3>
              <p className="text-sm text-muted-foreground">상품 이용 후 리뷰 작성 시 결제액의 <strong>1~3% Trip Cash 적립</strong> (100 Cash = 100원)</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">사용 방법</h3>
              <p className="text-sm text-muted-foreground"><p className="text-sm text-muted-foreground">쿠폰과 <strong>중복 사용 가능!</strong> 마이페이지 &gt; 포인트 탭에서 확인</p></p>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">TIP</h3>
              <p className="text-sm text-muted-foreground">리뷰를 꼼꼼히 작성하면 다음 여행 시 추가 할인! 포인트 만료일 확인 필수</p>
            </div>
          </div>
        </section>

        {/* 시즌별 전략 */}
        <section className="mb-14">
          <h2 className="section-title">📅 시즌별 할인 달력·전략</h2>
          <img src={seasonalCalendar} alt="시즌별 할인 달력" width={400} height={300} loading="lazy" className="mx-auto h-40 object-contain mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { season: "❄ 1~2월 (겨울)", items: ["숙박페스타 겨울편", "신년 국내여행 특가", "겨울 호캉스·스키 특가", "설 연휴 전 항공권 미리 구매"] },
              { season: "🌸 3~4월 (봄)", items: ["벚꽃 시즌 일본 투어", "유럽 얼리버드 패스 10%", "대륙여행 쿠폰 최대 20%", "봄 여행 특가 기획전"] },
              { season: "☀ 5~6월 (초여름)", items: ["여름 조기 예약 할인", "동남아 비수기 특가", "항공사 대규모 빅세일", "eSIM 할인 프로모션"] },
              { season: "🏖 7~8월 (성수기)", items: ["한인민박 최대 41%", "국내 호텔 이번주 특가", "라이브 세일 항공권 특가", "할인 폭 상대적 작음"] },
              { season: "🍂 9~10월 (가을)", items: ["항공권 메가 세일 (9월)", "유럽 가을 여행 특가", "대륙여행 쿠폰 활성화", "추석 연휴 상품"] },
              { season: "🎄 11~12월 (연말)", items: ["블랙프라이데이 연계", "연말 호캉스 특가", "내년 얼리버드 예약", "면세점 혜택 연말 마감 주의"] },
            ].map((s, i) => (
              <div key={i} className="info-card">
                <h3 className="font-bold mb-2">{s.season}</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {s.items.map((item, j) => <li key={j}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 타 플랫폼 비교 */}
        <section className="mb-14">
          <h2 className="section-title">⚔️ 마이리얼트립 vs 타 플랫폼 비교</h2>
          <img src={priceCompare} alt="플랫폼 비교" width={400} height={300} loading="lazy" className="mx-auto h-40 object-contain mb-6" />

          <div className="table-responsive">
            <table className="data-table min-w-[700px]">
              <thead>
                <tr><th>항목</th><th>마이리얼트립</th><th>아고다</th><th>트립닷컴</th><th>클룩/KKday</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-medium">할인코드 방식</td><td>쿠폰함 등록</td><td>직접 입력</td><td>직접 입력</td><td>직접 입력</td></tr>
                <tr><td className="font-medium">카드 할인</td><td className="font-bold text-primary">최대 15%</td><td>최대 12%</td><td>코드 입력 필요</td><td>제한적</td></tr>
                <tr><td className="font-medium">간편결제</td><td className="font-bold text-primary">카카오·토스·네이버</td><td>제한적</td><td>카카오·삼성</td><td>제한적</td></tr>
                <tr><td className="font-medium">중복 할인</td><td className="font-bold text-primary">쿠폰+카드 가능</td><td>제한적</td><td>일부 가능</td><td>제한적</td></tr>
                <tr><td className="font-medium">최저가 보장제</td><td className="font-bold text-primary">있음 (24시간)</td><td>없음</td><td>없음</td><td>없음</td></tr>
                <tr><td className="font-medium">면세점 제휴</td><td className="font-bold text-primary">신세계·신라·롯데</td><td>없음</td><td>없음</td><td>없음</td></tr>
                <tr><td className="font-medium">포인트 적립</td><td>Trip Cash 1~3%</td><td>AgodaCash</td><td>Trip Coins</td><td>클룩 크레딧</td></tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div className="info-card border-l-4 border-primary">
              <h3 className="font-bold mb-2 text-primary">마이리얼트립만의 강점</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✅ 3중 할인 중복 구조가 가장 유리</li>
                <li>✅ 유일하게 3대 면세점 멤버십 업그레이드</li>
                <li>✅ 최저가 보장제로 차액 보상</li>
                <li>✅ 유럽 한인민박 전문 카테고리</li>
                <li>✅ 럭키글라이드 AI 항공권 분석 (2026 신규)</li>
              </ul>
            </div>
            <div className="info-card border-l-4 border-muted-foreground">
              <h3 className="font-bold mb-2">타 플랫폼이 유리한 경우</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>아고다:</strong> 동남아 숙소 가격 경쟁력</li>
                <li>• <strong>트립닷컴:</strong> USD 결제 시 환율 우대</li>
                <li>• <strong>클룩/KKday:</strong> 현지 액티비티 가격 경쟁력</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button">
              마이리얼트립 최저가로 예약하기 →
            </a>
          </div>
        </section>

        {/* 체크리스트 */}
        <section className="mb-14">
          <h2 className="section-title">✅ 할인 극대화 체크리스트</h2>
          <img src={checklist} alt="체크리스트" width={400} height={300} loading="lazy" className="mx-auto h-32 object-contain mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="info-card">
              <h3 className="font-bold mb-3 text-primary">📌 예약 전 준비</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>☐ 앱 최신 버전 확인</li>
                <li>☐ 로그인 상태 확인</li>
                <li>☐ 이번 달 할인코드 등록</li>
                <li>☐ 최적 할인 카드 확인</li>
                <li>☐ 간편결제 등록 확인</li>
                <li>☐ 자정 선착순 일정 확인</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-3 text-secondary">📌 예약 시 적용 순서</h3>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. '최저가 보장제' 마크 확인</li>
                <li>2. 지역·테마별 쿠폰 다운로드</li>
                <li>3. 할인코드 1개 선택 적용</li>
                <li>4. 카드사 할인 최적 카드 선택</li>
                <li>5. 간편결제 할인 확인</li>
                <li>6. '할인 내역' 중복 확인</li>
                <li>7. 무이자 할부 선택</li>
              </ol>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-3 text-success">📌 예약 후 추가 혜택</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>☐ 면세점 제휴 등록 (출국 전 필수)</li>
                <li>☐ 최저가 보장제: 24시간 내 타사 비교</li>
                <li>☐ 여행 후 리뷰 → Trip Cash 적립</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 학생 할인, eSIM, 인플루언서 */}
        <section className="mb-14">
          <h2 className="section-title">🎓 추가 할인 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="info-card">
              <img src={studentDiscount} alt="학생 할인" width={200} height={150} loading="lazy" className="w-full h-32 object-contain mb-3" />
              <h3 className="font-bold mb-2">학생 할인 혜택</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 학생 특가 <span className="badge-discount">최대 40% 할인</span></li>
                <li>• 항공권, 박물관, 관광지 적용</li>
                <li>• 앱 내 학생 인증 필요</li>
                <li>• 시즌별 추가 프로모션</li>
              </ul>
            </div>
            <div className="info-card">
              <img src={esim} alt="eSIM 할인" width={200} height={150} loading="lazy" className="w-full h-32 object-contain mb-3" />
              <h3 className="font-bold mb-2">eSIM 할인</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 일본 eSIM <span className="badge-discount">15% 할인</span> 상시</li>
                <li>• 유럽 eSIM 최대 30% 할인</li>
                <li>• 라이브 세일 시 50% 할인</li>
                <li>• 별도 코드 또는 프로모션 페이지</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">🔔 알림 설정 TIP</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li><li>• 앱 설정 &gt; 알림 &gt; 프로모션 ON</li></li>
                <li>• 이메일 뉴스레터 구독</li>
                <li>• 자정 선착순 대비: 미리 결제 페이지 진입</li>
                <li>• 인플루언서 전용 코드도 활용!</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 기타 유의사항 */}
        <section className="mb-14">
          <h2 className="section-title">⚠️ 기타 유의사항 종합</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="info-card">
              <h3 className="font-bold mb-2">취소·환불</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 취소 후 동일 쿠폰 재사용 불가할 수 있음</li>
                <li>• 환불: 신용카드 즉시~5-10 영업일</li>
                <li>• 1회 제한 쿠폰: 복원 불가</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">결제 시 주의</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 구매 후 결제 수단 변경 불가</li>
                <li>• 카드 할인 + 포인트 사용 중복 가능</li>
                <li>• 무이자 할부: 카드사 정책 확인</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">수수료 참고</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 마이리얼트립은 통신판매중개자</li>
                <li>• 투어 약 10%, 숙박 약 12% 수수료</li>
                <li>• 프로모션 기간에 수수료 인하 가능</li>
              </ul>
            </div>
          </div>
        </section>

        <CTABanner title="모든 할인을 중복 적용하고 최대 절약하세요!" description="할인코드 + 카드 할인 + 면세점 혜택 + 최저가 보장제까지! 마이리얼트립의 모든 혜택을 한 번에 적용하세요." />
      </main>
    </>
  );
};

export default SavingsStrategyPage;
