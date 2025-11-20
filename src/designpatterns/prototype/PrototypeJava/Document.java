package designpatterns.prototype.PrototypeJava;

import java.util.ArrayList;
import java.util.List;

public class Document implements DocumentPrototype {

    private String content;
    private List<String> images;
    private String format;
    private List<String> annotations;

    public Document(String content, List<String> images, String format, List<String> annotations) {
        this.content = content;
        this.images = new ArrayList<>(images);
        this.format = format;
        this.annotations = new ArrayList<>(annotations);
    }

    public void addImage(String image) {
        if (image == null) {
            return;
        }

        this.images.add(image);
    }

    public void addAnnotation(String annotation) {
        if (annotation == null) {
            return;
        }

        this.annotations.add(annotation);
    }

    @Override
    public DocumentPrototype cloneDocument() {
        return new Document(this.content, this.images, this.format, this.annotations);
    }

    @Override
    public void display() {
        System.out.println("Content: " + this.content);
        System.out.println("Images: " + this.images);
        System.out.println("Formatting: " + this.format);
        System.out.println("Annotations: " + this.annotations);
    }
}