package designpatterns.facade.FacadeJava;

public class ThermoStats {
    
    private int temperature;
    
    public ThermoStats(int temperature) {
        this.temperature = temperature;
    }

    public ThermoStats() {
        this(22);
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    public int getTemperature() {
        return temperature;
    }
}