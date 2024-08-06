export function getTimeDifference(openTime: string, closeTime: string) {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

    if (!openTime.match(timeRegex) && !closeTime.match(timeRegex)) {
        return "";
    }

    const [openHours, openMinutes, openSeconds] = openTime.split(":").map(Number);
    const [closeHours, closeMinutes, closeSeconds] = closeTime.split(":").map(Number);

    const openTimeInSeconds = openHours * 3600 + openMinutes * 60 + openSeconds;
    const closeTimeInSeconds = closeHours * 3600 + closeMinutes * 60 + closeSeconds;

    let differenceInSeconds = closeTimeInSeconds - openTimeInSeconds;

    if (differenceInSeconds < 0) {
        differenceInSeconds += 24 * 3600;
    }

    const hours = Math.floor(differenceInSeconds / 3600);
    differenceInSeconds %= 3600;
    const minutes = Math.floor(differenceInSeconds / 60);
    const seconds = differenceInSeconds % 60;

    return `${String(hours).padStart(2, "0")}시 ${String(minutes).padStart(2, "0")}분 ${String(seconds).padStart(2, "0")}초`;
}
