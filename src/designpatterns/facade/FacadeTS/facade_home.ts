import { AgentCenter, LightSystem, ThermoStats, SecuritySystem } from './smart_home.ts';

/** FACADE
 * offers a high-level, simplfied interface to the
 * Client code by encapsulating complexities.
 */
class SmartHomeFacade {
    constructor(
        private agent: AgentCenter,
        private light: LightSystem,
        private thermo: ThermoStats,
        private security: SecuritySystem
    ) {}

    setMovieMode(): void {
        console.log('Activating Movie Mode');
        this.agent.setAssistant('GEMINI');
        this.agent.setStreamingService('NETFLIX');
        this.light.setBrightness(10);
        this.thermo.setTemperature(25);
        this.security.setSecurityArmed(false);
    }

    setFocusMode(): void {
        console.log('Activating Focus Mode');
        this.agent.setAssistant('CLAUDE');
        this.agent.setStreamingService('SPOTIFY');
        this.light.setBrightness(100);
        this.thermo.setTemperature(20);
        this.security.setSecurityArmed(true);
    }

    // more Facade operations to come...
}

// Client code
const agent = new AgentCenter();
const light = new LightSystem();
const thermo = new ThermoStats();
const security = new SecuritySystem();

const f = new SmartHomeFacade(agent, light, thermo, security);
f.setMovieMode();
f.setFocusMode();