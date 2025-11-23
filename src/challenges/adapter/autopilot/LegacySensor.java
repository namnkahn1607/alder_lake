package challenges.adapter.autopilot;

public class LegacySensor {
    
    public void init() {
        // init hardware - takes 2 secs, no Thread-safe
    }

    public int getRawReading() {
        // returns raw signal in [0, 1024], -1 if error
        // garbage value if called more frequently than 50ms
        return -1;
    }

    public void reset() {
        // reset the hardware, must be called after a -1 error
    }
}