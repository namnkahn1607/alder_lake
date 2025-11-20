#pragma once

class IDocumentPrototype {
public:
    IDocumentPrototype* cloneDocument();

    void display();
};