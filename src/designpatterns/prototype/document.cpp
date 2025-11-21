#include "document_prototype.hpp"
#include <iostream>
#include <string>
#include <vector>

#define string std::string
#define vector std::vector
#define cout std::cout
#define endl std::endl

class Document : public DocumentPrototype {
private:
    string content;
    vector<string> images;
    string format;
    vector<string> annotations;

public:
    Document(
        string c, vector<string> i,
        string f, vector<string> a
    ) : content(std::move(c)), images(std::move(i)), 
        format(std::move(f)), annotations(std::move(a)) {}

    void addImage(const string& image) {
        images.push_back(image);
    }
    
    void addAnnotation(const string& annotation) {
        annotations.push_back(annotation);
    }

    std::unique_ptr<DocumentPrototype> clone() const override {
        return std::make_unique<Document>(*this);
    }

    void display() {
        cout << "Content: " << content << "\n"
             << "Format: " << format << "\n"
             << "Images: " << images.size() << " attached.\n"
             << "Annotations: " << annotations.size() << " attached.\n"
             << "------------------------" << endl;
    }
};