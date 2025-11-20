package designpatterns.singleton.SingletonJava;

import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

public class PrintService {
    private static volatile PrintService instance = null;

    private Queue<String> jobQueue;
    private String state = null;

    private PrintService() {
        this.jobQueue = new ConcurrentLinkedQueue<>();
        this.state = "ONLINE";
    }

    public void addJob(String document) {
        jobQueue.add(document);
        System.out.println(String.format("[Java] Added %s", document));
    }

    public static PrintService getInstance() {
        if (instance == null) {
            synchronized (PrintService.class) {
                if (instance == null) {
                    instance = new PrintService();
                }
            }
        }

        return instance;
    }

    public String getStatus() {
        return state;
    }
}