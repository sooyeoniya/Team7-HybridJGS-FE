import { useState } from "react";
import { CASPER_CARD_SIZE, CASPER_SIZE_OPTION } from "@/constants/CasperCustom/casper";
import useLazyLoading from "@/hooks/useLazyLoading";
import type { CasperCardType } from "@/types/casper";
import { CasperFlipCard } from "../CasperCustom/CasperFlipCard";

interface TransitionCasperCardItemProps {
    cardItem: CasperCardType;
    id: string;
    stopAnimation?: () => void;
    startAnimation?: () => void;
}

export function TransitionCasperCardItem({
    cardItem,
    id,
    stopAnimation,
    startAnimation,
}: TransitionCasperCardItemProps) {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const { isInView, cardRef } = useLazyLoading<HTMLLIElement>();

    const handleMouseEnter = () => {
        stopAnimation && stopAnimation();
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        startAnimation && startAnimation();
        setIsFlipped(false);
    };

    return (
        <li
            ref={cardRef}
            key={id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                width: CASPER_CARD_SIZE[CASPER_SIZE_OPTION.SM].CARD_WIDTH,
                height: CASPER_CARD_SIZE[CASPER_SIZE_OPTION.SM].CARD_HEIGHT,
            }}
        >
            {isInView && (
                <CasperFlipCard
                    card={cardItem}
                    size={CASPER_SIZE_OPTION.SM}
                    isFlipped={isFlipped}
                />
            )}
        </li>
    );
}
