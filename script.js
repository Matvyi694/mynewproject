// script.js

// 1. Зберігання даних у localStorage
const browserInfo = {
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    language: navigator.language
};
localStorage.setItem('browserInfo', JSON.stringify(browserInfo));

// Виведення у footer
const footer = document.getElementById('footer');
footer.innerHTML = `<pre>${JSON.stringify(browserInfo, null, 2)}</pre>`;

// 2. Завантаження коментарів
fetch('https://jsonplaceholder.typicode.com/posts/19/comments')
    .then(response => response.json())
    .then(comments => {
        const commentsSection = document.getElementById('comments');
        commentsSection.innerHTML = '<h2>Коментарі попередніх роботодавців</h2>';
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'section';
            div.innerHTML = `<strong>${comment.name}</strong> (${comment.email})<p>${comment.body}</p>`;
            commentsSection.appendChild(div);
        });
    });

// 3. Відображення модального вікна через 1 хвилину
setTimeout(() => {
    document.getElementById('modal').classList.remove('hidden');
}, 60000);

// 4. Нічна/денна тема
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Автоматичне перемикання теми
const hour = new Date().getHours();
if (hour < 7 || hour >= 21) {
    document.body.classList.add('dark');
}
