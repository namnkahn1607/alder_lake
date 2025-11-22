package designpatterns.facade.FacadeJava;

public class SmartHomeFacade {
    
    private AgentCenter agent;
    private LightSystem light;
    private ThermoStats thermo;
    private SecuritySystem security;

    public SmartHomeFacade(
        AgentCenter agent, LightSystem light,
        ThermoStats thermo, SecuritySystem security
    ) {
        this.agent = agent;
        this.light = light;
        this.thermo = thermo;
        this.security = security;
    } 

    public void setMovieMode() {
        System.out.println("Activating Movie Mode");
        agent.setAssistant(Assistant.GEMINI);
        agent.setStreamingService(Service.NETFLIX);
        light.setBrightness(10);
        thermo.setTemperature(25);
        security.setArmed(false);
    }

    public void setFocusMode() {
        System.out.println("Activating Focus Mode");
        agent.setAssistant(Assistant.CLAUDE);
        agent.setStreamingService(Service.SPOTIFY);
        light.setBrightness(100);
        thermo.setTemperature(20);
        security.setArmed(true);
    }

    public static void main(String[] args) {
        AgentCenter agent = new AgentCenter();
        LightSystem light = new LightSystem();
        ThermoStats thermo = new ThermoStats();
        SecuritySystem security = new SecuritySystem();

        SmartHomeFacade f = new SmartHomeFacade(agent, light, thermo, security);
        f.setMovieMode();
        f.setFocusMode();
    }
}