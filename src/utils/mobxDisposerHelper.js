export function callDisposer(disposer) {
    if (disposer) {
        if (typeof disposer === 'function') {
            disposer()
        } else if (typeof disposer.dispose === 'function') {
            disposer.dispose();
        }
    }
}