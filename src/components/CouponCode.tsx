import { useState } from "react";

const AFFILIATE_LINK = "https://myrealt.rip/XdEQf5";

interface CouponCodeProps {
  code: string;
  discount: string;
  minAmount: string;
  note?: string;
}

const CouponCode = ({ code, discount, minAmount, note }: CouponCodeProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="info-card flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="coupon-code" onClick={handleCopy}>
            {code}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </span>
          {copied && <span className="text-xs text-success font-medium">복사됨!</span>}
        </div>
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className="badge-discount">{discount}</span>
          <span className="text-xs text-muted-foreground">최소 {minAmount}</span>
        </div>
        {note && <p className="text-xs text-muted-foreground mt-1">{note}</p>}
      </div>
      <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-sm flex-shrink-0">
        할인코드 적용 →
      </a>
    </div>
  );
};

export default CouponCode;
