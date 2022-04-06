Vue.createApp({
    data() {
        return {
            res: "",
            firstNum: parseInt(Math.random()*10),
            secondNum: parseInt(Math.random()*10),
        }
    },
    methods: {
        getRes() {
            if (this.res == this.firstNum + this.secondNum) {
                alert('Correct');
                window.location.reload()
            }

            else {
                alert(`Sorry. Incorrect. The correct answer was ${this.firstNum + this.secondNum}.`)
                window.location.reload()
            }
        }
    }
}).mount("#app");
