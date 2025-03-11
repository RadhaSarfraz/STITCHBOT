class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }
    greet1 = () => {
        const message = this.createChatBotMessage("Hello!, how we may help you?", {
            widget: 'options'
        });
        this.addMessageToState(message);
    };

    greet2 = () => {
        const message = this.createChatBotMessage("Hi!, how we may help you?", {
            widget: 'options'
        });
        this.addMessageToState(message);
    };

    orderAnswer = () => {
        const message = this.createChatBotMessage("It will be delivered soon!", {
            widget: 'secondOptions'
        });
        this.addMessageToState(message);
    };

    refundPolicy = () => {
        const message = this.createChatBotMessage(refundPolicyDetails, {
            widget: 'secondOptions',
        });
        this.addMessageToState(message);
    };

    discounts = () => {
        const message = this.createChatBotMessage("At the moment we are not offering any coupons or discounts, but stay tuned for future offers!", {
            widget: 'secondOptions'
        });
        this.addMessageToState(message);
    };

    availableTime = () => {
        const message = this.createChatBotMessage("We are available from 09:00 AM - 10:00 PM", {
            widget: 'secondOptions'
        });
        this.addMessageToState(message);
    };
    thankyou = () => {
        const message = this.createChatBotMessage("Thank you for being valued customer!");
        this.addMessageToState(message);
    };

    askMore = () => {
        const message = this.createChatBotMessage("Sure! How can we further assist you?", {
            widget: 'options'
        });
        this.addMessageToState(message);
    };

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}

const refundPolicyDetails = `Thank you for choosing Stitch Bot for your stitched clothing needs. We want to ensure your satisfaction with our products. Please read our refund policy for stitched clothes below:
Refund Eligibility: 1.1 We offer refunds for stitched clothes purchased directly from Stitch Bot. 1.2 To be eligible for a refund, you must provide proof of purchase, such as a receipt or order confirmation.
Refund Requests: 2.1 Refund requests must be made within 7 working days from the date of receiving the stitched clothes. 2.2 All refund requests should be sent to our customer support team at [refund email address] or submitted through our customer support system. 2.3 In your refund request, please include the reason for the refund and any supporting documentation, such as photographs of the issue.
Refund Process: 3.1 Once your refund request is received and approved, we will process the refund within 3 working days. 3.2 Refunds will be issued using the same payment method used for the original purchase, unless otherwise specified by the customer. 3.3 If the refund is not received within the specified time, please contact our customer support team for assistance.
Return of Stitched Clothes: 4.1 In most cases, we may require you to return the stitched clothes in their original condition before a refund is issued. 4.2 Stitched clothes must be unworn, unwashed, and free from any alterations or damages caused by the customer. 4.3 The cost of return shipping will be the responsibility of the customer, unless the return is due to an error on our part.
Non-Refundable Items: 5.1 The following items are non-refundable: - Stitched clothes that have been altered, damaged, or worn. - Custom-made stitched clothes that are tailored specifically to your measurements. - Stitched clothes purchased from third-party retailers or resellers.
Damaged or Defective Stitched Clothes: 6.1 If you receive damaged or defective stitched clothes, please contact us immediately. 6.2 We may request evidence of the damage or defect, such as photographs or a detailed description. 6.3 Upon verification, we will provide a replacement or issue a refund, depending on the customer's preference.
Changes to the Refund Policy: 7.1 Stitch Bot reserves the right to modify or update this refund policy at any time without prior notice. 7.2 Any changes to the refund policy will be effective immediately upon posting the revised version on our website.
Please note that this refund policy applies specifically to stitched clothes purchased from Stitch Bot. For other products or services, separate refund policies may apply. If you have any questions or concerns regarding our refund policy, please reach out to our customer support team for assistance.`;
export default ActionProvider;