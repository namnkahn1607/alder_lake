type Assistant = 'UNKNOWN' | 'CLAUDE' | 'GEMINI' | 'GROK' | 'GPT';
type Service = 'UNKNOWN' | 'NETFLIX' | 'YOUTUBE' | 'SPOTIFY';

/** SUBSYSTEM
 * The classes that Facade aims to simplify, each has
 * its own intricate operation.
 */
class AgentCenter {
    private assistant: Assistant;
    private streamingService: Service;

    constructor(
        assistant: Assistant = 'UNKNOWN', 
        service: Service = 'UNKNOWN'
    ) {
        this.assistant = assistant;
        this.streamingService = service;
    }

    setAssistant(assistant: Assistant) { this.assistant = assistant; }
    setStreamingService(service: Service) { this.streamingService = service; }

    getAssistant(): Assistant { return this.assistant; }
    getStreamingService(): Service { return this.streamingService; }
}

class LightSystem {
    private level: number;

    constructor(level: number = 50) {
        this.level = level;
    }

    setBrightness(level: number) { this.level = level; }
    getBrightness(): number { return this.level; }
}

class ThermoStats {
    private temperature: number;

    constructor(temperature: number = 22) {
        this.temperature = temperature;
    }

    setTemperature(temperature: number) { this.temperature = temperature; }
    getTemperature(): number { return this.temperature; }
}

class SecuritySystem {
    private armed: boolean;

    constructor(armed: boolean = false) {
        this.armed = armed;
    }

    setSecurityArmed(armed: boolean) { this.armed = armed; }
    getSecurityArmed(): boolean { return this.armed; }
}

export { AgentCenter, LightSystem, ThermoStats, SecuritySystem };