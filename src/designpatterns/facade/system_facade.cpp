#include "subsystem.hpp"
#include <iostream>

class SmartHomeFacade {
private:
    AgentCenter& agent;
    LightSystem& light;
    ThermoStats& thermo;
    SecuritySystem& security;

public:
    SmartHomeFacade(
        AgentCenter& a, LightSystem &l,
        ThermoStats& t, SecuritySystem &s
    ) : agent(a), light(l),
        thermo(t), security(s) {}

    void setMovieMode() {
        std::cout << "Activating Movie Mode" << std::endl;
        agent.setAssistant(Assistant::GEMINI);
        agent.setService(Service::NETFLIX);
        light.setBrightnessLevel(10);
        thermo.setTemperature(22);
        security.setArmed(false);
    }
    
    void setFocusMode() {
        std::cout << "Activating Focus Mode" << std::endl;
        agent.setAssistant(Assistant::CLAUDE);
        agent.setService(Service::SPOTIFY);
        light.setBrightnessLevel(100);
        thermo.setTemperature(20);
        security.setArmed(true);
    }
};

int main() {
    AgentCenter agent;
    LightSystem light;
    ThermoStats thermo;
    SecuritySystem security;

    SmartHomeFacade* f = new SmartHomeFacade(agent, light, thermo, security);
    f->setMovieMode();
    f->setFocusMode();

    return 0;
}