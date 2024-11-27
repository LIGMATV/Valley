        // Toggle open attribute for elements
document.querySelectorAll('button[data-ui]').forEach(btn => 
    btn.addEventListener('click', () => {
        const el = document.querySelector(btn.getAttribute('data-ui'));
        el?.toggleAttribute('open');
    })
);

// Auto-resize textarea
document.getElementById('autoTextarea')?.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`;
});

// Initialize custom dropdown
function initDropdown(select) {
    const btn = select.querySelector(".select-button");
    const value = select.querySelector(".selected-value");
    const options = select.querySelectorAll(".select-dropdown li input");

    btn.addEventListener("click", () => {
        select.classList.toggle("active");
        btn.setAttribute("aria-expanded", select.classList.contains("active"));
    });

    options.forEach(opt =>
        opt.addEventListener("change", () => {
            const selected = [...options]
                .filter(o => o.checked)
                .map(o => `<li>${o.parentElement.textContent.trim()}</li>`)
                .join("") || "<li>Select car brands</li>";
            value.innerHTML = selected;
        })
    );

    document.addEventListener("click", e => {
        if (!select.contains(e.target)) {
            select.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        }
    });
}

document.querySelectorAll(".custom-select").forEach(initDropdown);