/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Neutral color
                "n-white": "#FFFFFF",
                "n-black": "#000000",
                "n-neutral": {
                    50: "#F4F6F7",
                    100: "#E3E7EA",
                    300: "#DFDFDF",
                    500: "#637381",
                    950: "#22252A",
                },
                // Rainbow color
                "r-lime": "#5CDD6A",
                "r-teal": "#1CD6BE",
                "r-lightblue": "#11CCF2",
                "r-skyblue": "#3FB6FF",
                "r-blue": "#638DFF",
                "r-indigo": "#797AF7",
                "r-deeppurple": "#A17CF6",
                "r-purple": "#CE7BF0",
                "r-magenta": "#FF6FB0",
                "r-red": "#FF687A",
                "r-orange": "#FF875C",
                "r-amber": "#FFD96B",
                "r-yellow": "#FEFF78",
                // System color
                "s-blue": "#04AAD2",
                "s-red": "#E43311",
                "s-yellow": "#F9C101",
            },
            // Gradient
            backgroundImage: {
                "gradient-blue": "linear-gradient(180deg, #CEF3FF 0%, #79CBFF 100%)",
                "gradient-red": "linear-gradient(180deg, #FFE4DF 0%, #FCCAE6 100%)",
                "gradient-yellow": "linear-gradient(180deg, #FBFFBF 0%, #FFEB94 100%)",
                "gradient-green": "linear-gradient(180deg, #C0FEB8 0%, #62E8A4 100%)",
            },
            borderRadius: {
                0: "0px",
                100: "2px",
                200: "4px",
                300: "8px",
                400: "12px",
                500: "16px",
                600: "20px",
                700: "24px",
                800: "32px",
                900: "36px",
                1000: "40px",
            },
            spacing: {
                0: "0px",
                100: "2px",
                200: "4px",
                300: "8px",
                400: "12px",
                500: "16px",
                600: "20px",
                700: "24px",
                800: "32px",
                900: "36px",
                1000: "40px",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".h-heading-1-bold": {
                    fontSize: "64px",
                    lineHeight: "72px",
                    letterSpacing: "-2.56px",
                    fontWeight: "700",
                    fontFamily: "HyundaiSansHeadOffice-Bold, sans-serif",
                },
                ".h-heading-1-medium": {
                    fontSize: "64px",
                    lineHeight: "72px",
                    letterSpacing: "-2.56px",
                    fontWeight: "500",
                    fontFamily: "HyundaiSansHeadOffice-Medium, sans-serif",
                },
                ".h-heading-1-regular": {
                    fontSize: "64px",
                    lineHeight: "72px",
                    letterSpacing: "-2.56px",
                    fontWeight: "400",
                    fontFamily: "HyundaiSansHeadOffice-Regular, sans-serif",
                },
                ".h-heading-1-light": {
                    fontSize: "64px",
                    lineHeight: "72px",
                    letterSpacing: "-2.56px",
                    fontWeight: "300",
                    fontFamily: "HyundaiSansHeadOffice-Light, sans-serif",
                },
                ".h-heading-2-bold": {
                    fontSize: "40px",
                    lineHeight: "48px",
                    letterSpacing: "-1.6px",
                    fontWeight: "700",
                    fontFamily: "HyundaiSansHeadOffice-Bold, sans-serif",
                },
                ".h-heading-2-medium": {
                    fontSize: "40px",
                    lineHeight: "48px",
                    letterSpacing: "-1.6px",
                    fontWeight: "500",
                    fontFamily: "HyundaiSansHeadOffice-Medium, sans-serif",
                },
                ".h-heading-2-regular": {
                    fontSize: "40px",
                    lineHeight: "48px",
                    letterSpacing: "-1.6px",
                    fontWeight: "400",
                    fontFamily: "HyundaiSansHeadOffice-Regular, sans-serif",
                },
                ".h-heading-2-light": {
                    fontSize: "40px",
                    lineHeight: "48px",
                    letterSpacing: "-1.6px",
                    fontWeight: "300",
                    fontFamily: "HyundaiSansHeadOffice-Light, sans-serif",
                },
                ".h-heading-3-bold": {
                    fontSize: "27px",
                    lineHeight: "36px",
                    letterSpacing: "-1.08px",
                    fontWeight: "700",
                    fontFamily: "HyundaiSansHeadOffice-Bold, sans-serif",
                },
                ".h-heading-3-medium": {
                    fontSize: "27px",
                    lineHeight: "36px",
                    letterSpacing: "-1.08px",
                    fontWeight: "500",
                    fontFamily: "HyundaiSansHeadOffice-Medium, sans-serif",
                },
                ".h-heading-3-regular": {
                    fontSize: "27px",
                    lineHeight: "36px",
                    letterSpacing: "-1.08px",
                    fontWeight: "400",
                    fontFamily: "HyundaiSansHeadOffice-Regular, sans-serif",
                },
                ".h-heading-3-light": {
                    fontSize: "27px",
                    lineHeight: "36px",
                    letterSpacing: "-1.08px",
                    fontWeight: "300",
                    fontFamily: "HyundaiSansHeadOffice-Light, sans-serif",
                },
                ".h-heading-4-bold": {
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "-0.64px",
                    fontWeight: "700",
                    fontFamily: "HyundaiSansHeadOffice-Bold, sans-serif",
                },
                ".h-heading-4-medium": {
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "-0.64px",
                    fontWeight: "500",
                    fontFamily: "HyundaiSansHeadOffice-Medium, sans-serif",
                },
                ".h-heading-4-regular": {
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "-0.64px",
                    fontWeight: "400",
                    fontFamily: "HyundaiSansHeadOffice-Regular, sans-serif",
                },
                ".h-heading-4-light": {
                    fontSize: "27px",
                    lineHeight: "24px",
                    letterSpacing: "-0.64px",
                    fontWeight: "300",
                    fontFamily: "HyundaiSansHeadOffice-Light, sans-serif",
                },
                ".h-body-1-bold": {
                    fontSize: "17px",
                    lineHeight: "26px",
                    letterSpacing: "-0.68px",
                    fontWeight: "700",
                    fontFamily: "HyundaiSansTextOffice-Bold, sans-serif",
                },
                ".h-body-1-medium": {
                    fontSize: "17px",
                    lineHeight: "26px",
                    letterSpacing: "-0.68px",
                    fontWeight: "500",
                    fontFamily: "HyundaiSansTextOffice-Medium, sans-serif",
                },
                ".h-body-1-regular": {
                    fontSize: "17px",
                    lineHeight: "26px",
                    letterSpacing: "-0.68px",
                    fontWeight: "400",
                    fontFamily: "HyundaiSansTextOffice-Regular, sans-serif",
                },
                ".h-body-2-bold": {
                    fontSize: "14px",
                    lineHeight: "22px",
                    letterSpacing: "-0.56px",
                    fontWeight: "700",
                    fontFamily: "HyundaiSansTextOffice-Bold, sans-serif",
                },
                ".h-body-2-medium": {
                    fontSize: "14px",
                    lineHeight: "22px",
                    letterSpacing: "-0.56px",
                    fontWeight: "500",
                    fontFamily: "HyundaiSansTextOffice-Medium, sans-serif",
                },
                ".h-body-2-regular": {
                    fontSize: "14px",
                    lineHeight: "22px",
                    letterSpacing: "-0.56px",
                    fontWeight: "400",
                    fontFamily: "HyundaiSansTextOffice-Regular, sans-serif",
                },
                ".h-detail-1-bold": {
                    fontSize: "10px",
                    lineHeight: "14px",
                    letterSpacing: "-0.4px",
                    fontWeight: "700",
                    fontFamily: "HyundaiSansTextOffice-Bold, sans-serif",
                },
                ".h-detail-1-medium": {
                    fontSize: "10px",
                    lineHeight: "14px",
                    letterSpacing: "-0.4px",
                    fontWeight: "500",
                    fontFamily: "HyundaiSansTextOffice-Medium, sans-serif",
                },
                ".h-detail-1-regular": {
                    fontSize: "10px",
                    lineHeight: "14px",
                    letterSpacing: "-0.4px",
                    fontWeight: "400",
                    fontFamily: "HyundaiSansTextOffice-Regular, sans-serif",
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
