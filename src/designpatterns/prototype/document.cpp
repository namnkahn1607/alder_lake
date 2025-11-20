#include "document_prototype.hpp"
#include <iostream>
#include <string>
#include <vector>

#define string std::string
#define vector std::vector
#define cout std::cout
#define endl std::endl

class Document : public IDocumentPrototype {
private:
    string content;
    vector<string> images;
    string format;
    vector<string> annotations;

public:
    Document(
        string _content,
        vector<string> _images,
        string _format,
        vector<string> _annotations
    ) : content(_content), format(_format) {
        images = vector<string>(begin(_images), end(images));
        annotations = vector<string>(begin(_annotations), end(_annotations));
    }

    void addImage(string image) {
        images.push_back(image);
    }

    IDocumentPrototype* cloneDocument() {
        return new Document(content, images, format, annotations);
    }

    void display() {
        cout << "Content: " << content << endl;
        cout << "Images: " << endl;
        
        for (auto& image : images) {
            cout << image << endl;
        }

        cout << "Formatter: " << format << endl;
        cout << "Annotations: " << endl;

        for (auto& annotation : annotations) {
            cout << annotation << endl;
        }
    }
};