package challenges.adapter.autopilot;

class SensorException extends RuntimeException {
    // unchecked exception preferred for hardware failure in this system
    public SensorException(String message) {
        super(message);
    }
}

public interface IDistanceSensor {
    /**
     * Must return distance in Meters.
     * 0 raw = 0.0m, 1024 raw = 50.0m.
     * Must be Thread-safe.
     * @throws SensorException if the hardware fails/cannot recover.
     */
    float getDistance();
}