import CTAButton from "@/components/CTAButton";

interface ErrorBoundaryProps {
    fallbackUrl?: string;
}

export default function ErrorBoundary({ fallbackUrl = "/" }: ErrorBoundaryProps) {
    return (
        <div className="h-screen bg-n-neutral-950 flex flex-col justify-center items-center">
            <img alt="오류 아이콘" src="/assets/icons/casper-error.svg" />
            <div className="mt-4" />
            <h3 className="h-heading-3-bold text-n-white">오류가 발생했습니다.</h3>
            <div className="mt-12" />
            <CTAButton label="돌아가기" url={fallbackUrl} hasArrowIcon />
        </div>
    );
}
