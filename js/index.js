document.getElementById('call-btn')
    .addEventListener('click', function () {
        const coins = parseInt(document.getElementById('total-coin'));

        if (coins < 20) {
            alert('You do not able to make a call.Minimum 20 coins needed to make a call.');
            return;
        } else {

        }
    });

function makeCall(name, number) {
    var coins = parseInt(document.getElementById('total-coin'));

    if (coins < 20) {
        alert('You do not able to make a call.Minimum 20 coins needed to make a call.');
        return;
    } else {
        var s = `Calling ${name} ${number}...`;
        coins -= 20;
        alert(s);
    }
}