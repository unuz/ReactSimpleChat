package com.chat.simple.react.reactsimplechat;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import handler.WebsocketHandler;
import handler.WebsocketHandler2;

@Configuration
@EnableWebSocket
public class WebsocketConfig implements WebSocketConfigurer{
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry){
        //연결할 handelr path = / , 
        //CORS setAllowedOrigins('*')
        //SockJS withSockJS
        registry.addHandler(new WebsocketHandler(), "/").setAllowedOrigins("*").withSockJS();
        registry.addHandler(new WebsocketHandler2(), "/chatting2").setAllowedOrigins("*").withSockJS();
    }
}