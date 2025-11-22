package designpatterns.facade.FacadeJava;

enum Assistant {
    UNKNOWN, CLAUDE, GEMINI, GPT, GROK 
}

enum Service {
    UNKNOWN, NETFLIX, YOUTUBE, SPOTIFY
}

public class AgentCenter {
    
    private Assistant assistant;
    private Service streamingService;

    public AgentCenter(Assistant assistant, Service service) {
        this.assistant = assistant;
        this.streamingService = service;
    }

    public AgentCenter() {
        this(Assistant.UNKNOWN, Service.UNKNOWN);
    }

    public void setAssistant(Assistant assistant) {
        this.assistant = assistant;
    }
    
    public void setStreamingService(Service streamingService) {
        this.streamingService = streamingService;
    }

    public Assistant getAssistant() {
        return assistant;
    }

    public Service getStreamingService() {
        return streamingService;
    }
}