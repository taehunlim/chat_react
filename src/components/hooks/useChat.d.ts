declare const useChat: (roomId: any) => {
    messages: any[];
    sendMessage: (messageBody: any) => void;
};
export default useChat;
