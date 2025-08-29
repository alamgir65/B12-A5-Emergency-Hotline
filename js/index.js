function makeCall(name, number) {
    var coins = parseInt(document.getElementById('total-coin').innerText);
    console.log('Hello from makeCall, coins =', coins);

    if (coins < 20) {
        alert('You do not have enough coins. Minimum 20 needed.');
        return;
    } else {
        var s = `Calling ${name} ${number}...`;
        const newCoins = coins - 20;
        document.getElementById('total-coin').innerText = newCoins;


        const historyContainer = document.getElementById("callHistory");

        const now = new Date();
        const timeString = now.toLocaleTimeString();

        const history = document.createElement("div");
        history.className = "flex justify-between items-center p-5 rounded-xl bg-[#E5DDDD] text-black my-1";

        const left = document.createElement("div");
        left.innerHTML = `<div>${name}</div><div>${number}</div>`;

        const right = document.createElement("div");
        right.textContent = timeString;

        history.appendChild(left);
        history.appendChild(right);
        historyContainer.prepend(history);

        alert(s);
    }
}



document.querySelectorAll(".fa-heart").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const heartCount = document.getElementById('total-love').innerText;
        const newHeartCount = parseInt(heartCount) + 1;
        document.getElementById('total-love').innerText = newHeartCount;
        console.log('Heart clicked', newHeartCount);
    });
});



document.getElementById('history-clear-btn')
    .addEventListener('click', function () {
        document.getElementById('callHistory').innerHTML = '';
    })


// For copy button
document.querySelectorAll('.copyBtn').forEach((btn) => {
    btn.addEventListener('click', function (evt) {
        const copyCount = document.getElementById('total-copy').innerText;
        const newCopyCount = parseInt(copyCount) + 1;
        document.getElementById('total-copy').innerText = newCopyCount;
        console.log('Copy clicked', newCopyCount);

        const btn = evt.target.closest('.copyBtn');

        const selector = btn.getAttribute('data-copy-target');
        const target = document.querySelector(selector);

        const text = 'value' in target ? (target.value ?? '') : (target.textContent ?? '');
        copyToClipboard(text.trim(), btn);
    })
})


async function copyToClipboard(text, btn) {

    btn.disabled = true;
    const original = btn.textContent;

    try {
        await navigator.clipboard.writeText(text);
        flash(btn, 'Copied!');
    } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.top = '-1000px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try {
            const ok = document.execCommand('copy');
            flash(btn, ok ? 'Copied!' : 'Copy failed');
        } catch {
            flash(btn, 'Copy failed');
        } finally {
            ta.remove();
        }
    } finally {
        setTimeout(() => {
            btn.textContent = original;
            btn.disabled = false;
        }, 900);
    }
}

function flash(btn, msg) {
    btn.textContent = msg;
}



