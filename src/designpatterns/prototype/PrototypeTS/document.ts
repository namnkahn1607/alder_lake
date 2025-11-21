import type { DocumentPrototype } from './document_prototype.ts';

/** CONCRETE PROTOTYPE
 * implements the Prototype Interface, therefore defining
 * cloning logic to instantiate new instances (shallow 
 * clone or deep clone based on context).
 */
class Document implements DocumentPrototype {
    constructor(
        private content: string,
        private images: Array<string>,
        private format: string,
        private annotations: Array<string>
    ) {
        this.content = content;
        this.images = new Array<string>(...images);
        this.format = format;
        this.annotations = new Array<string>(...annotations);
    }

    addImage(image: string) {
        this.images.push(image);
    }

    addAnnotation(annotation: string) {
        this.annotations.push(annotation);
    }

    cloneDocument(): DocumentPrototype {
        return new Document(this.content, this.images, this.format, this.annotations);
    }

    display() {
        console.log(`Content: ${this.content}`);
        console.log(`Images: ${this.images}`);
        console.log(`Format: ${this.format}`);
        console.log(`Annotations: ${this.annotations}`);
    }
}

export { Document };