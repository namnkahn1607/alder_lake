package designpatterns.facade.FacadeJava;

public class LightSystem {
    
    private int level;

    public LightSystem(int level) {
        this.level = level;
    }

    public LightSystem() {
        this(50);
    }

    public void setBrightness(int level) {
        this.level = level;
    }

    public int getBrightness() {
        return level;
    }
}