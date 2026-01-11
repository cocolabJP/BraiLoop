export function getJPDateTime(utcDate: string) {
    return new Date(utcDate).toLocaleString('ja-JP', {
        year:   'numeric',
        month:  'numeric',
        day:    'numeric',
        hour:   '2-digit',
        minute: '2-digit',
        hour12: false,
    });
}

// date: YYYYMMDD
export function extractMonthDay(date: string) {
    const mmdd = date.slice(4)
    const mm = mmdd.slice(0, 2);
    const dd = mmdd.slice(2);
    const month = mm.startsWith('0') ? mm.slice(1) : mm;
    const day   = dd.startsWith('0') ? dd.slice(1) : dd;
    return `${month}.${day}`;
}