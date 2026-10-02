document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
        const status = button.closest('.code-example')?.querySelector<HTMLElement>('[data-copy-status]');
        try {
            await navigator.clipboard.writeText(JSON.parse(button.dataset.code || '""'));
            if (status)
                status.textContent = 'Đã sao chép code.';
        }
        catch {
            if (status)
                status.textContent = 'Không sao chép được. Hãy chọn và sao chép đoạn code.';
        }
    });
});
