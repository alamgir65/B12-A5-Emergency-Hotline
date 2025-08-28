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
        history.className =  "flex justify-between items-center p-5 rounded-xl bg-[#E5DDDD] text-black my-1";

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