class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        console.log(message)
        const lowercase = message.toLowerCase();

        if (lowercase.includes("hello")) {
            this.actionProvider.greet1();
        }

        if (lowercase.includes("hi")) {
            this.actionProvider.greet2();
        }

        if (lowercase.includes("order")) {
            this.actionProvider.orderAnswer();
        }

        if (lowercase.includes("refund")) {
            this.actionProvider.refundPolicy();
        }

        if (lowercase.includes("discount") || lowercase.includes("coupon")) {
            this.actionProvider.discounts();
        }

        if (lowercase.includes("open") || lowercase.includes("available")) {
            this.actionProvider.availableTime();
        }

        if (lowercase.includes("ask") || lowercase.includes("question")) {
            this.actionProvider.askMore();
        }

        if (lowercase.includes("ok") || lowercase.includes("thank you") || lowercase.includes("thankyou") || lowercase.includes("thank")) {
            this.actionProvider.thankyou();
        }


    }
}

export default MessageParser;