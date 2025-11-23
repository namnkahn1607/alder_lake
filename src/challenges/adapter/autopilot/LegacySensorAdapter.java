package challenges.adapter.autopilot;

public class LegacySensorAdapter implements IDistanceSensor {
    
    private static final long COOLDOWN_MS = 50;

    private volatile LegacySensor legacySensor;

    /** The 'Caching' Strategy
     * Adaptee: provides data at 20Hz
     * Target: needs data at 1000Hz
     * -> The Adapter's role is Impendance Matching,
     * acting as a Buffer.
     */
    private float lastCacheDistance = 0.0f;
    private long lastReadTime = 0;

    public LegacySensorAdapter(LegacySensor sensor) {
        if (sensor == null) {
            throw new IllegalArgumentException("Sensor missing");
        }

        this.legacySensor = sensor;
        
        try {
            this.legacySensor.init();
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }

    /* Ensure only one Thread can access getDistance() at time */
    @Override
    public synchronized float getDistance() throws SensorException {
        long currentTime = System.currentTimeMillis();

        if (currentTime - lastReadTime >= COOLDOWN_MS) {
            int raw = legacySensor.getRawReading();

            if (raw == -1) {
                handleHardwareFailure();

                throw new SensorException("Hardware read failure");
            } else {
                lastCacheDistance = convertToMeters(raw);
                lastReadTime = currentTime;
            }
        }

        return lastCacheDistance;
    }

    private void handleHardwareFailure() {
        legacySensor.reset();
    }

    private float convertToMeters(int raw) {
        return 50.0f * (raw / 1024.0f);
    }
}