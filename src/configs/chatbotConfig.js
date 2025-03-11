import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import SecondOptions from "../components/Options/SecondOptions";

const botName = 'Stitch Bot'
const config = {
    botName: 'Stitch Bot!',
    initialMessages: [
        createChatBotMessage(`Hi! I'm ${botName}!`, {
            widget: "options",
        }),
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#df3500',
        },
        chatButton: {
            backgroundColor: '#df3500',
        },
    },
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },
        {
            widgetName: 'secondOptions',
            widgetFunc: (props) => <SecondOptions {...props} />,

        }
    ],
};

export default config