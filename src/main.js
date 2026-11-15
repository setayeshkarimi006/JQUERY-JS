// ================= Tabs Logic =================

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        const target = tab.getAttribute('data-target');

        tabs.forEach(t => {
            t.classList.remove(
                'text-yellow-500',
                'border-b-2',
                'border-yellow-500'
            );

            t.classList.add('text-zinc-400');
        });

        tab.classList.add(
            'text-yellow-500',
            'border-b-2',
            'border-yellow-500'
        );

        tab.classList.remove('text-zinc-400');

        contents.forEach(c => c.classList.remove('active'));

        document.getElementById(target).classList.add('active');

    });

});


// ================= Accordion Logic =================

const accHeaders = document.querySelectorAll('.accordion-header');

accHeaders.forEach(header => {

    header.addEventListener('click', () => {

        const body = header.nextElementSibling;

        body.classList.toggle('hidden');

        const span = header.querySelector('span:last-child');

        span.textContent = body.classList.contains('hidden') ? '+' : '-';

    });

});


// ================= Copy Code Logic =================

function copyCode(button) {

    const code = button.parentElement.querySelector('code').innerText;

    navigator.clipboard.writeText(code).then(() => {

        const original = button.innerHTML;

        button.innerHTML = '✓';

        setTimeout(() => {

            button.innerHTML = original;

        }, 1500);

    });

}