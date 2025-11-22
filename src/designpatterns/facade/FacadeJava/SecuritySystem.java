package designpatterns.facade.FacadeJava;

public class SecuritySystem {

    private boolean armed;

    public SecuritySystem(boolean armed) {
        this.armed = armed;
    }

    public SecuritySystem() {
        this(false);
    }

    public void setArmed(boolean armed) {
        this.armed = armed;
    }

    public boolean isArmed() {
        return armed;
    }
}