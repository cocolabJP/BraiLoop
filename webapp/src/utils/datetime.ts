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
