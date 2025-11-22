#pragma once

enum class Assistant { UNKNOWN, CLAUDE, GEMINI, GROK, GPT };
enum class Service { UNKNOWN, NETFLIX, YOUTUBE, SPOTIFY };

class AgentCenter {
private:
    Assistant assistant = Assistant::UNKNOWN;
    Service streamingService = Service::UNKNOWN;

public:
    AgentCenter() {}
    AgentCenter(Assistant a, Service s) : assistant(a), streamingService(s) {}
    AgentCenter(Assistant a) : assistant(a) {}
    AgentCenter(Service s) : streamingService(s) {}
    ~AgentCenter() {}

    void setAssistant(Assistant a) { assistant = a; }
    void setService(Service s) { streamingService = s; }

    Assistant getAssistant() { return assistant; }
    Service getService() { return streamingService; }
};

class LightSystem {
private:
    int level = 50;

public:
    LightSystem() {}
    LightSystem(int l) : level(l) {}
    ~LightSystem() {} 

    void setBrightnessLevel(int l) { level = l; }
    int getBrightnessLevel() { return level; }
};

class ThermoStats {
private:
    int temperature = 22;

public:
    ThermoStats() {}
    ThermoStats(int t) : temperature(t) {}
    ~ThermoStats() {}

    void setTemperature(int t) { temperature = t; }
    int getTemperature() { return temperature; }
};

class SecuritySystem {
private:
    bool armed = false;

public:
    SecuritySystem() {}
    SecuritySystem(bool a) : armed(a) {}
    ~SecuritySystem() {}

    void setArmed(bool a) { armed = a; }
    bool isArmed() { return armed; } 
};