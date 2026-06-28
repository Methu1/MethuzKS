const container = document.getElementById('heart-container');
const text = "I love you";
const totalParticles = 450; // Heart එක හැදෙන්න ඕනේ අකුරු ප්‍රමාණය

for (let i = 0; i < totalParticles; i++) {
    let el = document.createElement('div');
    el.className = 'love-text';
    el.innerText = text;

    // Heart හැඩය නිර්මාණය කිරීමේ ගණිතමය සමීකරණය
    let t = Math.random() * Math.PI * 2;
    let scale = Math.random() * 12 + 5; 

    let x = scale * (16 * Math.pow(Math.sin(t), 3));
    let y = -scale * (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

    // අකුරු Screen එකේ මැදට ස්ථානගත කිරීම
    el.style.left = `calc(50% + ${x}px)`;
    el.style.top = `calc(50% + ${y}px)`;

    // එකින් එක අකුරු මතුවෙන්න Random delay එකක් දීම
    el.style.animationDelay = `${Math.random() * 3}s`;

    container.appendChild(el);
}
