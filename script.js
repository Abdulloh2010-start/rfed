let a1 = document.createElement("div");
document.body.appendChild(a1);
a1.style.backgroundColor = 'black';
a1.style.color = 'white';
a1.style.padding = '10px';
a1.style.width = '200px';
a1.style.borderRadius = '8px';

let nameA = confirm=(prompt("Ismingizni kiriting:"));
let nameB = confirm=(prompt("Familiyangizni kiriting:"));
let nameC = confirm=(prompt("Yoshingizni kiriting:"));
let d = confirm=(prompt(`Ismingiz katta yoki kichikligini tanlang \n 1)Katta \n 2)kichik`));

let a = document.createElement("h3");
a.textContent = `1. Ism: ${nameA}`;
a1.appendChild(a);

let b = document.createElement("h3");
b.textContent = `2. Familiya: ${nameB}`;
a1.appendChild(b);

let c = document.createElement("h3");
c.textContent = `3. Yosh: ${nameC}`;
a1.appendChild(c);

if (d === "1") {
    a.textContent = `1. Ism: ${nameA.toUpperCase()}`;
    b.textContent = `2. Familiya: ${nameB.toUpperCase()}`;
    c.textContent = `3. Yosh: ${nameC.toUpperCase()}`;
} else if (d === "2") {
    a.textContent = `1. Ism: ${nameA.toLowerCase()}`;
    b.textContent = `2. Familiya: ${nameB.toLowerCase()}`;
    c.textContent = `3. Yosh: ${nameC.toLowerCase()}`;
} else {
    alert("Iltimos, faqat 1 yoki 2 raqamini tanlang.");
}
