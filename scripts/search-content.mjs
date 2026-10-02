/** @param {string} content */
export function indexContent(content) {
    const folded = content.normalize('NFD').replace(/\p{M}/gu, '').replace(/[đĐ]/g, letter => letter === 'đ' ? 'd' : 'D');
    return folded === content ? content : content + '\n' + folded;
}
