export function normalizePath(p) {
    return p[0] === '?' ? p : p[0] === '/' ? p : '/' + p;
}
export function appPath(p) {
    return p
        ? window.__basePath + normalizePath(p)
        : window.__basePath === ''
            ? '/'
            : window.__basePath;
}

export function buildQuery(data) {
    return Object.keys(data)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');
}

export function redirect(path) {
    window.location.replace(appPath(path));
}

export function clickLink(path) {
    window.location.href = appPath(path);
}
