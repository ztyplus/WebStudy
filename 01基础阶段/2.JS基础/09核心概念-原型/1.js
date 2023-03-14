/* 
使用原型重构之前的扑克牌程序
*/

/* 
利用构造函数创建一幅扑克牌
*/

/**
 * 创建一张扑克牌
 * @param {number} number 1-A...11-J 12-Q 13-K 14-小王 15-大王
 * @param {number} color 1-黑桃 2-红桃 3-梅花 4-方片
 */
function Poker(number, color) {
    this.number = number;
    this.color = color;
}

Poker.prototype.print = function () {
    if (this.number === 14) {
        console.log("joker");
        return;
    }
    if (this.number === 15) {
        console.log("JOKER");
        return;
    }
    var color = "";
    switch (this.color) {
        case 1:
        color = "♥";
        break;
        case 2:
        color = "♠";
        break;
        case 3:
        color = "♣";
        break;
        default:
        color = "♦";
    }
    var numbers = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
    ];
    var number = numbers[this.number - 1];
    console.log(color + number);
};

/**
 * 一副扑克牌
 */
function Deck() {
    this.pokers = [];
    for (var i = 1; i <= 13; i++) {
    for (var j = 1; j <= 4; j++) {
        this.pokers.push(new Poker(i, j));
    }
    }

    this.pokers.push(new Poker(14, 0));
    this.pokers.push(new Poker(15, 0));

}

Deck.prototype.print = function () {
    for (var i = 0; i < this.pokers.length; i++) {
        var p = this.pokers[i].print();
    }
};

var deck = new Deck();
deck.print();