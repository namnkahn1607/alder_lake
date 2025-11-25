#include "observer.hpp"
using namespace std;

class EmailNoti : public IEventListener {
private:
    string email;

public:
    explicit EmailNoti(string e) : email(move(e)) {}

    void update(const string& eventType, const File& file) override {
        cout << "Email to " << email << ": " << eventType
             << " on " << file.getPath() << endl;
    }
};

class LogOpen : public IEventListener {
private:
    string logPath;

public:
    explicit LogOpen(string path) : logPath(move(path)) {}

    void update(const string& eventType, const File& file) override {
        cout << "Log to " << logPath << ": " << eventType
             << " on " << file.getPath() << endl; 
    }
};

class Editor {
public:
    EventManager events;

    void openFiles(const string& path) {
        File file(path);
        events.notify("open", file);
    }

    void saveFile(const string& path) {
        File file(path);
        events.notify("save", file);
    }
};

int main() {
    Editor editor;

    auto logger = make_shared<LogOpen>("var/log/editor.log");
    auto emailer = make_shared<EmailNoti>("admin@example.com");

    editor.events.subscribe("open", logger);
    editor.events.subscribe("save", emailer);

    editor.openFiles("test.txt");
    emailer.reset();
    editor.saveFile("test.txt");

    return 0;
}