// Auto-resize textarea
document.getElementById('autoTextarea')?.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`;
});

// Update button content based on selected options
document.querySelectorAll('button[data-select]').forEach(button => {
    const groupName = button.getAttribute('data-select');
    const inputs = document.querySelectorAll(`input[name="${groupName}"]`);
    const list = button.querySelector('ul');
    const placeholderText = button.getAttribute('placeholder') || 'Select an option';

    // Function to update the button content
    const updateContent = () => {
        const selectedValues = Array.from(inputs)
            .filter(input => input.checked)
            .map(input => input.value);

        list.innerHTML = selectedValues.length ?
            selectedValues.map(value => `<li>${value}</li>`).join('') :
            `<li>${placeholderText}</li>`;
    };

    inputs.forEach(input => input.addEventListener('change', updateContent));
    updateContent(); // Initialize with current state
});

document.addEventListener("DOMContentLoaded", () => {
    const updateActiveElements = () => {
        const fragment = window.location.hash; // Mendapatkan fragmen dari URL
        const elements = document.querySelectorAll("[data-active]");

        elements.forEach(el => {
            if (el.getAttribute("data-active") === fragment) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
    };

    // Jalankan saat halaman dimuat
    updateActiveElements();

    // Jalankan saat fragmen URL berubah
    window.addEventListener("hashchange", updateActiveElements);
});