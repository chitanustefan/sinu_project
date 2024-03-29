package sinu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import sinu.model.ChatMessage;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class ChatController {

    private static final String SENDING_URL = "/topic/server-broadcaster";
    private static final String RECEIVING_URL = "/server-receiver";

    @Autowired
    private final SimpMessageSendingOperations template;
    private AtomicLong counter = new AtomicLong(0);

    private String message = "";

    @Autowired
    public ChatController(SimpMessageSendingOperations template) {
        this.template = template;
    }

    @MessageMapping(RECEIVING_URL)
    public void onReceivedMessage(String message) {
        System.out.println("New message received : " + message);
    }

    @SubscribeMapping(SENDING_URL)
    public String onSubscribe() {
        return "SUBSCRIBED : " + message;
    }

    @Scheduled(fixedRate = 1000)
    public void sendMessage() {
        template.convertAndSend(SENDING_URL, buildNextMessage());
    }

    private String buildNextMessage() {
        message = "Test" + counter.getAndIncrement();
        System.out.println("Send message " + message);
        return message;
    }
}
