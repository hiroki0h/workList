export const toggleBodyOverflowHidden = (condition: boolean) => {
    if (condition) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
};
